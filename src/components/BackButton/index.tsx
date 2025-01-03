import { useNavigate } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { ButtonBack } from "./styles";

const BackButton = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate ('/');
  };

  return (
    <ButtonBack onClick={handleBack}>
      <BsArrowLeft />
    </ButtonBack>
  )
};

export default BackButton;
