import React, {useRef, useState} from "react";
import {NavLink} from 'react-router-dom';
import './style.css'

export default function NavTab(data) {
    let baseLocation = data.match.path;
    let [coord, setCoord] = useState({x:0});
    let circleRef = useRef(null);
    const mouseMoveHandler = (e) => {
        console.log(e.clientX, e.clientY);
        let currentX = e.clientX;
        setCoord(() => {
            return {
                x: currentX - circleRef.current.offsetWidth / 2,
            }
        });
        circleRef.current.style.left = coord.x + 'px';
    };

    const showCircle = () =>{
        circleRef.current.style.opacity = 0.6;
    };
    const hideCircle = () =>{
        circleRef.current.style.opacity = 0;
    };

    return (
        <nav id={'navtab'} className={'container'}>
            <ul onMouseMove={mouseMoveHandler} onMouseEnter={showCircle} onMouseLeave={hideCircle}>
                <NavLink to={baseLocation +'/home'}>
                    <li>home</li>
                </NavLink>
                <NavLink to={baseLocation +'/about'}>
                    <li>about</li>
                </NavLink>
                <NavLink to={baseLocation +'/contacts'}>
                    <li>contacts</li>
                </NavLink>
                <div className="circle" ref={circleRef}></div>
            </ul>
        </nav>
    );
}