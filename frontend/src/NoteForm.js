import { useState } from 'react';

const NoteForm = props => {
  const { addNote } = props;
  // state hooks para el form
  const [text, setText] = useState('');

  // handler para el submit
  const handleSubmit = e => {
    e.preventDefault();
    addNote(text);
    // blanquear formulario
    setText('');
  };

  // render JSX
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="title">Texto</label>
        <input
          id="text"
          className="form-control"
          type='text'
          value={text}
          onChange={e => setText(e.target.value)}
        />
      </div>

      <input
        className="btn btn-primary"
        type="submit"
        value="Guardar"
      />
    </form>
  );
};

export default NoteForm;
