import React from 'react'

// const MovieCard = ({movie:{imdbID, Title, Poster, Year, Type,}}) => {
  const MovieCard = (props) => {
    let {imdbID, Title, Poster, Year, Type} = props
    return (
        <>
        <div className="movie flex items-center justify-center flex-col rounded-lg shadow-xl text-center mt-5 pb-5 transition-all cursor-pointer scale-95 hover:bg-slate-200 hover:scale-100" key={imdbID}>
          <div>
            <p className='text-md font-bold'>{Year}</p>
          </div>
    
          <div>
            <img src={Poster !== "N/A" ?Poster : "https://via.placeholder.com/400"} alt={Title} className='rounded-md'/>
          </div>
    
          <div>
            <span className='hidden'>{Type}</span>
            <h3 className='pt-5 text-lg font-bold'>{Title.length < 30 ? Title : Title.slice(0,30,)}</h3>
          </div>
        </div>
        </>
      );
}

export default MovieCard