import React, { useEffect,useRef } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'

const TitleCards = ({title,category}) => {

  const cardsRef = useRef();


  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MjcyYTU4ZDRhZDgwZmY4MGE3NWM3ZjQxZjJmOWIyMCIsIm5iZiI6MTYwMDMwOTY1Ni4yOTEwMDAxLCJzdWIiOiI1ZjYyYzk5ODFiZjI2NjAwMzlkZWRmZTIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.otFBc_l9tuzpyWdRke1JQpBHOiEg98I5iovGpqk1pnM'
    }
  };
  
  

  const handleWheel = (event)=>{
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  }

  useEffect(()=>{
    fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.error(err));

    cardsRef.current.addEventListener('wheel',handleWheel);
  },[])


  
  return (
    <div className='titlecards'>
        <h2>{title?title:"Your Shows"}</h2>
        <div className="card-list" ref={cardsRef}>
          {cards_data.map((card,index)=>{
            return <div className="card" key={index}>
                    <img src={card.image} alt="" />
                    <p>{card.name}</p>
                    </div>
          })}
        </div>
    </div>
  )
}

export default TitleCards