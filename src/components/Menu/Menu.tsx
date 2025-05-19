import styles from "./Menu.module.css";

import MenuButton from "./MenuButton.tsx";

export default function Menu() {
    return (
        <div className={styles["header"]}>
            <header className={styles["header-container"]}>
                <div className={styles["header-logo-container"]}>
                    <span> LOGO </span>
                    <span> Nombre </span>
                </div>
                        
                <div className={styles["header-menu-container"]}>
                    <nav>
                        <MenuButton link=""> About me </MenuButton>
                        <MenuButton link=""> Technologies </MenuButton>
                        <MenuButton link=""> Porfolio </MenuButton>
                        <MenuButton link=""> Contact </MenuButton>
                    </nav>
                    <div>
                        Selector de Idiomas
                    </div>
                    <div>
                        Imagenes de Redes Sociales
                    </div>
                </div>
            </header>
        </div>
    )
}