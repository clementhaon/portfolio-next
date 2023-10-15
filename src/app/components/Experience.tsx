import React from 'react';
import {
    motion,
} from "framer-motion";
import {Box, Chip, Divider} from "@mui/material";
import Grid from "@mui/system/Unstable_Grid";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import {ExperienceType} from "../types/experience";
import ExperienceCards from "./ExperienceCards";

const Experience = () => {
    const data: ExperienceType[] = [
        {
            title: "Application Service",
            description: "Une api node.js et une application Java de service pour un constructeur de téléphone android",
            chip: ["Node", "Java", "Android", "Docker"]
        },
        {
            title: "Plateforme Commerce",
            description: "Réalisation API et Back office pour une application de livraison multimarque avec achat in-app",
            chip: ["Docker", "PHP", "Laravel", "Blade", 'Stripe']
        },
        {
            title: "Beta Testeur",
            description: "Back office react typescript et api node avec de multiple connexion d'api : Jira, Azur, Salesforce",
            chip: ["Node","Docker", "React", "Typescript"]
        },
        {
            title: "Paris sportif",
            description: "Une application react native composé d'expo et redux ainsi que l'api codeigniter achat in-app",
            chip: ["PHP", "Codeigniter", "React native", 'revenueCat', "firebase", ]
        },
        {
            title: "Réseau social",
            description: "Application réseau social, composé d'une api node et back office react pour la modération",
            chip: ["node", "react", "firebase", "Docker"]
        },
        {
            title: "E-learning",
            description: "PWA next.js d'e-learning dans le domaine du vin aidé par redux",
            chip: ["pwa", "next", "redux"]
        }
    ];
    const dataPerso: ExperienceType[] = [
        {
            title: "Bot Discord",
            description: "Hébergé sur mon vps, un bot discord en node.js connecté à chat-gpt et qui tourne avec docker",
            chip: ["discord", "chat-gpt","Docker","Node"]
        },
        {
            title: "Scrapper",
            description: "Scrapping d'un site internet concernant la NFL avec puppeteer et node",
            chip: ["Puppeteer", "Node"]
        },
        {
            title: "Association",
            description: "Membre de l'association entraide et sauvetage protection animale pour la gestion du site internet",
            chip: ["Wordpress"]
        },
    ];
    return (
        <Box sx={{display:"flex", alignItems:"center", width:'100%', justifyContent:"center", flexDirection:"column"}}>
            <Box
                sx={{maxWidth:"1000px"}}
            >
                <motion.h4
                    style={{fontSize:"2rem", maxWidth:"1000px", textAlign:"center"}}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once:true}}
                    variants={{
                        hidden: {
                            y: -100,
                        },
                        visible: {
                            y: 0,
                            transition: {
                                type:'spring'
                            },
                        },
                    }}
                >
                    Explorez mes projets pour découvrir mon savoir-faire et mon expérience dans le développement web.
                </motion.h4>
            </Box>
            <Box sx={{maxWidth:"1000px", display:"flex", alignItems:"center", justifyContent:"center",flexDirection:"column",mt:5}}>
                <h1 style={{alignSelf:"flex-start", textDecoration:"underline"}}>Digital Paca</h1>

                <Stack spacing={{ xs: 1, sm: 3 }} direction="row" useFlexGap flexWrap="wrap">
                    {
                        data.map((item, index) => (
                            <ExperienceCards data={item} key={index}/>
                        ))
                    }
                </Stack>
            </Box>
            <Box sx={{maxWidth:"1000px", display:"flex", alignItems:"center", justifyContent:"center",flexDirection:"column",mt:5}}>
                <h1 style={{alignSelf:"flex-start", textDecoration:"underline"}}>Perso</h1>

                <Stack spacing={{ xs: 1, sm: 3 }} direction="row" useFlexGap flexWrap="wrap">
                    {
                        dataPerso.map((item, index) => (
                            <ExperienceCards data={item} key={index}/>
                        ))
                    }
                </Stack>
            </Box>

        </Box>


    )
}

export default Experience;