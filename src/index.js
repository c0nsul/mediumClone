import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'

import Routes from 'routes'
import {CurrentUserProvider} from 'contexts/currentUser'
//component - no Brase! {}
import TopBar from 'components/topBar'
import CurrentUserChecker from 'components/currenUserChecker'

const App = () => {
    return (
        <CurrentUserProvider>
            <CurrentUserChecker>
            <Router>
                <TopBar/>
                <Routes/>
            </Router>
            </CurrentUserChecker>
        </CurrentUserProvider>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

