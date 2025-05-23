import './Note.css';
import { useEffect, useRef, useState } from 'react';
import API from '@/api';
import MarkdownNote from '@/types/MarkdownNoteType';

import Markdown from '../Markdown';
import NoteCommands from './NoteCommands';

export type NoteProps = {
  markdownNote?: MarkdownNote;
  updateNote: (updatedNote: MarkdownNote) => void;
  deleteNote: (id: number) => void;
};

const Note: React.FunctionComponent<NoteProps> = ({
  markdownNote,
  updateNote,
  deleteNote,
}) => {
  const markdownViewRef = useRef<HTMLDivElement>(null);
  const [mode, setMode] = useState<'view' | 'edit'>('view');
  const [markdownDraft, setMarkdownDraft] = useState('');

  const startEditing = () => {
    if (!markdownNote) return;
    setMode('edit');
    setMarkdownDraft(markdownNote.markdown || '');
  };

  const onChangeDraft: React.ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    setMarkdownDraft(event.target.value);
  };

  /** Scroll down the markdown view when selecting or writing at the end of the markdown textarea in edit mode. */
  const onSelectDraft: React.ReactEventHandler<HTMLTextAreaElement> = (event) => {
    const { selectionStart, textLength } = event.target as HTMLTextAreaElement;
    if (selectionStart !== textLength) return;
    markdownViewRef.current?.scrollTo(0, markdownViewRef.current?.scrollHeight);
  };

  const save = async (): Promise<void> => {
    if (!markdownNote || (markdownDraft == markdownNote.markdown)) {
      setMode('view');
      return;
    }
    try {
      const updatedNote = await API.updateNote({ id: markdownNote.id, markdown: markdownDraft });
      updateNote(updatedNote);
    } catch (error) {
      console.error(error);
    } finally {
      setMode('view');
    }
  };

  const remove = async (): Promise<void> => {
    if (!markdownNote) return;
    try {
      await API.deleteNote(markdownNote.id);
      deleteNote(markdownNote.id);
    } catch (error) {
      console.error(error);
    }
  };

  // Switch back to view mode when selecting another note
  useEffect(() => {
    setMode('view');
  }, [markdownNote]);

  return (
    <div className='note-container'>
      {!!markdownNote && (
        <NoteCommands
          mode={mode}
          startEditing={startEditing}
          stopEditing={() => setMode('view')}
          save={save}
          remove={remove}
        />
      )}

      {(mode === 'view') ? (
        <Markdown
          className='markdown-view'
          markdown={markdownNote ? (markdownNote.markdown || '**Aucun contenu**') : '**Sélectionner une note**'}
        />
      ) : (
        <>
          <textarea
            className='markdown-input'
            value={markdownDraft}
            onChange={onChangeDraft}
            onSelect={onSelectDraft}
          />

          <Markdown
            ref={markdownViewRef}
            className='markdown-view'
            markdown={markdownDraft || '**Aucun contenu**'}
          />
        </>
      )}
    </div>
  );
};

export default Note;
