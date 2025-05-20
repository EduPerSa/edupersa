import styles from "./Menu.module.css";

import ButtonAction from "../UI/ButtonAction/ButtonAction.tsx";
import MenuNav from "./MenuNav.tsx";
import MenuLogo from "./MenuLogo.tsx";


export default function Menu() {

    return (
        <div className={styles["header-container"]}>
            <header className={styles["header"]}>
                <MenuLogo />
                <div className={styles["menu-container"]}>
                    <MenuNav />
                    <ButtonAction onlyText onClick={() => alert("HOLA...")}> Selector de Idiomas </ButtonAction>
                    <div className={styles["social-container"]}>
                        Imagenes de Redes Sociales
                    </div>
                </div>
            </header>
        </div>
    )
}