import {styled} from '@mui/material';

export const Title = styled('h1')`
  font-size: 32px;
  margin-right: 20px;
  cursor: pointer;
`;

export const WrapperContainer = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1060px;
  flex-direction: column;
  margin: 0 auto;
  padding: 40px;
`;

export const Item = styled('div')`
  cursor: pointer;
  transition: 400ms;
  position: relative;
  width: 100%;
`;

export const ItemTitle = styled('div')`
  font-size: 20px;
  margin-bottom: 10px;
  font-weight: bolder;
  margin-right: 20px;
  margin-top: 40px;
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

export const ItemSliderWrapper = styled('div')`
  overflow: hidden;
`;

export const SliderItem = styled('div')`
  img {
    max-width: 100%;
    width: 100%;
    object-fit: cover;
    height: 100%;
    object-position: center;
  }
`;

export const ItemDescription = styled('div')`
  margin-top: 40px;
`;
