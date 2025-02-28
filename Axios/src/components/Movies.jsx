import React, { useEffect, useState } from "react";
import Card from "./Card";
import { getMovie } from "./AxiosData";

const Movies = () => {
  const [Data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const MovieData = async () => {
    try {
      const response = await getMovie();

      setLoading(false);
      setData(response.data.Search);
    } catch (error) {
      // console.log(error);
      console.error(error.message);
      console.error(error.status);
      console.error(error.response.data.Error);
    }
  };
  console.log(Data);

  useEffect(() => {
    MovieData();
  }, []);
  if (loading) {
    return (
      <div className="flex justify-center items-center h-lvh text-4xl font-bold">
        Loading.....
      </div>
    );
  }
  return (
    <div className=" text-white py-5  ">
      {Data && (
        <ul className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-4 gap-3 justify-center items-center my-4 px-20">
          {Data.map((currMovie) => {
            return <Card key={currMovie.imdbID} currMovie={currMovie} />;
          })}
        </ul>
      )}
    </div>
  );
};

export default Movies;
