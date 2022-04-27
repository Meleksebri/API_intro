import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import UserDescription from "./components/UserDescription";
import UserList from "./components/UserList";

function App() {
  const [listOfUSer, setlistOfUSer] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(function (response) {
        // handle success
        setlistOfUSer(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <Routes>
      <Route path="/" element={<UserList userlist={listOfUSer} />} />
      <Route
        path="/description/:id"
        element={<UserDescription Users={listOfUSer} />}
      />
    </Routes>
  );
}

export default App;
