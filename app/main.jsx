import React from 'react';
import ReactDOM from 'react-dom';
import routers from './routes';
import './assets/css/common.scss'
import {LocaleProvider} from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';


if (module.hot)
    module.hot.accept();

ReactDOM.render(<LocaleProvider locale={zhCN}>{routers}</LocaleProvider>, document.getElementById('root'));
