import { useEffect, useRef, useState } from 'react';

import { SubjectManager } from '@/models/subject-manager.models';
import { Subscription } from 'rxjs';

import { CustomButton } from '../custom-button';

import { ModalContainer, ModalOverlay } from './styles';

export const dialogOpenSubject$ = new SubjectManager();

export const dialogCloseSubject$ = new SubjectManager();

export const CustomModal = ({ children }) => {
  const [open, setOpen] = useState(false);
  const modalContainerRef = useRef(null);

  let openSubject$ = new Subscription();
  let closeSubject$ = new Subscription();

  useEffect(() => {
    openSubject$ = dialogOpenSubject$.getSubject().subscribe(() => handleClickModalBtn('open'));

    closeSubject$ = dialogCloseSubject$.getSubject().subscribe(() => handleClickModalBtn('close'));

    return () => {
      openSubject$.unsubscribe();
      closeSubject$.unsubscribe();
    };
  }, []);

  const handleClickModalBtn = status => setOpen(!!(status === 'open') || false);

  const handleExit = () => dialogCloseSubject$.setSubject(false);

  if (!open) return null;

  return (
    <ModalOverlay className='modal-overlay'>
      <div className='modal-overlay-header'>
        <CustomButton
          onClick={() => handleExit()}
          text='❌'
          withShadow='none'
          buttonClass='modal-overlay-container-cross'
        />
      </div>

      <ModalContainer className='modal-overlay-container' ref={modalContainerRef}>
        {children}
        <CustomButton
          onClick={() => handleExit()}
          text='Cancelar'
          btnstylized='danger'
          buttonClass='custom-modal'
        />
      </ModalContainer>
    </ModalOverlay>
  );
};
