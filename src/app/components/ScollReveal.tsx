import React from 'react';
import { useScroll, animated, useSpring } from '@react-spring/web';

const ScrollingComponent: React.FC = () => {
    const containerRef = React.useRef<HTMLDivElement>(null!);
    const [textStyles, textApi] = useSpring(() => ({
        y: '100%',
    }))
    const { scrollYProgress } = useScroll({
        container: containerRef,
        onChange: ({ value: { scrollYProgress } }) => {
            if (scrollYProgress > 0.7) {
                textApi.start({ y: '0' })
            } else {
                textApi.start({ y: '100%' })
            }        },
        default: {
            immediate: true,
        },
    });

    const fadeInSpring = useSpring({
        opacity: scrollYProgress.to([0, 0.7], [0, 1]),
        config: { mass: 1, tension: 120, friction: 14 },
    });

    return (
        <div ref={containerRef} style={{
            width: '100%',
            height: '150vh',
        }}>
            <div style={{
                height: '100vh',
            }}/>
            <animated.p style={{
                ...textStyles,
                ...fadeInSpring,
                fontSize: '36px',
                textAlign: 'center',
                padding: '20px',
                backgroundColor: '#007bff',
                color: '#ffffff',
            }}>
                Disooo-vrfer
            </animated.p>
            {/* Autres contenus de la page */}
        </div>
    );
};

export default ScrollingComponent;
