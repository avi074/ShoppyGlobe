import { createBrowserRouter } from "react-router-dom"
import Loading from "./components/Loading"
import App from "./App"
import { lazy, Suspense } from "react"

const ProductList = lazy(() => import("./components/ProductList"))
const NotFound = lazy(() => import("./components/NotFound"))

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: (
          <Suspense fallback={<Loading />}>
            <ProductList />
          </Suspense>
        ),
      },
    ],
  },
  {
    path:"/product/:id"
  },
  {
    path: "/cart"
  },
  {
    path: "/checkout"
  },

  {
    path: "*",
    element: (
      <Suspense fallback={<Loading />}>
        <NotFound />
      </Suspense>
    ),
  },
])

export default routes
