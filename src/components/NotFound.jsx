import { Typography } from "@material-tailwind/react"

function NotFound() {
  return (
    <div className="text-center flex flex-col gap-3 justify-center items-center py-4">
      <Typography variant="h1" color="gray">404</Typography>
      <Typography variant="h2" color="blue-gray">Not Found</Typography>
      <Typography variant="lead" color="gray">The page you are looking for does not exist.</Typography>
    </div>
  )
}

export default NotFound
