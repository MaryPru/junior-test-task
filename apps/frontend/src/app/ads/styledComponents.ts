import {styled} from '@mui/material';

export const Title = styled('h1')`
  font-size: 32px;
  margin-right: 20px;
  cursor: pointer;
  line-height: 100%;
`;

export const WrapperContainer = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1060px;
  flex-direction: column;
  margin: 20px auto 0;
`;


export const WrapperItems = styled('div')`
  display: grid;
  grid-template-columns: repeat(4, 250px);
  gap: 20px;
  width: 100%;
  justify-content: center;
  margin-top: 20px;
  @media screen and (max-width: 1140px) {
    grid-template-columns: repeat(3, 250px);
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 250px);
  }
`;

export const Item = styled('a')`
  border: 1px solid gray;
  border-radius: 15px;
  padding: 15px;
  cursor: pointer;
  transition: 400ms;
  position: relative;

  &:hover {
    border: 1px solid #085aad;
  }
`;

export const ItemTitle = styled('a')`
  font-size: 18px;
  font-weight: bolder;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ItemInfo = styled('div')`
  font-weight: bolder;
`;
export const ItemRow = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;

export const ItemImage = styled('div')`
  max-width: 250px;
  max-height: 150px;
  margin-bottom: 40px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  img {
    max-width: 100%;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
