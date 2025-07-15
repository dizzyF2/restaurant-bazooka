import './App.css'
import FoodCategory from './components/FoodCategory'
import Hero from './components/Hero'
import Header from './components/layouts/Header'


function App() {
  return (
    <div className='text-white'>
      <Header />
      <div className='flex flex-col gap-20'>
        <Hero />
        <FoodCategory />
      </div>
    </div>
  )
}

export default App
