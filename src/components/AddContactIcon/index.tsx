
import { useNavigate } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';
import * as S from './styles';

const AddContactIcon = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/add-contact');
  };

  return (
    <S.Icon onClick={handleClick}>
      <FaPlus />
    </S.Icon>
  );
};

export default AddContactIcon;
