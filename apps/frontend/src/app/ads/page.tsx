'use client'
import React, {useState} from 'react';
import {Box, Button, IconButton, LinearProgress} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import useAdsListingHook from "./useAdsListingHook";
import FilterModal from "../../modals/FilterModal";
import {Collection} from './types'
import {useRouter} from "next/navigation";
import {ToastContainer} from "react-toastify";
import {
  WrapperContainer,
  WrapperItems,
  ItemRow,
  ItemInfo,
  ItemTitle,
  Title,
  Item,
  ItemImage
} from "./styledComponents.ts";

const localFavorites: Collection = localStorage.getItem("FAVORITES") ? JSON.parse(localStorage.getItem("FAVORITES")) : {};

const AdsListing = () => {
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const {items, params, isLoading, changeParams, reset} = useAdsListingHook(isProcessing);
  const [isOpen, setIsOpen] = useState(false)
  const [favorites, setFavorites] = useState<Collection>(localFavorites);
  const router = useRouter();

  const onSearch = () => {
    setIsProcessing(prev => !prev);
    setIsOpen(false)
  }

  const handleToggle = (event: any, id: string) => {
    event.stopPropagation()
    event.preventDefault()
    const isFavorite = favorites[id];

    if (isFavorite) {
      delete favorites[id]
      const newFavorites = {
        ...favorites
      }
      setFavorites(newFavorites)
      localStorage.setItem("FAVORITES", JSON.stringify(newFavorites))
      return
    }

    const newFavorites = {
      ...favorites,
      [id]: id
    }
    setFavorites(newFavorites)
    localStorage.setItem("FAVORITES", JSON.stringify(newFavorites))
  };

  return (
    <WrapperContainer>
      {isLoading && <LinearProgress/>}
      <ToastContainer/>
      <Box alignContent="center" display={"flex"} alignItems={'center'}>
        <Title>List of ads </Title> <Button onClick={() => setIsOpen(true)}>Filter</Button>
      </Box>
      <FilterModal
        isOpen={isOpen}
        reset={reset}
        params={params}
        changeParams={changeParams}
        onSearch={onSearch}
        setIsOpen={setIsOpen}
      />
      <WrapperItems>
        {items.map((i) => {
          const isFavorite = favorites[i.id];
          return (
            <Item key={i.id} onClick={() => router.push(`/ads/${i.id}`)}>
              <ItemImage> <img src={i.images[0].thumbnail} alt={'image'}/></ItemImage>
              <ItemRow> <ItemTitle>{i.title}</ItemTitle>
                <IconButton onClick={(event) => handleToggle(event, i.id)}>
                  {isFavorite && <FavoriteIcon sx={{ color: 'red' }}/>}
                  {!isFavorite && <FavoriteBorderIcon/>}
                </IconButton>
              </ItemRow>
              <ItemRow> <ItemInfo>{i.city_name}</ItemInfo> <ItemInfo>{i.price}</ItemInfo></ItemRow>
            </Item>
          )
        })}
      </WrapperItems>
    </WrapperContainer>
  );
}

export default AdsListing



