import { Typography } from "@material-tailwind/react"

function NotFound() {
  return (
    <div className="text-center bg-transparent theme-text flex flex-col gap-3 justify-center items-center py-4">
      <Typography variant="h1">404</Typography>
      <Typography variant="h2">Not Found</Typography>
      <Typography variant="lead">The page you are looking for does not exist.</Typography>
    </div>
  )
}

export default NotFound
