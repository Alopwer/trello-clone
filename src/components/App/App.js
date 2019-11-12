import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../Header';
import BoardsPage from '../../pages/BoardsPage/BoardsPage';
import BoardPage from '../../pages/BoardPage/BoardPage';
import CardPage from '../../pages/CardPage/CardPage';

const App = () => {
    return (
        <>
            <Header />
            <Switch>
                <Route path='/board/:id/list/:listId/card/:cardId'>
                    <BoardPage />
                    <CardPage />
                </Route>
                <Route path='/board/:id'>
                    <BoardPage />
                </Route>
                <Route path='/'>
                    <BoardsPage />
                </Route>
            </Switch>
        </>
    )
}

export default App;