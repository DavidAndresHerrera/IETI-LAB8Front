import React, {Component} from 'react';
import DrawerComponent from "./DrawerComponent.js";
import './App.css';
import TabPanel from './TabPanel';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import axios from 'axios';


class App extends Component{

    constructor(props) {
        super(props);

    }
    



    render(){

        this.axios = axios.create({
            baseURL: 'http://localhost:8080/api/',
            timeout: 1000,
            headers: {'Authorization': localStorage.getItem("token")}
        });

        const LoginView = () => (
            <TabPanel/>
        );

        if (localStorage.getItem('IsLoggedIn') === "true"){
            console.log(localStorage.getItem("token"));
            const AuthStr = "".concat(localStorage.getItem("token"));

            axios.get("http://localhost:8080/api/task/", { headers: { Authorization: AuthStr} }).then(response => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log('error 3 ' + error);
            });
        }

        
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
