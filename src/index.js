import React from 'react'
import {Provider} from 'react-redux'
import store from './redux/store'
import {render} from 'react-dom'
import App from './app'

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app')
)