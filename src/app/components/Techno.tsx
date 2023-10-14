'use client';
import React, {useRef} from "react";
import {
    motion,
    useScroll,
    useTransform,
    MotionValue,
} from "framer-motion";
import {ColorModeContext} from "../styles/Theme";

function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance]);
}

function Image({ image, type }: { image: string[], type:string }) {
    const { mode } = React.useContext(ColorModeContext);
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, 300);

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
                                transition={{ duration: 0.2, delay:delay*index }}
                                variants={{
                                    visible: { rotate: 0, scale: 1},
                                    hidden: { rotate: 180, scale: 0 }
                                }}
                            />
                        </div>

                        <motion.p
                            className="description-image-techno"
                            initial="hidden"
                            whileInView="visible"
                            transition={{ duration: 0.3, delay:delay*index }}
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
            <motion.h2 className="h2-scroll" style={{ y }}>{type}</motion.h2>
        </section>
    );
}

export default function Techno() {
    const imageBack = ['nodejs','redis','mysql','mongodb', 'php','laravel','codeigniter'];
    const imageFront = ['vue-js', 'react', 'typescript', 'react-native', 'redux', 'material-ui','next-js'];
    const imageDeployment = ['docker','buddy-works', 'digitalocean','nginx','vercel', 'grafana','google-cloud'];
    const imageEnv = ['github','visual-studio-code', 'sourcetree', 'apple','jetbrains','ubuntu', 'gitkraken']
    return (
        <>
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