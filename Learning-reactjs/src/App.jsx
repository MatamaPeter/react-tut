
import './App.css'
import Classbasedcomponent from './components/class-based-components'
import FunctionalComponent from './components/functional-component'
import ProductList from './components/products'

function App() {

  return (
    <div>
      <h1>My First React App</h1>
      <Classbasedcomponent />
      <FunctionalComponent />
      <ProductList name="Matama" city="Mombasa"/>
    </div>

  )
}

export default App
