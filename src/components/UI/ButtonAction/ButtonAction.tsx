import type { ReactNode, MouseEvent } from "react";

import styles from "./ButtonAction.module.css";

interface MyProps {
onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
children?: ReactNode;
onlyText?: boolean;
disabled?: boolean;
className?: string;
}

const ButtonAction = ({ onClick, children, onlyText, disabled, className }: MyProps) => {

    let cssClass = `${styles["button-action"]} ${className}`;

    if (onlyText) {
        cssClass += ` ${styles["only-text"]}`;
    }

    return (
        <button onClick={onClick} className={cssClass} disabled={disabled}>
            { children }
        </button>
    )
}

export default ButtonAction;