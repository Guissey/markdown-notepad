import './Body.css';
import { useCallback, useEffect, useState } from 'react';
import API from '@/api';
import MarkdownNote from '@/types/MarkdownNoteType';

import NavBar from '../NavBar';
import Note from '../Note';

const Body: React.FunctionComponent = () => {
  const [notes, setNotes] = useState<MarkdownNote[]>([]);
  const [selectedNote, setSelectedNote] = useState<MarkdownNote>();

  // Fetch notes on mount
  useEffect(() => {
    API.fetchNotes().then((notes) => {
      setNotes(notes);
      setSelectedNote(notes[0]);
    });
  }, []);

  const addNote = useCallback((newNote: MarkdownNote): void => {
    setNotes((currentNotes) => [...currentNotes, newNote]);
  }, []);

  const deleteNote = useCallback((id: number): void => {
    // Remove the note from list
    setNotes((currentNotes) => currentNotes.filter((note) => note.id !== id));
    // Unselect the note if necessary
    if (selectedNote?.id === id) setSelectedNote(undefined);
  }, [selectedNote?.id]);

  const updateNote = useCallback((updatedNote: MarkdownNote): void => {
    // Replace the updated note in the list
    setNotes((currentNotes) => {
      return currentNotes.map((note) => {
        return (note.id === updatedNote.id) ? updatedNote : note;
      });
    });
    // Update selected note if necessary
    if (selectedNote?.id === updatedNote.id) setSelectedNote(updatedNote);
  }, [selectedNote]);

  return (
    <div id='app-body'>
      <NavBar
        notes={notes}
        selectedNote={selectedNote}
        selectNote={setSelectedNote}
        addNote={addNote}
        updateNote={updateNote}
      />

      <Note
        markdownNote={selectedNote}
        updateNote={updateNote}
        deleteNote={deleteNote}
      />
    </div>
  );
};

export default Body;
