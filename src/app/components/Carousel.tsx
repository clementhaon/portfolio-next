import React from 'react';
// import { useSpringCarousel } from 'react-spring-carousel';
import {CarouselImageType} from "../types/carousel";

interface CarouselProps {
    data: CarouselImageType[];
    interval: number;
}

export default function Carousel({ data, interval }: CarouselProps) {
    // const { carouselFragment } = useSpringCarousel({
    //     items: data.map((item) => ({
    //         id: item.key,
    //         renderItem: <img src={item.src} alt={item.text} style={{ width: '50%', height: '200px', objectFit: 'contain' }}  />,
    //     })),
    //     interval: interval, // Pass interval from props
    // });

    return <div></div>;
}
