import styles from './styles.module.css'
function Buttoncomponent() {
    return <button className={styles.btnStyle}>click</button>
}
function ProductItem({ singleItem }, key) {
    return (
        <div key ={key}>
            <p style={{ fontWeight: "bolder" }}>{singleItem}</p>
            <Buttoncomponent />
            
        </div>
    )
}
export default ProductItem;