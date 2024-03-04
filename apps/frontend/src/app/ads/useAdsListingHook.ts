import {useCallback, useEffect, useState} from "react";
import axios from "axios";
import {AdsEntity, AdsListingParams} from "./types";
import {toast} from "react-toastify";
import {debounce} from "lodash";

const generateFilterStringFromParams = <T>(url: string, filterObject: T) => {
  let params = Object.keys(filterObject).reduce((acc, k, i) => {
    if (filterObject[k] !== '') {
      if (i === 0) {
        acc = acc + `${k}=${filterObject[k]}`
      } else {
        acc = acc + `&${k}=${filterObject[k]}`
      }
    }

    return acc
  }, '')

  if (params !== '') {
    return url + '?' + params
  }

  return url + params
}

export const templateFilters: AdsListingParams = {
  minPrice: '',
  maxPrice: '',
  city: '',
  search: '',
  district: ''
}

const loadItems = async (params): Promise<AdsEntity[]> => {
  try {
    const url = generateFilterStringFromParams<AdsListingParams>(`http://localhost:8000/api/ads/`, params || {});
    //@ts-ignore
    return await axios<AdsEntity[], AdsEntity[]>(url).then(r => r.data?.results)
  } catch (e) {
    toast.error(e.message, {
      position: "top-left"
    });
    return []
  }
}

const useAdsListingHook = (isProcessing: boolean) => {

  const [items, setItems] = useState<AdsEntity[]>([]);
  const [params, setParams] = useState<AdsListingParams>(templateFilters);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const debounceLoadData = useCallback(<Function>debounce(() => {
    setIsLoading(true)
    loadItems(params).then(r => {
      setItems(r)
      setIsLoading(false)
    })
  }, 1000), [params]);

  const changeParams = (type: keyof AdsListingParams, value: string) => {
    setParams(prev => ({
      ...prev,
      [type]: value
    }))
  }

  const reset = () => {
    setParams(templateFilters)
  }

  useEffect(debounceLoadData, [isProcessing])

  return {
    items, params, isLoading, changeParams, reset
  }
}

export default useAdsListingHook
