import type React from "react";
import type { ReactNode } from "react";

import styles from "./MenuButton.module.css";

interface MyProps {
    /** What is wrapped for the component */
    children: ReactNode | ReactNode[];
    /** Link to. */
    link?: string;
    /** All others props */
    className?: string;
}


const MenuButton: React.FC<MyProps> = ({ children, link, className }) => {

    const cssStyle = `${styles["link-container"]} ${className? className : null}`

    return (
        <a href={link} className={cssStyle}>
            <span>
                {children}
            </span>
        </a>
    )
}

export default MenuButton;

