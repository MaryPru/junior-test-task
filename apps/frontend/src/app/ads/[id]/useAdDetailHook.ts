import {useCallback, useEffect, useState} from "react";
import axios, {AxiosResponse} from "axios";
import {AdsEntity} from "../types";
import {toast} from "react-toastify";
import {debounce} from "lodash";

const templateAd: AdsEntity = {
  city_name: "",
  created_at: "",
  description: "",
  district_name: "",
  id: "",
  images: [],
  price: 0,
  title: "",
  user: "",
  views: 0
}

const loadItem = async (id: string): Promise<AdsEntity> => {
  try {
    const resp = await axios<AdsEntity, AxiosResponse<AdsEntity>>(`http://localhost:8000/api/ads/${id}`);
    return resp.data
  } catch (e) {
    toast.error(e.message, {
      position: "top-left"
    });
    return templateAd
  }
}

const useAdDetailHook = (id: string) => {
  const [item, setItem] = useState<AdsEntity>(templateAd);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const debounceLoadData = useCallback(<Function>debounce(() => {
    setIsLoading(true)
    loadItem(id).then(r => {
      setItem(r)
      setIsLoading(false)
    })
  }, 1000), []);

  useEffect(debounceLoadData, [])

  return {
    item, isLoading
  }
}

export default useAdDetailHook
