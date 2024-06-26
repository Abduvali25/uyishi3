import { useState } from "react";

function Task(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(props.title);


  return (
    <div>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <button
            onClick={() => {
              props.onEdit(props.id, title);
              setIsEditing(false);
            }}
          >
            save
          </button>
        </div>
      ) : (
        <li>
          <span>{props.title}</span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={props.onDelete}>Delete</button>
          <button onClick={props.onDone}>Done</button>
         
        </li>
        
      )}
      <div className="divBox"></div>
    </div>
  );
}

export default Task;
