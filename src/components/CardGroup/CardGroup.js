import Card from "../Card/Card";
import Preloader from "../Preloader/Preloader";

function CardGroup({products, addCardProduct, changeItemCount}) {


    return (
        <div className='card-group-my'>
            {products.length === 0 ? <Preloader/> : products.map(product => (
                    <Card
                        key={product.id}
                        product={product}
                        handleModalCount={changeItemCount}
                        addCardProduct={addCardProduct}
                    />
                )
            )}
        </div>
    )
}

export default CardGroup