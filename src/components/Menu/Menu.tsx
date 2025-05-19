import type { MouseEvent } from "react";
import styles from "./Menu.module.css";
import ButtonAction from "../UI/ButtonAction/ButtonAction.tsx";
import Logo from "../../assets/react.svg";
import MenuButton from "./MenuButton.tsx";
import { useState } from "react";


export default function Menu() {

    const [menuSelected, setMenuSelected] = useState<string>("");

    function handleSetMenuSelected(event: MouseEvent<HTMLAnchorElement>, menuString: string) {
        event.preventDefault();
        setMenuSelected(menuString);
    }

    return (
        <div className={styles["header-container"]}>
            <header className={styles["header"]}>
                <div className={styles["logo-container"]}>
                    <img src={Logo} alt="Logo" />
                    <span> edupersa </span>
                </div>
                <div className={styles["menu-container"]}>
                    <nav className={styles["buttons-container"]}>
                        <MenuButton
                            link=""
                            selected={menuSelected === "about"}
                            onClick={(event) => handleSetMenuSelected(event, "about")}
                            text="About me"
                        />
                        <MenuButton
                            link=""
                            selected={menuSelected === "porfolio"}
                            onClick={(event) => handleSetMenuSelected(event, "porfolio")}
                            text="Portfolio"
                        />
                        <MenuButton
                            link=""
                            selected={menuSelected === "touch"}
                            onClick={(event) => handleSetMenuSelected(event, "touch")}
                            text="Get in touch"
                        />

                        <ButtonAction onlyText onClick={() => alert("HOLA...")}> Selector de Idiomas </ButtonAction>
                    </nav>
                    <div className={styles["social-container"]}>
                        Imagenes de Redes Sociales
                    </div>
                </div>
            </header>
        </div>
    )
}