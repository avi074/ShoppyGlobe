import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"

const StarRating = ({ rating, className, userRated }) => {
  // Calculate the number of full stars
  const fullStars = Math.floor(rating)
  // Determine if a half star is needed
  const hasHalfStar = rating % 1 >= 0.25 && rating % 1 < 0.75
  // Calculate the number of empty stars
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)
  // Determine if a rating should be rounded up to a full star
  const roundedFullStars = rating % 1 >= 0.75 ? 1 : 0

  return (
    <div className={`flex gap-2 items-center ${className}`}>
      <span className='translate-y-0.5 scale-110'>{rating}</span>
      <div className='flex gap-1'>
        {/* Render full stars */}
        {[...Array(fullStars + roundedFullStars)].map((_, index) => (
          <FaStar key={`full-${index}`} />
        ))}
        {/* Render half star if needed */}
        {hasHalfStar && !roundedFullStars && <FaStarHalfAlt />}
        {/* Render empty stars */}
        {[...Array(emptyStars - roundedFullStars)].map((_, index) => (
          <FaRegStar key={`empty-${index}`} />
        ))}
      </div>
      {userRated && <span>({userRated})</span>}
    </div>
  )
}

export default StarRating
