import AboutMe from "./components/AboutMe/AboutMe.tsx";
import Menu from "./components/Menu/Menu.tsx";
import SliderSection from "./components/SliderSection/SliderSection.tsx";

export default function App() {
    return (
        <>
            <Menu></Menu>
            <AboutMe/>
            <SliderSection/>
        </>
    )
}