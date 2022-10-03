import Image from "next/image";
import styles from "../styles/Footer.module.css";
import logoFooter from "../assets/logoFooter.svg";

export default function Footer (){

    return(
        <footer className={styles.footer}>
            <div className={styles.footer__divItems}>
                <ul className={styles.ul}>
                    <li><a>Últimas noticias</a></li>
                    <li><a>Espectáculos</a></li>
                    <li><a>Columnistas</a></li>
                    <li><a>Loterías y sorteos</a></li>
                    <li><a>Política</a></li>
                    <li><a>Cine & Series</a></li>
                    <li><a>Verificador</a></li>
                    <li><a>Feriados 2022</a></li>
                    <li><a>Elecciones 2022</a></li>
                    <li><a>Mundo </a></li>
                    <li><a>Datos LR</a></li>
                    <li><a>Horóscopo chino</a></li>
                    <li><a>Economía</a></li>
                    <li><a>Tendencias</a></li>
                    <li><a>Argentina</a></li>
                    <li><a>Nombre del Año 2022</a></li>
                    <li><a>Sociedad</a></li>
                    <li><a>Tecnología</a></li>
                    <li><a>México</a></li>
                    <li><a>Deportes</a></li>
                    <li><a>Cultura Asiática</a></li>
                    <li><a>Venezuela</a></li>
                </ul>
            </div>
            <div className={styles.imageGLR}>
                <Image src={logoFooter} alt="logo-Footer" width={225} height={40}/>
                <p>© Todos los derechos reservados - 2022</p>
                <p>Políticos y estándares - Términos de Uso </p>
                <p>Contáctenos</p>
            </div>


        </footer>
    )
}