import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom';
//37E-1
import Home from './App';
import Shelf from './components/Shelf';

//37E-2
export default (
    //42F
    //42G
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/bins/:id' component={Shelf}/>
    </Switch>
)