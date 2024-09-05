import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react"
import { useNavigate } from "react-router"
import PriceTag from "./PriceTag"
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa"

/**
 *
 * @param {object} props
 * @param props.item
 * @returns
 */
function CartItem(props) {
  const { id, title, brand, thumbnail, quantity, price, discountPercentage } = props.item
  const {handleQuantityUpdate, handleRemoveItem} = props.events
  const navigate = useNavigate()


  return (
    <Card
      color='transparent'
      className='container mx-auto min-w-60 border md:w-3/4 pb-2 lg:w-11/12'>
      <CardBody
        className='p-0 pr-1 theme-text cursor-pointer flex gap-2 justify-around xl:justify-center xl:gap-8 xl:p-4'
        onClick={() => navigate(`/products/${id}`)}>
        <div className='rounded-lg w-48 bg-gray-200 dark:bg-blue-gray-800'>
          <img
            src={thumbnail}
            alt={title}
            className='w-full h-full object-contain hover:object-cover bg-blend-multiply'
          />
        </div>

        <div className='w-3/5 flex flex-col justify-around py-1 h-auto'>
          <Typography variant='h5' title={title}>
            <span className='line-clamp-2'>{title} </span>
          </Typography>
          {brand && (
            <Typography
              variant='h6'
              className='text-indigo-700 dark:text-indigo-200'>
              {brand}
            </Typography>
          )}
          <PriceTag price={price} discount={discountPercentage} />
        </div>
      </CardBody>
      <CardFooter className='flex justify-around items-center px-0 py-0 pt-2'>
        <div className="w-3/5">
          <div className='flex theme-text gap-4 items-center'>
            <span className="font-semibold">Quantity :</span>
            <span className='border-2 overflow-hidden border-blue-gray-700 dark:border-blue-gray-200 rounded-xl flex items-center text-[1rem]'>
              <Button variant='gradient' color='green' className='p-1.5 min-w-8 rounded-none' onClick={() => handleQuantityUpdate(id, 1)}>
                <FaPlusCircle className='text-[1.2rem]' />
              </Button>
              <span className='max-w-[10ch] px-2 w-full text-center flex-grow text-ellipsis font-bold'>
                {quantity}
              </span>
              <Button variant='gradient' color='red' className='p-1.5 min-w-8 rounded-none' onClick={() => handleQuantityUpdate(id, -1)}>
                <FaMinusCircle className='text-[1.2rem]' />
              </Button>
            </span>
          </div>
        </div>
        <Button variant='gradient' color='red' onClick={()=> handleRemoveItem(id)}>
          Remove
        </Button>
      </CardFooter>
    </Card>
  )
}

export default CartItem
