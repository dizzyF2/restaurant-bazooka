import './App.css'
import FoodCategory from './components/FoodCategory'
import Hero from './components/Hero'
import MenuPreview from './components/MenuPreview'
import ShowCase from './components/ShowCase'


function App() {
  return (
    <div className='text-white'>
      <div className='flex flex-col gap-10 my-10'>
        <Hero />
        <FoodCategory />
        <ShowCase />
        <MenuPreview />
      </div>
    </div>
  )
}

export default App
