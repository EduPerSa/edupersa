import type { ReactNode } from "react";
import styles from "./LinkSection.module.css";

interface MyProps {
    href: string;
    children?: ReactNode;
}

export default function LinkSection({href = "", children ="Conoce mas ..."}: MyProps) {
    return (
        <ul className={styles["link-section-container"]}>
            <li>
                <a href={href}> {children} </a>
            </li>
        </ul>
    )
}