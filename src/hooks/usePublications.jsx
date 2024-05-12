import { useState } from "react";
import { getPublications as getPublicationsRequest } from "../services/api.jsx";


export const usePublication = () => {
    const [publications, setPublications] = useState([]);

    const getPublications = async () => {
        const responseData = await getPublicationsRequest()

        if(responseData.error){
            console.log("asdasdhaksdj")
        }
        setPublications(responseData.data)
    }

    return{
        publications,
        isFetching: !publications,
        getPublications
    }
}