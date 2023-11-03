import { fadeIn } from '@/styles/animation.styles';
import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.colors.blackRussianModal};
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  z-index: 10;
  ${fadeIn({ time: '0.5s' })}

  .custom-modal {
    margin-top: 1.5rem !important;
    margin-bottom: 1.5rem !important;
    display: flex;
    margin: auto;
  }

  .modal-overlay-header {
    width: 85%;
    background-color: ${props => props.theme.colors.neutralGreyLight200};
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
    padding: 1.5rem 1.5rem 1.5rem;
    display: flex;
    justify-content: flex-end;
  }
`;

export const ModalContainer = styled.div`
  width: 85%;
  background: linear-gradient(
    to bottom,
    ${props => props.theme.colors.neutralGreyLight200},
    ${props => props.theme.colors.neutralGreyLight}
  );
  padding: 1rem;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
  max-height: 85vh;
  overflow-y: auto;
`;
