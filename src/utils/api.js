import axios from "axios";
  
const BASE_URL = "https://api.themoviedb.org/3";

const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZDkxY2QxYzZhNWZhOWUzY2EzZTUxZmFkNjcyNGNiMyIsInN1YiI6IjY1MTQ3MGM3YzUwYWQyMDEyYzE3NDNjMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bl7PnBndV3ucgH5c0bPYJDQvX-KFreVciwYd88hscqk";
const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
 
};

export const fetchDataFromApi = async(url, params) => {
    try {
        const {data} = await axios.get(BASE_URL +url , {
            headers, params
        })
        return data;
    } catch(err){
        console.log(err);
        return err;
    }
};