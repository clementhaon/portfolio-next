import React, {useEffect, useState} from 'react';
import { Box, Button } from '@mui/material';
import { useSpring, animated, config } from '@react-spring/web';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {CarouselImageType} from "../types/carousel";

interface CarouselProps {
    data: CarouselImageType[];
    interval : number;
}

const Carousel: React.FC<CarouselProps> = ({data, interval}) => {
    const [index, setIndex] = useState<number>(0);
    const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
    const [intervalTime, setIntervalTime] = useState<number>(interval);
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const [currentIndex, setCurrentIndex] = useState<number>(0);



    const startCarousel = () => {
        const id: NodeJS.Timeout = setInterval(() => {
            handleNext();
        }, intervalTime);

        setIntervalId(id);

        return () => {
            clearInterval(id);
        };
    };

    const handleNext = () => {
        if (intervalId !== null) {
            clearInterval(intervalId);
        }
        setIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
        setCurrentIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
    };

    const handlePrevious = () => {
        if (intervalId !== null) {
            clearInterval(intervalId);
        }
        setIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));

    };

    const props = useSpring({
        from: { transform: 'scale(0.8)' },
        to: { transform: 'scale(1)' },
        reset: true,
        config: config.molasses,
    });

    const indicators = data.map((image, index) => (
        <div
            key={index}
            className={`indicator ${currentIndex === index ? 'active' : ''}`}
        />
    ));
    useEffect(() => {
        if (imagesLoaded) {
            const intervalId = startCarousel();
        }
    }, [imagesLoaded]);
    useEffect(() => {
        const preloadImages = async () => {
            const imagePromises = data.map((image) => {
                return new Promise((resolve, reject) => {
                    const img = new Image();
                    img.src = image.src;
                    img.onload = resolve;
                    img.onerror = reject;
                });
            });

            const res = await Promise.all(imagePromises);
            setImagesLoaded(true);
        };

        preloadImages().then(r => console.log(r));

    }, []);


    return (
        <Box position="relative" style={{ width: '100%', height: '300px', maxHeight: 300, position: 'relative' }}>

            <animated.img
                src={data[index].src}
                alt={`image-${index}`}
                className="carousel-image"
                style={{ ...props, width: '50%', height: '200px', objectFit: 'contain' }}
            />
            <animated.p style={{ ...props, marginTop: 50}}>{data[index].text}</animated.p>
            <div className="indicators">{indicators}</div>
            <Box
                onClick={handlePrevious}
                style={{
                    cursor: 'pointer',
                    position:"absolute",
                    top:"50%",
                    left:"0",
                    transform:"translateY(-50%)",
                }}
            >
                <ChevronLeftIcon fontSize="large" className="chevron-left-icon"/>
            </Box>
            <Box

                onClick={handleNext}
                style={{
                    cursor: 'pointer',
                    position:"absolute",
                    top:"50%",
                    right:"0",
                    transform:"translateY(-50%)"
                }}
            >
                <ChevronRightIcon fontSize="large" className="chevron-right-icon"/>
            </Box>
        </Box>
    );
};

export default Carousel;