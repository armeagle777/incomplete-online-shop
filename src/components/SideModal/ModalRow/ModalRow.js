import classes from '../Modal.module.css'
import TrashIcon from '../../../assets/trash.png'


function ModalRow({cartProduct, handleModalCount, modalRowDelete}) {

    return (
        <div className={classes.modal_row}>
            <div className={classes.modal_row_img}><img src={cartProduct.images[0]} className={classes.row_img} alt=""/>
            </div>
            <div className={classes.modal_row_body}>
                <div className={classes.row_title}>
                    <span>{cartProduct.title}</span><span>{cartProduct.count * cartProduct.price}AMD</span>
                </div>
                <div className={classes.row_buttons}>
                    <div>
                        <button className="btn-quantity" onClick={() => {
                            if (cartProduct.count > 1) {
                                handleModalCount('-', cartProduct.id)
                            }
                        }}>-
                        </button>
                        <span>{cartProduct.count}</span>
                        <button className="btn-quantity" onClick={() => {
                            handleModalCount('+', cartProduct.id)
                        }}>+
                        </button>
                    </div>
                    <button onClick={() => {
                        modalRowDelete(cartProduct.id)
                    }} className={classes.trash_button}><img src={TrashIcon} alt=""/></button>
                </div>
            </div>
        </div>
    )
}


export default ModalRow