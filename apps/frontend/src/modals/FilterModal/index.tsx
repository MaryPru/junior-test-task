import {Button, Modal, TextField} from "@mui/material";
import React from "react";
import {templateFilters} from "../../app/ads/useAdsListingHook";
import {AdsListingParams} from "../../app/ads/types";
import {ClickAwayListener} from '@mui/base';
import {ModalContainer, ButtonsContainer} from './styledComponents.ts';

interface Props {
  isOpen: boolean;
  reset: () => void;
  params: AdsListingParams;
  changeParams: (type: keyof AdsListingParams, value: string) => void;
  onSearch: () => void;
  setIsOpen: (isOpen: boolean) => void;
}

const FilterModal = (props: Props) => {
  const {params, changeParams, reset, onSearch, isOpen, setIsOpen} = props;

  const handleCloseModal = () => {
    setIsOpen(false)
  }

  return (
    <Modal open={isOpen}>
      <ClickAwayListener onClickAway={handleCloseModal}>
        <ModalContainer>
          {Object.keys(templateFilters).map((k) => (
            <TextField
              fullWidth={true}
              label={k}
              key={k}
              type="text"
              value={params[k] || ''}
              onChange={(event) => changeParams(k, event?.target.value || '')}
            />
          ))}
          <ButtonsContainer>
            <Button onClick={reset}>Reset</Button>
            <Button onClick={onSearch}>Search</Button>
          </ButtonsContainer>
        </ModalContainer>
      </ClickAwayListener>
    </Modal>
  )
}

export default FilterModal

