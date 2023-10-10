import Carousel from './ControledCarousel';
import * as React from "react";
import {ColorModeContext} from "../styles/Theme";
import {CarouselImageType} from '../types/carousel';

const data:CarouselImageType[] = [
    {
        src :'https://firebasestorage.googleapis.com/v0/b/devclem-a4b3d.appspot.com/o/react-2.svg?alt=media',
        text: 'React.js',
        key:"1"
    },
    {
        src :"https://firebasestorage.googleapis.com/v0/b/devclem-a4b3d.appspot.com/o/typescript-2.svg?alt=media",
        text: 'Typescript',
        key:"2"
    },
    {
        src :"https://firebasestorage.googleapis.com/v0/b/devclem-a4b3d.appspot.com/o/nextjs-13.svg?alt=media",
        text: 'Next.js',
        key:"3"
    },
    {
        src :"https://firebasestorage.googleapis.com/v0/b/devclem-a4b3d.appspot.com/o/react-native-1.svg?alt=media",
        text: 'React Native',
        key:"4"

    },
    {
        src :"https://firebasestorage.googleapis.com/v0/b/devclem-a4b3d.appspot.com/o/vue-js-1.svg?alt=media",
        text: 'Vue.js',
        key:"5"
    },
];
const TechnoFrontEnd = () => {
    const { mode } = React.useContext(ColorModeContext);

    return (
        <>
            <div style={{position : 'relative',display:'flex', flexDirection: "column", justifyContent:"center", alignItems:"center", height:'300px'}}>
                <h4 className={`${mode === 'dark' ? 'background-badge-dark' : 'background-badge-light'}`} style={{position:"absolute", top: 0, left : 0, borderRadius:"10px", padding: "10px"}}>Front-End</h4>
                <Carousel data={data} interval={5000}/>
            </div>

        </>
    )
}

export default TechnoFrontEnd