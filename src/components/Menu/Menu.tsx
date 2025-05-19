import styles from "./Menu.module.css";

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
                        <a href="">
                            <span>
                                About me
                            </span>
                        </a>
                        <a href="">
                            <span>
                                Technologies
                            </span>
                        </a>
                        <a href="">
                            <span>
                                Porfolio
                            </span>
                        </a>
                        <a href="">
                            <span>
                                Contact
                            </span>
                        </a>
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