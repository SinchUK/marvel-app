import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import useMarvelService from "../../services/MarvelService";

import AppBanner from "../appBanner/AppBanner";
import ErrorMessage from "../errorMessage/ErrorMessage";
import Spinner from "../spinner/Spinner";



const setContent = (process, Component, data) => {
    switch (process) {
        case 'waiting':
            return null
            // eslint-disable-next-line
            break;
        case 'loading':
            return <Spinner/>
            // eslint-disable-next-line
            break;
        case 'confirmed': 
            return <Component data={data}/>
            // eslint-disable-next-line
            break;
        case 'error':
            return <ErrorMessage/>
            // eslint-disable-next-line
            break;
        default:
            throw new Error('Unexpected process state');    
    }
}


const SinglePage = ({ Component, dataType }) => {
    const {id} = useParams();
    const [data, setData] = useState(null);

    const { process, setProcess, getComic, getCharacter, clearError } = useMarvelService();

    useEffect(() => {
        updateData();
        // eslint-disable-next-line
    }, [id])

    const updateData = () => {
        clearError();
        switch (dataType) {
            case 'comic':
                getComic(id).then(onDataLoaded)
                    .then(() => setProcess('confirmed') );
                break;
            case 'character': 
                getCharacter(id).then(onDataLoaded)
                    .then(() => setProcess('confirmed') );
                break;
            default:
                break;
        }
    }

    const onDataLoaded = (data) => {
        setData(data);
    }

  return (
    <>
        <AppBanner/>
        {setContent(process, Component, data)}
    </>
  )
}


export default SinglePage;