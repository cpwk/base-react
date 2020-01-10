import React from 'react';
import {U} from "../../common";
import {Button, Dropdown, Icon, Input, Menu, message, Modal, Table} from 'antd';

export default class TableDemo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            list: [],
            user: {},
            show_edit: false
        };
    }

    componentDidMount() {
        U.setWXTitle('Table组件');
        this.initDefault();
    }

    initDefault = () => {
        let {list = []} = this.state;
        for (let i = 0; i < 5; i++) {
            let age = 20 + parseInt(Math.random() * 5);
            list.push({name: `用户${i + 1}`, age})
        }
        this.setState({list});
    };

    edit = item => {
        this.setState({user: item, show_edit: true});
    };

    remove = (index) => {
        Modal.confirm({
            title: `确认删除操作?`,
            onOk: () => {
                message.success('删除成功');
                let list = this.state.list;
                this.setState({
                    list: U.array.remove(list, index)
                })
            },
            onCancel() {
            },
        });
    };

    submit = () => {
        let {list = [], user = {}} = this.state;
        let {age} = user;
        if (age < 10 || age > 30) {
            user.age = 20;
        }
        if (user.index > -1) {
            list[user.index] = user;
        } else {
            list.push(user);
        }
        this.showEdit();
    };

    showEdit = (val) => {
        this.setState({show_edit: val || false});
    };

    render() {

        let {list = [], user = {}, show_edit = false} = this.state;

        let {name, age} = user;

        list.map((item, index) => {
            item.index = index;
        });

        return <div>

            <Button type='primary' onClick={() => this.edit({index: -1})}>添加</Button>

            <Table
                columns={[{
                    title: '序号',
                    dataIndex: 'index',
                    className: 'txt-center',
                    render: (text, item, i) => i + 1
                }, {
                    title: '姓名',
                    dataIndex: 'name',
                    className: 'txt-center'
                }, {
                    title: '年龄',
                    dataIndex: 'age',
                    className: 'txt-center',
                    defaultSortOrder: 'descend',
                    sorter: (a, b) => a.age - b.age
                }, {
                    title: '操作',
                    dataIndex: 'option',
                    className: 'txt-center',
                    render: (text, item, index) => {
                        return <Dropdown overlay={<Menu>
                            <Menu.Item key="1">
                                <a onClick={() => this.edit(item)}>编辑</a>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <a onClick={() => this.remove(index)}>删除</a>
                            </Menu.Item>
                        </Menu>} trigger={['click']}>
                            <a className="ant-dropdown-link">
                                操作 <Icon type="down"/>
                            </a>
                        </Dropdown>
                    }

                }]}
                rowKey={item => item.index} dataSource={list}
                pagination={false} style={{width: '600px'}}/>

            <Modal title={'编辑信息'}
                   visible={show_edit}
                   width={'500px'}
                   okText='提交'
                   onOk={this.submit}
                   onCancel={() => this.showEdit()}>

                <div style={{marginBottom: 10}}>
                    <Input addonBefore='姓名' value={name} onChange={(e) => {
                        this.setState({
                            user: {
                                ...user,
                                name: e.target.value
                            }
                        })
                    }}/>
                </div>
                <div style={{marginBottom: 10}}>
                    <Input addonBefore='年龄' value={age} onChange={(e) => {
                        this.setState({
                            user: {
                                ...user,
                                age: e.target.value
                            }
                        })
                    }}/>
                </div>

            </Modal>

        </div>
    }
}
