import {useEffect, useState} from "react";
import StarsImage from '../../assets/stars.png'
import whiteCartIcon from '../../assets/whiteCartSvg.svg'


function Card({product, addCardProduct, handleModalCount}) {

    const [showBasket, setShowBasket] = useState(product.count === 0)


    useEffect(() => {
        if (product.count === 0) {
            setShowBasket(true)
        }
    }, [product])

    const percent = parseInt((5 - product.rating).toFixed(2) * 100 / 5) + '%'


    return (
        <div className="my_card">
            <div className="img_container">
                <img className='card_image' src={product.images[0]} alt={product.title}/>
            </div>
            <div className='card_info'>
                <div className="card-body">
                    <h5 className="card_title">{product.description}</h5>
                    <div className='stars_container'>
                        <div><img className='star_image' src={StarsImage} alt="rating"/></div>
                        <div className='star_cover' style={{width: percent}}></div>
                    </div>
                    <span className='price_span'>
                        <sup>$</sup>
                        <span className="product-price">{product.price}</span>
                        <sup>00</sup>
                    </span>

                    <div>
                        <div className="add-cart-button">
                            {
                                showBasket &&
                                <button onClick={() => setShowBasket(false)}>
                                    <img src={whiteCartIcon} alt="shopping-cart"/>
                                </button> ||
                                <>
                                    <button className="btn-quantity"
                                            onClick={() => handleModalCount('-', product.id)}>-
                                    </button>
                                    <span className="selected-count">{product.count}</span>
                                    <button className="btn-quantity"
                                            onClick={() => handleModalCount('+', product.id)}>+
                                    </button>
                                </>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Card