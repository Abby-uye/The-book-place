import { useLocation } from 'react-router-dom'
import style from "./index.module.css"

const DisplaySearchResults = ()=>{
    const location = useLocation();
    const { books } = location.state;
    return (
        <div className={}>
            <h1>Search Results</h1>
            <ul>
                {books.map((book) => (
                    <li key={book.id}>{book.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default DisplaySearchResults