import { Button, Typography } from "@material-tailwind/react"
import { GiBroom } from "react-icons/gi"
import { useDispatch, useSelector } from "react-redux"
import CartItem from "./CartItem"
import {
  clearCart,
  removeItemFromCart,
  updateItemQuantityByStep,
} from "../utils/cartSlice"
import { Link } from "react-router-dom"

function Cart() {
  const { items } = useSelector((store) => store.cart)

  const dispatch = useDispatch()

  const handleQuantityUpdate = (id, amount) => {
    dispatch(updateItemQuantityByStep({ productId: id, step: amount }))
  }

  const handleRemoveItem = (id) => {
    dispatch(removeItemFromCart(id))
    alert("Product has been removed from the cart !!!")
  }

  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-2 mx-auto w-full place-items-center'>
      <div className='w-full flex justify-between items-center p-2 bg-blue-gray-500/90 text-white dark:bg-blue-gray-800 dark:text-gray-200/90 rounded-xl lg:col-span-2'>
        <Typography
          variant='h4'
          className='px-1 w-[12ch] text-center lg:w-[25ch] tracking-wide'>
          Your Cart
        </Typography>
        <Button
          className='p-2 text-inherit flex justify-center items-center gap-2 bg-black/50 mr-2 lg:mr-20'
          title='Clear Cart'
          onClick={() => {
            dispatch(clearCart())
            alert("Cart has been cleared !!!")
          }}>
          <GiBroom className='text-[1.5rem]' />
          <span className='hidden md:block text-[1rem] capitalize'>
            Clear Cart
          </span>
        </Button>
      </div>

      {Object.keys(items).length > 0 ? (
        <>
          {Object.keys(items).map((ele) => (
            <CartItem
              key={`cart-i-${ele}`}
              item={items[ele]}
              events={{ handleQuantityUpdate, handleRemoveItem }}
            />
          ))}
          <Typography
            variant='h4'
            className='mt-6 border-2 border-black p-2 rounded-xl bg-amber-500 dark:bg-brown-700'>
            <Link to='/checkout' className='theme-text'>
              Proceed to Checkout
            </Link>
          </Typography>
        </>
      ) : (
        <Typography
          variant='h3'
          className='mt-5 text-center text-brown-900 dark:text-blue-gray-100 font-medium tracking-wide lg:col-span-2'>
          Cart is empty !!!
        </Typography>
      )}
    </div>
  )
}

export default Cart
