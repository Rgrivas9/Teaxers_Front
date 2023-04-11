import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Opositor from './pages/Guías/Opositor'
import Docente_con_exp from './pages/Guías/Docente_con_exp'
import Docente_novel from './pages/Guías/Docente_novel'
import Login from './pages/Login'
import Home from './pages/Home'
import { PageContextProvider } from './context/page.Context'
import Libro from './pages/Libro'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <PageContextProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="/opositor" element={<Opositor />} />
            <Route path="/docentenovel" element={<Docente_novel />} />
            <Route path="/docenteexp" element={<Docente_con_exp />} />
            <Route path="/libro/:title" element={<Libro />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </PageContextProvider>
    </BrowserRouter>
  </React.StrictMode>
)
