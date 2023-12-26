import React from "react";
import './tasks.css'

export default function Tasks(props) {
    return (
        <div draggable={true} className="tasks-main-main" onDragStart={props.onDragStart}>
            <div className="tasks-main">
                <div className="tasks-sub">
                    <span className="task-name">{props.name}</span>
                    <p className="task-description">{ props.description}</p>
                </div>

            </div>
        </div>

    )
}