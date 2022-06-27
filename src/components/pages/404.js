import ErrorMessage from "../errorMessage/ErrorMessage";
import { useNavigate } from 'react-router-dom';


const Page404 = () => {
    const history = useNavigate();

    const updatePath = () => {
        history(-1) ? history(-1) : history("/");
    }
    
    return (
        <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
            <ErrorMessage/>
            <p style={{textAlign: 'center', fontWeight: 'bold', fontSize: '24px'}}> This page not found </p>
            <button 
                onClick={updatePath} 
                style={{cursor: 'pointer', marginTop: '30px', backgroundColor: 'lightblue',padding: '5px',  width: 'auto', textAlign: 'center', fontWeight: 'bold', fontSize: '24px'}}>
                Go Back
                {/* <Link style={{padding: '5px',  width: 'auto', textAlign: 'center', fontWeight: 'bold', fontSize: '24px'}} to="/">Back to main page</Link> */}
            </button>
        </div>
    )
}

export default Page404;