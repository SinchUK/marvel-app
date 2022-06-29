import ErrorMessage from "../errorMessage/ErrorMessage";
import { Link } from 'react-router-dom';



const Page404 = () => {
    
    
    return (
        <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
            <ErrorMessage/>
            <p style={{textAlign: 'center', fontWeight: 'bold', fontSize: '24px'}}> This page not found </p>
            <Link 
                to="/"
                style={{cursor: 'pointer', marginTop: '30px', backgroundColor: 'lightblue',padding: '5px',  width: 'auto', textAlign: 'center', fontWeight: 'bold', fontSize: '24px'}}>
                Go Back
                {/* <Link style={{padding: '5px',  width: 'auto', textAlign: 'center', fontWeight: 'bold', fontSize: '24px'}} to="/">Back to main page</Link> */}
            </Link>
        </div>
    )
}

export default Page404;