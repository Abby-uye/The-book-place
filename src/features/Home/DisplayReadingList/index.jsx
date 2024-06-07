import {useLocation} from "react-router-dom";
import style from "./index.module.css";

const DisplayReadingList = ()=>{

    const location = useLocation();
    const { readingList } = location.state;
    const handleNavigateToFormat = (formatURL) => {
        window.open(formatURL, "_blank");
    };

return (
    <div className={style.displayResult}>

        <ul>
            {readingList.map((book) => (
                <div className={style.container} key={book.bookId}>
                    <li><span>Title: </span> {book.title}</li>
                    <li><span>Author: </span> {book.author.join(", ")}</li>
                    <li><span>Subjects: </span> {book.subjects}</li>
                    <li><span>Bookshelves: </span>{book.bookshelves}</li>
                    <li><span>Languages: </span> {book.languages}</li>
                    <button onClick={() => handleNavigateToFormat(book.formats[0])}
                            className={style.navigateBtn}
                    >Read
                    </button>
                </div>
            ))}
        </ul>

    </div>
)
}
export default DisplayReadingList
