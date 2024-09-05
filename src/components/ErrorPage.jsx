import { Typography } from "@material-tailwind/react"

/**
 *
 * @param {object} props
 * @param {string} props.error Error Message
 * @returns
 */
function ErrorPage(props) {
  const { error } = props
  return (
    <>
      <div className='m-4 p-2 flex flex-col gap-4 text-center theme-text'>
        <Typography variant='h2' className='text-red-400'>
          Error Occured!
        </Typography>
        <Typography variant='h4' className='text-inherit'>
          {error}
        </Typography>
        <Typography variant='lead' className='text-inherit text-balance'>
          Either reload the page or visit after some time !
        </Typography>
      </div>
    </>
  )
}

export default ErrorPage
