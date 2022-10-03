import Image from "next/image";
import styles from "../styles/Header.module.css";
import logoGLR from "../assets/logo-lr.svg";
import menu from "../assets/menu.png";
import elections from "../assets/elecciones-2022.png";
import returnBtn from "../assets/return.png";
import { useState } from "react";

export default function Header (){
    const [openMenu, setOpenMenu] = useState(false);

    return(
    <header className={styles.header} >
        <div className={styles.header__return}> 
            <span className={styles.header__returnSpan}>Regresar a</span>
            <Image 
                src={logoGLR}
                alt="logo-GLR"
                width={90}
                height={30}
                className={styles.header__returnItem}
                id={styles.logoGLR} />
            <span  className={styles.header__returnItem}>
                <Image 
                    src={returnBtn} 
                    alt="return" 
                    id={styles.returnBtn}
                    width={15}
                    height={15}
                />
            </span>
        </div>
        <nav className={styles.nav}>
            <div className={styles.nav__divLogo}>
                <button className={styles.nav__buttonMenu}>
                    <Image 
                        src={menu} 
                        alt="menu-hamburguer" 
                        id="menu-hamburguer"
                        className={styles.nav__hamburger}
                        onClick={ () => setOpenMenu(!openMenu)}
                    />
                </button>
                <span>
                    <Image 
                    src={elections}  
                    alt ="Logo_elecciones"
                    width={205}
                    height={50}
                    id="logo-elecciones" />
                </span>
            </div>
            { openMenu && (
                <div className={styles.navBar}>
                    <a >Inicio</a>
                    <a >Elecciones 2022</a>
                    <a >Debate Municipal</a>
                    <a >Miembro de Mesa</a>
                    <a >Local de votación</a>
                    <a >ONPE</a>
                </div>
            )}
            <div className={styles.navBarDesktop}>
                <a >Inicio</a>
                <a >Elecciones 2022</a>
                <a >Debate Municipal</a>
                <a >Miembro de Mesa</a>
                <a >Local de votación</a>
                <a >ONPE</a>
            </div>
        </nav>

    </header>


    )
} 
