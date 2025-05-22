import styles from "./Menu.module.css";

import MenuNav from "./MenuNav.tsx";
import MenuLogo from "./MenuLogo.tsx";
import translateIcon from "../../assets/translate-icon.jpg";
import Icon from "../UI/Icon/Icon.tsx";
import MenuSocialIcons from "./MenuSocialIcons.tsx";

export default function Menu() {

    return (
        <div className={styles["header-container"]}>
            <header className={styles["header"]}>
                <MenuLogo />
                <div className={styles["menu-container"]}>
                    <MenuNav />
                </div>
                <Icon src={translateIcon} alt="Translate..." onClick={() => alert("Proximamente seleccion de lenguaje...")} />
                <div className={styles["icon-container"]}>
                    <MenuSocialIcons />
                </div>
            </header>
        </div>
    )
}