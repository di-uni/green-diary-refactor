import React from 'react';
import './card.css';

export function Card(props: {id: number, date: string, title: string, writer: string, image: string, contents: string}) {    
    return (
        <div className="post" key={props.id}> 
            <div className="date">{props.date}</div>
            <div className="title">{props.title}</div>
            <div className="writer">{props.writer}</div>
            <br></br>
            {(props.image === "" || props.image === null) ? 
            <br></br>
            : <img src={props.image} width="100%" alt="shared-diary-post-card" />}
            <div className="contents">{props.contents}</div>
        </div>
    )
}