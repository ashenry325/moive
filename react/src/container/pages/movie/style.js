import { makeStyles } from '@material-ui/core/styles';
import imgHero from './img-hero.jpg';

const useStyles = makeStyles((theme) => ({
    main: {
        background: `url(${imgHero})`,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'top',
        backgrountRepeat: 'no-repeat',
    },
    icon: {
        marginRight: theme.spacing(2),
    },

    cardGrid: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(8),

    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#333',
        color: 'white',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
}));

export default useStyles;