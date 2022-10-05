import Note from './Note';

const Notes = props => {
  const { notes } = props;
  // render JSX
  return (
    <div className="card-columns">
      {notes.map(note => (
        <Note
          id={note._id}
          text={note.text}
          done={note.done}
        />
      ))}
    </div>
  );
};
export default Notes;
