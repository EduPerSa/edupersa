import styles from "./AboutMe.module.css";

import LinkSection from "../UI/LinkSection/LinkSection";

const AboutMe = () => {

    return (
        <section id="about-me" className={styles["about-section"]}>
            <header className={styles["header"]}>
                <h1> Hi, I´m Edu-Persa </h1>
            </header>
            <div className={styles["info"]}>
                <span> Profesional con educacion formal como Ingeniero electronico, desarrollo profesional en ambiots de diseño web y trabajos de campo como mecanico y diversas areas...  </span>
                <LinkSection href="" />
            </div>
        </section>
    )
}

export default AboutMe;