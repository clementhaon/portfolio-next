import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import TechnoFrontEnd from './TechnoFrontEnd';
import TechnoBackEnd from './TechnoBackEnd';
import TechnoIntegration from './TechnoIntegration';
import TechnoEnvironment from './TechnoEnvironment';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Techno = () => {

    return (
        <Grid spacing={3} container>
            <Grid xs={7} className="grid-container-techno">
                <Item elevation={6}><TechnoFrontEnd/></Item>
            </Grid>
            <Grid xs={5} className="grid-container-techno">
                <Item elevation={3}><TechnoBackEnd/></Item>
            </Grid>
            <Grid xs={5} className="grid-container-techno">
                <Item elevation={3}><TechnoIntegration/></Item>
            </Grid>
            <Grid xs={7} className="grid-container-techno">
                <Item elevation={3}><TechnoEnvironment/></Item>
            </Grid>
        </Grid>
    )
}

export default Techno;