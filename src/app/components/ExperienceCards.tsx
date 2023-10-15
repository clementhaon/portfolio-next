import * as React from 'react';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import {ExperienceType} from "../types/experience";
import {ColorModeContext} from "../styles/Theme";

type ExperienceCardsProps = {
    data: ExperienceType;
};
const ExperienceCards: React.FC<ExperienceCardsProps> = ({ data }) => {
    const { mode } = React.useContext(ColorModeContext);

    return (
        <Box sx={{ maxWidth: 460, bgcolor: 'background.paper', border: '1px solid grey', borderRadius:2 }}>
            <Box sx={{ my: 3, mx: 2 }}>
                <Grid container alignItems="center">
                    <Grid item xs>
                        <Typography gutterBottom variant="h5" component="div">
                            {data.title}
                        </Typography>
                    </Grid>
                </Grid>
                <Typography color="text.secondary" variant="subtitle1">
                    {data.description}
                </Typography>
            </Box>
            <Divider variant="middle" />
            <Box sx={{ m: 2 }}>
                <Typography gutterBottom variant="body1">
                    Techno
                </Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                    {data.chip?.map((chip, index) =>(
                        <Chip className={`background-badge-${mode === "dark" ?"dark" : "light"}`} label={chip} key={index} style={{color:"#000", textTransform:'lowercase'}} />
                    ))}
                </Stack>
            </Box>
        </Box>
    );
}
export default ExperienceCards;