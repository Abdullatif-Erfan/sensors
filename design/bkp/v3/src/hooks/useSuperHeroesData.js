import axios from "axios";
import { useQuery } from "react-query"

const fetchSuperHeroes = () => {
    return axios.get('http://localhost:5000/superheros');
}

export const useSuperHeroesData = ({onSuccess, onError}) => {

    // return the useQuery result
    return useQuery('super-heros', fetchSuperHeroes,
   { 
    
     onSuccess, 
     onError,
     select: (data) => 
     {
        const justName = data.data.map(hero => hero.name)  
        return justName;
     } 

   }
   )
}