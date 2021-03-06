import React from 'react';
import {Switch, Route} from 'react-router-dom';
import HomePage from './pages/homepage';
import ProductsPage from './pages/productspage';
import ViewInfo from './pages/ViewInfo';
import {Carousel} from 'antd';

const Router = () => (
  <Switch>
    <Route exact path='/' component ={HomePage} />
    <Route exact path='/products' component ={ProductsPage} />
    <Route exact path='/info' component ={ViewInfo} />
  </Switch>
)

export default Router;
