import React from 'react'
import { render } from 'react-dom'

import { browserHistory } from 'react-router'


const history = syncHistoryWithStore(browserHistory, store)

render(
    <Root history={history} store={store}/>,
    document.getElementById('App')
)
