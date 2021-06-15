import {makeStyles} from "@material-ui/core/styles";

export default makeStyles (()=> ({
    root: {
            maxWidth: '100%'
    },
    media: {
        paddingTop: '46%', //16:9
        paddingBottom: '56%',
                 },

    cardActions: {
        display: 'flex',
        justifyContent: 'flex-end',
        paddingTop: '1%',

    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
           },
}));
