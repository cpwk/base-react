import React from 'react';
import {U} from "../../common";
import {InputNumber} from 'antd'

export default class Calc extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            x: 0,
            y: 0,
            z: 0
        };
    }

    componentDidMount() {
        U.setWXTitle('计算机测试');
    }

    add = () => {
        let {x = 0, y = 0} = this.state;
        console.log(`x=${x} y=${y} `);
        this.setState({z: parseInt(x) + parseInt(y)});
    };

    render() {

        let {x = 0, y = 0, z = 0} = this.state;

        console.log(`x=${x} y=${y} z=${z}`);

        return <div>

            <div style={{float: 'left'}}>

                <InputNumber value={x} onChange={(val) => {
                    this.setState({x: val}, () => {
                        this.add();
                    });
                }}/>
                +
                <InputNumber min={0} value={y} onChange={(val) => {
                    this.setState({y: val}, () => {
                        this.add();
                    });
                }}/>
                =
            </div>
            <div style={{float: 'left', lineHeight: '30px', paddingLeft: '10px', color: 'red'}}>{z}</div>
        </div>
    }
}