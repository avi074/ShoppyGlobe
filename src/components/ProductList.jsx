import { useEffect, useState } from "react"
import useFetch from "../utils/useFetch"
import Loading from "./Loading"
import ProductItem from "./ProductItem"
import ErrorPage from "./ErrorPage"
import Search from "./Search"

function ProductList({limit=0}) {
  const [allProducts, setAllProducts] = useState([])
  const [url, setURL] = useState(`https://dummyjson.com/products?limit=${limit}`)
  const { urlData, loading, error } = useFetch(url)

  useEffect(() => {
    setAllProducts(urlData?.products ?? [])
  }, [urlData, url])

  const handleSearch = (_, searchVal) => {
    setURL(`https://dummyjson.com/products/search?q=${searchVal}&limit=${limit}`)
  }
  return (
    <>
      {loading && <Loading />}
      {error && <ErrorPage error={error} />}
      <div className='grid grid-col-1 p-2 mt-2 xl:grid-cols-2 '>
        <Search searchHandler={handleSearch} />
        {allProducts?.length > 0 && (
          <>
            {allProducts?.map((ele) => (
              <ProductItem key={ele.id} product={ele} />
            ))}
          </>
        )}
      </div>
    </>
  )
}

export default ProductList
