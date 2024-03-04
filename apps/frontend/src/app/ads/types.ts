// Базовый интерфейс коллекции
export interface Collection {
  [key: string]:string;
}

export interface AdsListingParams {
  minPrice: string,
  maxPrice: string,
  city: string,
  search: string,
  district: string
}

interface Images{
  id: string,
  image: string,
  thumbnail: string,
  user: string
}

export interface AdsEntity {
  id: string,
  title: string,
  description: string,
  city_name: string,
  district_name: string,
  created_at: string,
  views: 0,
  user: string,
  price: 0,
  images: Images[]
}
