import React from "react";
import { NavLink ,Link } from "react-router-dom";
import { useGlobalContext } from "./Context";

const Movie = () => {
  const { Movie, Isloading ,Search,setSearch,setNumber,Number,Imbdid, setImbdid} = useGlobalContext();
  if (Isloading) {
    return <div className="loading">Loading....</div>;
  }
  return (
    <>
   <div className="flex mt-12">

      <input onKeyPress={(e) => {
                        if (e.key === "Enter") {
                           setNumber(Number+1)
                        }
                    }} value={Search} onChange={(e)=>{setSearch(e.target.value)}} type="text" name="" id=""placeholder="Search..." className="hover:border-black p-4 m-4 outline-none ml-[25%] text-2xl focus:outline-none border-b-2 w-1/2  rounded shadow-lg" />
      <button className="p-4 text-2xl h-20 mt-4 mb-4 bg-cyan-400 rounded-lg text-black" onClick={()=>{setNumber(Number+1)}}>Search</button>
   </div>
    <div className="bg-wite m-12 rounded-lg grid grid-cols-1 gap-4  sm:grid-cols-2 ">
      
      {Movie
        ? Movie.map((currentMovie, ind) => (
          <NavLink to={`Movie/${currentMovie.imdbID}`}>
            <div
              key={ind}
              className="text-white w-full flex flex-row m-4 sm:text-sm  font-sans h-full  bg-white   shadow-lg rounded-lg"
            >
              <div className="bg-white text-black shadow-lg w-60 h-96   ">
<img src={currentMovie.Poster} className=' w-screen h-96 rounded-lg  ' alt="" />
              </div>
              <div className="bg-gray-900 w-[500px] shadow-lg min-w-0 overflow-hidden h-96 rounded-xl  ">
              <h1 className="text-center text-2xl uppercase p-2 ">{currentMovie.Title}</h1>
              <span className="text-2xl ml-5">{currentMovie.Year}</span>
              <span className="text-2xl ml-5 text-white">{currentMovie.imdbID}</span>
              <span className="text-2xl ml-10">Action</span>
              <p className="p-4 pt-12">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae magni sequi at. Magnam sint, incidunt ipsam excepturi, natus, tenetur earum quis corporis nisi laboriosam qui numquam consequuntur alias dolorum dolorem!</p>
            
<button onClick={()=>{
              setImbdid(currentMovie.imdbID)
              console.log(currentMovie.imdbID)
            }} className="bg-gray-500 rounded-lg border-2 hover:border-white hover:text-xl text-white p-4 m-12">More Info</button>
<Link to={`https://www.justwatch.com/in/movie/${Search}`}>

<button  className="bg-gray-500 rounded-lg border-2 hover:border-white hover:text-xl text-white p-4 m-12">watch Now</button>
</Link>

              </div>
              {/* <button  className="bg-gray-500 rounded-lg border-2 hover:border-white hover:text-xl text-white p-4 m-12">Watch Laterss</button> */}
            </div>
            </NavLink>
          ))
        : "aaa"}
    </div>
    </>
  );
};

export default Movie;
// lg:ml-[25%] lg:mr-[25%]