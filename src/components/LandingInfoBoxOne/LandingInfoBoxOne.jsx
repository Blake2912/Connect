import React from "react";
import { CardGroup } from "react-bootstrap";
import { Card } from 'react-bootstrap';
import './LandingInfoBoxOne.css';
import { GiBee } from "react-icons/gi";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

export class LandingInfoBoxOne extends React.Component{
    render = () => {
        return (
           <>
           <div className="parentCardGroup">
                <Card className="childCardOne" onClick={event =>  window.location.href='/'}>
                    <GiBee className="card_img"/>
                    <h2 className="prodName">Connect</h2>
                </Card>
               <Card className="childCardTwo" bg="dark">
               <h3 className="prodName1">Welcome to Connect!</h3>
               <br/>
               <Card.Text>
                    New to connect, then register yourself to connect!
                </Card.Text>
                <Button variant="success" onClick={event =>  window.location.href='/register'}>Register here</Button>
                <br/>
               <Card.Text>
                    Already registered, login here!
                </Card.Text>
                <Button variant="warning" onClick={event =>  window.location.href='/login'}>Login here</Button>
               </Card>
           </div>
           </>
        );  
    }
}