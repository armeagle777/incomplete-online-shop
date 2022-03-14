import SideModal from "../SideModal/SideModal";
import {useEffect} from "react";

import AmazonBasket from './../../assets/cart.png'
import AmazonIcon from '../../assets/amazon.png'


import classes from './Header.module.css'

export default function Header({cardProductsCounts, openModal, modalHandler}) {

    useEffect(() => {
        if (openModal) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
    }, [openModal]);
    return (
        <header id={classes["container"]}>
            <div id={classes["nav-bar"]}>
                <div id={classes["nav-belt"]}>
                    <div className={classes.nav_left}>
                        <div id={classes["nav-logo"]}>
                            <a href="/"><img className={classes.amazonIcon} src={AmazonIcon} alt=""/></a>
                        </div>
                    </div>
                    <div className={classes.nav_fill}>
                        <div id={classes["nav-search"]}>
                            <form id={classes["nav-search-bar-form"]}>
                                <div className={classes.nav_left}>
                                    <a href="">ALL</a>
                                </div>
                                <div className={classes.nav_fill}>
                                    <input type="text" />
                                </div>
                                <div className={classes.nav_right}>
                                    <button type="submit">Search</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className={classes.nav_right}>
                        <div id={classes["nav-tools"]}>
                            <a href="#">Language</a>
                            <a href="#" onClick={(e)=>{
                                // e.preventDefault()
                                modalHandler()
                            }} className={classes.iconLink}><img className={classes.iconImage} src={AmazonBasket} alt=""/><sup className={classes.busketCount}>{cardProductsCounts}</sup><sub>Cart</sub></a>
                        </div>
                    </div>
                </div>
                <div id={classes["nav-main"]}></div>
            </div>
        </header>
    )
}
