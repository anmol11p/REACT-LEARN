import React from 'react'

const Card = ({currMovie}) => {
    let {Poster,Title,imdbID}=currMovie;
  return (
    <>
    <li className="flex flex-col max-w-60  items-center bg-white shadow-md rounded-lg overflow-hidden ">
    <img
      src={Poster}
      alt={Title}
      className="max-w-56 h-auto max-h-56 object-cover my-3"
    />
    <a
      href={`/movie/${imdbID}`}
      className="w-full  bg-black  text-white rounded hover:bg-blue-60 mt-2 py-1  my-2 px-4 text-center"
    >
      <button className="">Watch Now</button>
    </a>
    </li>
    </>
  )
}

export default Card