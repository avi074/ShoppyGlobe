import { Spinner } from "@material-tailwind/react"

function Loading() {
  return (
    <>
      <div className='absolute top-0 bottom-0 left-0 right-0 z-50 bg-gradient-to-br from-transparent to-blue-gray-50 dark:to-blue-gray-800'>
        <div className='flex flex-col h-full justify-center items-center theme-text'>
          <Spinner className='min-w-8 min-h-8 w-20 h-20 ' />
          <span className='text-[2rem]'>Loading...</span>
        </div>
      </div>
    </>
  )
}

export default Loading
