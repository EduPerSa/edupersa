import type { MouseEvent } from "react";
import styles from "./Icon.module.css";

interface MyProps {
    href?: string;
    src: string;
    alt: string;
    onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
}


const Icon = ({ href, src, alt, onClick }: MyProps) => {
    return(
        <a href={href} target="_blank" className={styles["icon-container"]} onClick={onClick}>
            <img src={src} alt={alt} className={styles["icon"]}/>
        </a>
    )
}

export default Icon;