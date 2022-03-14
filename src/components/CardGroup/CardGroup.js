import Card from "../Card/Card";
import Preloader from "../Preloader/Preloader";

const CardGroup = ({products,addCardProduct}) => {
    return (
        <div className='card-group-my'>
            {products.length === 0 ? <Preloader /> : products.map(product => <Card key={product.id} product={product} addCardProduct={addCardProduct}/>)}
        </div>
    )
}

export default CardGroup