import React from "react";
import "../styles/Note.css"

function Assignment({ assignment, onDelete }) {
    const formattedDate = new Date(assignment.created_at).toLocaleDateString("en-US")
    const formattedDueDate = new Date(assignment.due_date).toLocaleDateString("en-US")
    return (
        <div className="note-container">
            <p className="note-title"> {assignment.title}</p>
            <p className="note-content"> {assignment.description}</p>
            
            <p className="note-date"><span className="font-bold">Due Date: </span> {formattedDueDate}</p>
            <p className="note-class"><span className="font-bold">Class: </span> {assignment.class_name}</p>
            <button className="delete-button" onClick={() => onDelete(assignment.id)}>
                Complete
            </button>
        </div>
    );
}

export default Assignment