import * as S from './styles';

interface HeaderBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const HeaderBar: React.FC<HeaderBarProps> = ({ searchTerm, setSearchTerm }) => {

  return (
    <S.HeaderBarContainer>
      <S.Title>Meus Contatos</S.Title>
      <S.SearchInput
        type="text"
        placeholder="Buscar..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </S.HeaderBarContainer>
  );
};

export default HeaderBar;
