import { useState } from "react";
import type { MouseEvent } from "react";

import styles from "./MenuNav.module.css";
import ButtonLink from "../UI/ButtonLink/ButtonLink.tsx";

export default function MenuNav() {

    const [menuSelected, setMenuSelected] = useState<string>("");

    function handleSetMenuSelected(event: MouseEvent<HTMLAnchorElement>, menuString: string) {
        event.preventDefault();
        setMenuSelected(menuString);
    }

    console.log("Menu, menuSelected --->", menuSelected);

    return (
        <nav className={styles["nav-container"]}>
            <ButtonLink
                href="#about-me"
                selected={menuSelected === "about"}
                onClick={(event) => handleSetMenuSelected(event, "about")}
                text="About me"
                onlyText
            />
            <ButtonLink
                href="#slider"
                selected={menuSelected === "porfolio"}
                onClick={(event) => handleSetMenuSelected(event, "porfolio")}
                text="Portfolio"
                onlyText
            />
            <ButtonLink
                href=""
                selected={menuSelected === "touch"}
                onClick={(event) => handleSetMenuSelected(event, "touch")}
                text="Get in touch"
                onlyText
            />
        </nav>
    )
}