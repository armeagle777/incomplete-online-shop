import classes from './Preloader.module.css'


function Preloader(props) {
    return (
        <div className={classes.preloader_container}>
            <div className={classes.my_card}>
                <div className={`${classes.animated_background} ${classes.picture_animation}`}></div>
                <div className={classes.myCard_body}>
                    <div className={`${classes.animated_background} ${classes.title_animation}`}></div>
                    <div className={`${classes.animated_background} ${classes.rating_animation}`}></div>
                    <div className={`${classes.animated_background} ${classes.price_animation}`}></div>
                </div>
            </div>
            <div className={classes.my_card}>
                <div className={`${classes.animated_background} ${classes.picture_animation}`}></div>
                <div className={classes.myCard_body}>
                    <div className={`${classes.animated_background} ${classes.title_animation}`}></div>
                    <div className={`${classes.animated_background} ${classes.rating_animation}`}></div>
                    <div className={`${classes.animated_background} ${classes.price_animation}`}></div>
                </div>
            </div>
            <div className={classes.my_card}>
                <div className={`${classes.animated_background} ${classes.picture_animation}`}></div>
                <div className={classes.myCard_body}>
                    <div className={`${classes.animated_background} ${classes.title_animation}`}></div>
                    <div className={`${classes.animated_background} ${classes.rating_animation}`}></div>
                    <div className={`${classes.animated_background} ${classes.price_animation}`}></div>
                </div>
            </div>
        </div>
    );
}

export default Preloader;