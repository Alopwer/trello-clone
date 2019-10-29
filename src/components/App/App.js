import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import Header from '../Header';
import BoardsPage from '../../pages/BoardsPage/BoardsPage';
import BoardPage from '../../pages/BoardPage/BoardPage';

const App = () => {
    return (
        <div>
            <Header />
            <Router>
                <Switch>
                    <Route path='/board/:id'>
                        <BoardPage />
                    </Route>
                    <Route path='/'>
                        <BoardsPage />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App;