import { Carousel } from "bootstrap";
import QuoteReview from "./QuoteReview";
import styles from "./Reviews.module.css"
import CarouselReview from "./CarouselReview";

export const Reviews = () => {
    return (
        <>
        <section className={styles.sectionReviews}>
            <div className={styles.divImage}>
                <img src="./reviews.jpg" className={styles.imageReviews}></img>
            </div>
            <div className={styles.divQuotes}>
                <h4>TESTIMONIOS</h4>
                <h3 className={styles.titleSection}>Nuestros pacientes</h3>
                <QuoteReview></QuoteReview>
            </div>
        </section>
        </>
    )
}

export default Reviews;