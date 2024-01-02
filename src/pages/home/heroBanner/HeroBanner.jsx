import React, {useState,useEffect} from "react"
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux/";

import "./style.scss"

import useFetch from "../../../hooks/useFetch";

const HeroBanner = () => {

    const [background,setBackground] = useState("");
    console.log("background",background)
   
    const [query,setQuery] = useState("");
    const navigate = useNavigate();
    const {url} = useSelector((state) =>state.home)
  
    //  console.log("Url",url)
    const {data, loading} = useFetch("/movie/upcoming");

    useEffect(() => {
        const bg =
            url?.back_drop + data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;

            console.log("number", data?.results)
       
            
           setBackground(bg);
    }, [data]);

     const searchQueryHandler = (event) =>{

        if(event.key === "Enter" && query.length > 0){

            navigate(`/search/${query}`)

        }

     } 

  return (
    <div className="heroBanner">
        <div className="wrapper">
            <div className="heroBannerContent">
                <span className="title">Welcome</span>
                <span className="sub-title">Million of movies,TV shows and people to discover ,Explore now</span>

                <div className="searchInput">
                    <input 
                    type="text" 
                    placeholder="Search for a movie or tv show" 
                    onChange={(e)=>setQuery(e.target.value)}
                    onKeyUp={searchQueryHandler}

                    />
                    <button>Search</button>
                </div>
            </div>
        </div>
    </div>
     

  )
}

export default HeroBanner
