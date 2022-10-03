import styles from "../styles/newsCards.module.css";

export default function CardsNews({props}){

    const findObject = (array, name) => {
        return array.find(elem => elem.name == name).value;
    }

    return (
        <div className={styles.newCards}>
            {
                props.map((item, index)=> (
 
                    <a key={index} className={styles.a} href={findObject(item.fields, 'url')}>
                        <img className={styles.img} src={findObject(item.fields, 'image').url} alt={findObject(item.fields, 'image').alt} />
                        <div className={styles.text}>
                            <h3 className={styles.title}>{findObject(item.fields, 'title')}</h3>
                            <p className={styles.head}> Por: {findObject(item.fields, 'header')}</p>
                        </div>
                    </a>
                ))
            }

        </div>

    )

}