/* jshint esversion:11 */
define("UsrRealtyFRUI_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "MainHeader",
				"values": {
					"color": "#8CDA86",
					"visible": true,
					"justifyContent": "start",
					"alignItems": "stretch",
					"wrap": "nowrap"
				}
			},
			{
				"operation": "merge",
				"name": "SaveButton",
				"values": {
					"size": "large",
					"iconPosition": "only-text"
				}
			},
			{
				"operation": "merge",
				"name": "SideAreaProfileContainer",
				"values": {
					"columns": [
						"minmax(64px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"color": "#CBE8FA",
					"visible": true
				}
			},
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "default",
					"mode": "tab",
					"bodyBackgroundColor": "#E9CDAD",
					"selectedTabTitleColor": "#000000",
					"tabTitleColor": "transparent",
					"underlineSelectedTabColor": "crt-color-primary-blue",
					"headerBackgroundColor": "auto",
					"visible": true,
					"stretch": true
				}
			},
			{
				"operation": "merge",
				"name": "GeneralInfoTabContainer",
				"values": {
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					}
				}
			},
			{
				"operation": "merge",
				"name": "CardToggleTabPanel",
				"values": {
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "remove",
				"name": "FeedTabContainer"
			},
			{
				"operation": "remove",
				"name": "Feed"
			},
			{
				"operation": "remove",
				"name": "FeedTabContainerHeaderContainer"
			},
			{
				"operation": "remove",
				"name": "FeedTabContainerHeaderLabel"
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "86badb8b-890b-4329-ab92-b05c011710f4",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "Button_9g1m9a0",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_9g1m9a0_caption)#",
					"color": "accent",
					"disabled": false,
					"size": "medium",
					"iconPosition": "right-icon",
					"visible": true,
					"clicked": {
						"request": "usr.MyButtonRequest"
					},
					"clickMode": "default",
					"icon": "filter-column-icon"
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrName",
					"control": "$UsrName",
					"labelPosition": "auto",
					"multiline": false
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrPriceUSD",
				"values": {
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.NumberAttribute_ww6zimk",
					"labelPosition": "auto",
					"control": "$NumberAttribute_ww6zimk",
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					}
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrArea",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.NumberAttribute_dh86nqg",
					"labelPosition": "auto",
					"control": "$NumberAttribute_dh86nqg"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "NumberInput_d61xjgs",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.NumberAttribute_fbnvoiu",
					"labelPosition": "auto",
					"control": "$NumberAttribute_fbnvoiu",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "UsrType",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_1fvften",
					"labelPosition": "auto",
					"control": "$LookupAttribute_1fvften",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_aa13m71",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_aa13m71_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "UsrType",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrOfferType",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_73px1v8",
					"labelPosition": "auto",
					"control": "$LookupAttribute_73px1v8",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_3yxzxfk",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_3yxzxfk_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "UsrOfferType",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrC",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.StringAttribute_m23zrvg",
					"labelPosition": "auto",
					"control": "$StringAttribute_m23zrvg",
					"multiline": false
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "UsrCommisionPercent",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.UsrOfferTypeUsrCommisionPercent",
					"control": "$UsrOfferTypeUsrCommisionPercent",
					"readonly": true,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_uuxtqm9",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_uuxtqm9_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true,
					"visible": true
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_3t7hgux",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_uuxtqm9",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_v8bjllf",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_3t7hgux",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_11ehqqt",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_11ehqqt_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "UsrRealtyVisitFRUI",
							"defaultValues": [
								{
									"attributeName": "UsrParentRealty",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_v8bjllf",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_05kbbzc",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_05kbbzc_caption)#",
					"icon": "reload-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_33j6n7xDS"
						}
					}
				},
				"parentName": "FlexContainer_v8bjllf",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_gm4hcdc",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_gm4hcdc_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_v8bjllf",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_95itakb",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_95itakb_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_33j6n7x"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_gm4hcdc",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_2dt0alj",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_2dt0alj_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrRealtyVisitFRUI"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_gm4hcdc",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_a5tysk0",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_a5tysk0_placeholder)#",
					"iconOnly": true,
					"targetAttributes": [
						"GridDetail_33j6n7x"
					]
				},
				"parentName": "FlexContainer_v8bjllf",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_fl207pj",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_uuxtqm9",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_33j6n7x",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						}
					},
					"items": "$GridDetail_33j6n7x",
					"selectedRows": "$GridDetail_33j6n7x_SelectedRows",
					"selectionState": "$GridDetail_33j6n7x_SelectionState",
					"_filterOptions": {
						"from": [
							"GridDetail_33j6n7x",
							"GridDetail_33j6n7x_SelectedRows"
						],
						"expose": []
					},
					"_selectionOptions": {
						"attribute": "GridDetail_33j6n7x_SelectionState"
					},
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_33j6n7xDS_Id",
					"columns": [
						{
							"id": "525731cb-9863-f5e5-5daa-ad352fd943ad",
							"code": "GridDetail_33j6n7xDS_UsrVisitDate",
							"path": "UsrVisitDate",
							"caption": "#ResourceString(GridDetail_33j6n7xDS_UsrVisitDate)#",
							"dataValueType": 7,
							"width": 188
						},
						{
							"id": "34dc08ed-2f95-049f-2803-1ebb3fffa437",
							"code": "GridDetail_33j6n7xDS_UsrPotentialCustomer",
							"path": "UsrPotentialCustomer",
							"caption": "#ResourceString(GridDetail_33j6n7xDS_UsrPotentialCustomer)#",
							"dataValueType": 10,
							"referenceSchemaName": "Contact",
							"width": 174
						},
						{
							"id": "be477e7d-f96d-4284-a3a7-0f6ce51e8de0",
							"code": "GridDetail_33j6n7xDS_UsrOwner",
							"path": "UsrOwner",
							"caption": "#ResourceString(GridDetail_33j6n7xDS_UsrOwner)#",
							"dataValueType": 10,
							"referenceSchemaName": "Contact",
							"width": 114
						},
						{
							"id": "bf6dbf9c-d1da-8626-6fe6-df2e465d4fb5",
							"code": "GridDetail_33j6n7xDS_UsrComment",
							"path": "UsrComment",
							"caption": "#ResourceString(GridDetail_33j6n7xDS_UsrComment)#",
							"dataValueType": 30,
							"width": 160
						},
						{
							"id": "70c0a951-8849-ea65-d2bc-4389fd50b293",
							"code": "GridDetail_33j6n7xDS_CreatedOn",
							"path": "CreatedOn",
							"caption": "#ResourceString(GridDetail_33j6n7xDS_CreatedOn)#",
							"dataValueType": 7
						}
					]
				},
				"parentName": "GridContainer_fl207pj",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfig: /**SCHEMA_VIEW_MODEL_CONFIG*/{
			"attributes": {
				"Id": {
					"modelConfig": {
						"path": "PDS.Id"
					}
				},
				"UsrName": {
					"modelConfig": {
						"path": "PDS.UsrName"
					}
				},
				"NumberAttribute_ww6zimk": {
					"modelConfig": {
						"path": "PDS.UsrPriceUSD"
					},
					 "validators": {
            			"PositiveValueValidator": {
                			"type": "usr.DGValidator",
               				 "params": {
								 "minValue": 1000,
								 "message": "Price must be greater than zero"
							 }
						}
					 }
								 
                    	
					},
				"NumberAttribute_dh86nqg": {
					"modelConfig": {
						"path": "PDS.UsrArea"
					},
					"validators": {
            			"PositiveValueValidator": {
                			"type": "usr.DGValidator",
							"params": {
								"minValue": 100,
								"message": " Area must be greater than zero"
							}
						}
					}
				},
				"LookupAttribute_1fvften": {
					"modelConfig": {
						"path": "PDS.UsrType"
					}
				},
				"LookupAttribute_73px1v8": {
					"modelConfig": {
						"path": "PDS.UsrOfferType"
					}
				},
				"StringAttribute_m23zrvg": {
					"modelConfig": {
						"path": "PDS.UsrC"
					}
				},
				"GridDetail_33j6n7x": {
					"isCollection": true,
					"modelConfig": {
						"path": "GridDetail_33j6n7xDS",
						"sortingConfig": {
							"default": [
								{
									"direction": "desc",
									"columnName": "UsrVisitDate"
								}
							]
						}
					},
					"viewModelConfig": {
						"attributes": {
							"GridDetail_33j6n7xDS_UsrVisitDate": {
								"modelConfig": {
									"path": "GridDetail_33j6n7xDS.UsrVisitDate"
								}
							},
							"GridDetail_33j6n7xDS_UsrPotentialCustomer": {
								"modelConfig": {
									"path": "GridDetail_33j6n7xDS.UsrPotentialCustomer"
								}
							},
							"GridDetail_33j6n7xDS_UsrOwner": {
								"modelConfig": {
									"path": "GridDetail_33j6n7xDS.UsrOwner"
								}
							},
							"GridDetail_33j6n7xDS_UsrComment": {
								"modelConfig": {
									"path": "GridDetail_33j6n7xDS.UsrComment"
								}
							},
							"GridDetail_33j6n7xDS_CreatedOn": {
								"modelConfig": {
									"path": "GridDetail_33j6n7xDS.CreatedOn"
								}
							},
							"GridDetail_33j6n7xDS_Id": {
								"modelConfig": {
									"path": "GridDetail_33j6n7xDS.Id"
								}
							}
						}
					}
				},
				"NumberAttribute_fbnvoiu": {
					"modelConfig": {
						"path": "PDS.UsrCommisionUSD"
					}
				},
				"UsrOfferTypeUsrCommisionPercent": {
					"modelConfig": {
						"path": "PDS.UsrOfferTypeUsrCommisionPercent"
					}
				}
			}
		}/**SCHEMA_VIEW_MODEL_CONFIG*/,
		modelConfig: /**SCHEMA_MODEL_CONFIG*/{
			"dataSources": {
				"PDS": {
					"type": "crt.EntityDataSource",
					"config": {
						"entitySchemaName": "UsrRealtyFRUI",
						"attributes": {
							"UsrOfferTypeUsrCommisionPercent": {
								"path": "UsrOfferType.UsrCommisionPercent",
								"type": "ForwardReference"
							}
						}
					},
					"scope": "page"
				},
				"GridDetail_33j6n7xDS": {
					"type": "crt.EntityDataSource",
					"scope": "viewElement",
					"config": {
						"entitySchemaName": "UsrRealtyVisitFRUI",
						"attributes": {
							"UsrVisitDate": {
								"path": "UsrVisitDate"
							},
							"UsrPotentialCustomer": {
								"path": "UsrPotentialCustomer"
							},
							"UsrOwner": {
								"path": "UsrOwner"
							},
							"UsrComment": {
								"path": "UsrComment"
							},
							"CreatedOn": {
								"path": "CreatedOn"
							}
						}
					}
				}
			},
			"primaryDataSourceName": "PDS",
			"dependencies": {
				"GridDetail_33j6n7xDS": [
					{
						"attributePath": "UsrParentRealty",
						"relationPath": "PDS.Id"
					}
				]
			}
		}/**SCHEMA_MODEL_CONFIG*/,
		handlers: /**SCHEMA_HANDLERS*/[
			{
        		request: "usr.MyButtonRequest",
				/* Implementation of the custom query handler. */
				handler: async (request, next) => {
            		this.console.log("Button works...");
            		Terrasoft.showInformation("My button was pressed.");
           			var price = await request.$context.NumberAttribute_ww6zimk;
            		this.console.log("Price = " + price);
            /* Call the next handler if it exists and return its result. */
            		return next?.handle(request);
				}
			},
			{
				
    				request: "crt.HandleViewModelAttributeChangeRequest",
    /* The custom implementation of the system query handler. */
    				handler: async (request, next) => {
        /* If the UsrPriceUSD field changes, take the following steps. */
        				if (request.attributeName === 'NumberAttribute_ww6zimk' || // if price changed
            				request.attributeName === 'UsrOfferTypeUsrCommisionPercent' ) { // or multiplier changed 
            				var price = await request.$context.NumberAttribute_ww6zimk;
            				var percent = await request.$context.UsrOfferTypeUsrCommisionPercent;
            				var commission = price * percent / 100;
            				request.$context.NumberAttribute_fbnvoiu = commission;
						}
						/* Call the next handler if it exists and return its result. */
        				return next?.handle(request);
					}
			   }			
		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{
			/* The validator type must contain a vendor prefix.
    		Format the validator type in PascalCase. */
    		"usr.DGValidator": {
        		validator: function (config) {
            		return function (control) {
               			let value = control.value;
                		let minValue = config.minValue;
               	 		let valueIsCorrect = value >= minValue;
                		let result;
                		if (valueIsCorrect) {
                    		result = null;
                			} else {
                    			result = {	
                        			"usr.DGValidator": {
                            			message: config.message
									}
								};
							}
						    return result;
					};
				},
				params: [
					{
						name: "minValue"
					},
					{
						name: "message"
					}
					],
					async: false
			}
		
     
		}/**SCHEMA_VALIDATORS*/
	};
});