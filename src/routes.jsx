import { createBrowserRouter } from "react-router-dom"
import Loading from "./components/Loading"
import App from "./App"
import { lazy, Suspense } from "react"

const NotFound = lazy(() => import("./components/NotFound"))
const Home = lazy(() => import("./components/Home"))
const About = lazy(() => import("./components/About"))
const ProductList = lazy(() => import("./components/ProductList"))
const ProductDetail = lazy(() => import("./components/ProductDetail"))
const Cart = lazy(() => import("./components/Cart"))
const Checkout = lazy(() => import("./components/Checkout"))
const Contact = lazy(() => import("./components/Contact"))

const childrenPaths = {
  allProducts: <ProductList limit={0} />,
  "products/:id": <ProductDetail />,
  cart: <Cart />,
  about: <About />,
  contact: <Contact />,
  checkout: <Checkout />,
}

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: (
      <Suspense fallback={<Loading />}>
        <NotFound />
      </Suspense>
    ),
    children: [
      {
        path: "",
        element: (
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        ),
      },
      ...Object.entries(childrenPaths).map(([key, value]) => {
        return {
          path: key,
          element: <Suspense fallback={<Loading />}> {value} </Suspense>,
        }
      }),
    ],
  },
])

export default routes
