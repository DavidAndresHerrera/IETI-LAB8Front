import React, {Component} from 'react';


import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import Date from './Date';
import {setTask} from './DrawerComponent';
import {Link, Route, Switch} from "react-router-dom";



const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


export class NewTask extends Component {

    constructor(props) {
        super(props);
        this.state = {descrip:"", respon:"", status:""}
        this.handleChangeDescrip = this.handleChangeDescrip.bind(this);
        this.handleChangeRespon = this.handleChangeRespon.bind(this);
        this.handleChangeStatus = this.handleChangeStatus.bind(this);

    }

    state = {
        open: true
    }

    render() {
        const FormHeader = props => (
            <h2 id="headerTitle">{props.title}</h2>
        );

            const {open, setOpen} = this.state;


        const handleClose = () => {
            this.setState({open: false});
        };


        const enviar = () => {
            if (localStorage.getItem('descrip') != "" && localStorage.getItem('respon') != "" && localStorage.getItem('status') != ""){
                return <setTask lista={this.state}/>;
            }
            console.log(this.state,"*********************************");
        };

        const FormButton = props => (
            <div id="button" class="row">
                <button onClick={enviar}>{props.title}</button>
            </div>
        );
        const countries = [
            { name: 'Ready' },
            { name: 'In progress' },
            { name: 'Done ' },
        ];
        return (
            <div >

                <Dialog
                    open={this.state}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleClose}
                >

                    <div id="newTaskform">
                        <FormHeader title="New Task"/>
                        <div>
                            <form className="form">
                                <FormControl margin="normal" required fullWidth class="row input">
                                    <label >Descripcion</label>
                                    <Input
                                        id="descrip"
                                        name="descrip"
                                        autoFocus
                                        onChange={this.handleChangeDescrip}
                                    />
                                </FormControl>
                                <br/>
                                <FormControl margin="normal" required fullWidth class="row input">
                                    <label >Responsable</label>
                                    <Input
                                        name="status"
                                        id="status"
                                        onChange={this.handleChangeStatus}
                                    />
                                </FormControl>
                                <br/>
                                <FormControl margin="normal" required fullWidth class="row input">
                                <label >Status</label>
                                <Input
                                    name="respon"
                                    id="respon"
                                    onChange={this.handleChangeRespon}
                                />
                            </FormControl>
                                <FormControl margin="normal" required fullWidth >
                                    <Date/>
                                </FormControl>
                                <FormControl margin="normal" required fullWidth >
                                    <Link to="/Draw">
                                        <FormButton title="Guardar"/>
                                    </Link>
                                </FormControl>
                            </form>
                        </div>


                    </div>


                </Dialog>
            </div>
        );
    }

    handleChangeDescrip(e){
        this.setState({descrip : e.target.value});
    }

    handleChangeRespon(e){
        this.setState({respon : e.target.value});
    }
    handleChangeStatus(e){
        this.setState({status : e.target.value});
    }
}
