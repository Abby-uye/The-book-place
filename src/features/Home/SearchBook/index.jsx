import {useState, useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import style from "./index.module.css"
import {faAngleDown, faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const SearchBook = ()=>{
    const [title, setTitle] = useState("")
    const [books, setBooks] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate()

    const [isOpen, setIsOpen] = useState(false);
    const toggleDropDown = ()=>{
        setIsOpen(!isOpen)
    };

useEffect(()=>{
    localStorage.setItem("id",JSON.stringify({
        value:'1',
        expiry: new Date()
    }))
})

    const readerId = JSON.parse(localStorage.getItem("id")).value;
    const handleSearch = async  (event)=> {
        event.preventDefault()
        try {

            const response = await fetch(`http://localhost:8585/api/v1/the-library-press/search-book/${readerId}`,{
                method : "POST",
                headers : {
                    "Content-Type" :"application/json"
                },
                body: JSON.stringify({title})

            })


            if (response.ok){

                const data = await response.json()
                 setBooks(data.books)
                setErrorMessage("")
                 navigate("/displayResults",{ state: { books: data.books } })
                console.log("The books returned"+books)
            }
            else {
                const errorData = await response.json()
                setBooks([])
                console.log(errorData.error)
                setErrorMessage(errorData.error)
            }
        }
        catch (error){
            console.log("An error occurred while fetching book",error)
            setErrorMessage("failed to fetch book")
        }


    }

    const handleBookSearch = (event)=>{
        setTitle(event.target.value)
    }



return(
    <div className={style.mainCont}>
        <div className={style.search}>
            <label htmlFor="all">All</label>
            <div onClick={toggleDropDown}>
                <FontAwesomeIcon icon={faAngleDown}/>
            </div>

            {/*{isOpen && (*/}
            {/*    <div className={style.dropDownOptions}>*/}
            {/*        <a href="#" onClick={() => handleOptionSelect("title")}>Title</a>*/}
            {/*        <a href="#" onClick={() => handleOptionSelect("authors")}>Author</a>*/}
            {/*        <a href="#" onClick={() => handleOptionSelect("subjects")}>Subject</a>*/}
            {/*        <a href="#" onClick={() => handleOptionSelect("advanced")}>Advanced</a>*/}
            {/*    </div>*/}
            {/*)}*/}
        </div>
        <div className={style.styleInput}>
        <input
            type={"text"}
            placeholder={"Enter a book title"}
            name={"search"}
            onChange={handleBookSearch}
            className={style.searchBook}
        />
            <button
            onClick={handleSearch}
            >
        <FontAwesomeIcon icon={faSearch} className={style.searchLogo}/>
            </button>
        </div>
    </div>

)


}

export default SearchBook