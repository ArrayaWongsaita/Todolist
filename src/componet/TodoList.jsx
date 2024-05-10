import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TodoListItem from "./TodoListItem";

import axios from "axios";
import TodoListInput from "./TodoListInput";
import { getId, getToken, storeId, storeToken } from "../utility/local-storage";

function TodoList() {
  const navigate = useNavigate();
  const tokenStr = getToken();
  const tokenId = getId();
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchAllData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchAllData = async () => {
    try {
      const reponse = await axios.get(
        `https://cc17-assessment-api.onrender.com/v2/todo?userId=${tokenId}`,
        { headers: { Authorization: `Bearer ${tokenStr}` } }
      );
      setTodos(reponse.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const PostData = async (inputValue) => {
    try {
      const reponse = await axios.post(
        `https://cc17-assessment-api.onrender.com/v2/todo?userId=${tokenId}`,
        { title: inputValue },
        { headers: { Authorization: `Bearer ${tokenStr}` } }
      );
      console.log(reponse);
      setTodos([reponse.data.data, ...todos]);
    } catch (error) {
      console.log(error);
    }
  };

  const PostDataStatus = async (id, status, title) => {
    try {
      const reponse = await axios.patch(
        `https://cc17-assessment-api.onrender.com/v2/todo/${id}?userId=${tokenId}`,
        { status: status, title: title },
        { headers: { Authorization: `Bearer ${tokenStr}` } }
      );

      setTodos(
        [...todos].map((item) => {
          if (item.id === id) item.status = status;
          return item;
        })
      );

      console.log(reponse);
      // setTodos([reponse.data.data,...todos]);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteData = async (id) => {
    try {
      const reponse = await axios.delete(
        `https://cc17-assessment-api.onrender.com/v2/todo/${id}?userId=${tokenId}`,
        { headers: { Authorization: `Bearer ${tokenStr}` } }
      );
      // setTodos(reponse.data.data);
      if (reponse.status < 210) {
        setTodos([...todos].filter((item) => item.id !== id));
      }
      // console.log(reponse.status)
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(todos)
  return (
    <div className="w-screen h-screen bg-black flex justify-center items-center fo">
      <div className="gap-4  flex flex-col w-[505px] h-auto bg-gray-950 rounded-sm  shadow-sm shadow-red-50/25 p-14">
        <h1 className="text-white text-5xl font-bold ">My Todo</h1>
        <TodoListInput PostData={PostData} />
        <div className="border-b-[1px]  border-gray-700 flex "></div>

        <div className="flex flex-col gap-5">
          {todos.length > 0 &&
            todos.map((item) => (
              <TodoListItem
                key={item?.id}
                item={item}
                deleteData={deleteData}
                PostDataStatus={PostDataStatus}
              />
            ))}
        </div>

        <button
          onClick={() => {navigate("/");storeToken("");storeId("")}}
          className="text-white p-4 rounded-3xl bg-gray-800"
        >
          LOG OUT
        </button>
      </div>
    </div>
  );
}

export default TodoList;
