import {useEffect, useState} from "react";
import Header from "./components/Header/Header";
import './App.css';
import CardGroup from "./components/CardGroup/CardGroup";
import fetchData from "./components/helpers/fetchData";
import SideModal from "./components/SideModal/SideModal";

function App() {
    const [products, setProducts] = useState([])
    const [cartProducts, setCartProducts] = useState([])
    const [isModalOpen, setIsModalOPen] = useState(false)

    useEffect(() => {
        fetchData().then(data => setProducts(data.products)).catch(err => console.log(err))
    }, [])

    const handleModalCount = (sign, id) => {
        setCartProducts(prev => prev.map(el => {
            if (el.id === id) {
                return sign === '-' && el.count > 1 ? {...el, count: el.count - 1} : (sign === '+' ? {
                    ...el,
                    count: el.count + 1
                } : el)
            }

            return el
        }))
    }


    const modalHandler = () => {
        setIsModalOPen(!isModalOpen)
    }


    const modalRowDelete = (id) => {
        setCartProducts(cartProducts.filter(el => el.id !== id))
    }


    const addCardProduct = (newProduct) => {
        if (newProduct.count > 0) {
            const newCardProducts = [...cartProducts]
            const indexOfNewproduct = newCardProducts.findIndex(prod => prod.id === newProduct.id)
            if (indexOfNewproduct >= 0) {
                newCardProducts[indexOfNewproduct] = newProduct
                setCartProducts(newCardProducts)
            } else {
                setCartProducts(prev => [...prev, newProduct])
            }
        } else {
            modalRowDelete(newProduct.id)
        }

    }


    return (<>
        <Header cardProductsCounts={cartProducts.length} openModal={isModalOpen} modalHandler={modalHandler}/>
        <div className="container app-container">
            <aside className='aside_left'></aside>
            <CardGroup products={products} addCardProduct={addCardProduct}/>
            {
                isModalOpen &&
                <SideModal handleModalCount={handleModalCount} modalToggle={modalHandler}
                           modalRowDelete={modalRowDelete} cardProducts={cartProducts}/>
            }
        </div>
    </>);
}

export default App;


