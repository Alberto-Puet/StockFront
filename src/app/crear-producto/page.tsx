"use client";
import axios from "axios";
import React, { useState } from "react";

export default function About() {
  const [product, setProduct] = useState({ name: "", price: "" });


  const handleChange = (e: { target: { value: any; name: any; }; }) => {
    const inputValue = e.target.value;
    const inputName = e.target.name;

    setProduct({
      ...product,
      [inputName] : inputValue
    })
    
    
  };

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault(); 
  if (!product.name || !product.price) {
    alert('Ambos campos son obligatorios')
  }

  try {
    await axios.post("http://localhost:5000/api/v1/products", product);
    setProduct({ name: "", price: "" });
    console.log('enviado');
    
  } catch (error) {
    console.error("Error al crear producto:", error);
  }
};


  return (
    <div className="h-screen bg-black flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold">Crear Producto</h1>
      <form
  onSubmit={handleSubmit}
  className="flex flex-col min-w-[50%] gap-5 p-10 bg-slate-600/80 rounded-xl my-10"
>
  <input
    type="text"
    placeholder="Nombre del producto"
    name="name"
    className="border rounded-sm p-2"
    onChange={handleChange}
    value={product.name}
  />
  <input
    type="number"
    placeholder="Precio"
    name="price"
    className="border rounded-sm p-2"
    onChange={handleChange}
    value={product.price}
  />
  <button type="submit" className="bg-amber-400 rounded-sm p-1">
    Añadir producto
  </button>
</form>

    </div>
  );
}
