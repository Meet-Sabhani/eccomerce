import React from "react";
import "./newcollation.css";
import new_collection from "../Assets/new_collections";
import Item from "../Item/Item";

const NewCollection = () => {
  return (
    <div className="newcolletions">
      <h1>NEW COLLATIONS</h1>
      <div className="collation">
        {new_collection.map((item, i) => {
          return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />;
        })}
      </div>
    </div>
  );
};

export default NewCollection;
