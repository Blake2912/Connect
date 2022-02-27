import React from "react";
import { Button, Card } from "react-bootstrap";
import { GiBee } from 'react-icons/gi'
import './HelpCompoent.css';

export class HelpComponent extends React.Component{
    render = () => {
        return (
            <>
            <Card className="helpComponentParent" bg="dark">
            <GiBee className="card_img"/>
            <h2>Under Development!</h2>
            <br/>
            <h5>Click here to go back to home!</h5>
            <br/>
            <Button onClick={event =>  window.location.href='/'}>Go to Home</Button>
            <br/>
            </Card>
            </>
        )
    };
}