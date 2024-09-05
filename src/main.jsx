import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { ThemeProvider } from "@material-tailwind/react"
import { RouterProvider } from "react-router-dom"
import { Provider } from "react-redux"
import routes from "./routes"
import "./index.css"
import store from "./utils/store"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <Provider store={store}>
      <RouterProvider router={routes} />
      </Provider>
    </ThemeProvider>
  </StrictMode>,
)
