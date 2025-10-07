import { AppContext } from "./AppContext";
import { dummyCourses } from "../assets/assets";
import { useEffect, useState } from "react";

export const AppContextProvider = (props) => {
  const currency = import.meta.env.VITE_CURRENCY;

  const [allCourses, setAllCourses] = useState([]);

  //Fetch all courses

  const fetchAllCourses = async () => {
    setAllCourses(dummyCourses);
  };

  useEffect(() => {
    fetchAllCourses();
  }, []);

  const value = {
    currency,
    allCourses,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
