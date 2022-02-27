import React from "react";
import { Navigation } from "../Navigation/Navigation";
import { LandingInfoBoxOne } from '../LandingInfoBoxOne/LandingInfoBoxOne';
import './LandingComponent.css';


export class LandingComponent extends React.Component{
    render = () => {
        return (
            <>
            <Navigation/>
            <LandingInfoBoxOne/>
            </>
        );
    }
}