import * as S from './styles';

interface ModalProps {
  show: boolean;
  onClose: () => void;
  onConfirm: () => void;
  message: string;
}

const Modal: React.FC<ModalProps> = ({ show, onClose, onConfirm, message}) => {
  if (!show){
    return null;
  }

  return (
    <S.ModalOverlay>
      <S.ModalContent>
        <p>{message}</p>
        <S.ButtonContainer>
          <S.Button onClick={onConfirm}>Confirmar</S.Button>
          <S.Button onClick={onClose} className="cancel">Cancelar</S.Button>
        </S.ButtonContainer>
      </S.ModalContent>
    </S.ModalOverlay>
  );
};

export default Modal;
