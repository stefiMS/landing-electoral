import styles from "../styles/sectionCards.module.css";
import data from "../data-json/data.json";
import CardsNews from "./newsCards";
import { useState } from "react";

export default function SectionCards(){
    
    const [ showCards, setShowCards] = useState(false);

    return (
        <section className={styles.section}>
            <CardsNews props={ showCards ? data.data[0].data : data.data[0].data.slice(0, 5)} />
            <b className={styles.more} onClick={() => setShowCards(!showCards)}>{ showCards ? 'Ver menos noticias' : 'Ver más noticias'}</b>
        </section>
    )

}