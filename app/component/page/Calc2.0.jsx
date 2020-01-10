import React from 'react';
import {U} from "../../common";
import {InputNumber} from 'antd'

const maxLevel = 10;

export default class Calc20 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            values: [],
            result: 0
        };
    }

    componentDidMount() {
        U.setWXTitle('计算机测试2');
        let vs = [];
        let index = 0;
        while (index < maxLevel) {
            vs.push('');
            index++;
        }
        this.setState({values: vs});
    }

    add = () => {
        let {values = []} = this.state;
        let result = 0;
        values.map((v) => {
            result += v || 0;
        });
        this.setState({
            result
        })
    };

    render() {

        let {values = [], result} = this.state;

        return <div>

            <div>
                {values.map((v, i) => {
                    return <div key={i}><InputNumber value={v} onChange={(val) => {
                        values[i] = val;
                        this.setState({values}, () => {
                            this.add();
                        });
                    }}/>{i !== maxLevel - 1 && ' + '}</div>
                })}

            </div>
            =
            <div>
                {result}
            </div>

        </div>
    }
}
