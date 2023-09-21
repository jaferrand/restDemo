
import { Route, Routes } from 'react-router-dom'
import { About }from  '../pages/About'
import   { Menu }   from '../pages/Menu'
import { Reservas } from '../pages/Reservas'
import  {Home}  from '../pages/Home'
import  {Blog}  from '../pages/Blog'

export const MainRouter = () => {
  return (
    <>
    <Routes>
        <Route path='/restDemo/' element={<Home /> }/>
        <Route path= '/restDemo/menu' element={<Menu/>}/>
        <Route path='/restDemo/about' element={<About/>}/>
        <Route path='/restDemo/reservas'element={<Reservas/>}/>
        <Route path='/restDemo/blog'element={<Blog/>}/>

        <Route path='*' element={<h1>Error 404 - La pagina que buscas no se encuentra</h1>}/>
    </Routes>
    </>
  )
}


