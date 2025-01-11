const dummyProductData = ['product1', 'product2', 'product3', 'product4', 'product5'];
import PropTypes from 'prop-types';

function ProductList({ name, city } ) {

    return (
        <div>
            <h1>Ecommerce</h1>
            <h4>Name is {name} from {city}</h4>
            <ul>
            {dummyProductData.map((item,index) => (
                <li key={index}>{item}</li>
               ))}
            </ul>      
        </div>
    )
}

ProductList.propTypes = {
    name: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
};

export default ProductList