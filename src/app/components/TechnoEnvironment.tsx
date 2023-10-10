import Carousel from './ControledCarousel';
import * as React from "react";
import {ColorModeContext} from "../styles/Theme";
import {CarouselImageType} from '../types/carousel';

const data:CarouselImageType[] = [
    {
        src :'https://firebasestorage.googleapis.com/v0/b/devclem-a4b3d.appspot.com/o/apple.svg?alt=media',
        text: 'Apple',
        key:"1"
    },
    {
        src :"https://firebasestorage.googleapis.com/v0/b/devclem-a4b3d.appspot.com/o/firebase-1.svg?alt=media",
        text: 'Firebase',
        key:"2"
    },
    {
        src :"https://firebasestorage.googleapis.com/v0/b/devclem-a4b3d.appspot.com/o/ubuntu-4.svg?alt=media",
        text: 'Ubuntu',
        key:"3"
    },
    {
        src :"https://firebasestorage.googleapis.com/v0/b/devclem-a4b3d.appspot.com/o/jetbrains-1.svg?alt=media",
        text: 'JetBrains',
        key:"4"
    },
    {
        src :"https://firebasestorage.googleapis.com/v0/b/devclem-a4b3d.appspot.com/o/visual-studio-code-1.svg?alt=media",
        text: 'Visual Studio Code',
        key:"5"
    },
];
const TechnoEnvironment = () => {
    const { mode } = React.useContext(ColorModeContext);

    return (
        <>
            <div style={{position : 'relative',display:'flex', flexDirection: "column", justifyContent:"center", alignItems:"center", height:'300px'}}>
                <h4 className={`${mode === 'dark' ? 'background-badge-dark' : 'background-badge-light'}`} style={{position:"absolute", top: 0, left : 0, borderRadius:"10px", padding: "10px"}}>Environnement</h4>
                <Carousel data={data} interval={8000}/>
            </div>

        </>
    )
}

export default TechnoEnvironment;