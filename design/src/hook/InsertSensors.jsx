import axiosInstance from "../utils/axios";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient
} from "react-query";


/**
 * ------------ API Requests ------------
 * http://localhost:5000/operations
 */
 
const addNewData = async data => {
  try {
    const response = await axiosInstance.post("operations",data);
    return response;
  } catch (err) {
    console.log(err.message);
  }
};

export const useAddNewSensor = data => {
 
 /**
   * After adding new data, it would be better to stop sending request to get the updated data
   * Just add new data in client side into the query cache 
   * For this purpose we have to use queryClient Object
   */
  const queryClient = useQueryClient();
  /**
   * onSuccess method send new request and get udated date
   */
  return useMutation(addNewData, {
    onSuccess: (data) => {
      // data is axios response which send to the useMutation method as a result
      // queryClient.invalidateQueries(["sensors_list", 1])
      queryClient.setQueriesData(["sensors_list", 1], oldQueryData => {
        //setQueriesData automaticall get oldQueryData
        return {
          ...oldQueryData,
          data: [data.data, ...oldQueryData.data]
        };
      });
    }
  });
};
