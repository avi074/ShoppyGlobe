import { useEffect, useState } from "react"
import { useParams } from "react-router"
import useFetch from "../utils/useFetch"
import Loading from "./Loading"
import ErrorPage from "./ErrorPage"
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Carousel,
  Typography,
} from "@material-tailwind/react"
import StarRating from "./StarRating"
import PriceTag from "./PriceTag"
import { FaShippingFast, FaUserCircle } from "react-icons/fa"
import {
  AiOutlineCheckCircle,
  AiOutlineOrderedList,
  AiOutlineSafetyCertificate,
} from "react-icons/ai"
import { FiRotateCw } from "react-icons/fi"
import { useDispatch } from "react-redux"
import { addItemToCart } from "../utils/cartSlice"

function ProductDetail() {
  const servicesInfo = {
    warrantyInformation: AiOutlineSafetyCertificate,
    shippingInformation: FaShippingFast,
    availabilityStatus: AiOutlineCheckCircle,
    returnPolicy: FiRotateCw,
    minimumOrderQuantity: AiOutlineOrderedList,
  }

  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const { urlData, loading, error } = useFetch(
    `https://dummyjson.com/products/${id}`,
  )
  const dispatch = useDispatch()

  useEffect(() => {
    setProduct(urlData ?? null)
  }, [id, urlData])

  return (
    <>
      {loading && <Loading />}
      {error && <ErrorPage error={error} />}
      {product && (
        <Card color='transparent' className='md:mx-4 mt-2'>
          {/* Carousel & Basic Info */}
          <CardHeader
            color='transparent'
            floated={false}
            className='flex flex-col justify-center md:flex-row md:gap-4 xl:gap-16 items-center p-4 m-1'>
            <Carousel className='rounded-xl container md:w-80 min-h-32 mx-auto bg-blue-gray-300/55 dark:bg-transparent xl:mx-8 xl:w-96'>
              {product.images.map((url, index) => (
                <img
                  key={`p-${product.id}-img-${index}`}
                  src={url}
                  alt={product.title}
                  loading='lazy'
                  className='w-full h-full object-contain'
                />
              ))}
            </Carousel>
            <div className='flex flex-col gap-4 theme-text'>
              <Typography variant='h3'>{product.title}</Typography>

              {product.brand && (
                <Typography
                  variant='h4'
                  className='text-indigo-700 dark:text-indigo-300 uppercase underline'>
                  {product.brand}
                </Typography>
              )}

              <StarRating
                rating={product.rating}
                userRated={product.reviews.length}
                className='flex text-base items-center text-orange-800'
              />

              <PriceTag
                price={product.price}
                discount={product.discountPercentage}
                className='scale-150 translate-x-10'
              />

              <Button
                variant='gradient'
                color='amber'
                className='btn-primary'
                onClick={() => {
                  dispatch(addItemToCart(product))
                  alert("Product has been added to the cart !!!")
                }}>
                Add to Cart
              </Button>
            </div>
          </CardHeader>

          {/* services, description & tags */}
          <CardBody className='theme-text flex flex-col gap-4'>
            <Typography variant='h4' className='tracking-wide'>
              Services
            </Typography>
            <div className='flex justify-around flex-wrap mb-3'>
              {Object.keys(servicesInfo).map((srvcinfo) => {
                const IconEle = servicesInfo[srvcinfo]
                return (
                  <div
                    key={srvcinfo}
                    className='flex flex-col items-center justify-around m-2 border shadow-md rounded-lg p-2 w-32'
                    title={srvcinfo}>
                    <IconEle className='text-[2rem]' />
                    <span className='text-center text-balance'>
                      {product[srvcinfo]}
                    </span>
                  </div>
                )
              })}
            </div>

            <Typography variant='h4'>Description</Typography>
            <Typography variant='lead'>{product.description}</Typography>
            <div className='flex flex-wrap gap-2'>
              {product.tags.map((tag) => (
                <span
                  key={tag}
                  className='capitalize bg-blue-gray-50 dark:bg-blue-gray-800 p-2 rounded-md font-medium'>
                  {tag}
                </span>
              ))}
            </div>
          </CardBody>

          {/* User Reviews */}
          {product.reviews.length > 0 && (
            <CardFooter className='rounded-xl grid grid-cols-1 xl:grid-cols-2 gap-4 md:p-4 mb-8'>
              <Typography
                variant='h4'
                className='theme-text px-2 xl:col-span-2'>
                Customer Reviews
              </Typography>
              {product.reviews.map((view, idx) => (
                <Card
                  color='transparent'
                  key={`p-${product.id}-review-${idx}`}
                  className='border w-full md:w-10/12 mx-auto theme-text'>
                  <CardBody className='flex flex-col gap-2'>
                    <Typography variant='small'>
                      Posted at :{" "}
                      <span className='font-semibold'>
                        {new Date(view.date).toDateString()}
                      </span>
                    </Typography>
                    <div className='flex gap-4 items-center'>
                      <FaUserCircle className='text-[2.5rem]' />
                      <div>
                        <Typography variant='h5'>
                          {view.reviewerName}
                        </Typography>
                        <StarRating
                          rating={view.rating}
                          className='theme-text text-sm'
                        />
                      </div>
                    </div>
                    <Typography
                      variant='paragraph'
                      className='mt-1 text-black dark:text-indigo-100 tracking-wider font-semibold'>
                      {view.comment}
                    </Typography>
                  </CardBody>
                </Card>
              ))}
            </CardFooter>
          )}
        </Card>
      )}
    </>
  )
}

export default ProductDetail
