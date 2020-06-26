import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "../Header";
import BoardsPage from "../../pages/BoardsPage/BoardsPage";
import BoardPage from "../../pages/BoardPage/BoardPage";
import CardPage from "../../pages/CardPage/CardPage";
import { connect } from "react-redux";
import AuthContainer from "../Auth/AuthContainer";
import SignupContainer from "../Auth/SignupContainer";

const App = ({ isLoggedIn }) => {
    return <>
        <Header />
        { isLoggedIn ? <Switch>
                <Route path="/board/:id/list/:listId/card/:cardId">
                    <BoardPage />
                    <CardPage />
                </Route>
                <Route path="/board/:id">
                    <BoardPage />
                </Route>
                <Route exact path="/">
                    <BoardsPage />
                </Route>
                <Route path='*'>
                    <Redirect to='/'/>
                </Route>
            </Switch>
            : <Switch>
                <Route path='/login'> 
                    <AuthContainer />
                </Route>
                <Route path='/signup'>
                    <SignupContainer />
                </Route>
                <Route path='/'>
                    <Redirect to='/login' />
                </Route>
            </Switch>
        }
    </>
};

const mapStateToProps = ({ auth: { isLoggedIn } }) => ({
    isLoggedIn,
});

export default connect(mapStateToProps)(App);
