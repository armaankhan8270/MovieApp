import axios from "axios";
import React, { useContext, useState,useEffect } from "react";

const AppContext = React.createContext();


const AppProvider = ({ children }) => {
  const [Isloading, setIsloading] = useState(false)
  const [Movie, setMovie] = useState([])
  const [Error, setError] = useState({msg:"",show:true})
  const [Search, setSearch] = useState('titanic')
  const [Number, setNumber] = useState(1)
  const [Imbdid, setImbdid] = useState('')
  const ApiKey=`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_KEY}`

  
  useEffect(()=>{
const GetData=async()=>{
  const res=await fetch(`${ApiKey}&s=${Search}`)
  const data=res.json().then((data)=>{

    setMovie(data.Search)
    console.log(data)
  })
  

 
}

GetData()
  },[Number])

  return (
    <AppContext.Provider value={{Isloading,Movie,Error,Search,setSearch,Number,setNumber,Imbdid, setImbdid}}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };