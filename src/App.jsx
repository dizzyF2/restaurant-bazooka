import './App.css'
import FoodCategory from './components/FoodCategory'
import Hero from './components/Hero'
import Header from './components/layouts/Header'
import ShowCase from './components/ShowCase'


function App() {
  return (
    <div className='text-white'>
      <Header />
      <div className='flex flex-col gap-10 my-10'>
        <Hero />
        <FoodCategory />
        <ShowCase />
      </div>
    </div>
  )
}

export default App
