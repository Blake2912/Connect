import React from 'react';
import Card from 'react-bootstrap/Card';
import './FooterComponent.css';

export class FooterCompoent extends React.Component {
    render = () => {
        return(
            <>
            <Card variant='dark' className="footerCard">
                <Card.Body>This is the footer com</Card.Body>
            </Card>
            </>
        );
    }
}