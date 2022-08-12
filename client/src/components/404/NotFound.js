import { useParams } from 'react-router-dom'

import './NotFound.css'

export default function NotFound() {
    const params = useParams();
    const identifyer = params['*'];
    return (
        <div>
            {identifyer == 'oops' ?
                <>
                    <h2 className="error-404">Oops......</h2>
                    <h3 className="not-found-message">We couldnt finalize your request, try again</h3>
                </>
                :
                <>
                    <h2 className="error-404">Error 404</h2>
                    <h3 className="not-found-message">We couldnt find what you are looking for</h3>

                </>
            }
            <div className='sad-face'>
                <img
                    height={200}
                    width={225}
                    src={'https://www.pngarts.com/files/1/Sad-Face-PNG-Transparent-Image.png'}
                />
            </div>
        </div>
    )

}