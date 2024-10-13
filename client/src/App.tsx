import Landing from "./pages/Landing"
import Signup from './pages/Signup';
import { ThemeProvider } from '@/components/Theme/theme-provider'
import { Route, Routes } from 'react-router-dom';
import { Toaster } from "@/components/ui/sonner"
import Signin from "./pages/Signin";
import Home from "./pages/Home"
import Plot from "./pages/Plot"

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Signup />} /> 
        <Route path="/signin" element={<Signin/>} /> 
        <Route path="/home" element={<Home />} /> 
        <Route path="/plot" element={<Plot />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
      <Toaster />
    </ThemeProvider>
  )
}

export default App