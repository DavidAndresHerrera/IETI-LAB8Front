import React, {Component} from 'react';
import logo from './logo.svg';
import DrawerComponent from "./DrawerComponent.js";
import './App.css';
import {Login} from "./Login.js"
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'


class App extends Component{

    constructor(props) {
        super(props);
        localStorage.setItem('email',"davidandres");
        localStorage.setItem('password',"123456");
    }zz


    render(){

        const LoginView = () => (
            <Login/>
        );

        const DrawerView = () => (
            <DrawerComponent/>

        );

        return (
            <Router>
                <div className="App">
                    {localStorage.getItem('IsLoggedIn') === "true"?
                        <Route exact path="/Draw" component={DrawerView}/> : <Route exact path="/" component={LoginView}/>}
                </div>
            </Router>


        );
    }

}

export default App;
