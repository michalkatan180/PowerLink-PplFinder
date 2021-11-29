import { useState, useEffect } from "react";
import axios from "axios";

export const usePeopleFetch = () => {

  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pageNum, setPageNum] = useState(1);

  const changePageNumber = () => { setPageNum(pageNum + 1); };

  useEffect(() => {
    fetchUsers();
  }, [pageNum]);

  async function fetchUsers() {
    setIsLoading(true);
    const response = await axios.get(`https://randomuser.me/api/?results=25&page=${pageNum}`);
    setIsLoading(false);
    setUsers(response.data.results);
  }

  return { users, isLoading, fetchUsers, changePageNumber };
};
