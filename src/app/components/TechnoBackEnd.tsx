import Carousel from './ControledCarousel';
import * as React from "react";
import {ColorModeContext} from "../styles/Theme";
import {CarouselImageType} from '../types/carousel';

const data:CarouselImageType[] = [
    {
        src :'https://firebasestorage.googleapis.com/v0/b/devclem-a4b3d.appspot.com/o/nodejs-2.svg?alt=media',
        text: 'Node.js',
        key:"1"
    },
    {
        src :"https://firebasestorage.googleapis.com/v0/b/devclem-a4b3d.appspot.com/o/php-logo-only-letter.svg?alt=media",
        text: 'PHP',
        key:"2"
    },
    {
        src :"https://firebasestorage.googleapis.com/v0/b/devclem-a4b3d.appspot.com/o/laravel-2.svg?alt=media",
        text: 'Laravel',
        key:"3"
    },
    {
        src :"https://firebasestorage.googleapis.com/v0/b/devclem-a4b3d.appspot.com/o/codeigniter.svg?alt=media",
        text: 'Codeigniter',
        key:"4"
    },
    {
        src :"https://firebasestorage.googleapis.com/v0/b/devclem-a4b3d.appspot.com/o/mongodb-icon-1-1.svg?alt=media",
        text: 'MongoDB',
        key:"5"
    },
    {
        src :"https://firebasestorage.googleapis.com/v0/b/devclem-a4b3d.appspot.com/o/redis.svg?alt=media",
        text: 'Redis',
        key:"6"
    },
    {
        src :"https://firebasestorage.googleapis.com/v0/b/devclem-a4b3d.appspot.com/o/mysql-logo.svg?alt=media",
        text: 'MySQL',
        key:"7"
    },
];

const TechnoBackEnd = () => {
    const { mode } = React.useContext(ColorModeContext);

    return (
        <>
            <div style={{position : 'relative',display:'flex', flexDirection: "column", justifyContent:"center", alignItems:"center", height:'300px'}}>
                <h4 className={`${mode === 'dark' ? 'background-badge-dark' : 'background-badge-light'}`} style={{position:"absolute", top: 0, left : 0, borderRadius:"10px", padding: "10px"}}>Back-End</h4>
                <Carousel data={data} interval={3000}/>
            </div>

        </>
    )
}

export  default TechnoBackEnd;