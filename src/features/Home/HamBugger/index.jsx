import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faTimes} from "@fortawesome/free-solid-svg-icons";
import style from "./index.module.css"
import {useState} from "react";
import ReadingList from "../ReadingList";

const HamBugger = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            {isOpen ? (
                <FontAwesomeIcon icon={faTimes} onClick={toggleOpen} className={style.faTimes} />
            ) : (
                <FontAwesomeIcon icon={faBars} onClick={toggleOpen} className={style.faBars} />
            )}

            <div className={`${style.menu} ${isOpen ? style.active : ''}`}>
                <p>Home</p>
                <ReadingList/>
                <p>Search Book</p>
            </div>
        </div>
    );
};

export default HamBugger;
