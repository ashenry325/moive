import { makeStyles } from '@material-ui/core/styles';
// import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
   
    parentHero:{
        postion: "relative",
        overflow: "hidden",
    },
    heroContent: {
        position: "absolute",
        top: '20%',
        color:'white !important',
        width: '100%'
        // padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        // marginTop: theme.spacing(4),
    },
    imgHero: {
        width: '100%',
        objectPosition: 'center',
        height: '90vh',
        objectFit: 'cover',
    },
    // contentHero: {
    //     position: "absolute",
    //     top: '30%',
    //     color:'white !important'
    // }
}));

export default useStyles