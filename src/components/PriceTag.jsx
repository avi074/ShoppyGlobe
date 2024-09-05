import { Typography } from "@material-tailwind/react"

function PriceTag({price, discount, className}){
    return(<div className={`my-3 mr-auto py-1 px-2 rounded-md bg-blue-gray-50 dark:bg-blue-gray-800 border ${className}`}>
        <Typography variant='h6' className='flex gap-2 items-center '>
            {discount && (
              <span className='scale-125 text-blue-gray-900 dark:text-white mr-1'>
                ${(price - (price * discount) / 100).toFixed(2)}
              </span>
            )}
            <span className={`${discount && "text-[0.8rem] font-medium"}`}>
              M.R.P :
              <span className={`${discount && "line-through"}`}>
                ${price}
              </span>
            </span>
          </Typography>
    </div>)
}

export default PriceTag