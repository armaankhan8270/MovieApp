import React from 'react'
import { useParams } from 'react-router-dom'
import { useGlobalContext } from './Context';

const SingleMovie = () => {
  const { Movie, Isloading ,Search,setSearch,setNumber,Number,Imbdid, setImbdid} = useGlobalContext();
    const {id}=useParams();
  return (
    <div>SingleMovie{id}
    <div>
      {Movie.map((currentMovie,ind)=>{
        if(currentMovie.imdbID===Imbdid)
        return <>
        <h1 className='text-center text-white text-5xl mt-24 bg-cyan-900 p-4 shadow-xl ml-[25%] w-1/2'>{currentMovie.Title}</h1><div
        key={ind}
        className="text-white bg-gray-900 w-full flex justify-center mt-12 mb-12 flex-row m-4 sm:text-sm  font-sans h-full  e   shadow-lg rounded-lg"
      >
        <div className=" text-black shadow-lg w-60 h-96  mb-12 mt-14  ">
<img src={currentMovie.Poster} className=' w-screen h-96 rounded-lg  ' alt="" />
        </div>
        <div className="bg-gray-900 w-[500px] shadow-lg min-w-0 overflow-hidden h-96 rounded-xl mt-12 shadow-white ">
        <h1 className="text-center text-2xl uppercase p-2 ">{currentMovie.Title}</h1>
        <span className="text-2xl ml-5">{currentMovie.Year}</span>
        <span className="text-2xl ml-5 text-white">{currentMovie.imdbID}</span>
        <span className="text-2xl ml-10">Action</span>
        <p className="p-4 pt-12">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae magni sequi at. Magnam sint, incidunt ipsam excepturi, natus, tenetur earum quis corporis nisi laboriosam qui numquam consequuntur alias dolorum dolorem!</p>
      
<button className="bg-gray-500 rounded-lg border-2 hover:border-white hover:text-xl text-white p-4 m-12">Watch Later</button>
        </div>
        {/* <button  className="bg-gray-500 rounded-lg border-2 hover:border-white hover:text-xl text-white p-4 m-12">Watch Laterss</button> */}
      </div>
      </>
        return(
          <div>
            {/* {Imbdid?"armaan":"3"} */}
           <div>
            
            </div>
          </div>
        )
      

        

        

       
      })}
    </div>
    
    </div>
  )
}

export default SingleMovie

// if(movie.imbdID===Imbdid){
        //   console.log(id)
          
        //   return(
        //     <div key={ind}>
        //       {movie.Title}
        //       {movie.imbdID===Imbdid? movie.Title:'a'}
              
        //     </div>
        //   )
        // }