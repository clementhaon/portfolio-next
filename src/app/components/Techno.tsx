'use client';
import {useEffect, useRef} from "react";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    MotionValue,
    inView,
} from "framer-motion";

function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance]);
}

function Image({ id }: { id: number }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, 300);


    return (
        <section>
            <motion.div
                ref={ref}
                className="container-techno-scroll"
                initial="hidden"
                whileInView="visible"
                onViewportLeave={(entry)=> {console.log(entry)}}
                onAnimationComplete={definition => {
                    console.log('Completed animating', definition)
                }}
                transition={{ duration: 0.5 }}
                variants={{
                    visible: { opacity: 1, scale: 1},
                    hidden: { opacity: 0, scale: 0 }
                }}
            >
                <img className="image-scroll" src={`/${id}.svg`} alt="A London skyscraper" />
            </motion.div>
            <motion.h2 className="h2-scroll" style={{ y }}>{id === 1 ? '#BACKEND' : id === 2 ? "#FRONTEND" : id === 3 ? "#DEPLOIEMENT" : "#ENVIRONNEMENT"}</motion.h2>
        </section>
    );
}

export default function Techno() {

    return (
            <>
                {[1, 2, 3, 4].map((image, index) => (
                    <Image id={image} key={index} />
                ))}
            </>

    );
}