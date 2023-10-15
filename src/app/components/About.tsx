import React from 'react';
import {Box} from "@mui/material";
import {ColorModeContext} from "../styles/Theme";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import TwitterIcon from '@mui/icons-material/Twitter';
import {motion} from "framer-motion";
const About = () => {
    const { mode } = React.useContext(ColorModeContext);

    return (
        <Box sx={{display:"flex", alignItems:"center", width:'100%', justifyContent:"center", flexWrap:"wrap"}}>

            <Box
                sx={{maxWidth:"1000px", display:"flex",width:'100%', alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", minHeight:'75vh'}}
            >
                <Box
                    sx={{width:'200px', height:'200px', borderRadius: '50%', overflow:"hidden" , margin:"40px 20px", display:'flex', justifyContent:'center', alignItems:"center"}}
                    className={`background-badge-${mode === "dark" ?"dark" : "light"}`}
                >
                    <LinkedInIcon sx={{fontSize:150}}/>
                </Box>
                <Box
                    sx={{width:'200px', height:'200px', borderRadius: '50%', overflow:"hidden", margin:"40px 20px", display:'flex', justifyContent:'center', alignItems:"center" }}
                    className={`background-badge-${mode === "dark" ?"dark" : "light"}`}
                >
                    <GitHubIcon sx={{fontSize:150}}/>
                </Box>
                <Box
                    sx={{width:'200px', height:'200px', borderRadius: '50%', overflow:"hidden", margin:"40px 20px", display:'flex', justifyContent:'center', alignItems:"center" }}
                    className={`background-badge-${mode === "dark" ?"dark" : "light"}`}
                >
                    <AlternateEmailIcon sx={{fontSize:150}}/>

                </Box>
                <Box
                    sx={{width:'200px', height:'200px', borderRadius: '50%', overflow:"hidden", margin:"40px 20px", display:'flex', justifyContent:'center', alignItems:"center" }}
                    className={`background-badge-${mode === "dark" ?"dark" : "light"}`}
                >
                    <TwitterIcon sx={{fontSize:150}}/>

                </Box>
            </Box>
        </Box>
    )
}

export default About;