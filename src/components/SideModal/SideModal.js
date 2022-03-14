import {useRef} from "react";
import ModalRow from "./ModalRow/ModalRow";


function SideModal({cardProducts, modalToggle, handleModalCount, modalRowDelete}) {
    const modalContentRef = useRef()
    const modalBodyClickHandler = (evt) => {
        if (evt.target !== modalContentRef.current && !modalContentRef.current.contains(evt.target)) {
            modalToggle()
        }
    }
    const totalAmount = cardProducts.reduce((acc, next) => {
        return acc += next.count * next.price
    }, 0)
    return (
        <div className="modal-container" onClick={modalBodyClickHandler}>
            <div className="modal-contentt" ref={modalContentRef}>
                <div className="modal-head">
                    <span>MY CART</span>
                    <button className='modal-close-button' onClick={modalToggle}>&times;</button>
                </div>
                <div className="modal-boddy">
                    {cardProducts.length === 0 && <div className='emptyCartMessage'><h4>Cart is empty!!!</h4></div>}
                    {cardProducts.map(cartProduct => <ModalRow key={cartProduct.id}
                                                               modalRowDelete={modalRowDelete}
                                                               cartProduct={cartProduct}
                                                               handleModalCount={handleModalCount}/>)}
                </div>
                <div className="modal_footer">
                    Total Amount: {totalAmount} AMD
                </div>
            </div>
        </div>
    )
}


export default SideModal