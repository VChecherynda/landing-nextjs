import React from 'react';
import classes  from "./MeetupDetails.module.scss"

function MeetupDetails(props) {
    return (
        <section className={classes.detail}>
            <img src={props.image} alt={props.title} />
            <h2>{props.title}</h2>
            <address>{props.address}</address>
            <p>{props.description}</p>
        </section>
    );
}

export default MeetupDetails;