import React from "react";
import './InfoBox.css';
import Card from "react-bootstrap/Card";
import { GiBee } from 'react-icons/gi'

export class InfoBox extends React.Component{
    render = () =>{
        return (
            <>
            <Card className="infoComponentParent" bg='dark'>
                <GiBee className="card_img"/>
                <h2 className="websiteName">Connect</h2>
                <br/>
                <h3>What is this?</h3>
                <div className="card-body">
                <p>This is connect and we connect people, this is a social media applicaton</p>
                <p>This application enables users to connect with people, the user can do the following operations...</p>
                <ul className="featureList">
                    <li className="featureList">Make Friends!</li>
                    <li className="featureList">Chat with them!</li>
                    <li className="featureList">Share your experiences!</li>
                    <li className="featureList">See your friends experiences!</li>
                </ul>
                </div>
                <h3>Who are we?</h3>
                <div className="card-body">
                <p>We are a group of students from CMR Institute Techonolgy,Bengaluru</p>
                <p>We have created this service :)</p>
                </div>
            </Card>
            </>
        );
    }
}