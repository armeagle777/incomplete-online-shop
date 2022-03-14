import classes from '../Sidemodal.module.css'
import TrashIcon from '../../../assets/trash.png'


function ModalRow({cartProduct, handleModalCount, modalRowDelete}) {

    const minusButtonHandler = () => {
        if (cartProduct.count >= 1) {
            handleModalCount('-', cartProduct.id)
        }
    }

    const plusButtonHandler = () => {
        handleModalCount('+', cartProduct.id)
    }

    const delteButtonHandler = () => {
        modalRowDelete(cartProduct.id)
    }


    return (
        <div className={classes.modal_row}>
            <div className={classes.modal_row_img}>
                <img src={cartProduct.images[0]} className={classes.row_img} alt={cartProduct.title}/>
            </div>
            <div className={classes.modal_row_body}>
                <div className={classes.row_title}>
                    <span>{cartProduct.title}</span><span>{cartProduct.count * cartProduct.price}AMD</span>
                </div>
                <div className={classes.row_buttons}>
                    <div>
                        <button
                            className="btn-quantity"
                            onClick={minusButtonHandler}
                        > -
                        </button>
                        <span>{cartProduct.count}</span>
                        <button
                            className="btn-quantity"
                            onClick={plusButtonHandler}>+
                        </button>
                    </div>
                    <button
                        className={classes.trash_button}
                        onClick={delteButtonHandler}
                    >
                        <img src={TrashIcon} alt=""/>
                    </button>
                </div>
            </div>
        </div>
    )
}


export default ModalRow