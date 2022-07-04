import useMarvelService from '../../services/MarvelService';
import { useState } from 'react';
import { ErrorMessage as FormikErrorMEssage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './charSearch.scss';



const CharSearch = () => {
    const {error, loading, getCharacterByName} = useMarvelService();
    const [char, setChar] = useState(null);

    const updateChar = (name) => {
        getCharacterByName(name)
            .then(onCharLoaded);
    }

    const onCharLoaded = (char) => {
            setChar(char);
        }

   
    const SearchSuccess = () => {
        return (
            <div className='char__search-info'>
                <div className='char__search-success'>
                    There is! Visit 
                        <span className='search-success'> {char[0].name} </span> 
                    page?
                </div>
                <Link to={`/characters/${char[0].id}`} className="button button__secondary">
                    <div className="inner">TO PAGE</div>
                </Link>
            </div>  
        )
    }
    const errorMessage = error ? <div className='char__search-critical-error'><ErrorMessage/></div> : null;
    const results = !char ? null : char.length > 0 ? <SearchSuccess/> : <div className='char__search-error'>The character was not found. Check the name and try again.</div>

    return (
        
        <div className="char__search">
            <Formik 
                initialValues={{
                    charName: '',
                }}
                validationSchema = {Yup.object({
                    charName: Yup.string()
                            .max(30, "Max length is 15")
                            .required("This field is required"),
                })}
                onSubmit = {(values) => {
                    updateChar(values.charName);
                }}
            >
                <Form>
                    <label htmlFor="search">
                        Or find character by Name:     
                    </label>
                    <div className="char__search-panel">
                        <Field 
                            id="search" 
                            name="charName" 
                            type="text"
                            placeholder="Enter name"
                            className="char__search-input"
                        />
                        <button 
                            type="submit" 
                            className='button button__main'
                            disabled={loading}>
                            <div className="inner">
                                FIND
                            </div>
                        </button>
                    </div>
                    <FormikErrorMEssage component='div' className='char__search-error' name="charName"/>
                </Form>
            </Formik>
            {results}
            {errorMessage}
        </div>
    )
}



export default CharSearch;