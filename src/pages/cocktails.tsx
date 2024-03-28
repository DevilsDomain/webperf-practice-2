import React from 'react'
import useSWR from 'swr'
import axios from 'axios'


const fetcher = (url: string) => axios.get(url).then(res => res.data)
function cocktails() {
  const { data, error, isLoading } = useSWR('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita', fetcher)
  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
  console.log(data)
  return (
    <div>cocktails</div>
  )
}

export default cocktails