import { createContext } from "react";
import { useState, useEffect } from "react";
import api from "../../api/items";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [apiError, setApiError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [addItemInput, setAddItemInput] = useState("");
  const [searchItemInput, setSearchItemInput] = useState("");

  // INITIAL LOAD
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await api.get("/items");
        setItems(response.data);
        setApiError("");
      } catch (err) {
        if (err.response) {
          setApiError(`Error ${err.response.status}: ${err.response.data}`);
        } else {
          setApiError(`Error: ${err.message}`);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchItems();
  }, []);

  const handleCheck = async (id) => {
    const listItem = items.find((item) => item.id === id);
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );

    try {
      await api.patch(`/items/${id}`, { checked: !listItem.checked });
      setItems(listItems);
      setApiError("");
    } catch (err) {
      if (err.response) {
        setApiError(`Error ${err.response.status}: ${err.response.data}`);
      } else {
        setApiError(`Error: ${err.message}`);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newId = items.length ? Number(items[items.length - 1].id) + 1 : 1;
    const newItemObj = {
      id: newId.toString(),
      checked: false,
      item: addItemInput,
    };

    try {
      const response = await api.post("/items", newItemObj);
      setItems([...items, response.data]);
      setAddItemInput("");
      setApiError("");
    } catch (err) {
      if (err.response) {
        setApiError(`Error ${err.response.status}: ${err.response.data}`);
      } else {
        setApiError(`Error: ${err.message}`);
      }
    }
  };

  const handleDelete = async (id) => {
    const listItems = items.filter((item) => item.id !== id);

    try {
      await api.delete(`/items/${id}`);
      setItems(listItems);
      setApiError("");
    } catch (err) {
      if (err.response) {
        setApiError(`Error ${err.response.status}: ${err.response.data}`);
      } else {
        setApiError(`Error: ${err.message}`);
      }
    }
  };

  return (
    <DataContext.Provider
      value={{
        items,
        handleCheck,
        handleDelete,
        handleSubmit,
        addItemInput,
        setAddItemInput,
        searchItemInput,
        setSearchItemInput,
        apiError,
        isLoading,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
