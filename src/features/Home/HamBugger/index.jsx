import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faTimes} from "@fortawesome/free-solid-svg-icons";
import style from "./index.module.css"
import {useState} from "react";

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
                <p>Reading List</p>
                <p>Search Book</p>
            </div>
        </div>
    );
};

export default HamBugger;
