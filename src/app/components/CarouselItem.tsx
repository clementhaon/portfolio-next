import React from 'react';
import {CarouselImageType} from "../types/carousel";
interface CarouselItemProps {
    src: string;
    text : string;
}
const CarouselItem = ({ src, text }: {src:string, text: string}) => {
    return (
        <div style={{ width: '100%', height: '100%' }}>
            <img src={src} alt={text} style={{ width: '50%', height: '200px', objectFit: 'contain'}} />
            <p>{text}</p>
        </div>
    );
};

export default CarouselItem;
