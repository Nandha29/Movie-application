import React from 'react'
import './incredables.css'

function incredables() {
  return (
    <div className='mv'>
    <img src="data:image/jpeg;base64,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"/>
    <h3>Movie   : Incredables</h3>
    <h3>Director: Brad bird </h3>
    <h3>Genres  : Cartoon</h3>
    <h3>Quality : Original DVDRip</h3>
    <h3>Language: English</h3>
    <h3>Rating  : 7.0/10</h3>
    <h3>Summary :</h3>
    <p>In this lauded Pixar animated film, married superheroes Mr. Incredible and Elastigirl are forced to assume mundane lives as Bob and Helen Parr after all super-powered activities have been banned by the government. While Mr. Incredible loves his wife and kids, he longs to return to a life of adventure, and he gets a chance when summoned to an island to battle an out-of-control robot. Soon, Mr. Incredible is in trouble and it's up to his family to save him.</p>
    <button>Watch now</button>
    </div>
  )
}

export default incredables