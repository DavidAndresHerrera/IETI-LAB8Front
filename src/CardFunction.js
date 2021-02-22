import React, {Component} from 'react';


import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = then =>({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        width: "auto",
        alignItems: "center",
        alignContent: "center",


    },
    titleCardGreen: {
        fontSize: 20,
        color: "#0f5f04",
        font: "italic",

    },
    titleCardBlack: {
        fontSize: 20,
        color: "#050505",
        font: "italic",

    },
    titleCardRed: {
        fontSize: 20,
        color: "#790010",
        font: "italic",

    },

});

class CardFunction extends Component{
    constructor(props){
        super(props);
    }

    render() {

        const {classes} = this.props;
        const bull = <span className={classes.bullet}>•</span>;
        const date = new Date().getDate()+"/"+ new Date().getMonth() +"/"+ new Date().getFullYear();

        return (
            <Card className={classes.root}>
                <CardContent>
                    {this.props.estado==="In progress" && <Typography className={classes.titleCardGreen} color="textPrimary" gutterBottom>{this.props.titulo}</Typography>}
                    {this.props.estado==="Ready" && <Typography className={classes.titleCardBlack} color="textPrimary" gutterBottom>{this.props.titulo}</Typography>}
                    {this.props.estado==="Completed" && <Typography className={classes.titleCardRed} color="textPrimary" gutterBottom>{this.props.titulo}</Typography>}
                    <br></br>
                    <Typography variant="h7" component="h5" >
                        Santiago Carrillo
                    </Typography>
                    <Typography variant="h7" component="h5" >
                        sancarbar@gmail.com
                    </Typography>
                    <Typography variant="h7" component="h4">
                        {this.props.estado}
                    </Typography>
                    <Typography variant="h7" component="h5">
                        {date}
                    </Typography>
                </CardContent>
            </Card>
        );
    }
}
export default withStyles(useStyles, { withTheme: true })(CardFunction);
