import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";
import OrderPage from "./Pages/Order";
import TemplatePage from "./Pages/Template";
import Modal from "./Modal/Modal";
import Nav from "./Navbar"

/**
 * Main wrapper
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const Main = (props) => {
    return (
        <>
            <Nav/>
            <Modal/>
            {props.children}
        </>
    )
}

/**
 * Main App component
 * @returns {JSX.Element}
 * @constructor
 */
const App = () => {
    return (
        <BrowserRouter>
            <Main>
                <Switch>
                    <Route path="/templates" component={TemplatePage}/>
                    <Route path="/" component={OrderPage}/>
                </Switch>
            </Main>
        </BrowserRouter>
    );
}
export default App;