
import { Route, Routes } from 'react-router-dom'
import { About }from  '../pages/About'
import { Menu } from '../pages/Menu'
import { Reservas } from '../pages/Reservas'
import { Home } from '../pages/Home'

export const MainRouter = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home /> }/>
        <Route path= '/menu' element={<Menu/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/reservas'element={<Reservas/>}/>

        <Route path='*' element={<h1>Error 404 - La pagina que buscas no se encuentra</h1>}/>
    </Routes>
    </>
  )
}


