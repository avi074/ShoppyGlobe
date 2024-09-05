import { Typography } from "@material-tailwind/react"

function Footer() {
  return (
    <>
      <footer className='bg-gray-900 dark:border-t-2'>
        <div className='max-w-[22ch] ml-auto p-2 mr-4 text-white'>
          <Typography
            variant='paragraph'
            className='text-right tracking-wider text-pretty font-medium'>
            &copy; 2024 ShoppyGlobe. All rights reserved.
          </Typography>
        </div>
      </footer>
    </>
  )
}

export default Footer
