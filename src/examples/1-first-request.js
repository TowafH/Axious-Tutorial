import { useEffect } from 'react';
import axios from 'axios';
// limit, if 429 wait for 15 min and try again
const url = 'https://www.course-api.com/react-store-products';

const FirstRequest = () => {

  const fetchData = async () => {

  //Practice Get Request with AXIOS
    try{
      // STANDARD AXIOS GET REQUEST
      const resp = await axios.get(url);
      const data = resp.data;
      console.log(data);
    } catch (error){
      console.error(`Error: ${error.response}`);
    }
  }


  useEffect(() => {
    fetchData();
  }, []);


  return (
  <h2 className='text-center'>first request</h2>
  );
};
export default FirstRequest;