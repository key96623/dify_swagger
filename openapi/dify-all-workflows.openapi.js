// Generated and dereferenced by scripts/sync-swagger-spec.js. Do not edit directly.
window.DIFY_ALL_WORKFLOWS_SPEC = {
  "openapi": "3.1.0",
  "info": {
    "title": "Dify Workflows - All Schemas",
    "version": "1.1.0",
    "description": "Single OpenAPI document for all Dify workflow request schemas used by this UI. The runtime URL is always the original Dify POST /dify/v1/workflows/run endpoint; the workflow is selected by the Bearer API key. Email-Writer now uses audience to choose external or internal output; mode=prod routes supported workflows to production Redmine."
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
                          "message",
                          "type"
                        ],
                        "properties": {
                          "message": {
                            "type": "string",
                            "description": "User message for the Technical Bot workflow.",
                            "minLength": 1
                          },
                          "type": {
                            "type": "string",
                            "description": "Optional routing value for the Technical Bot workflow. Leave it blank to use the default chatbot endpoint. Fill product_pm to route to the non-streaming Product PM endpoint, or product_ae to route to the streaming Product AE endpoint.",
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
                    "title": "Task Transfer AS+",
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
                          "raw",
                          "intent",
                          "assignee_name"
                        ],
                        "properties": {
                          "raw": {
                            "type": "string",
                            "description": "Stringified JSON payload. For AS+, the UI sends {\"issue_id\": number}.",
                            "example": "{\"issue_id\":9502}"
                          },
                          "intent": {
                            "type": "string",
                            "const": "TRANSFER_ASPLUS"
                          },
                          "assignee_name": {
                            "type": "string",
                            "description": "Target assignee display name.",
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
                    "title": "Task Transfer AE.ACL",
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
                          "raw",
                          "project_id",
                          "intent",
                          "assignee_name"
                        ],
                        "properties": {
                          "raw": {
                            "type": "string",
                            "description": "Stringified JSON payload. For AE.ACL, the UI sends the full current issue object.",
                            "example": "{\"id\":9502,\"subject\":\"Network Issue\"}"
                          },
                          "project_id": {
                            "type": "string",
                            "description": "AE.ACL project identifier.",
                            "example": "auto-2023074099103"
                          },
                          "intent": {
                            "type": "string",
                            "const": "TRANSFER_AEACL"
                          },
                          "assignee_name": {
                            "type": "string",
                            "description": "Target assignee display name.",
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
                    "title": "Task Reject",
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
                          "audience"
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
                  }
                ]
              },
              "examples": {
                "technicallBot": {
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
                "taskTransferAsplus": {
                  "summary": "Task Transfer AS+",
                  "value": {
                    "inputs": {
                      "raw": "{\"issue_id\":9502}",
                      "intent": "TRANSFER_ASPLUS",
                      "assignee_name": "Key Huang",
                      "mode": ""
                    },
                    "response_mode": "blocking",
                    "user": "swagger-test"
                  }
                },
                "taskTransferAeacl": {
                  "summary": "Task Transfer AE.ACL",
                  "value": {
                    "inputs": {
                      "raw": "{\"id\":9502,\"subject\":\"Network Issue\"}",
                      "project_id": "auto-2023074099103",
                      "intent": "TRANSFER_AEACL",
                      "assignee_name": "Key Huang",
                      "mode": ""
                    },
                    "response_mode": "blocking",
                    "user": "swagger-test"
                  }
                },
                "taskReject": {
                  "summary": "Task Reject",
                  "value": {
                    "inputs": {
                      "issue_id": "9502",
                      "reason": "Missing required customer environment information.",
                      "mode": ""
                    },
                    "response_mode": "blocking",
                    "user": "swagger-test"
                  }
                },
                "emailWriter": {
                  "summary": "Email-Writer",
                  "value": {
                    "inputs": {
                      "issue_id": "9502",
                      "audience": "external",
                      "style": "Make the tone concise and customer-friendly.",
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
            "name": "Task Transfer AS+",
            "apiKeyEnv": "DIFY_MAINFLOW_API_KEY",
            "requestSchema": "#/components/schemas/TaskTransferAsplusRequest"
          },
          {
            "name": "Task Transfer AE.ACL",
            "apiKeyEnv": "DIFY_MAINFLOW_API_KEY",
            "requestSchema": "#/components/schemas/TaskTransferAeaclRequest"
          },
          {
            "name": "Task Reject",
            "apiKeyEnv": "DIFY_TASK_REJECT_API_KEY",
            "requestSchema": "#/components/schemas/TaskRejectRequest"
          },
          {
            "name": "Email-Writer",
            "apiKeyEnv": "DIFY_EMAIL_WRITER_API_KEY",
            "requestSchema": "#/components/schemas/EmailWriterRequest"
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
              "message",
              "type"
            ],
            "properties": {
              "message": {
                "type": "string",
                "description": "User message for the Technical Bot workflow.",
                "minLength": 1
              },
              "type": {
                "type": "string",
                "description": "Optional routing value for the Technical Bot workflow. Leave it blank to use the default chatbot endpoint. Fill product_pm to route to the non-streaming Product PM endpoint, or product_ae to route to the streaming Product AE endpoint.",
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
          "message",
          "type"
        ],
        "properties": {
          "message": {
            "type": "string",
            "description": "User message for the Technical Bot workflow.",
            "minLength": 1
          },
          "type": {
            "type": "string",
            "description": "Optional routing value for the Technical Bot workflow. Leave it blank to use the default chatbot endpoint. Fill product_pm to route to the non-streaming Product PM endpoint, or product_ae to route to the streaming Product AE endpoint.",
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
              "audience"
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
          "audience"
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
          "mode": {
            "type": "string",
            "description": "Optional Redmine target routing. Fill prod to run against production Redmine. Leave blank or any other value to run against the test Redmine site.",
            "default": "",
            "example": "prod"
          }
        }
      },
      "TaskTransferAsplusRequest": {
        "type": "object",
        "title": "Task Transfer AS+",
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
              "raw",
              "intent",
              "assignee_name"
            ],
            "properties": {
              "raw": {
                "type": "string",
                "description": "Stringified JSON payload. For AS+, the UI sends {\"issue_id\": number}.",
                "example": "{\"issue_id\":9502}"
              },
              "intent": {
                "type": "string",
                "const": "TRANSFER_ASPLUS"
              },
              "assignee_name": {
                "type": "string",
                "description": "Target assignee display name.",
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
      "TaskTransferAeaclRequest": {
        "type": "object",
        "title": "Task Transfer AE.ACL",
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
              "raw",
              "project_id",
              "intent",
              "assignee_name"
            ],
            "properties": {
              "raw": {
                "type": "string",
                "description": "Stringified JSON payload. For AE.ACL, the UI sends the full current issue object.",
                "example": "{\"id\":9502,\"subject\":\"Network Issue\"}"
              },
              "project_id": {
                "type": "string",
                "description": "AE.ACL project identifier.",
                "example": "auto-2023074099103"
              },
              "intent": {
                "type": "string",
                "const": "TRANSFER_AEACL"
              },
              "assignee_name": {
                "type": "string",
                "description": "Target assignee display name.",
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
      "MainflowTransferAsplusInputs": {
        "type": "object",
        "additionalProperties": false,
        "required": [
          "raw",
          "intent",
          "assignee_name"
        ],
        "properties": {
          "raw": {
            "type": "string",
            "description": "Stringified JSON payload. For AS+, the UI sends {\"issue_id\": number}.",
            "example": "{\"issue_id\":9502}"
          },
          "intent": {
            "type": "string",
            "const": "TRANSFER_ASPLUS"
          },
          "assignee_name": {
            "type": "string",
            "description": "Target assignee display name.",
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
      "MainflowTransferAeaclInputs": {
        "type": "object",
        "additionalProperties": false,
        "required": [
          "raw",
          "project_id",
          "intent",
          "assignee_name"
        ],
        "properties": {
          "raw": {
            "type": "string",
            "description": "Stringified JSON payload. For AE.ACL, the UI sends the full current issue object.",
            "example": "{\"id\":9502,\"subject\":\"Network Issue\"}"
          },
          "project_id": {
            "type": "string",
            "description": "AE.ACL project identifier.",
            "example": "auto-2023074099103"
          },
          "intent": {
            "type": "string",
            "const": "TRANSFER_AEACL"
          },
          "assignee_name": {
            "type": "string",
            "description": "Target assignee display name.",
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
        "title": "Task Reject",
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
      "MainflowTransferAsplusExample": {
        "summary": "Task Transfer AS+",
        "value": {
          "inputs": {
            "raw": "{\"issue_id\":9502}",
            "intent": "TRANSFER_ASPLUS",
            "assignee_name": "Key Huang",
            "mode": ""
          },
          "response_mode": "blocking",
          "user": "swagger-test"
        }
      },
      "MainflowTransferAeaclExample": {
        "summary": "Task Transfer AE.ACL",
        "value": {
          "inputs": {
            "raw": "{\"id\":9502,\"subject\":\"Network Issue\"}",
            "project_id": "auto-2023074099103",
            "intent": "TRANSFER_AEACL",
            "assignee_name": "Key Huang",
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
      "TaskRejectExample": {
        "summary": "Task Reject",
        "value": {
          "inputs": {
            "issue_id": "9502",
            "reason": "Missing required customer environment information.",
            "mode": ""
          },
          "response_mode": "blocking",
          "user": "swagger-test"
        }
      },
      "EmailWriterExample": {
        "summary": "Email-Writer",
        "value": {
          "inputs": {
            "issue_id": "9502",
            "audience": "external",
            "style": "Make the tone concise and customer-friendly.",
            "mode": ""
          },
          "response_mode": "blocking",
          "user": "swagger-test"
        }
      }
    }
  }
};
