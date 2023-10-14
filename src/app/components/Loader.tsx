import * as React from 'react';
import CircularProgress, {
    CircularProgressProps,
} from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {Skeleton} from "@mui/material";

function CircularProgressWithLabel(
    props: CircularProgressProps & { value: number },
) {
    React.useEffect(() => {
        document.body.style.position = 'fixed';
        return () => {
            document.body.style.position = '';
        };
    }, []);
    return (
        <Box className="overlay">
            <CircularProgress size="10rem" variant="determinate" {...props} sx={{color:"#fff", zIndex:1002}} />
            <Skeleton variant="circular" width={300} height={300} sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex:1001, bgcolor: 'grey.700' }} />
            <Box
                sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: 30
                }}
            >
                <Typography
                    variant="caption"
                    component="div"
                    color="#fff"
                    className="text-loader"
                >{`${Math.round(props.value)}%`}</Typography>
            </Box>
        </Box>
    );
}

export default function CircularWithValueLabel() {
    const [progress, setProgress] = React.useState(10);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 100 : prevProgress + 10));
        }, 150);
        return () => {
            clearInterval(timer);
        };
    }, []);

    return <CircularProgressWithLabel value={progress} />;
}