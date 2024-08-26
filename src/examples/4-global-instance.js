import { useEffect } from 'react';
import axios from 'axios';
const productsUrl = 'https://www.course-api.com/react-store-products';
const randomUserUrl = 'https://randomuser.me/api';

const GlobalInstance = () => {
  const fetchData = async () => {
    try {
      const resp3 = await axios(productsUrl);
      const resp4 = await axios(randomUserUrl);
      console.log(resp3)
    } catch (error){
      console.log(`Error: ${error}`)
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className='text-center'>global instance</h2>;
};
export default GlobalInstance;
