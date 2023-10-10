import Carousel from './ControledCarousel';
import * as React from "react";
import {ColorModeContext} from "../styles/Theme";
import {CarouselImageType} from '../types/carousel';

const data:CarouselImageType[] = [
    {
        src :'https://firebasestorage.googleapis.com/v0/b/devclem-a4b3d.appspot.com/o/docker-4.svg?alt=media',
        text: 'Docker',
        key:"1"
    },
    {
        src :"https://firebasestorage.googleapis.com/v0/b/devclem-a4b3d.appspot.com/o/nginx-1.svg?alt=media",
        text: 'Nginx',
        key:"2"
    },
    {
        src :"https://firebasestorage.googleapis.com/v0/b/devclem-a4b3d.appspot.com/o/buddy-icon-y64iklzwfh0rsplz-c.png?alt=media",
        text: 'Buddy Works',
        key:"3"
    },
    {
        src :"https://firebasestorage.googleapis.com/v0/b/devclem-a4b3d.appspot.com/o/grafana.svg?alt=media",
        text: 'Grafana',
        key:"4"
    },
];

const TechnoIntegration = () => {
    const { mode } = React.useContext(ColorModeContext);

    return (
        <>
            <div style={{display:'flex', flexDirection: "column", justifyContent:"center", alignItems:"center", height:'300px'}}>
                <h4 className={`${mode === 'dark' ? 'background-badge-dark' : 'background-badge-light'}`} style={{position:"absolute", top: 0, left : 0, borderRadius:"10px", padding: "10px"}}>Intégration</h4>
                <Carousel data={data} interval={10000}/>
            </div>

        </>
    )
}
// 'use client'
// import Carousel from './Carousel';
// import CarouselItem from './CarouselItem';
// import * as React from "react";
// import {ColorModeContext} from "../styles/Theme";
// import {CarouselImageType} from '../types/carousel';
// import {useSpringCarousel} from "react-spring-carousel";
//
// const data:CarouselImageType[] = [
//     {
//         src :'https://firebasestorage.googleapis.com/v0/b/devclem-a4b3d.appspot.com/o/docker-4.svg?alt=media',
//         text: 'Docker',
//         key:"1"
//     },
//     {
//         src :"https://firebasestorage.googleapis.com/v0/b/devclem-a4b3d.appspot.com/o/nginx-1.svg?alt=media",
//         text: 'Nginx',
//         key:"2"
//     },
//     {
//         src :"https://firebasestorage.googleapis.com/v0/b/devclem-a4b3d.appspot.com/o/buddy-icon-y64iklzwfh0rsplz-c.png?alt=media",
//         text: 'Buddy Works',
//         key:"3"
//     },
//     {
//         src :"https://firebasestorage.googleapis.com/v0/b/devclem-a4b3d.appspot.com/o/grafana.svg?alt=media",
//         text: 'Grafana',
//         key:"4"
//     },
// ];
//
// const TechnoIntegration = () => {
//     const { carouselFragment, slideToPrevItem, slideToNextItem } = useSpringCarousel({
//         items: data.map((item) => ({
//             id: item.key,
//             renderItem: <CarouselItem src={item.src} text={item.text} style={{}} />,
//         })),
//     });
//
//     return (
//         <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '300px', overflow:'hidden' }}>
//             <button onClick={slideToPrevItem}>Prev item</button>
//             {carouselFragment}
//             <button onClick={slideToNextItem}>Next item</button>
//         </div>
//     );
// };
//
//
// export default TechnoIntegration;

export default TechnoIntegration;