import axios from "axios";
import { useQuery } from "react-query"

const fetchSuperHeroes = () => {
    return axios.get('http://localhost:5000/superheros');
}

export const RQSuperHeroesPage = () => {
    /**
     * userQuery is hook which is used to fetch the data and it takes three arguments 
     * 1. unique key (I name it super-heros)
     * 2. arrow function to return promise or call fetcher function
     * 3. object to specify set of properties or configurations
     */  

    const onSuccess = (data) =>{
        console.log('Perform side effect after data fetching', data);
    }

    const onError = (error) =>{
        console.log('Perform side effect after encountering error',error);
    }

   const { isLoading, data, isError, error, isFetching, refetch} = useQuery('super-heros', fetchSuperHeroes,
   { 
    /**
     * Default cacheTime is 5 minutes, and default staleTime is 0 seconds
     * Polling or automatic refetching: the process of fetching the data at regular intervals. property is refetchInterval
     * Data Transformation: if we get the data from API and need to destructure that we have to use select function
     */
    //  cacheTime: 5000 // the data will be stored into the catch for 5 seconds when we move to other page
    //  staleTime: 30000 // stale Time => after 30 second we send network request to recieve updated data
    // staleTime: 0 // default value
    //  refetchOnMount: true  // data is fetched every time when the component mounts to the DOM
    //  refetchOnMount: false  // data is fetched just first time 
    //   refetchOnWindowFocus: true // it keep sync interface or focus window with database, when we change the data, it automaticall detect the new data and update themeselves
   
    // refetchInterval: 2000 // it is called pooling: after each 2 second request the data, if the window loses focus it will pause
    //  refetchIntervalInBackground: true // the query will continue to refetch interval in background even if the window is not have focus
    
    // enabled: false // disable automatic refetching, we have to call refetch method by onClick. 

    // onSuccess: onSuccess
     onSuccess,  // if we want to do something after successfully data fetching then do that on onSuccess method
     onError,
     select: (data) => //select is a function which automatically recieves api data as an argument
     {
        const justName = data.data.map(hero => hero.name)  
        return justName;
     } 

   }
   )

   /**
    * isLoading: is working on each refreshing or loading the page
    * isFetching: is working on each data change
    */
   console.log({isLoading,   isFetching});

    if(isLoading || isFetching){
        return <h2>Loading...</h2>
    }

    if(isError){
        return <h2>{error.message}</h2>
    }

    return(
        <>
            <h2>RQ Super Hero Page</h2>
            <button onClick={refetch}>Fetch the data</button>
            {/* {
                data?.data.map((hero)=>{
                    return <div key={hero.name}>{hero.name} </div>
                })
            } */}
            {
                data.map((justName)=>{
                    return <div key={justName}>{justName} </div>
                })
            }
        </>
    );
}