import React, {useEffect, useState} from 'react';
import { useSpringCarousel } from 'react-spring-carousel';
import { CarouselImageType } from "../types/carousel";

interface CarouselProps {
    data: CarouselImageType[];
    interval: number;
}
interface CustomEvent {
    eventName: "onDrag" | "onSlideStartChange" | "onSlideChange" | "onFullscreenChange";
}

export default function Carousel({ data, interval }: CarouselProps) {
    const [activeIndex, setActiveIndex] = useState(0);

    const { carouselFragment } = useSpringCarousel({
        items: data.map((item) => ({
            id: item.key,
            renderItem: (
                <div style={{padding:0, margin: 0, width: "100%", display:"flex", flexDirection:'column', justifyContent:'space-around', alignItems:'center'}}>
                    <img src={item.src} alt={item.text} style={{ width: "auto", height: '200px', objectFit: 'contain' }} />
                    <div>
                        <p style={{padding:0, margin: 0}}>{item.text}</p>
                    </div>
                </div>
            ),
        })),
        interval: interval,

    });
    // useListenToCustomEvent((event) => {
    //     // Triggered during drag gestures
    //     if (event.eventName === "onDrag") {
    //         console.log("onDrag")
    //     }
    //     // Triggered when the slide is about to slide
    //     else if (event.eventName === "onSlideStartChange") {
    //         console.log("onSlideStartChange")
    //
    //     }
    //     // Triggered when the slide animation is completed
    //     else if (event.eventName === "onSlideChange") {
    //         console.log("onSlideChange")
    //         console.log(event.item)
    //     }
    //     // Triggered on fullscreen change
    //     else if (event.eventName === "onFullscreenChange") {
    //         console.log("onFullscreenChange")
    //     }
    // });
    return (
        <div style={{ position: 'relative', width: '100%', height: '300px', maxHeight: 300, overflow: 'hidden' }}>
            {carouselFragment}
        </div>
    );
}
