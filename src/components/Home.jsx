import { Typography } from "@material-tailwind/react"
import ProductList from "./ProductList"

function Home(){
    return(<>
    <Typography variant="h2" className="text-center theme-text p-4 text-balance">Welcome, Dear Customer</Typography>
    <ProductList limit={14}/>
    </>)
}

export default Home