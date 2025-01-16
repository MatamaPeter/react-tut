import ProductItem from './components/product-item';
import "./style.css";

function ProductList({ name, city ,listOfProducts} ) {

    return (
        <div>
            <h1 className='title'>Ecommerce Projecct</h1>
            <h4>Name is {name} from {city}</h4>
            <ul>
            {listOfProducts.map((item,index) => (
                <ProductItem singleItem={item} key={index}/>
            ))}
            </ul>      
        </div>
    )
}



export default ProductList