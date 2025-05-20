import styles from "./MenuLogo.module.css";

import Logo from "../../assets/react.svg";

export default function MenuLogo() {
    return (
        <div className={styles["logo-container"]}>
            <img src={Logo} alt="Logo" />
            <span> edupersa </span>
        </div>
    )
}