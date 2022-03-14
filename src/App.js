import {useEffect, useState} from "react";
import Header from "./components/Header/Header";
import CardGroup from "./components/CardGroup/CardGroup";
import SideModal from "./components/SideModal/SideModal";
import {fetchData, getDataFromLocal} from "./components/helpers/fetchData";
import './App.css';


function App() {
    const [products, setProducts] = useState([])
    const [isModalOpen, setIsModalOPen] = useState(false)

    useEffect(() => {
        const localData = getDataFromLocal()
        if (localData) {
            setProducts(localData)
        } else {
            fetchData().then(data => setProducts(data.products.map(item => ({
                ...item,
                count: 0
            })))).catch(err => console.log(err))
        }
    }, [])


    useEffect(() => {
        localStorage.setItem('amazonData', JSON.stringify(products))
    }, [products])


    const changeItemCount = (sign, id) => {
        setProducts(prev => prev.map(el => {
            if (el.id === id) {
                return sign === '-' && el.count >= 1 ? {...el, count: el.count - 1} : (sign === '+' ? {
                    ...el,
                    count: el.count + 1
                } : el)
            }
            return el
        }))
    }


    const toggleModal = () => {
        setIsModalOPen(!isModalOpen)
    }


    const modalRowDelete = (id) => {
        setProducts(products.map(el => el.id === id ? {...el, count: 0} : el))
    }

    const getBasketItems = () => {
        return products.filter(item => item.count > 0)
    }


    return (
        <>
            <Header cardProductsCounts={getBasketItems().length} isModalOpen={isModalOpen} modalHandler={toggleModal}/>
            <div className="container app-container">
                <aside className='aside_left'></aside>
                <CardGroup products={products} changeItemCount={changeItemCount}/>
                <SideModal
                    isModalOpen={isModalOpen}
                    changeItemCount={changeItemCount}
                    modalToggle={toggleModal}
                    modalRowDelete={modalRowDelete}
                    cardProducts={getBasketItems()}
                />
            </div>
        </>
    );
}

export default App;


