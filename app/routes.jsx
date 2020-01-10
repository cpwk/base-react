import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom'
import Portal from './component/page/Portal';
import Home from './component/page/Home';
import List from './component/page/List';
import TableDemo from "./component/page/TableDemo";
import Menu from "./component/page/Menu";

import Calc from './component/page/Calc';
import Calc20 from './component/page/Calc2.0';

const routes = (
    <HashRouter>
        <Switch>

            <Route path='/' exact component={Portal}/>

            <Route path='/home' exact component={Home}/>
            <Route path='/list' component={List}/>
            <Route path='/table' component={TableDemo}/>
            <Route path='/menu' component={Menu}/>

            <Route path='/calc' component={Calc}/>
            <Route path='/calc2' component={Calc20}/>

        </Switch>
    </HashRouter>
);

export default routes;
