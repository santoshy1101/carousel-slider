import React from "react";

export default function Product(props) {
  return (
    <div className="flex flex-col mx-5 border-4">
    <div>
      <img  className="w-[100%] h-[16em] object-cover " src={props.url} alt="product image" />
      </div>
      <h2>{props.name}</h2>
      <p className="price">{props.price}</p>
      <p>{props.description}</p>
      <p>
        <button>Add to Cart</button>
      </p>
    </div>
  );
}
