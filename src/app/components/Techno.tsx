'use client';
import React, {useEffect, useRef, useState} from "react";
import {
    motion,
    useScroll,
    useTransform,
    MotionValue,
} from "framer-motion";
import {ColorModeContext} from "../styles/Theme";
import {Box} from "@mui/material";
import {hidden} from "next/dist/lib/picocolors";

function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance]);
}

function Image({ image, type }: { image: string[], type:string }) {
    const { mode } = React.useContext(ColorModeContext);
    const ref = useRef(null);
    const [width, setWidth] = useState<any>(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, 300);
    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    const delay = 0.2;
    return (
        <section>
            <motion.div
                ref={ref}
                className={`${mode === 'dark' ? 'dark':'light'}-container-techno-scroll`}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.2 }}
                variants={{
                    visible: { opacity: 1, scale: 1},
                    hidden: { opacity: 0, scale: 0 }
                }}
            >
                {image.map((item:string, index)=> (
                    <div className='container-image-techno' key={index}>
                        <div style={{height:"100%", display:'flex', alignItems:'center'}}>
                            <motion.img
                                className="image-scroll"
                                src={`${item}.svg`}
                                alt="Icon techno"
                                initial="hidden"
                                whileInView="visible"
                                transition={{
                                    type: "spring",
                                    stiffness: 260,
                                    damping: 20,
                                    duration:0.2,
                                    delay: delay*index
                                }}
                                variants={{
                                    visible: {
                                        rotate: 0,
                                        scale: 1,
                                    },
                                    hidden: { rotate: 180, scale: 0 }
                                }}
                            />
                        </div>

                        <motion.p
                            className="description-image-techno"
                            initial="hidden"
                            whileInView="visible"
                            transition={{ duration: 0.2, delay:delay*index }}
                            variants={{
                                visible: { opacity: .5, scale: 1},
                                hidden: { opacity: 0, scale: 0 }
                            }}
                        >
                            {item}
                        </motion.p>
                    </div>


                ))}

            </motion.div>
            {width > 900 ? (
                <motion.h2 className={`h2-scroll background-badge-${mode === "dark" ?"dark" : "light"}`} style={{ y }}>{type}</motion.h2>
            ) : (
                <h2 className={`h2-scroll background-badge-${mode === "dark" ?"dark" : "light"}`}>{type}</h2>
            )}
        </section>
    );
}

export default function Techno() {
    const imageBack = ['nodejs','redis','mysql','mongodb', 'php','laravel','codeigniter'];
    const imageFront = ['vue-js', 'react', 'typescript', 'react-native', 'redux', 'material-ui','next-js'];
    const imageDeployment = ['docker','buddy-works', 'digitalocean','nginx','vercel', 'grafana','google-cloud'];
    const imageEnv = ['github','visual-studio-code', 'sourcetree', 'apple','jetbrains','ubuntu', 'gitkraken'];
    const text = "Bienvenue dans mon univers numérique ! Voici un aperçu des technologies que j'ai pratiqué au fil des ans à travers le paysage en constante évolution des technologies.";
    const words = text.split(/\s+/);

    return (
        <>
            <Box className='flex-center-max-width'>
                <h4
                    style={{fontSize:"2rem", maxWidth:"1000px", textAlign:"center"}}
                >
                {words.map((letter, index) => (
                    <motion.span
                        key={index}
                        style={{display:'inline-block', whiteSpace:'nowrap'}}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once:true}}
                        transition={{ duration: 0.2}}
                        variants={{
                            hidden: {
                                opacity: 0,
                                y: `0.45em`,
                            },
                            visible: {
                                opacity: 1,
                                y: `0em`,
                                transition: {
                                    duration: 0.3,
                                    ease: [0.2, 0.65, 0.3, 0.9],
                                    delay:index*0.05
                            },
                            },
                        }}
                    >
                        {letter}&nbsp;
                    </motion.span>
                ))}
                </h4>
                {/*<h4 style={{fontSize:"2rem", maxWidth:"1000px", textAlign:"center"}}></h4>*/}
            </Box>
            <div>
                <Image image={imageBack} type={'#BACKEND'} />
            </div>
            <div>
                <Image image={imageFront} type={'#FRONTEND'} />
            </div>
            <div>
                <Image image={imageDeployment} type={'#DEPLOIEMENT'} />
            </div>
            <div>
                <Image image={imageEnv} type={'#ENVIRONNEMENT'} />
            </div>

        </>
    );
}