import { styled} from "@mui/material";

export const ButtonsContainer = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;


export const ModalContainer = styled('div')`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 350px;
  background-color: white;
  border: 2px solid #000;
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

