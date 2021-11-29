import { useState, useEffect } from "react";
import axios from "axios";
import { results } from '../pages/usersArray.js'

export const usePeopleFetch = () => {

  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pageNum, setPageNum] = useState(1);

  const changePageNumber = () => { setPageNum(pageNum + 1); };

  useEffect(() => {
    fetchUsers();
  }, [pageNum]);

  async function fetchUsers() {
    // יש לי אינטרנט מסונן
    setIsLoading(true);
    //const response = await axios.get(`https://randomuser.me/api/?results=25&page=${pageNum}`);
    setIsLoading(false);
    //setUsers(response.data.results);
  }

  // return { users, isLoading, fetchUsers ,changePageNumber };
  return { users: results, isLoading, fetchUsers, changePageNumber };
};
