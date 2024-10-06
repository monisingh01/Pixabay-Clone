import React, { useContext } from 'react'
import PixabayContext from '../Context/Pixabay_Context'

const Navbar = () => {
    const { fetchImageCategory, setQuery } = useContext(PixabayContext)

    return (
        <>


            <div className='container text-center my-3'>
                <button onClick={() => fetchImageCategory('science')} type="button" className="btn btn-outline-warning mx-3">Science</button>
                <button onClick={() => fetchImageCategory('nature')} type="button" className="btn btn-outline-primary mx-3">Nature</button>
                <button onClick={() => fetchImageCategory('computer')} type="button" className="btn btn-outline-light mx-3">Computer</button>
                <button onClick={() => fetchImageCategory('buildings')} type="button" className="btn btn-outline-info mx-3">Buildings</button>
                <button onClick={() => fetchImageCategory('sports')} type="button" className="btn btn-outline-warning mx-3">Sports</button>
                <button onClick={() => fetchImageCategory('transportation')} type="button" className="btn btn-outline-info mx-3">Transportation</button>
                <button onClick={() => fetchImageCategory('travel')} type="button" className="btn btn-outline-light mx-3">Travel</button>
                <button onClick={() => fetchImageCategory('food')} type="button" className="btn btn-outline-primary mx-3">Food</button>
            </div>



            <div className="container" style={{width:"380px"}}>
                <input type="text" onChange={(e)=>setQuery(e.target.value)} className="form-control bg-dark text-light">
                </input>
            </div>

        </>
    )
}

export default Navbar