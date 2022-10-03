import Image from "next/image";
import styles from "../styles/FrontPage.module.css"
import SideBar from "./sideBar";
import candidate from "../assets/gonzalo-alegria.jpg";
import data from "../data-json/data.json"

export default function FrontPage(){

    return(
        <section className={styles.frontPage}>
            <div className={styles.front__divImage}>
                
                    <Image 
                        src={candidate} 
                        alt="candidate-gonzalo"
                        width={600}
                        height={400}
                        className={styles.front__image}
                    />
                               
                <div className={styles.principalTitle}>
                    <p className={styles.red__spaceDestokp}></p>
                    <h1>Gonzalo Alegría no se retirará de campaña electoral pese a denuncias de violencia</h1>
                    <p>Por: Política LR</p>
                </div>
            </div>
            <SideBar props={data.data[0].articles} className={styles.newsAside}/>
        </section>
    )
}