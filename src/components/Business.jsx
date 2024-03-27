import React from "react";
import { useState } from "react";

const Business = (props) => {
  const [name, setName] = useState(true);

  const [user, setUser] = useState("");
  const [tel, setTel] = useState("");
  const [city, setCity] = useState("");

  const [array, setArray] = useState([]);

  const submitting = (e) => {
    e.preventDefault();
    const newTasks = [...array];
    newTasks.length = 0;
    newTasks.push(user, tel, city);
    setArray(newTasks);
  };

  return (
    <>
      <div className="text-white">
        {props.name} {props.tel}
      </div>

      <button
        className="bg-white m-2"
        onClick={() => {
          setName(!name);
        }}
      >
        test
      </button>
      <p className="text-white">{name && "marek"}</p>

      <form onSubmit={submitting}>
        <div className="m-3">
          <input
            type="text"
            name="user"
            placeholder="name"
            defaultValue={user}
            onChange={(e) => {
              setUser(e.target.value);
            }}
          />
        </div>
        <div className="m-3">
          <input
            type="tel"
            name="tel"
            placeholder="phoneNumber"
            defaultValue={tel}
            onChange={(e) => {
              setTel(e.target.value);
            }}
          />
        </div>
        <div className="m-3">
          <input
            type="text"
            name="city"
            placeholder="city"
            defaultValue={city}
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
        </div>
        <button
          disabled={user.length === 0 || tel.length === 0 || city.length === 0}
          className="bg-white rounded-lg p-2 cursor-pointer font-medium"
        >
          Save
        </button>
      </form>
      <div className="text-white">{array.join(", ")}</div>
    </>
  );
};

export default Business;
