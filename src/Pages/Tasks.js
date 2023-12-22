import React from "react";
import './tasks.css'

export default function Tasks() {
    return (
        <div draggable={true} className="tasks-main-main">
            <div className="tasks-main">
                <div className="tasks-sub">
                    <span>This is a task</span>
                    <p>This is the description</p>
                </div>

            </div>
        </div>

    )
}