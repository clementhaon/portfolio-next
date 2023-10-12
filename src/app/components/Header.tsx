'use client'
import React, {useEffect, useRef, useState, RefObject} from 'react';
import {ColorModeContext} from '../styles/Theme';
import {Avatar, Box} from "@mui/material";
import { BsToggles } from 'react-icons/bs';
import Settings from './Settings';
import gsap from 'gsap';
import {AiFillCloseCircle} from "react-icons/ai";


export default function Header() {

    const [openSettings, setOpenSettings] = useState<boolean>(false);
    const [position, setPosition] = useState<boolean>(false);
    const settingsRef: RefObject<HTMLDivElement> = useRef(null);
    const buttonsRef: RefObject<HTMLDivElement> = useRef(null);
    const { mode } = React.useContext(ColorModeContext);

    useEffect(() => {

        //Centered position with screen height
        const clientHeight = window.innerHeight;
        const centerY = clientHeight / 2;
        const avatarHeight = 250;
        const textContainerHeight = 100;
        const totalHeight = avatarHeight + textContainerHeight;
        const ensembleTop = centerY - totalHeight / 2.5;
        const textContainerTop = ensembleTop + (avatarHeight / 1.5);
        const avatar = document.getElementById('avatar-position');
        if (avatar) {
            avatar.style.maxHeight = `${avatarHeight}px`;
            avatar.style.top = `${ensembleTop}px`;
        }

        //Set text gsap
        const text = "Clément HAON\nDéveloppeur\nfull stack";
        const container = document.getElementById('text-container');
        setPosition(true);
        if (container) {
            container.innerHTML = '';
            container.style.top = `${textContainerTop}px`;
            text.split('').forEach((letter, index) => {
                const span = document.createElement('span');
                if (letter === '\n') {
                    span.style.display = 'block'; // Forcer le retour à la ligne avec un élément de bloc
                }
                span.textContent = letter;
                span.style.opacity = "0";
                span.style.fontWeight = "600";
                span.style.fontSize = '40px';
                span.style.textTransform = "uppercase";
                container.appendChild(span);

                gsap.to(span, {
                    opacity: 1,
                    duration: 1,
                    delay: index * 0.1,
                    onComplete: () => {
                        if (index === text.length - 1) {
                            console.log('Animation complète');
                        }
                    }
                });
            });
        }


    }, []);
    useEffect(() => {
        const handleClickOutside = (event: any) => {
             if ((!settingsRef.current || !settingsRef.current.contains(event.target as Node)) && (!buttonsRef.current || !buttonsRef.current.contains(event.target as Node))) {
                setOpenSettings(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [openSettings]);

    return (
        <Box className={`${mode === 'dark' ? 'dark':'light'}-background`}>
            <div style={{position:"relative", width:'100%', height:'100vh'}}>
                {position ?
                    (
                        <>
                            <Avatar
                                sx={{ width:"100%", height:'auto', aspectRatio:"1/1", maxWidth:250, position:"absolute", left:'50%', transform:'translate(-50%, -50%)'}}
                                className={`${mode === "dark" ?  "shadow-light" :  "shadow-dark"}`}
                                id="avatar-position"
                                src={`${mode === "dark" ?  "/avatar-min.png" :  "/avatar_light-min.png"}`}
                            />
                            <div id="text-container" style={{ width:"100%", height:'auto', maxWidth:600, position:"absolute",left: '50%', transform: 'translateX(-50%)', textAlign:'center'}}/>
                        </>
                    ) :
                    (
                        <>
                            <Avatar
                                sx={{ display:'none'}}
                                className={`${mode === "dark" ?  "shadow-light" :  "shadow-dark"}`}
                                id="avatar-position"
                                src={`${mode === "dark" ?  "/avatar-min.png" :  "/avatar_light-min.png"}`}
                            />
                            <div id="text-container" style={{ display:'none'}}/>
                        </>
                    )
                }
            </div>
            <Box className="flex-end-row">
                {
                    !openSettings ? (
                        <Box
                            className="icon-container svg-settings"
                            ref={buttonsRef}
                            style={{backgroundColor: `${mode === 'dark' ? '#2d2d2d':'#fff'}`, zIndex:1000}}
                            onClick={()=>setOpenSettings(true)}
                        >
                            <BsToggles
                                size={30}
                            />
                        </Box>
                    ) : (
                        <Box
                            className="icon-container svg-settings"
                            style={{backgroundColor: `${mode === 'dark' ? '#2d2d2d':'#fff'}`, zIndex:1000}}
                            ref={buttonsRef}
                            onClick={()=>setOpenSettings(false)}
                        >
                            <AiFillCloseCircle
                                size={30}
                            />
                        </Box>
                    )
                }

                <div>
                    <div ref={settingsRef} className={`settings-container ${openSettings ? 'open' : 'closed'}`} style={{zIndex:1000}}>
                        {openSettings && <Settings />}
                    </div>
                </div>
            </Box>
        </Box>

    );
}

