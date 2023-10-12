import { useRef } from "react";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    MotionValue
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
            <div ref={ref}>
                <img className="image-scroll" src={`/${id}.svg`} alt="A London skyscraper" />
            </div>
            <motion.h2 className="h2-scroll" style={{ y }}>{id === 1 ? '#BACKEND' : id === 2 ? "#FRONTEND" : id === 3 ? "#DEPLOIEMENT" : "#ENVIRONNEMENT"}</motion.h2>
        </section>
    );
}

export default function Techno() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <>
            <div className="scroll">
                {[1, 2, 3, 4].map((image, index) => (
                    <Image id={image} key={index} />
                ))}
                <motion.div className="progress" style={{ scaleX }} />
            </div>
        </>

    );
}