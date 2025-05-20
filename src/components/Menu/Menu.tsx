import styles from "./Menu.module.css";

import ButtonAction from "../UI/ButtonAction/ButtonAction.tsx";
import Logo from "../../assets/react.svg";
import MenuNav from "./MenuNav.tsx";


export default function Menu() {

    return (
        <div className={styles["header-container"]}>
            <header className={styles["header"]}>
                <div className={styles["logo-container"]}>
                    <img src={Logo} alt="Logo" />
                    <span> edupersa </span>
                </div>
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