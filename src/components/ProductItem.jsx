import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react"
import { useNavigate } from "react-router-dom"
import StarRating from "./StarRating"
import { useDispatch } from "react-redux"
import { addItemToCart } from "../utils/cartSlice"
import PriceTag from "./PriceTag"

function ProductItem({ product }) {
  const { id, title, brand, price, discountPercentage, rating, thumbnail } =
    product
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const addProductToCart = () => {
    try {
      dispatch(addItemToCart(product))
      alert("Product has been added to the cart !!!")
    } catch (err) {
      alert(`Error Ocuured: ${err}`)
    }
  }

  const handleLink = () => navigate(`/products/${id}`)

  return (
    <Card
      color='transparent'
      className='flex-row gap-2 mt-4 container mx-auto border theme-text tracking-wide shadow-lg min-w-80 lg:w-3/4 xl:w-11/12 2xl:w-10/12
      '>
      <CardHeader
        color='transparent'
        floated={false}
        className='rounded-xl cursor-pointer m-0 bg-gray-200 dark:bg-blue-gray-800'
        onClick={handleLink}>
        <img
          src={thumbnail}
          alt={title}
          className='w-full h-full object-contain hover:object-cover bg-blend-multiply'
        />
      </CardHeader>

      <CardBody className='py-2 flex flex-col w-full px-2 lg:px-6 justify-around items-start'>
        <Typography
          variant='h5'
          className='cursor-pointer tracking-wide'
          onClick={handleLink}>
          <span className='line-clamp-2'>{title}</span>
        </Typography>

        {brand && (
          <Typography
            variant='small'
            className='font-bold max-sm:self-end max-sm:mx-4 text-indigo-800 dark:text-blue-100 underline'>
            {brand}
          </Typography>
        )}

        <StarRating
          rating={rating}
          className='text-[0.8rem] font-semibold md:text-sm drop-shadow-md text-brown-800 dark:text-orange-400'
        />

        <PriceTag price={price} discount={discountPercentage} />

        <Button
          className='btn-primary lg:mx-0 bg-indigo-700 dark:bg-indigo-400/75'
          onClick={addProductToCart}>
          Add to Cart
        </Button>
      </CardBody>
    </Card>
  )
}

export default ProductItem
