import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import CategoryPage from "./pages/CategoryPage"
import ToolPage from "./pages/ToolPage"
import NotFoundPage from "./pages/NotFoundPage"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="category/:id" element={<CategoryPage />} />
        <Route path="tool/:id" element={<ToolPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
