import { ThemeProvider } from "@mui/material"
import { RouterProvider } from "react-router-dom"
import router from "./router"
import { theme } from "./theme"

function App() {

  return (
    <div className="App">
      <ThemeProvider
      theme={theme}
      >
      <RouterProvider
      router={router}
      />
      </ThemeProvider>
    </div>
  )
}

export default App
