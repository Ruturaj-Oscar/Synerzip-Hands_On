import React, { Component } from "react";
import TodoItem from "./components/ToDoItem";
import todosData from "./todosData";
//import ContactCard from "./components/ContactCard";

import "./index.css";

function App() {
  const todoItems = todosData.map(item => (
    <TodoItem key={item.id} item={item} />
  ));

  return <div className="todo-list">{todoItems}</div>;
}

export default App;

{
  /* <div>
<ContactCard
  contact={{
    name: "Mr. Whiskerson",
    imgUrl: "http://placekitten.com/400",
    phone: "(212) 555-1234",
    email: "mr.whiskaz@catnap.meow"
  }}
/>
<ContactCard
  contact={{
    name: "Destroyer",
    imgUrl: "http://placekitten.com/300/400",
    phone: "(212) 555-3456",
    email: "ofworlds@yahoo.com"
  }}
/>
{/* <ContactCard
  name="Felix"
  imgUrl="http://placekitten.com/300/400"
  phone="(212) 555-4567"
  email="thecat@hotmail.com"
/> */
}
