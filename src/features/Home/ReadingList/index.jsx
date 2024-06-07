import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

const ReadingList = ()=>{
    const[readingList,setReadingList] = useState([])
    const [errorMessage,setErrorMessage] = useState("")
    const navigate = useNavigate()
    const [readerId,setReaderId] = useState("")
    useEffect(() => {
         const retrievedData = localStorage.getItem("id");

        if (retrievedData) {
            const data = JSON.parse(retrievedData);
            setReaderId(data)
        }
    }, []);
    const handleGetReadingList = async ()=>{
        try {
            const response =await fetch("http://localhost:8585/api/v1/the-library-press/get-reading-list", {
                method: "POST",
                headers:{
                    "Content-Type" :"application/json"
                },
                body:JSON.stringify(readerId)
            })
            if(response.ok){
            const data = response.json()
                setErrorMessage("")
                setReadingList(data.readingList)
                navigate("/readingList")
            }
            else {
                const errorData = response.json()
                setErrorMessage(errorData.err)
                setReadingList([])
            }
        }
        catch (error){
            console.log("An error occurred while fetching book",error)
            setErrorMessage("failed to fetch book")
        }
        }

        return(
                <div>
                    <button
                    onClick={handleGetReadingList}
                    >
                        My List
                    </button>
                </div>
            )
}
export default ReadingList