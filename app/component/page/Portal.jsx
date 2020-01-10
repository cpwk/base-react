import React from 'react';
import {App} from "../../common";

export default class Portal extends React.Component {

    render() {
        return <ul>
            <li onClick={() => App.go('/home')}><a>主页</a></li>

            <li onClick={() => App.go('/list')}><a>列表组件</a></li>
            <li onClick={() => App.go('/table')}><a>Table组件</a></li>
            <li onClick={() => App.go('/menu')}><a>Menu组件</a></li>

            <li onClick={() => App.go('/calc')}><a>计算机测试</a></li>
            <li onClick={() => App.go('/calc2')}><a>计算机测试2.0</a></li>
        </ul>
    }
}