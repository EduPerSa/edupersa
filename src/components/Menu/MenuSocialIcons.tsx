import Icon from "../UI/Icon/Icon";
import github from "../../assets/github-icon.jpg";
import linkedin from "../../assets/linked-in-icon.jpg";


export default function MenuSocialIcons() {
    return (
        <>
            <Icon href="https://github.com/EduPerSa" src={github} alt="Github Icon"/>
            <Icon href="https://www.linkedin.com/in/edu-persa/" src={linkedin} alt="LinkedIn Icon"/>
        </>
    )
}