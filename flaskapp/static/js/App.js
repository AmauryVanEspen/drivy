
require("../less/style.less");

import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';

import Root from './containers/Root'
import configureStore from './store/configureStore'

const store = configureStore()


render(
    <Root history={browserHistory} store={store}/>,
    document.getElementById('App')
)




