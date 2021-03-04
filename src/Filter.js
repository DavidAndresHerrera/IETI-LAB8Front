import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import FormControl from "@material-ui/core/FormControl";
import {Autocomplete} from "@material-ui/lab";
import {TextField} from "@material-ui/core";
import Date from "./Date";
import {Button} from "reactstrap";


const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function Filter() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const FormHeader = props => (
        <h2 id="headerTitle">{props.title}</h2>
    );

    const countries = [
        { name: 'Ready' },
        { name: 'In progress' },
        { name: 'Done ' },
    ];
    const nombres = [
        {name: 'David Herrera'},
        {name: 'Juan Herrera'},
        {name: 'Cesar Villamil'}

    ];


    return (
        <div>
            <Button  onClick={handleOpen} outline color="success">
                Filtrar
            </Button>
            <Modal
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <div id="filtro">
                            <FormHeader title="Filtrar"/>
                            <div>
                                <form className="form">
                                    <FormControl  margin="normal" required fullWidth  >
                                        <Autocomplete
                                            options={nombres}
                                            getOptionLabel={option => option.name}
                                            renderInput={params =>
                                                <TextField
                                                    label="responsable"
                                                    name="responsable"
                                                    variant="outlined"
                                                    required
                                                    {...params}
                                                />
                                            }
                                        />
                                    </FormControl>
                                    <FormControl  margin="normal" required fullWidth  >
                                        <Autocomplete
                                            options={countries}
                                            getOptionLabel={option => option.name}
                                            renderInput={params =>
                                                <TextField
                                                    label="Status"
                                                    name="status"
                                                    variant="outlined"
                                                    required

                                                    {...params}
                                                />
                                            }
                                        />
                                    </FormControl>
                                    <FormControl margin="normal" required fullWidth >
                                        <Date/>
                                    </FormControl>
                                    <FormControl margin="normal" required fullWidth class="row">
                                        <Button outline color="success" onClick={handleClose}>
                                            Guardar
                                        </Button>
                                    </FormControl>
                                </form>
                            </div>
                        </div>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}