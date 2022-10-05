import { useState } from 'react';

const Note = props => {

   const { id, text, done } = props;

  // render JSX
  return (
    <div className="card">
      <div className="card-body">
        <h4>{text}</h4>
        <p>{id}</p>
        <p>{done}</p>
      </div>
    </div>
  );
};

export default Note;
