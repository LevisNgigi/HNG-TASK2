import styled from 'styled-components';

export const SearchContainer = styled.div`
  margin-bottom: 20px;
  text-align: center;
`;

export const SearchInput = styled.input`
  padding: 5px;
  margin-right: 30px;
  border-radius: 50px;
  width: 300px;
  border: 1px solid #ccc;
`;

export const SearchButton = styled.button`
  padding: 5px 20px;
  border-radius: 50%;
  border: 1px solid #ccc;
`;

export const MovieGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
`;

export const MovieCard = styled.div`
  text-align: center;
  transition: transform 0.2s;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

export const MoviePoster = styled.img`
  max-width: 100%;
`;
