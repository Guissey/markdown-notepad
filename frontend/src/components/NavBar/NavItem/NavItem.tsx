import './NavItem.css';
import { memo, useState } from 'react';
import MarkdownNote from '@/types/MarkdownNoteType';

export interface NavItemProps extends React.HTMLAttributes<HTMLLIElement> {
  note: MarkdownNote;
  onSelectNote: (note: MarkdownNote) => void;
  onUpdateLabel: (params: { id: number; label: string }) => void;
};

const NavItem: React.FunctionComponent<NavItemProps> = ({
  note,
  onSelectNote,
  onUpdateLabel,
  ...otherProps
}) => {
  const [mode, setMode] = useState<'default' | 'rename'>('default');

  const onKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.code !== 'Enter') return;
    const newLabel = (event.target as HTMLInputElement).value;
    onUpdateLabel({ id: note.id, label: newLabel });
    setMode('default');
  };

  if (mode === 'default') {
    return (
      <li
        key={note.id}
        {...otherProps}
        onClick={() => onSelectNote(note)}
        onDoubleClick={() => setMode('rename')}
      >
        {note.label}
      </li>
    );
  } else {
    return (
      <input
        className={'rename-note-input ' + otherProps.className}
        type='text'
        defaultValue={note.label}
        onKeyDown={onKeyDown}
        autoFocus
        onBlur={() => setMode('default')}
      />
    );
  }
};

export default memo(NavItem);
