import React from 'react'
import Navbar from './components/Navbar/navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Shop from './pages/shop.jsx'
import ShopCategory from './pages/shopCategory'
import Product from './pages/product.jsx'
import Cart from './pages/cart.jsx'
import LoginSignUp from './pages/loginSignUp.jsx'
import Footer from './components/footer/footer.jsx'
import ManBanner from './components/assets/banners/manBanner/manBanner.jsx'
import WomanBanner from './components/assets/banners/womanBanner/womanBanner.jsx'
import KidsBanner from './components/assets/banners/kidsBanner/kidsBanner.jsx'



function App() {
  return (
    <div>

      <BrowserRouter>
        <Navbar/>
        
        <Routes>

          <Route path='/' element={<Shop />}/>
          <Route path='/men' element={<ShopCategory banner={<ManBanner/>} category="men"/>}/>
          <Route path='/women' element={<ShopCategory banner={<WomanBanner/>} category="women"/>}/>
          <Route path='/kids' element={<ShopCategory banner={<KidsBanner/>} category="kids"/>}/>
          {/* <Route path='/product' element={<Product/>}>
                <Route path=':productID' element={<Product />}/>
          </Route> */}
          <Route path="/product/:productID" element={<Product />} />
          <Route path='/cart' element={<Cart />}/>
          <Route path='/login' element={<LoginSignUp />}/>
                
          </Routes>

          <Footer/>
          

      </BrowserRouter>

      
    </div>
  )
}

export default App


// import React from 'react'
// import DarkMode from './DarkMode/darkMode'

// function App() {
//   return (
//     <div>

//       <DarkMode/>
      
//     </div>
//   )
// }

// export default App

