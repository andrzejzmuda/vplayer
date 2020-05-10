import React from 'react';
import ReactPlayer from 'react-player';
import { Card } from 'react-bootstrap'
import "./styles/Player.css"


function Video(props) {
    return(
        <div>
            <Card border="info" className='card'>
                <Card.Header>Szkoła Reacta Player</Card.Header>
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        {props.description}
                    </Card.Text>
                    <div className='player-wrapper'>
                        <ReactPlayer
                            className='react-player'
                            url={props.video_url}
                            width='100%'
                            height='100%'
                            controls
                        />
                    </div>
                </Card.Body>
        </Card>
        </div>
    )
}


export default Video;