import type { MouseEvent } from "react";

import styles from "./MenuButton.module.css";

interface MyProps {
    /** What is wrapped for the component */
    // children: ReactNode | ReactNode[];
    /** Texto to click */
    text: string;
    /** Link to. */
    link?: string;
    /** All others props */
    className?: string;
    /** The element is selected */
    selected?: boolean;
    onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
}


const MenuButton = ({ text, link, className, selected, onClick }: MyProps) => {

    const cssStyle = `${styles["link-container"]} ${className? className : null} ${selected? styles["selected"]: null}`

    return (
        <a href={link} className={cssStyle} onClick={onClick}>
            <span>
                {text}
            </span>
        </a>
    )
}

export default MenuButton;

