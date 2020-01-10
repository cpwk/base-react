import React from 'react';
import {Alert} from 'antd';

const groups = [
    {
        "id": 1,
        "functionType": 0,
        "functionHierarchy": 1,
        "parentId": null,
        "functionName": "系统管理",
        "functionUrl": null,
        "functionCode": null,
        "pageRoute": "System",
        "sortNumber": 1,
        "loadType": null,
        "iconUrl": "setting",
        "itemFunctionsVOList": [
            {
                "id": 2,
                "functionType": 0,
                "functionHierarchy": 2,
                "parentId": 1,
                "functionName": "权限管理",
                "functionUrl": null,
                "functionCode": null,
                "pageRoute": null,
                "sortNumber": 1,
                "loadType": null,
                "iconUrl": null,
                "itemFunctionsVOList": [
                    {
                        "id": 3,
                        "functionType": 1,
                        "functionHierarchy": 3,
                        "parentId": 2,
                        "functionName": "角色管理",
                        "functionUrl": "/authority/role",
                        "functionCode": null,
                        "pageRoute": null,
                        "sortNumber": 1,
                        "loadType": null,
                        "iconUrl": null,
                        "itemFunctionsVOList": [
                            {
                                "id": 4,
                                "functionType": 2,
                                "functionHierarchy": 4,
                                "parentId": 3,
                                "functionName": "新增",
                                "functionUrl": "",
                                "functionCode": "authority:role:insert",
                                "pageRoute": null,
                                "sortNumber": 1,
                                "loadType": null,
                                "iconUrl": null,
                                "itemFunctionsVOList": null
                            },
                            {
                                "id": 5,
                                "functionType": 2,
                                "functionHierarchy": 4,
                                "parentId": 3,
                                "functionName": "修改",
                                "functionUrl": "",
                                "functionCode": "authority:role:update",
                                "pageRoute": null,
                                "sortNumber": 2,
                                "loadType": null,
                                "iconUrl": null,
                                "itemFunctionsVOList": null
                            },
                            {
                                "id": 6,
                                "functionType": 2,
                                "functionHierarchy": 4,
                                "parentId": 3,
                                "functionName": "删除",
                                "functionUrl": "",
                                "functionCode": "authority:role:delete",
                                "pageRoute": null,
                                "sortNumber": 3,
                                "loadType": null,
                                "iconUrl": null,
                                "itemFunctionsVOList": null
                            }
                        ]
                    },
                    {
                        "id": 7,
                        "functionType": 1,
                        "functionHierarchy": 3,
                        "parentId": 2,
                        "functionName": "用户管理",
                        "functionUrl": "/authority/user",
                        "functionCode": null,
                        "pageRoute": null,
                        "sortNumber": 2,
                        "loadType": null,
                        "iconUrl": null,
                        "itemFunctionsVOList": [
                            {
                                "id": 8,
                                "functionType": 2,
                                "functionHierarchy": 4,
                                "parentId": 7,
                                "functionName": "新增",
                                "functionUrl": "",
                                "functionCode": "authority:user:insert",
                                "pageRoute": null,
                                "sortNumber": 1,
                                "loadType": null,
                                "iconUrl": null,
                                "itemFunctionsVOList": null
                            },
                            {
                                "id": 9,
                                "functionType": 2,
                                "functionHierarchy": 4,
                                "parentId": 7,
                                "functionName": "修改",
                                "functionUrl": "",
                                "functionCode": "authority:user:update",
                                "pageRoute": null,
                                "sortNumber": 2,
                                "loadType": null,
                                "iconUrl": null,
                                "itemFunctionsVOList": null
                            },
                            {
                                "id": 10,
                                "functionType": 2,
                                "functionHierarchy": 4,
                                "parentId": 7,
                                "functionName": "删除",
                                "functionUrl": "",
                                "functionCode": "authority:user:delete",
                                "pageRoute": null,
                                "sortNumber": 3,
                                "loadType": null,
                                "iconUrl": null,
                                "itemFunctionsVOList": null
                            },
                            {
                                "id": 11,
                                "functionType": 2,
                                "functionHierarchy": 4,
                                "parentId": 7,
                                "functionName": "导出",
                                "functionUrl": "",
                                "functionCode": "authority:user:export",
                                "pageRoute": null,
                                "sortNumber": 4,
                                "loadType": null,
                                "iconUrl": null,
                                "itemFunctionsVOList": null
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "id": 12,
        "functionType": 0,
        "functionHierarchy": 1,
        "parentId": null,
        "functionName": "公司管理",
        "functionUrl": null,
        "functionCode": null,
        "pageRoute": "Company",
        "sortNumber": 2,
        "loadType": null,
        "iconUrl": "tags",
        "itemFunctionsVOList": null
    }
];

export default class Menu extends React.Component {

    renderSub = (list, level) => {
        return <div>
            {list.map((item, key) => {
                let {functionName, itemFunctionsVOList = []} = item;
                let padding = 50 * level;
                let hasChildren = itemFunctionsVOList == null || itemFunctionsVOList.length === 0;
                return <div key={key} style={{paddingLeft: padding}}>
                    <div>
                        {level}&nbsp;{functionName}
                    </div>
                    {itemFunctionsVOList && this.renderSub(itemFunctionsVOList, level + 1)}
                </div>
            })}

        </div>
    };

    render() {
        return <div className="function_groups">
            {groups.map((item, index) => {
                let {functionName = '', itemFunctionsVOList = []} = item;


                return <div key={index}>

                    <Alert message={functionName} type="info"/>

                    <br/><br/>

                    {itemFunctionsVOList && this.renderSub(itemFunctionsVOList, 1)}


                </div>
            })}
        </div>
    }
}