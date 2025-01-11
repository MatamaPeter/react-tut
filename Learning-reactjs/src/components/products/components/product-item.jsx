function Buttoncomponent() {
    return <button>click</button>
}
function ProductItem() {
    return (
        <div className="product-item">
            <p>Product 1</p>
            <Buttoncomponent />
            
        </div>
    )
}
export default ProductItem;