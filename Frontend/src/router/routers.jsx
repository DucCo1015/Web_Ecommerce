
import Home from '../pages/Home'
import Category from '../pages/Category'
import Products from '../pages/Products'
import {Routes, Route} from 'react-router-dom'

const routers = () => {
  return (
    <div>
      <Routes>
        <Route path='*' element = {<Home/>} />
        <Route path='/Home' element = {<Home/>} />
        <Route path='/clothing' element = {<Category/>} />
        <Route path='/cosmetics' element = {<Category/>} />
        <Route path='/electronics' element = {<Category/>} />
        <Route path='/products' element = {<Products/>} />
        <Route path='/products/:id' element = {<Products/>} />
      </Routes>
    </div>
  )
}

export default routers