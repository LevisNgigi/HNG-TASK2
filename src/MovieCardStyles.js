import styled from 'styled-components';

export const CardContainer = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  text-align: center;
  transition: transform 0.2s;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

export const MoviePoster = styled.img`
  max-width: 100%;
  height: auto;
`;

export const MovieTitle = styled.h2`
  font-size: 1.2em;
  margin: 10px 0;
`;

export const ReleaseDate = styled.p`
  font-size: 1em;
  margin: 5px 0;
  color: #777;
`;
