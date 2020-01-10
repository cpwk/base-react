import React from 'react';
import {U} from "../../common";
import {ListComp} from "./List";
import Calc from "./Calc";

export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            list: [],
        };
    }

    componentDidMount() {
        U.setWXTitle('主页');

        this.initList();

    }

    initList = () => {

        let {list = []} = this.state;

        for (let i = 1; i <= 5; i++) {
            list.push({id: i, title: `标题${i}`});
        }

        this.setState({list});
    };


    render() {

        let {list = []} = this.state;

        return <div>

            计算器
            <div className='clearfix-h20'/>
            <Calc/>

            <div className='clearfix-h20'/>
            最新新闻
            <div className='clearfix-h20'/>

            <ListComp list={list}/>


        </div>
    }
}

