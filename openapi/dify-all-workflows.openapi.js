// Generated and dereferenced by scripts/sync-swagger-spec.js. Do not edit directly.
window.DIFY_ALL_WORKFLOWS_SPEC = {
  "openapi": "3.1.0",
  "info": {
    "title": "Dify Workflows - All Schemas",
    "version": "2.0.3",
    "description": "Single OpenAPI document for the original Dify workflow API. All workflows use the same POST /dify/v1/workflows/run endpoint; the Bearer API key selects the Dify app, while each workflow block documents its own inputs. Mainflow action blocks describe the public start-node variables and keep Redmine secrets and derived child-node values internal."
  },
  "servers": [
    {
      "url": "https://subectodermal-obstinately-dalila.ngrok-free.dev",
      "description": "Dify server from DIFY_API_URL"
    }
  ],
  "tags": [
    {
      "name": "Dify Workflows",
      "description": "All workflows share the same original Dify endpoint. Pick the request schema that matches the API key."
    }
  ],
  "paths": {
    "/dify/v1/workflows/run": {
      "post": {
        "tags": [
          "Dify Workflows"
        ],
        "operationId": "runDifyWorkflow",
        "summary": "Run a Dify workflow",
        "description": "Use the original Dify workflow API. The Bearer token selects the workflow, while the request body must match that workflow's inputs schema.",
        "security": [
          {
            "DifyBearerAuth": []
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "oneOf": [
                  {
                    "type": "object",
                    "title": "Technical Bot",
                    "additionalProperties": false,
                    "required": [
                      "inputs",
                      "response_mode",
                      "user"
                    ],
                    "properties": {
                      "inputs": {
                        "type": "object",
                        "additionalProperties": false,
                        "required": [
                          "message"
                        ],
                        "properties": {
                          "message": {
                            "type": "string",
                            "description": "User message for the Technical Bot workflow.",
                            "minLength": 1
                          },
                          "type": {
                            "type": "string",
                            "description": "Optional routing value. Leave it blank to use the default chatbot endpoint. Fill product_pm for the non-streaming Product PM endpoint, or product_ae for the streaming Product AE endpoint.",
                            "enum": [
                              "",
                              "product_pm",
                              "product_ae"
                            ],
                            "default": ""
                          }
                        }
                      },
                      "response_mode": {
                        "type": "string",
                        "enum": [
                          "blocking",
                          "streaming"
                        ],
                        "default": "blocking"
                      },
                      "user": {
                        "type": "string",
                        "example": "swagger-test"
                      }
                    }
                  },
                  {
                    "type": "object",
                    "title": "Teams Bot",
                    "additionalProperties": false,
                    "required": [
                      "inputs",
                      "response_mode",
                      "user"
                    ],
                    "properties": {
                      "inputs": {
                        "type": "object",
                        "additionalProperties": false,
                        "required": [
                          "message"
                        ],
                        "properties": {
                          "message": {
                            "type": "string",
                            "description": "User message for the Teams Bot workflow.",
                            "minLength": 1
                          }
                        }
                      },
                      "response_mode": {
                        "type": "string",
                        "enum": [
                          "blocking",
                          "streaming"
                        ],
                        "default": "blocking"
                      },
                      "user": {
                        "type": "string",
                        "example": "swagger-test"
                      }
                    }
                  },
                  {
                    "type": "object",
                    "title": "Task Summary",
                    "additionalProperties": false,
                    "required": [
                      "inputs",
                      "response_mode",
                      "user"
                    ],
                    "properties": {
                      "inputs": {
                        "type": "object",
                        "additionalProperties": false,
                        "required": [
                          "redmine_data"
                        ],
                        "properties": {
                          "redmine_data": {
                            "type": "string",
                            "description": "Stringified Redmine issue payload. Dify expects redmine_data as a string, so pass JSON text instead of a JSON object.",
                            "example": "{\"id\":9502,\"subject\":\"Network Issue\",\"description\":\"Customer reports intermittent disconnects.\"}"
                          }
                        }
                      },
                      "response_mode": {
                        "type": "string",
                        "enum": [
                          "blocking",
                          "streaming"
                        ],
                        "default": "blocking"
                      },
                      "user": {
                        "type": "string",
                        "example": "swagger-test"
                      }
                    }
                  },
                  {
                    "type": "object",
                    "title": "Generate Brief & Suggestion",
                    "additionalProperties": false,
                    "required": [
                      "inputs",
                      "response_mode",
                      "user"
                    ],
                    "properties": {
                      "inputs": {
                        "type": "object",
                        "title": "Generate Brief & Suggestion inputs",
                        "additionalProperties": false,
                        "required": [
                          "action_user"
                        ],
                        "properties": {
                          "issue_id": {
                            "type": "string",
                            "description": "Optional issue identifier declared by the latest exported Brief & Suggestion YAML.",
                            "example": "9502"
                          },
                          "action_user": {
                            "type": "string",
                            "description": "User requesting the generated brief and suggestion.",
                            "example": "Key Huang",
                            "minLength": 1
                          },
                          "redmine": {
                            "type": "string",
                            "description": "Optional Redmine system used by the workflow.",
                            "enum": [
                              "asplus",
                              "aeacl"
                            ]
                          }
                        }
                      },
                      "response_mode": {
                        "type": "string",
                        "enum": [
                          "blocking",
                          "streaming"
                        ],
                        "default": "blocking"
                      },
                      "user": {
                        "type": "string",
                        "example": "swagger-test"
                      }
                    }
                  },
                  {
                    "type": "object",
                    "title": "Email-Writer",
                    "additionalProperties": false,
                    "required": [
                      "inputs",
                      "response_mode",
                      "user"
                    ],
                    "properties": {
                      "inputs": {
                        "type": "object",
                        "additionalProperties": false,
                        "required": [
                          "issue_id",
                          "audience",
                          "redmine"
                        ],
                        "properties": {
                          "issue_id": {
                            "type": "string",
                            "description": "Redmine issue ID used to generate the email draft.",
                            "minLength": 1
                          },
                          "audience": {
                            "type": "string",
                            "description": "Email audience. Fill external for customer-facing email, or internal for internal handoff email.",
                            "enum": [
                              "external",
                              "internal"
                            ],
                            "example": "external"
                          },
                          "style": {
                            "type": "string",
                            "description": "Optional writing style or refinement instruction."
                          },
                          "redmine": {
                            "type": "string",
                            "description": "Redmine system used to retrieve the issue.",
                            "enum": [
                              "asplus",
                              "aeacl"
                            ],
                            "example": "asplus"
                          },
                          "mode": {
                            "type": "string",
                            "description": "Optional Redmine target routing. Fill prod to run against production Redmine. Leave blank or any other value to run against the test Redmine site.",
                            "default": "",
                            "example": "prod"
                          }
                        }
                      },
                      "response_mode": {
                        "type": "string",
                        "enum": [
                          "blocking",
                          "streaming"
                        ],
                        "default": "blocking"
                      },
                      "user": {
                        "type": "string",
                        "example": "swagger-test"
                      }
                    }
                  },
                  {
                    "type": "object",
                    "title": "Task Create via 主流程",
                    "additionalProperties": false,
                    "required": [
                      "inputs",
                      "response_mode",
                      "user"
                    ],
                    "properties": {
                      "inputs": {
                        "type": "object",
                        "title": "Task Create inputs from 主流程",
                        "additionalProperties": false,
                        "required": [
                          "action_user",
                          "intent",
                          "redmine"
                        ],
                        "properties": {
                          "action_user": {
                            "type": "string",
                            "description": "Required by the 主流程 start node. User performing the action.",
                            "example": "Key Huang",
                            "minLength": 1
                          },
                          "intent": {
                            "type": "string",
                            "const": "NEW",
                            "description": "Mainflow route for creating a new Redmine issue."
                          },
                          "redmine": {
                            "type": "string",
                            "description": "Source or selected Redmine system.",
                            "enum": [
                              "asplus",
                              "aeacl"
                            ]
                          },
                          "raw": {
                            "type": "string",
                            "description": "Stringified JSON payload consumed by the 主流程 extraction nodes."
                          },
                          "mode": {
                            "type": "string",
                            "description": "Optional Redmine routing. Fill prod for production; blank or any other value uses the test site.",
                            "default": "",
                            "example": "prod"
                          }
                        }
                      },
                      "response_mode": {
                        "type": "string",
                        "enum": [
                          "blocking",
                          "streaming"
                        ],
                        "default": "blocking"
                      },
                      "user": {
                        "type": "string",
                        "example": "swagger-test"
                      }
                    }
                  },
                  {
                    "type": "object",
                    "title": "Task Update via 主流程",
                    "additionalProperties": false,
                    "required": [
                      "inputs",
                      "response_mode",
                      "user"
                    ],
                    "properties": {
                      "inputs": {
                        "type": "object",
                        "title": "Task Update inputs from 主流程",
                        "additionalProperties": false,
                        "required": [
                          "action_user",
                          "intent",
                          "redmine"
                        ],
                        "properties": {
                          "action_user": {
                            "type": "string",
                            "description": "Required by the 主流程 start node. User performing the action.",
                            "example": "Key Huang",
                            "minLength": 1
                          },
                          "intent": {
                            "type": "string",
                            "const": "UPDATE",
                            "description": "Mainflow route for updating an existing Redmine issue."
                          },
                          "redmine": {
                            "type": "string",
                            "description": "Source or selected Redmine system.",
                            "enum": [
                              "asplus",
                              "aeacl"
                            ]
                          },
                          "issue_id": {
                            "type": "string",
                            "description": "Redmine issue ID. The 主流程 can also extract it from raw or email_input."
                          },
                          "raw": {
                            "type": "string",
                            "description": "Stringified JSON payload consumed by the 主流程 extraction nodes."
                          },
                          "mode": {
                            "type": "string",
                            "description": "Optional Redmine routing. Fill prod for production; blank or any other value uses the test site.",
                            "default": "",
                            "example": "prod"
                          }
                        }
                      },
                      "response_mode": {
                        "type": "string",
                        "enum": [
                          "blocking",
                          "streaming"
                        ],
                        "default": "blocking"
                      },
                      "user": {
                        "type": "string",
                        "example": "swagger-test"
                      }
                    }
                  },
                  {
                    "type": "object",
                    "title": "Task Reassign via 主流程",
                    "additionalProperties": false,
                    "required": [
                      "inputs",
                      "response_mode",
                      "user"
                    ],
                    "properties": {
                      "inputs": {
                        "type": "object",
                        "title": "Task Reassign inputs from 主流程",
                        "additionalProperties": false,
                        "required": [
                          "action_user",
                          "intent",
                          "redmine",
                          "issue_id",
                          "assignee_name"
                        ],
                        "properties": {
                          "action_user": {
                            "type": "string",
                            "description": "Required by the 主流程 start node. User performing the action.",
                            "example": "Key Huang",
                            "minLength": 1
                          },
                          "intent": {
                            "type": "string",
                            "const": "REASSIGNMENT",
                            "description": "Mainflow route for changing the Redmine assignee."
                          },
                          "redmine": {
                            "type": "string",
                            "enum": [
                              "asplus",
                              "aeacl"
                            ],
                            "description": "Redmine system containing the issue."
                          },
                          "issue_id": {
                            "type": "string",
                            "description": "Redmine issue ID to reassign.",
                            "minLength": 1
                          },
                          "assignee_name": {
                            "type": "string",
                            "description": "New Redmine assignee display name.",
                            "minLength": 1
                          },
                          "mode": {
                            "type": "string",
                            "description": "Optional Redmine routing. Fill prod for production; blank or any other value uses the test site.",
                            "default": "",
                            "example": "prod"
                          }
                        }
                      },
                      "response_mode": {
                        "type": "string",
                        "enum": [
                          "blocking",
                          "streaming"
                        ],
                        "default": "blocking"
                      },
                      "user": {
                        "type": "string",
                        "example": "swagger-test"
                      }
                    }
                  },
                  {
                    "type": "object",
                    "title": "Task Transfer AE.ACL via 主流程",
                    "additionalProperties": false,
                    "required": [
                      "inputs",
                      "response_mode",
                      "user"
                    ],
                    "properties": {
                      "inputs": {
                        "type": "object",
                        "title": "Task Transfer AE.ACL inputs from 主流程",
                        "additionalProperties": false,
                        "required": [
                          "action_user",
                          "intent",
                          "redmine",
                          "target_redmine",
                          "project_id_aeacl"
                        ],
                        "properties": {
                          "action_user": {
                            "type": "string",
                            "description": "Required by the 主流程 start node. User performing the action.",
                            "example": "Key Huang",
                            "minLength": 1
                          },
                          "intent": {
                            "type": "string",
                            "const": "TRANSFER",
                            "description": "Mainflow route for transferring an issue between Redmine systems."
                          },
                          "redmine": {
                            "type": "string",
                            "const": "asplus",
                            "description": "Transfer source. This branch starts from AS+."
                          },
                          "issue_id": {
                            "type": "string",
                            "description": "Redmine issue ID. The 主流程 can also extract it from raw or email_input."
                          },
                          "target_redmine": {
                            "type": "string",
                            "const": "aeacl",
                            "description": "Transfer destination. This branch ends at AE.ACL."
                          },
                          "project_id_aeacl": {
                            "type": "string",
                            "description": "AE.ACL Redmine project identifier.",
                            "example": "auto-2023074099328",
                            "minLength": 1
                          },
                          "mode": {
                            "type": "string",
                            "description": "Optional Redmine routing. Fill prod for production; blank or any other value uses the test site.",
                            "default": "",
                            "example": "prod"
                          }
                        }
                      },
                      "response_mode": {
                        "type": "string",
                        "enum": [
                          "blocking",
                          "streaming"
                        ],
                        "default": "blocking"
                      },
                      "user": {
                        "type": "string",
                        "example": "swagger-test"
                      }
                    }
                  },
                  {
                    "type": "object",
                    "title": "Task Reject via 主流程",
                    "additionalProperties": false,
                    "required": [
                      "inputs",
                      "response_mode",
                      "user"
                    ],
                    "properties": {
                      "inputs": {
                        "type": "object",
                        "title": "Task Reject inputs from 主流程",
                        "additionalProperties": false,
                        "required": [
                          "action_user",
                          "intent",
                          "redmine",
                          "issue_id"
                        ],
                        "properties": {
                          "action_user": {
                            "type": "string",
                            "description": "Required by the 主流程 start node. User performing the action.",
                            "example": "Key Huang",
                            "minLength": 1
                          },
                          "intent": {
                            "type": "string",
                            "const": "REJECT",
                            "description": "Mainflow route for rejecting an existing Redmine issue."
                          },
                          "redmine": {
                            "type": "string",
                            "enum": [
                              "asplus",
                              "aeacl"
                            ],
                            "description": "Redmine system containing the issue."
                          },
                          "issue_id": {
                            "type": "string",
                            "description": "Redmine issue ID to reject.",
                            "minLength": 1
                          },
                          "reason": {
                            "type": "string",
                            "description": "Optional reason entered when rejecting the task."
                          },
                          "mode": {
                            "type": "string",
                            "description": "Optional Redmine routing. Fill prod for production; blank or any other value uses the test site.",
                            "default": "",
                            "example": "prod"
                          }
                        }
                      },
                      "response_mode": {
                        "type": "string",
                        "enum": [
                          "blocking",
                          "streaming"
                        ],
                        "default": "blocking"
                      },
                      "user": {
                        "type": "string",
                        "example": "swagger-test"
                      }
                    }
                  }
                ]
              },
              "examples": {
                "technicalBot": {
                  "summary": "Technical Bot",
                  "value": {
                    "inputs": {
                      "message": "How do I troubleshoot intermittent Ethernet disconnects on ARK-1124C?",
                      "type": ""
                    },
                    "response_mode": "blocking",
                    "user": "swagger-test"
                  }
                },
                "teamsBot": {
                  "summary": "Teams Bot",
                  "value": {
                    "inputs": {
                      "message": "Please summarize the current customer issue for Teams."
                    },
                    "response_mode": "blocking",
                    "user": "swagger-test"
                  }
                },
                "taskSummary": {
                  "summary": "Task Summary",
                  "value": {
                    "inputs": {
                      "redmine_data": "{\"id\":9502,\"subject\":\"Network Issue\",\"description\":\"Customer reports intermittent disconnects.\"}"
                    },
                    "response_mode": "blocking",
                    "user": "swagger-test"
                  }
                },
                "briefSuggestion": {
                  "summary": "Generate Brief & Suggestion",
                  "value": {
                    "inputs": {
                      "issue_id": "9502",
                      "action_user": "Key Huang",
                      "redmine": "asplus"
                    },
                    "response_mode": "blocking",
                    "user": "swagger-test"
                  }
                },
                "emailWriter": {
                  "summary": "Email Writer",
                  "value": {
                    "inputs": {
                      "issue_id": "9502",
                      "audience": "external",
                      "style": "Make the tone concise and customer-friendly.",
                      "redmine": "asplus",
                      "mode": ""
                    },
                    "response_mode": "blocking",
                    "user": "swagger-test"
                  }
                },
                "taskCreate": {
                  "summary": "Task Create via 主流程",
                  "value": {
                    "inputs": {
                      "action_user": "Key Huang",
                      "intent": "NEW",
                      "redmine": "asplus",
                      "raw": "Customer reports intermittent disconnects on the device.",
                      "mode": ""
                    },
                    "response_mode": "blocking",
                    "user": "swagger-test"
                  }
                },
                "taskUpdate": {
                  "summary": "Task Update via 主流程",
                  "value": {
                    "inputs": {
                      "action_user": "Key Huang",
                      "intent": "UPDATE",
                      "redmine": "asplus",
                      "issue_id": "9502",
                      "raw": "Please update the issue with the latest troubleshooting result.",
                      "mode": ""
                    },
                    "response_mode": "blocking",
                    "user": "swagger-test"
                  }
                },
                "taskReassign": {
                  "summary": "Task Reassign via 主流程",
                  "value": {
                    "inputs": {
                      "action_user": "Key Huang",
                      "intent": "REASSIGNMENT",
                      "redmine": "asplus",
                      "issue_id": "9502",
                      "assignee_name": "Albert.Sun",
                      "mode": ""
                    },
                    "response_mode": "blocking",
                    "user": "swagger-test"
                  }
                },
                "taskTransferAeacl": {
                  "summary": "Task Transfer AE.ACL via 主流程",
                  "value": {
                    "inputs": {
                      "action_user": "Key Huang",
                      "intent": "TRANSFER",
                      "redmine": "asplus",
                      "issue_id": "9502",
                      "target_redmine": "aeacl",
                      "project_id_aeacl": "auto-2023074099334",
                      "mode": ""
                    },
                    "response_mode": "blocking",
                    "user": "swagger-test"
                  }
                },
                "taskReject": {
                  "summary": "Task Reject via 主流程",
                  "value": {
                    "inputs": {
                      "action_user": "Key Huang",
                      "intent": "REJECT",
                      "redmine": "aeacl",
                      "issue_id": "8965",
                      "reason": "Missing required customer environment information.",
                      "mode": ""
                    },
                    "response_mode": "blocking",
                    "user": "swagger-test"
                  }
                }
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Dify blocking workflow result",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "additionalProperties": true,
                  "properties": {
                    "workflow_run_id": {
                      "type": "string"
                    },
                    "task_id": {
                      "type": "string"
                    },
                    "data": {
                      "type": "object",
                      "additionalProperties": true,
                      "properties": {
                        "id": {
                          "type": "string"
                        },
                        "workflow_id": {
                          "type": "string"
                        },
                        "status": {
                          "type": "string"
                        },
                        "outputs": {
                          "type": "object",
                          "additionalProperties": true
                        },
                        "error": {
                          "type": [
                            "string",
                            "null"
                          ]
                        },
                        "elapsed_time": {
                          "type": "number"
                        },
                        "total_tokens": {
                          "type": "integer"
                        },
                        "total_steps": {
                          "type": "integer"
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "4XX": {
            "description": "Dify error response",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "additionalProperties": true,
                  "properties": {
                    "code": {
                      "type": "string"
                    },
                    "message": {
                      "type": "string"
                    },
                    "status": {
                      "type": "integer"
                    }
                  }
                }
              }
            }
          },
          "5XX": {
            "description": "Dify error response",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "additionalProperties": true,
                  "properties": {
                    "code": {
                      "type": "string"
                    },
                    "message": {
                      "type": "string"
                    },
                    "status": {
                      "type": "integer"
                    }
                  }
                }
              }
            }
          }
        },
        "x-dify-workflows": [
          {
            "name": "Technical Bot",
            "apiKeyEnv": "DIFY_AECHATBOT_API_KEY",
            "requestSchema": "#/components/schemas/TechnicalAssistantRequest"
          },
          {
            "name": "Teams Bot",
            "apiKeyEnv": "DIFY_TEAMS_BOT_API_KEY",
            "requestSchema": "#/components/schemas/TeamsBotRequest"
          },
          {
            "name": "Task Summary",
            "apiKeyEnv": "DIFY_TASK_SUMMARY_API_KEY",
            "requestSchema": "#/components/schemas/TaskSummaryRequest"
          },
          {
            "name": "Generate Brief & Suggestion",
            "apiKeyEnv": "DIFY_BRIEF_SUGGESTION_API_KEY",
            "requestSchema": "#/components/schemas/BriefSuggestionRequest"
          },
          {
            "name": "Email Writer",
            "apiKeyEnv": "DIFY_EMAIL_WRITER_API_KEY",
            "requestSchema": "#/components/schemas/EmailWriterRequest"
          },
          {
            "name": "Task Create via 主流程",
            "apiKeyEnv": "DIFY_MAINFLOW_API_KEY",
            "requestSchema": "#/components/schemas/TaskCreateRequest"
          },
          {
            "name": "Task Update via 主流程",
            "apiKeyEnv": "DIFY_MAINFLOW_API_KEY",
            "requestSchema": "#/components/schemas/TaskUpdateRequest"
          },
          {
            "name": "Task Reassign via 主流程",
            "apiKeyEnv": "DIFY_MAINFLOW_API_KEY",
            "requestSchema": "#/components/schemas/TaskReassignRequest"
          },
          {
            "name": "Task Transfer AE.ACL via 主流程",
            "apiKeyEnv": "DIFY_MAINFLOW_API_KEY",
            "requestSchema": "#/components/schemas/TaskTransferAeaclRequest"
          },
          {
            "name": "Task Reject via 主流程",
            "apiKeyEnv": "DIFY_MAINFLOW_API_KEY",
            "requestSchema": "#/components/schemas/TaskRejectRequest"
          }
        ]
      }
    }
  },
  "components": {
    "securitySchemes": {
      "DifyBearerAuth": {
        "type": "http",
        "scheme": "bearer",
        "bearerFormat": "Dify API key"
      }
    },
    "schemas": {
      "TechnicalAssistantRequest": {
        "type": "object",
        "title": "Technical Bot",
        "additionalProperties": false,
        "required": [
          "inputs",
          "response_mode",
          "user"
        ],
        "properties": {
          "inputs": {
            "type": "object",
            "additionalProperties": false,
            "required": [
              "message"
            ],
            "properties": {
              "message": {
                "type": "string",
                "description": "User message for the Technical Bot workflow.",
                "minLength": 1
              },
              "type": {
                "type": "string",
                "description": "Optional routing value. Leave it blank to use the default chatbot endpoint. Fill product_pm for the non-streaming Product PM endpoint, or product_ae for the streaming Product AE endpoint.",
                "enum": [
                  "",
                  "product_pm",
                  "product_ae"
                ],
                "default": ""
              }
            }
          },
          "response_mode": {
            "type": "string",
            "enum": [
              "blocking",
              "streaming"
            ],
            "default": "blocking"
          },
          "user": {
            "type": "string",
            "example": "swagger-test"
          }
        }
      },
      "TechnicalAssistantInputs": {
        "type": "object",
        "additionalProperties": false,
        "required": [
          "message"
        ],
        "properties": {
          "message": {
            "type": "string",
            "description": "User message for the Technical Bot workflow.",
            "minLength": 1
          },
          "type": {
            "type": "string",
            "description": "Optional routing value. Leave it blank to use the default chatbot endpoint. Fill product_pm for the non-streaming Product PM endpoint, or product_ae for the streaming Product AE endpoint.",
            "enum": [
              "",
              "product_pm",
              "product_ae"
            ],
            "default": ""
          }
        }
      },
      "TeamsBotRequest": {
        "type": "object",
        "title": "Teams Bot",
        "additionalProperties": false,
        "required": [
          "inputs",
          "response_mode",
          "user"
        ],
        "properties": {
          "inputs": {
            "type": "object",
            "additionalProperties": false,
            "required": [
              "message"
            ],
            "properties": {
              "message": {
                "type": "string",
                "description": "User message for the Teams Bot workflow.",
                "minLength": 1
              }
            }
          },
          "response_mode": {
            "type": "string",
            "enum": [
              "blocking",
              "streaming"
            ],
            "default": "blocking"
          },
          "user": {
            "type": "string",
            "example": "swagger-test"
          }
        }
      },
      "TeamsBotInputs": {
        "type": "object",
        "additionalProperties": false,
        "required": [
          "message"
        ],
        "properties": {
          "message": {
            "type": "string",
            "description": "User message for the Teams Bot workflow.",
            "minLength": 1
          }
        }
      },
      "EmailWriterRequest": {
        "type": "object",
        "title": "Email-Writer",
        "additionalProperties": false,
        "required": [
          "inputs",
          "response_mode",
          "user"
        ],
        "properties": {
          "inputs": {
            "type": "object",
            "additionalProperties": false,
            "required": [
              "issue_id",
              "audience",
              "redmine"
            ],
            "properties": {
              "issue_id": {
                "type": "string",
                "description": "Redmine issue ID used to generate the email draft.",
                "minLength": 1
              },
              "audience": {
                "type": "string",
                "description": "Email audience. Fill external for customer-facing email, or internal for internal handoff email.",
                "enum": [
                  "external",
                  "internal"
                ],
                "example": "external"
              },
              "style": {
                "type": "string",
                "description": "Optional writing style or refinement instruction."
              },
              "redmine": {
                "type": "string",
                "description": "Redmine system used to retrieve the issue.",
                "enum": [
                  "asplus",
                  "aeacl"
                ],
                "example": "asplus"
              },
              "mode": {
                "type": "string",
                "description": "Optional Redmine target routing. Fill prod to run against production Redmine. Leave blank or any other value to run against the test Redmine site.",
                "default": "",
                "example": "prod"
              }
            }
          },
          "response_mode": {
            "type": "string",
            "enum": [
              "blocking",
              "streaming"
            ],
            "default": "blocking"
          },
          "user": {
            "type": "string",
            "example": "swagger-test"
          }
        }
      },
      "EmailWriterInputs": {
        "type": "object",
        "additionalProperties": false,
        "required": [
          "issue_id",
          "audience",
          "redmine"
        ],
        "properties": {
          "issue_id": {
            "type": "string",
            "description": "Redmine issue ID used to generate the email draft.",
            "minLength": 1
          },
          "audience": {
            "type": "string",
            "description": "Email audience. Fill external for customer-facing email, or internal for internal handoff email.",
            "enum": [
              "external",
              "internal"
            ],
            "example": "external"
          },
          "style": {
            "type": "string",
            "description": "Optional writing style or refinement instruction."
          },
          "redmine": {
            "type": "string",
            "description": "Redmine system used to retrieve the issue.",
            "enum": [
              "asplus",
              "aeacl"
            ],
            "example": "asplus"
          },
          "mode": {
            "type": "string",
            "description": "Optional Redmine target routing. Fill prod to run against production Redmine. Leave blank or any other value to run against the test Redmine site.",
            "default": "",
            "example": "prod"
          }
        }
      },
      "TaskTransferAeaclRequest": {
        "type": "object",
        "title": "Task Transfer AE.ACL via 主流程",
        "additionalProperties": false,
        "required": [
          "inputs",
          "response_mode",
          "user"
        ],
        "properties": {
          "inputs": {
            "type": "object",
            "title": "Task Transfer AE.ACL inputs from 主流程",
            "additionalProperties": false,
            "required": [
              "action_user",
              "intent",
              "redmine",
              "target_redmine",
              "project_id_aeacl"
            ],
            "properties": {
              "action_user": {
                "type": "string",
                "description": "Required by the 主流程 start node. User performing the action.",
                "example": "Key Huang",
                "minLength": 1
              },
              "intent": {
                "type": "string",
                "const": "TRANSFER",
                "description": "Mainflow route for transferring an issue between Redmine systems."
              },
              "redmine": {
                "type": "string",
                "const": "asplus",
                "description": "Transfer source. This branch starts from AS+."
              },
              "issue_id": {
                "type": "string",
                "description": "Redmine issue ID. The 主流程 can also extract it from raw or email_input."
              },
              "target_redmine": {
                "type": "string",
                "const": "aeacl",
                "description": "Transfer destination. This branch ends at AE.ACL."
              },
              "project_id_aeacl": {
                "type": "string",
                "description": "AE.ACL Redmine project identifier.",
                "example": "auto-2023074099328",
                "minLength": 1
              },
              "mode": {
                "type": "string",
                "description": "Optional Redmine routing. Fill prod for production; blank or any other value uses the test site.",
                "default": "",
                "example": "prod"
              }
            }
          },
          "response_mode": {
            "type": "string",
            "enum": [
              "blocking",
              "streaming"
            ],
            "default": "blocking"
          },
          "user": {
            "type": "string",
            "example": "swagger-test"
          }
        }
      },
      "TaskSummaryRequest": {
        "type": "object",
        "title": "Task Summary",
        "additionalProperties": false,
        "required": [
          "inputs",
          "response_mode",
          "user"
        ],
        "properties": {
          "inputs": {
            "type": "object",
            "additionalProperties": false,
            "required": [
              "redmine_data"
            ],
            "properties": {
              "redmine_data": {
                "type": "string",
                "description": "Stringified Redmine issue payload. Dify expects redmine_data as a string, so pass JSON text instead of a JSON object.",
                "example": "{\"id\":9502,\"subject\":\"Network Issue\",\"description\":\"Customer reports intermittent disconnects.\"}"
              }
            }
          },
          "response_mode": {
            "type": "string",
            "enum": [
              "blocking",
              "streaming"
            ],
            "default": "blocking"
          },
          "user": {
            "type": "string",
            "example": "swagger-test"
          }
        }
      },
      "TaskSummaryInputs": {
        "type": "object",
        "additionalProperties": false,
        "required": [
          "redmine_data"
        ],
        "properties": {
          "redmine_data": {
            "type": "string",
            "description": "Stringified Redmine issue payload. Dify expects redmine_data as a string, so pass JSON text instead of a JSON object.",
            "example": "{\"id\":9502,\"subject\":\"Network Issue\",\"description\":\"Customer reports intermittent disconnects.\"}"
          }
        }
      },
      "TaskRejectRequest": {
        "type": "object",
        "title": "Task Reject via 主流程",
        "additionalProperties": false,
        "required": [
          "inputs",
          "response_mode",
          "user"
        ],
        "properties": {
          "inputs": {
            "type": "object",
            "title": "Task Reject inputs from 主流程",
            "additionalProperties": false,
            "required": [
              "action_user",
              "intent",
              "redmine",
              "issue_id"
            ],
            "properties": {
              "action_user": {
                "type": "string",
                "description": "Required by the 主流程 start node. User performing the action.",
                "example": "Key Huang",
                "minLength": 1
              },
              "intent": {
                "type": "string",
                "const": "REJECT",
                "description": "Mainflow route for rejecting an existing Redmine issue."
              },
              "redmine": {
                "type": "string",
                "enum": [
                  "asplus",
                  "aeacl"
                ],
                "description": "Redmine system containing the issue."
              },
              "issue_id": {
                "type": "string",
                "description": "Redmine issue ID to reject.",
                "minLength": 1
              },
              "reason": {
                "type": "string",
                "description": "Optional reason entered when rejecting the task."
              },
              "mode": {
                "type": "string",
                "description": "Optional Redmine routing. Fill prod for production; blank or any other value uses the test site.",
                "default": "",
                "example": "prod"
              }
            }
          },
          "response_mode": {
            "type": "string",
            "enum": [
              "blocking",
              "streaming"
            ],
            "default": "blocking"
          },
          "user": {
            "type": "string",
            "example": "swagger-test"
          }
        }
      },
      "TaskRejectInputs": {
        "type": "object",
        "additionalProperties": false,
        "required": [
          "issue_id",
          "reason"
        ],
        "properties": {
          "issue_id": {
            "type": "string",
            "description": "Redmine issue ID.",
            "minLength": 1
          },
          "reason": {
            "type": "string",
            "description": "Reason entered by the user when rejecting the task.",
            "minLength": 1
          },
          "mode": {
            "type": "string",
            "description": "Optional Redmine target routing. Fill prod to run against production Redmine. Leave blank or any other value to run against the test Redmine site.",
            "default": "",
            "example": "prod"
          }
        }
      },
      "DifyResponseMode": {
        "type": "string",
        "enum": [
          "blocking",
          "streaming"
        ],
        "default": "blocking"
      },
      "DifyWorkflowResponse": {
        "type": "object",
        "additionalProperties": true,
        "properties": {
          "workflow_run_id": {
            "type": "string"
          },
          "task_id": {
            "type": "string"
          },
          "data": {
            "type": "object",
            "additionalProperties": true,
            "properties": {
              "id": {
                "type": "string"
              },
              "workflow_id": {
                "type": "string"
              },
              "status": {
                "type": "string"
              },
              "outputs": {
                "type": "object",
                "additionalProperties": true
              },
              "error": {
                "type": [
                  "string",
                  "null"
                ]
              },
              "elapsed_time": {
                "type": "number"
              },
              "total_tokens": {
                "type": "integer"
              },
              "total_steps": {
                "type": "integer"
              }
            }
          }
        }
      },
      "DifyErrorResponse": {
        "type": "object",
        "additionalProperties": true,
        "properties": {
          "code": {
            "type": "string"
          },
          "message": {
            "type": "string"
          },
          "status": {
            "type": "integer"
          }
        }
      },
      "TaskCreateRequest": {
        "type": "object",
        "title": "Task Create via 主流程",
        "additionalProperties": false,
        "required": [
          "inputs",
          "response_mode",
          "user"
        ],
        "properties": {
          "inputs": {
            "type": "object",
            "title": "Task Create inputs from 主流程",
            "additionalProperties": false,
            "required": [
              "action_user",
              "intent",
              "redmine"
            ],
            "properties": {
              "action_user": {
                "type": "string",
                "description": "Required by the 主流程 start node. User performing the action.",
                "example": "Key Huang",
                "minLength": 1
              },
              "intent": {
                "type": "string",
                "const": "NEW",
                "description": "Mainflow route for creating a new Redmine issue."
              },
              "redmine": {
                "type": "string",
                "description": "Source or selected Redmine system.",
                "enum": [
                  "asplus",
                  "aeacl"
                ]
              },
              "raw": {
                "type": "string",
                "description": "Stringified JSON payload consumed by the 主流程 extraction nodes."
              },
              "mode": {
                "type": "string",
                "description": "Optional Redmine routing. Fill prod for production; blank or any other value uses the test site.",
                "default": "",
                "example": "prod"
              }
            }
          },
          "response_mode": {
            "type": "string",
            "enum": [
              "blocking",
              "streaming"
            ],
            "default": "blocking"
          },
          "user": {
            "type": "string",
            "example": "swagger-test"
          }
        }
      },
      "MainflowTaskCreateInputs": {
        "type": "object",
        "title": "Task Create inputs from 主流程",
        "additionalProperties": false,
        "required": [
          "action_user",
          "intent",
          "redmine"
        ],
        "properties": {
          "action_user": {
            "type": "string",
            "description": "Required by the 主流程 start node. User performing the action.",
            "example": "Key Huang",
            "minLength": 1
          },
          "intent": {
            "type": "string",
            "const": "NEW",
            "description": "Mainflow route for creating a new Redmine issue."
          },
          "redmine": {
            "type": "string",
            "description": "Source or selected Redmine system.",
            "enum": [
              "asplus",
              "aeacl"
            ]
          },
          "raw": {
            "type": "string",
            "description": "Stringified JSON payload consumed by the 主流程 extraction nodes."
          },
          "mode": {
            "type": "string",
            "description": "Optional Redmine routing. Fill prod for production; blank or any other value uses the test site.",
            "default": "",
            "example": "prod"
          }
        }
      },
      "TaskUpdateRequest": {
        "type": "object",
        "title": "Task Update via 主流程",
        "additionalProperties": false,
        "required": [
          "inputs",
          "response_mode",
          "user"
        ],
        "properties": {
          "inputs": {
            "type": "object",
            "title": "Task Update inputs from 主流程",
            "additionalProperties": false,
            "required": [
              "action_user",
              "intent",
              "redmine"
            ],
            "properties": {
              "action_user": {
                "type": "string",
                "description": "Required by the 主流程 start node. User performing the action.",
                "example": "Key Huang",
                "minLength": 1
              },
              "intent": {
                "type": "string",
                "const": "UPDATE",
                "description": "Mainflow route for updating an existing Redmine issue."
              },
              "redmine": {
                "type": "string",
                "description": "Source or selected Redmine system.",
                "enum": [
                  "asplus",
                  "aeacl"
                ]
              },
              "issue_id": {
                "type": "string",
                "description": "Redmine issue ID. The 主流程 can also extract it from raw or email_input."
              },
              "raw": {
                "type": "string",
                "description": "Stringified JSON payload consumed by the 主流程 extraction nodes."
              },
              "mode": {
                "type": "string",
                "description": "Optional Redmine routing. Fill prod for production; blank or any other value uses the test site.",
                "default": "",
                "example": "prod"
              }
            }
          },
          "response_mode": {
            "type": "string",
            "enum": [
              "blocking",
              "streaming"
            ],
            "default": "blocking"
          },
          "user": {
            "type": "string",
            "example": "swagger-test"
          }
        }
      },
      "MainflowTaskUpdateInputs": {
        "type": "object",
        "title": "Task Update inputs from 主流程",
        "additionalProperties": false,
        "required": [
          "action_user",
          "intent",
          "redmine"
        ],
        "properties": {
          "action_user": {
            "type": "string",
            "description": "Required by the 主流程 start node. User performing the action.",
            "example": "Key Huang",
            "minLength": 1
          },
          "intent": {
            "type": "string",
            "const": "UPDATE",
            "description": "Mainflow route for updating an existing Redmine issue."
          },
          "redmine": {
            "type": "string",
            "description": "Source or selected Redmine system.",
            "enum": [
              "asplus",
              "aeacl"
            ]
          },
          "issue_id": {
            "type": "string",
            "description": "Redmine issue ID. The 主流程 can also extract it from raw or email_input."
          },
          "raw": {
            "type": "string",
            "description": "Stringified JSON payload consumed by the 主流程 extraction nodes."
          },
          "mode": {
            "type": "string",
            "description": "Optional Redmine routing. Fill prod for production; blank or any other value uses the test site.",
            "default": "",
            "example": "prod"
          }
        }
      },
      "TaskReassignRequest": {
        "type": "object",
        "title": "Task Reassign via 主流程",
        "additionalProperties": false,
        "required": [
          "inputs",
          "response_mode",
          "user"
        ],
        "properties": {
          "inputs": {
            "type": "object",
            "title": "Task Reassign inputs from 主流程",
            "additionalProperties": false,
            "required": [
              "action_user",
              "intent",
              "redmine",
              "issue_id",
              "assignee_name"
            ],
            "properties": {
              "action_user": {
                "type": "string",
                "description": "Required by the 主流程 start node. User performing the action.",
                "example": "Key Huang",
                "minLength": 1
              },
              "intent": {
                "type": "string",
                "const": "REASSIGNMENT",
                "description": "Mainflow route for changing the Redmine assignee."
              },
              "redmine": {
                "type": "string",
                "enum": [
                  "asplus",
                  "aeacl"
                ],
                "description": "Redmine system containing the issue."
              },
              "issue_id": {
                "type": "string",
                "description": "Redmine issue ID to reassign.",
                "minLength": 1
              },
              "assignee_name": {
                "type": "string",
                "description": "New Redmine assignee display name.",
                "minLength": 1
              },
              "mode": {
                "type": "string",
                "description": "Optional Redmine routing. Fill prod for production; blank or any other value uses the test site.",
                "default": "",
                "example": "prod"
              }
            }
          },
          "response_mode": {
            "type": "string",
            "enum": [
              "blocking",
              "streaming"
            ],
            "default": "blocking"
          },
          "user": {
            "type": "string",
            "example": "swagger-test"
          }
        }
      },
      "MainflowTaskReassignInputs": {
        "type": "object",
        "title": "Task Reassign inputs from 主流程",
        "additionalProperties": false,
        "required": [
          "action_user",
          "intent",
          "redmine",
          "issue_id",
          "assignee_name"
        ],
        "properties": {
          "action_user": {
            "type": "string",
            "description": "Required by the 主流程 start node. User performing the action.",
            "example": "Key Huang",
            "minLength": 1
          },
          "intent": {
            "type": "string",
            "const": "REASSIGNMENT",
            "description": "Mainflow route for changing the Redmine assignee."
          },
          "redmine": {
            "type": "string",
            "enum": [
              "asplus",
              "aeacl"
            ],
            "description": "Redmine system containing the issue."
          },
          "issue_id": {
            "type": "string",
            "description": "Redmine issue ID to reassign.",
            "minLength": 1
          },
          "assignee_name": {
            "type": "string",
            "description": "New Redmine assignee display name.",
            "minLength": 1
          },
          "mode": {
            "type": "string",
            "description": "Optional Redmine routing. Fill prod for production; blank or any other value uses the test site.",
            "default": "",
            "example": "prod"
          }
        }
      },
      "MainflowTaskTransferAeaclInputs": {
        "type": "object",
        "title": "Task Transfer AE.ACL inputs from 主流程",
        "additionalProperties": false,
        "required": [
          "action_user",
          "intent",
          "redmine",
          "target_redmine",
          "project_id_aeacl"
        ],
        "properties": {
          "action_user": {
            "type": "string",
            "description": "Required by the 主流程 start node. User performing the action.",
            "example": "Key Huang",
            "minLength": 1
          },
          "intent": {
            "type": "string",
            "const": "TRANSFER",
            "description": "Mainflow route for transferring an issue between Redmine systems."
          },
          "redmine": {
            "type": "string",
            "const": "asplus",
            "description": "Transfer source. This branch starts from AS+."
          },
          "issue_id": {
            "type": "string",
            "description": "Redmine issue ID. The 主流程 can also extract it from raw or email_input."
          },
          "target_redmine": {
            "type": "string",
            "const": "aeacl",
            "description": "Transfer destination. This branch ends at AE.ACL."
          },
          "project_id_aeacl": {
            "type": "string",
            "description": "AE.ACL Redmine project identifier.",
            "example": "auto-2023074099328",
            "minLength": 1
          },
          "mode": {
            "type": "string",
            "description": "Optional Redmine routing. Fill prod for production; blank or any other value uses the test site.",
            "default": "",
            "example": "prod"
          }
        }
      },
      "MainflowTaskRejectInputs": {
        "type": "object",
        "title": "Task Reject inputs from 主流程",
        "additionalProperties": false,
        "required": [
          "action_user",
          "intent",
          "redmine",
          "issue_id"
        ],
        "properties": {
          "action_user": {
            "type": "string",
            "description": "Required by the 主流程 start node. User performing the action.",
            "example": "Key Huang",
            "minLength": 1
          },
          "intent": {
            "type": "string",
            "const": "REJECT",
            "description": "Mainflow route for rejecting an existing Redmine issue."
          },
          "redmine": {
            "type": "string",
            "enum": [
              "asplus",
              "aeacl"
            ],
            "description": "Redmine system containing the issue."
          },
          "issue_id": {
            "type": "string",
            "description": "Redmine issue ID to reject.",
            "minLength": 1
          },
          "reason": {
            "type": "string",
            "description": "Optional reason entered when rejecting the task."
          },
          "mode": {
            "type": "string",
            "description": "Optional Redmine routing. Fill prod for production; blank or any other value uses the test site.",
            "default": "",
            "example": "prod"
          }
        }
      },
      "BriefSuggestionRequest": {
        "type": "object",
        "title": "Generate Brief & Suggestion",
        "additionalProperties": false,
        "required": [
          "inputs",
          "response_mode",
          "user"
        ],
        "properties": {
          "inputs": {
            "type": "object",
            "title": "Generate Brief & Suggestion inputs",
            "additionalProperties": false,
            "required": [
              "action_user"
            ],
            "properties": {
              "issue_id": {
                "type": "string",
                "description": "Optional issue identifier declared by the latest exported Brief & Suggestion YAML.",
                "example": "9502"
              },
              "action_user": {
                "type": "string",
                "description": "User requesting the generated brief and suggestion.",
                "example": "Key Huang",
                "minLength": 1
              },
              "redmine": {
                "type": "string",
                "description": "Optional Redmine system used by the workflow.",
                "enum": [
                  "asplus",
                  "aeacl"
                ]
              }
            }
          },
          "response_mode": {
            "type": "string",
            "enum": [
              "blocking",
              "streaming"
            ],
            "default": "blocking"
          },
          "user": {
            "type": "string",
            "example": "swagger-test"
          }
        }
      },
      "BriefSuggestionInputs": {
        "type": "object",
        "title": "Generate Brief & Suggestion inputs",
        "additionalProperties": false,
        "required": [
          "action_user"
        ],
        "properties": {
          "issue_id": {
            "type": "string",
            "description": "Optional issue identifier declared by the latest exported Brief & Suggestion YAML.",
            "example": "9502"
          },
          "action_user": {
            "type": "string",
            "description": "User requesting the generated brief and suggestion.",
            "example": "Key Huang",
            "minLength": 1
          },
          "redmine": {
            "type": "string",
            "description": "Optional Redmine system used by the workflow.",
            "enum": [
              "asplus",
              "aeacl"
            ]
          }
        }
      }
    },
    "responses": {
      "DifyError": {
        "description": "Dify error response",
        "content": {
          "application/json": {
            "schema": {
              "type": "object",
              "additionalProperties": true,
              "properties": {
                "code": {
                  "type": "string"
                },
                "message": {
                  "type": "string"
                },
                "status": {
                  "type": "integer"
                }
              }
            }
          }
        }
      }
    },
    "examples": {
      "TechnicalAssistantExample": {
        "summary": "Technical Bot",
        "value": {
          "inputs": {
            "message": "How do I troubleshoot intermittent Ethernet disconnects on ARK-1124C?",
            "type": ""
          },
          "response_mode": "blocking",
          "user": "swagger-test"
        }
      },
      "TeamsBotExample": {
        "summary": "Teams Bot",
        "value": {
          "inputs": {
            "message": "Please summarize the current customer issue for Teams."
          },
          "response_mode": "blocking",
          "user": "swagger-test"
        }
      },
      "TaskCreateExample": {
        "summary": "Task Create via 主流程",
        "value": {
          "inputs": {
            "action_user": "Key Huang",
            "intent": "NEW",
            "redmine": "asplus",
            "raw": "Customer reports intermittent disconnects on the device.",
            "mode": ""
          },
          "response_mode": "blocking",
          "user": "swagger-test"
        }
      },
      "TaskUpdateExample": {
        "summary": "Task Update via 主流程",
        "value": {
          "inputs": {
            "action_user": "Key Huang",
            "intent": "UPDATE",
            "redmine": "asplus",
            "issue_id": "9502",
            "raw": "Please update the issue with the latest troubleshooting result.",
            "mode": ""
          },
          "response_mode": "blocking",
          "user": "swagger-test"
        }
      },
      "TaskSummaryExample": {
        "summary": "Task Summary",
        "value": {
          "inputs": {
            "redmine_data": "{\"id\":9502,\"subject\":\"Network Issue\",\"description\":\"Customer reports intermittent disconnects.\"}"
          },
          "response_mode": "blocking",
          "user": "swagger-test"
        }
      },
      "TaskReassignExample": {
        "summary": "Task Reassign via 主流程",
        "value": {
          "inputs": {
            "action_user": "Key Huang",
            "intent": "REASSIGNMENT",
            "redmine": "asplus",
            "issue_id": "9502",
            "assignee_name": "Albert.Sun",
            "mode": ""
          },
          "response_mode": "blocking",
          "user": "swagger-test"
        }
      },
      "TaskTransferAeaclExample": {
        "summary": "Task Transfer AE.ACL via 主流程",
        "value": {
          "inputs": {
            "action_user": "Key Huang",
            "intent": "TRANSFER",
            "redmine": "asplus",
            "issue_id": "9502",
            "target_redmine": "aeacl",
            "project_id_aeacl": "auto-2023074099334",
            "mode": ""
          },
          "response_mode": "blocking",
          "user": "swagger-test"
        }
      },
      "TaskRejectExample": {
        "summary": "Task Reject via 主流程",
        "value": {
          "inputs": {
            "action_user": "Key Huang",
            "intent": "REJECT",
            "redmine": "aeacl",
            "issue_id": "8965",
            "reason": "Missing required customer environment information.",
            "mode": ""
          },
          "response_mode": "blocking",
          "user": "swagger-test"
        }
      },
      "BriefSuggestionExample": {
        "summary": "Generate Brief & Suggestion",
        "value": {
          "inputs": {
            "issue_id": "9502",
            "action_user": "Key Huang",
            "redmine": "asplus"
          },
          "response_mode": "blocking",
          "user": "swagger-test"
        }
      },
      "EmailWriterExample": {
        "summary": "Email Writer",
        "value": {
          "inputs": {
            "issue_id": "9502",
            "audience": "external",
            "style": "Make the tone concise and customer-friendly.",
            "redmine": "asplus",
            "mode": ""
          },
          "response_mode": "blocking",
          "user": "swagger-test"
        }
      }
    }
  }
};
