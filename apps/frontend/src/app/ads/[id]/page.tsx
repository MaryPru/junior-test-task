'use client'
import React, {useState} from 'react';
import {Box, IconButton, LinearProgress} from '@mui/material';
import useAdDetailHook from "./useAdDetailHook";
import Slider from "react-slick";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {Collection} from '../types'
import {ToastContainer} from "react-toastify";
import {
  WrapperContainer,
  Title,
  ItemRow,
  Item,
  ItemTitle,
  ItemInfo,
  SliderItem,
  ItemDescription,
  ItemSliderWrapper
} from "./styledComponents.ts";

const localFavorites: Collection = localStorage.getItem("FAVORITES") ? JSON.parse(localStorage.getItem("FAVORITES")) : {};

interface Props {
  params: { id: string },
}

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const DetailItem = (props: Props) => {
  const [favorites, setFavorites] = useState<Collection>(localFavorites);
  const {id} = props.params
  const {item, isLoading} = useAdDetailHook(id);

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

  const isLiked = favorites[id]

  return (
    <WrapperContainer>
      <ToastContainer/>
      {isLoading && <LinearProgress/>}
      <Box alignContent="center" display={"flex"} alignItems={'center'}>
        <Title>AdDetail-{id}</Title>
      </Box>
      <Item key={id}>
        <ItemSliderWrapper>
          <Slider {...settings}>
            {item && item.images && item.images.map((image) => (
              <SliderItem>
                <img src={image.image} alt={'image'}/>
              </SliderItem>
            ))}
          </Slider>
        </ItemSliderWrapper>
        <ItemRow>
          <ItemTitle>{item.title}</ItemTitle>
          <IconButton onClick={handleToggle}>
            {isLiked && <FavoriteIcon sx={{ color: 'red' }}/>}
            {!isLiked && <FavoriteBorderIcon/>}
          </IconButton>
        </ItemRow>
        <ItemRow>
          <ItemInfo>{item.city_name}, {item.district_name}</ItemInfo>
          <ItemInfo>{item.price}</ItemInfo>
        </ItemRow>
        <ItemDescription>
          {item.description}
        </ItemDescription>
      </Item>
    </WrapperContainer>
  );
}

export default DetailItem;



