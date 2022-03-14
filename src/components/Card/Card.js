import {useEffect, useState} from "react";
import StarsImage from '../../assets/stars.png'

export default function Card({product, addCardProduct}) {
    const [selectedCount, setSelectedCount] = useState(null)
    useEffect(() => {
        if (selectedCount !== null) {
            const newItem = {...product, count: selectedCount}
            addCardProduct(newItem)
        }
    }, [selectedCount])
    const minusClickHandler = () => {
        if (selectedCount > 0) {
            setSelectedCount(prev => prev - 1)
        }
    }
    const plusClickHandler = () => {
        setSelectedCount(prev => prev + 1)
    }
    const percent = parseInt((5- product.rating).toFixed(2) * 100 /5) + '%'
    return (
        <div className="my_card">
            <div className="img_container">
                <img className='card_image' src={product.images[0]} alt={product.title}/>
            </div>
            <div className='card_info'>
                <div className="card-body">
                    <h5 className="card_title">{product.description}</h5>
                    <div className='stars_container'>
                        <div><img className='star_image' src={StarsImage} alt=""/></div>
                        <div className='star_cover' style={{width:percent}}> </div>
                    </div>
                    <span
                        className='price_span'><sup>$</sup><span
                        className="product-price">{product.price}</span><sup>00</sup></span>
                    <div>
                        <button className="btn-quantity" onClick={minusClickHandler}>-</button>
                        <span className="selected-count">{selectedCount || '0'}</span>
                        <button className="btn-quantity" onClick={plusClickHandler}>+</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
