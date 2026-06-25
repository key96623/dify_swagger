const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');
const sourcePath = path.join(
  projectRoot,
  'openapi',
  'dify-all-workflows.openapi.json'
);
const targetPath = path.join(
  projectRoot,
  'openapi',
  'dify-all-workflows.openapi.js'
);

const source = fs.readFileSync(sourcePath, 'utf8');
const spec = JSON.parse(source);

function resolveJsonPointer(document, pointer) {
  return pointer
    .slice(2)
    .split('/')
    .map(function(part) {
      return part.replace(/~1/g, '/').replace(/~0/g, '~');
    })
    .reduce(function(value, key) {
      if (!value || !Object.prototype.hasOwnProperty.call(value, key)) {
        throw new Error('Unable to resolve OpenAPI reference: ' + pointer);
      }
      return value[key];
    }, document);
}

function dereference(value, referenceStack) {
  const stack = referenceStack || [];

  if (Array.isArray(value)) {
    return value.map(function(item) {
      return dereference(item, stack);
    });
  }

  if (!value || typeof value !== 'object') {
    return value;
  }

  if (typeof value.$ref === 'string') {
    if (!value.$ref.startsWith('#/')) {
      throw new Error('Only local OpenAPI references are supported: ' + value.$ref);
    }
    if (stack.includes(value.$ref)) {
      throw new Error('Circular OpenAPI reference detected: ' + value.$ref);
    }

    const referencedValue = resolveJsonPointer(spec, value.$ref);
    const resolved = dereference(referencedValue, stack.concat(value.$ref));
    const siblings = Object.keys(value).reduce(function(result, key) {
      if (key !== '$ref') {
        result[key] = value[key];
      }
      return result;
    }, {});

    return Object.assign({}, resolved, dereference(siblings, stack));
  }

  return Object.keys(value).reduce(function(result, key) {
    result[key] = dereference(value[key], stack);
    return result;
  }, {});
}

const embeddedSpec = dereference(spec);
const output =
  '// Generated and dereferenced by scripts/sync-swagger-spec.js. Do not edit directly.\n' +
  'window.DIFY_ALL_WORKFLOWS_SPEC = ' +
  JSON.stringify(embeddedSpec, null, 2) +
  ';\n';

fs.writeFileSync(targetPath, output, 'utf8');
console.log('Synced Swagger spec: ' + path.relative(projectRoot, targetPath));
