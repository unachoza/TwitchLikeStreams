import React from 'react'
import { Router, Route } from 'react-router-dom'
import StreamCreate from './streams/StreamCreate'
import StreamEdit from './streams/StreamEdit'
import StreamDelete from './streams/StreamDelete'
import StreamList from './streams/StreamList'
import StreamShow from './streams/StreamShow'
import Header from './Header'
import history from '../history'

const App = () => {
    return (
        <div className="ui component">
            <Router history={history}>
                <div>
                    <Header />
                    <Route path="/"  exact component={StreamList} />
                    <Route path="/streams/new"  exact component={StreamCreate} />
                    <Route path="/streams/edit/:id"  exact component={StreamEdit} />
                    <Route path="/streams/delete/:id"  exact component={StreamDelete} />
                    <Route path="/streams/show"  exact component={StreamShow} />
                </div>
            </Router>
        </div>
    )
}

export default App

// clientID = "820118529267-k0spahsabie4dqajgnhplqb82ao57vsh.apps.googleusercontent.com"