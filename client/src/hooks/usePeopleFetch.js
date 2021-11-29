import { useState, useEffect } from "react";
import axios from "axios";
import { results } from '../pages/usersArray.js'

export const usePeopleFetch = () => {
  
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => { fetchUsers(); }, []);

  async function fetchUsers() {
    //יש לי אינטרנט מסונן
    setIsLoading(true);
    // const response = await axios.get(`https://randomuser.me/api/?results=25&page=1`);
    setIsLoading(false);
    // setUsers(response.data.results);
  }

  // return { users, isLoading, fetchUsers };
  return { users: results, isLoading, fetchUsers };
};
