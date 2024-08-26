import { useEffect } from 'react';

//necessary Imports for course-api
import authFetch from '../axios/custom';
//Necessary Imports for RandomUser
import axios from 'axios'

const randomUserUrl = 'https://www.randomuser.me/api';

const CustomInstance = () => {
  const fetchData = async () => {
    try{
      const resp5 = await authFetch('/react-store-products');
      const resp6 = await axios.get(randomUserUrl)
    } catch(error){
      console.error(`Error: ${error}`)
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className='text-center'>custom instance</h2>;
};
export default CustomInstance;
