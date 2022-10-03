import Image from "next/image";
import styles from "../styles/SideBar.module.css"


export default function SideBar({props}){
   
    return(
        <section className={styles.sideBar}>
            <ul>
                {
                   props.map((article, index)=>{
                        return(
                            <li key={index} className={styles.articles}>
                                <div className={styles.articles__div} >
                                    <p className={styles.p}>{article.title}</p>
                                    <span className={styles.span}>Por: {article.label}</span>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    )
}