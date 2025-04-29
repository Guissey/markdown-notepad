import './Modal.css';
import React, { Dispatch, HTMLAttributes, MouseEventHandler, ReactNode, SetStateAction } from 'react';

export type ModalProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
  containerProps?: Omit<HTMLAttributes<HTMLDivElement>, 'children'>;
};

const Modal: React.FunctionComponent<ModalProps> = ({
  open,
  setOpen,
  children,
  containerProps,
}) => {
  // 
  const onClickVeil: MouseEventHandler<HTMLDivElement> = (event) => {
    event.stopPropagation();
    setOpen(false);
  };

  const onClickModal: MouseEventHandler<HTMLDivElement> = (event) => {
    event.stopPropagation(); // Prevents modal from closing when clicking inside
    if (containerProps?.onClick) containerProps.onClick(event);
  };

  if (!open) return null;

  return (
    <div
      className='modal-background-veil'
      onClick={onClickVeil}
    >
      <div
        {...containerProps}
        onClick={onClickModal}
        className={'modal-container ' + (containerProps?.className || '')}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
