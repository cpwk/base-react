import React from 'react';
import {U} from "../../common";

export default class List extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            list: [],
            pageNum: 1,
            pageSize: 5
        };
    }

    componentDidMount() {
        U.setWXTitle('列表组件');

        this.initList();

    }

    initList = () => {

        let {list = [], pageSize, pageNum} = this.state;

        for (let i = 1; i <= pageSize; i++) {
            let id = i + (pageNum - 1) * pageSize;
            list.push({id, title: `标题${id}`});
        }

        this.setState({list});
    };

    add = () => {
        let {pageNum} = this.state;

        pageNum++;

        this.setState({pageNum}, () => {
            this.initList();
        })
    };

    render() {

        let {list = []} = this.state;

        return <div>

            <ListComp list={list}/>

            <a onClick={this.add}>更多</a>

        </div>
    }
}

export class ListComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: this.props.list
        };
    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({list: nextProps.list});
    }

    render() {
        let {list = []} = this.state;
        console.log(list);
        return <ul>
            {list.map((item, index) => {
                let {id, title} = item;
                return <li key={index}>{id}.{title}</li>
            })}
        </ul>

    }

}
