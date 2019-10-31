import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../Header';
import BoardsPage from '../../pages/BoardsPage/BoardsPage';
import BoardPage from '../../pages/BoardPage/BoardPage';
import { BackgroundContext } from '../../context/backgrounds-context';

const backgrounds = [
    'rgb(0, 121, 191)',
    'rgb(210, 144, 52)',
    'rgb(81, 152, 57)',
    'rgb(176, 70, 50)',
    'rgb(137, 96, 158)',
    'rgb(205, 90, 145)',
    'rgb(75, 191, 107)',
    'rgb(0, 174, 204)',
    'rgb(131, 140, 145)',
]

const App = () => {
    return (
        <BackgroundContext.Provider value={backgrounds}>
            <Header />
            <Switch>
                <Route path='/board/:id'>
                    <BoardPage />
                </Route>
                <Route path='/'>
                    <BoardsPage />
                </Route>
            </Switch>
        </BackgroundContext.Provider>
    )
}

export default App;