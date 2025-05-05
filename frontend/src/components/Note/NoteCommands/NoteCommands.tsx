import './NoteCommands.css';
import { useState } from 'react';

import { IconPencil, IconPencilCheck, IconPencilOff, IconTrash } from '@tabler/icons-react';
import Modal from '@/components/Modal';

export type NoteCommandsProps = {
  mode: 'view' | 'edit';
  startEditing: () => void;
  stopEditing: () => void;
  save: () => void;
  remove: () => void;
};

const NoteCommands: React.FunctionComponent<NoteCommandsProps> = ({
  mode,
  startEditing,
  stopEditing,
  save,
  remove,
}) => {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const onDeleteValidation = () => {
    remove();
    setOpenDeleteModal(false);
  };

  return (
    <div className='note-commands'>
      {(mode == 'view') ? (
        <>
          <button onClick={startEditing} title='Editer'>
            <IconPencil color='var(--primary)' />
          </button>
          <button onClick={() => setOpenDeleteModal(true)} title='Supprimer'>
            <IconTrash color='red' />
          </button>
        </>
      ) : (
        <>
          <button onClick={stopEditing} title='Annuler'>
            <IconPencilOff color='var(--primary)' />
          </button>
          <button onClick={save} title='Enregistrer'>
            <IconPencilCheck color='green' />
          </button>
        </>
      )}

      <Modal
        open={openDeleteModal}
        setOpen={setOpenDeleteModal}
      >
        Voulez-vous vraiment supprimer la note ?
        <div className='delete-modal-actions'>
          <button onClick={onDeleteValidation} className='yes'>
            Oui
          </button>
          <button onClick={() => setOpenDeleteModal(false)} className='no'>
            Non
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default NoteCommands;
