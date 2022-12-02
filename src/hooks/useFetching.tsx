import { useContext, useState } from 'react'
import UserContext from 'context/userContext'
import useSWR from "swr";

import Swal from "sweetalert2";
import PartnerContext from 'context/partnerContext';

export const useFetching = (url: any) => {
  const { data, error, mutate } = useSWR([!url || `${import.meta.env.VITE_API_URL}${url}`])
  if (data?.success === false) {
    Swal.fire({
      text: `${data?.error?.user_msg}`,
      icon: "warning",
      confirmButtonText: 'Ok',
      confirmButtonColor: '#f1416c',
    })
    return { data: false, error, mutate }
  }
  else {
    return { data: data?.data || null, error, mutate }
  }
}

export const useFetchingPartner = (url: any) => {
  const { partnerInfo, logOut } = useContext(PartnerContext)
  const { data, error, mutate } = useSWR([!url || `${import.meta.env.VITE_API_URL}${url}`, partnerInfo?.meta?.token])
  if (data?.error === 'token_expired') {
    logOut()
    return { data: [], error, mutate }
  } else if (data?.success === false) {
    Swal.fire({
      text: `${data?.error?.user_msg}`,
      icon: "warning",
      confirmButtonText: 'Ok',
      confirmButtonColor: '#f1416c',
    })
    return { data: false, error, mutate }
  }
  else {
    return { data: data?.data || null, error, mutate }
  }
}

export const useFetch = () => {
  const { userInfo, logOut } = useContext(UserContext)
  const [isLoading, setIsLoading] = useState(false)

  const Fetch = ({ method = 'POST', url, data }: any) => {
    const params: any = {
      method: method,
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${userInfo?.meta?.token}`,
      }
    }
    if (method !== 'GET') params['body'] = JSON.stringify(data || {})

    setIsLoading(true)
    return fetch(`${import.meta.env.VITE_API_URL}${url}`, params)
      .then(res => res.json())
      .then(res => {
        setIsLoading(false)
        if (res?.error === 'token_expired') {
          logOut()
        } else if (!res?.success) {
          Swal.fire({
            text: `${res?.error?.user_msg}`,
            icon: "warning",
            confirmButtonText: 'Ok',
            confirmButtonColor: '#f1416c',
          })
          return res
        } else {
          return res
        }
      })
  }

  const FetchBlob = ({ method = 'POST', url, data, name = 'filename.xlsx' }: any) => {
    if (!userInfo?.meta?.token) return new Promise((resolve, reject) => {
      resolve([]);
    })
    setIsLoading(true)
    return fetch(`${import.meta.env.VITE_API_URL}${url}`, {
      method: method,
      headers: {
        'Content-type': 'application/json;charset=utf-8',
        'Authorization': `Bearer ${userInfo?.meta?.token}`
      },
      body: JSON.stringify(data || {}),
    })
      .then(response => response.blob())
      .then((blob: any) => {
        var url = window.URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = name;
        document.body.appendChild(a);
        a.click();
        a.remove();
      })
  }

  return { Fetch, FetchBlob, isLoading }
}
