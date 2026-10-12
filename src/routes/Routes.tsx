import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from '../App'
import Home from '../pages/Home/Home'
import ProjectDetail from '../pages/ProjectDetail/ProjectDetail'
import ScrollToTop from '../utils/ScrollToTop/ScrollToTop'

export function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="project/:id" element={<ProjectDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
