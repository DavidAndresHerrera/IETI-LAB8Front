import React, {Component} from 'react';
import DrawerComponent from "./DrawerComponent.js";
import './App.css';
import TabPanel from './TabPanel';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'


class App extends Component{

    constructor(props) {
        super(props);
        localStorage.setItem('email',"davidandres");
        localStorage.setItem('password',"123456");
    }zz


    render(){

        const LoginView = () => (
            <TabPanel/>
        );

        const informacion = {
            "nombre":"David Herrera",
            "correo":"davidandres@gmail.com"
        }
        return (
            <Router>
                <div className="App">
                    <div>
                        {localStorage.getItem('IsLoggedIn') === "true"?
                            <DrawerComponent info={informacion} path="/Draw"/> : <LoginView/>}
                    </div>
                </div>
            </Router>


        );
    }

}

export default App;
