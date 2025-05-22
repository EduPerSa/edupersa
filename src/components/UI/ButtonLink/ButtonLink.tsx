import type { MouseEvent } from "react";

import styles from "./ButtonLink.module.css";

interface MyProps {
    /** What is wrapped for the component */
    // children: ReactNode | ReactNode[];
    /** Texto to click */
    text: string;
    /** Link to. */
    href?: string;
    /** All others props */
    className?: string;
    /** The element is selected */
    selected?: boolean;
    onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
    onlyText?: boolean;
}


const ButtonLink = ({ text, href, className, selected, onClick, onlyText }: MyProps) => {

    let cssStyle = `${styles["link-container"]} ${className? className : ""}`

    if (selected) {
        cssStyle += ` ${styles["selected"]}`
    }

    if (onlyText) {
        cssStyle += ` ${styles["only-text"]}`
    }

    return (
        <a href={href} className={cssStyle} onClick={onClick}>
            <span>
                {text}
            </span>
        </a>
    )
}

export default ButtonLink;

