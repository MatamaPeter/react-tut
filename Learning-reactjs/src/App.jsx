
import './App.css'
import Classbasedcomponent from './components/class-based-components'
import FunctionalComponent from './components/functional-component'
import ProductList from './components/products'

const dummyProductData = ['product1', 'product2', 'product3', 'product4', 'product5'];


function App() {

  return (
    <div>
      <h1>My First React App</h1>
      <Classbasedcomponent />
      <FunctionalComponent />
      <ProductList listOfProducts={dummyProductData} name="Matama" city="Mombasa"/>
    </div>

  )
}

export default App
