import './NavBar.css';
import { useCallback } from 'react';
import API from '@/api';
import MarkdownNote from '../../types/MarkdownNoteType';

import NavItem, { NavItemProps } from './NavItem';
import { IconCirclePlus } from '@tabler/icons-react';

export type NavBarProps = {
  notes: MarkdownNote[];
  selectedNote?: MarkdownNote;
  selectNote: (note: MarkdownNote) => void;
  addNote: (newNote: MarkdownNote) => void;
  updateNote: (updatedNote: MarkdownNote) => void;
};

const NavBar: React.FunctionComponent<NavBarProps> = ({
  notes,
  selectedNote,
  selectNote,
  addNote,
  updateNote,
}) => {
  const createNote = useCallback(async (): Promise<void> => {
    try {
      const createdNote = await API.createEmptyNote();
      addNote(createdNote);
    } catch (error) {
      console.error(error);
    }
  }, [addNote]);

  const updateLabel = useCallback(async (params: Parameters<NavItemProps['onUpdateLabel']>[0]): Promise<void> => {
    try {
      const updatedNote = await API.updateNote(params);
      updateNote(updatedNote);
    } catch (error) {
      console.error(error);
    }
  }, [updateNote]);

  return (
    <nav id='nav-bar'>
      <ul>
        {notes.map((note) => (
          <NavItem
            key={note.id}
            note={note}
            onSelectNote={selectNote}
            onUpdateLabel={updateLabel}
            className={'nav-item' + (note === selectedNote ? ' selected' : '')}
          />
        ))}
      </ul>

      <button
        className='create-note-button'
        onClick={createNote}
      >
        <IconCirclePlus size='2rem' />
        Créer
      </button>
    </nav>
  );
};

export default NavBar;
