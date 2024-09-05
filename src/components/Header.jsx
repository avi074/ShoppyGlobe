import {
  Collapse,
  IconButton,
  Navbar,
  Typography,
} from "@material-tailwind/react"
import { useState } from "react"
import { IoCart, IoMoon, IoSunny } from "react-icons/io5"
import NavMenu from "./NavMenu"
import { useNavigate } from "react-router"
import { useSelector } from "react-redux"

/**
 *
 * @param {object} props
 * @param {boolean} props.isDarkMode
 * @param {Function} props.toggleDarkMode
 * @returns
 */
function Header(props) {
  const { isDarkMode, toggleDarkMode } = props
  /**
   * @type {import("./NavMenu").navMenuLink[]}
   */
  const navLinks = [
    { path: "/", name: "Home" },
    {path:"/allProducts", name:"All Products"},
    { path: "/about", name: "About" },
    { path: "/contact", name: "Contact" },
  ]
  // state variables
  const [openNav, setOpenNav] = useState(false)
  const navigate = useNavigate()
  const cartItems = useSelector((store) => store.cart.totalQuantity)

  const toggleNav = () => setOpenNav(!openNav)

  return (
    <>
      <Navbar
        color='transparent'
        className='p-0 pt-1 max-w-full rounded-none border-b'>
        <div className='w-full lg:w-11/12 mx-auto flex justify-between items-center'>
          <Typography
            variant='h4'
            textGradient
            className='px-2 bg-gradient-to-tl flex justify-center items-center cursor-pointer from-blue-800 to-brown-800 dark:from-blue-200 dark:to-gray-200 rounded-lg tracking-wide'
            onClick={() => navigate("/")}>
            <img
              src='/icon.png'
              loading='lazy'
              alt='ShoppyGlobe'
              className='w-16 aspect-square hidden md:block'
            />
            ShoppyGlobe
          </Typography>

          <NavMenu links={navLinks} className='hidden md:flex gap-4 text-lg' />

          <div className='flex justify-around items-center gap-4 w-full sm:w-fit'>
            <IconButton
              variant='text'
              className='text-black text-lg dark:text-white rounded-full hover:border'
              onClick={toggleDarkMode}>
              {isDarkMode ? <IoSunny /> : <IoMoon />}
            </IconButton>

            <IconButton
              variant='text'
              className='text-black text-lg dark:text-white hover:border'
              onClick={() => {
                navigate("/cart")
              }}
              title='Cart'>
              <IoCart />
              {cartItems > 0 && (
                <span className='absolute -top-3 -right-2.5 w-6 aspect-square text-sm rounded-full font-semibold'>
                  {cartItems}
                </span>
              )}
            </IconButton>

            <IconButton
              variant='text'
              className='text-black dark:text-white md:hidden'
              onClick={toggleNav}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='2'
                stroke='currentColor'
                className='w-6 h-6'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M4 6h16M4 12h16m-7 6h7'
                />
              </svg>
            </IconButton>
          </div>
        </div>

        <Collapse open={openNav}>
          <NavMenu
            links={navLinks}
            className='flex flex-col text-center gap-2 md:hidden text-blue-gray-800 dark:text-white'
          />
        </Collapse>
      </Navbar>
    </>
  )
}

export default Header
