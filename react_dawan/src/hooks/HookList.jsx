import React from "react";

const HookList = () => {
  const users = [
    { id: 1, name: "John", age: 30, city: "New York" },
    { id: 2, name: "Jane", age: 25, city: "Los Angeles" },
    { id: 3, name: "Bob", age: 40, city: "Chicago" },
  ];

  const legumes = ["carottes", "oignons", "poivrons"];
  return (
    <div>
      <h1>Ma Liste: </h1>

      {/* return inplicite sans return () et return avec {} */}
      {legumes.map((legume) => {
        return <p>{legume}</p>;
      })}

      {users.map((user) => {
        return (
          <ul key={user.id}>
            <li>nom: {user.name}</li>
            <li>age: {user.age}</li>
            <li>ville: {user.city}</li>
          </ul>
        );
      })}

      {legumes.map((legume, index) => (
        <p key={index}>{legume}</p>
      ))}

      {users.map((user) => (
        <ul key={user.id}>
          <li>nom: {user.name}</li>
          <li>age: {user.age}</li>
          <li>ville: {user.city}</li>
        </ul>
      ))}
    </div>
  );
};

export default HookList;
