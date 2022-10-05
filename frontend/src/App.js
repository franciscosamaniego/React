// imports
import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Notes from './Notes';
import NoteForm from './NoteForm';

const App = () => {

  // useState hook (las notas de la lista)
  const [notes, setNotes] = useState([
    {
      _id: 4,
      text: 'asdsada',
      done: true
    },
    {
      _id: 123,
      text: 'otra nota',
      done: false
    }
  ]);

  const addNote = text => {
    const newNote = {
      _id: Math.trunc(Math.random() * 10000),
      text: text,
      done: false
    };
    const newArray = [...notes, newNote];
    setNotes(newArray);
  };

  // render JSX
  return (
    <div>
      <Header title='Notas'/>
      <div className="container mt-3">
        <NoteForm addNote={addNote} />
        <Notes notes={notes} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
