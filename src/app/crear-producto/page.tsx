"use client";
import axios from "axios";
import React, { useState } from "react";

export default function About() {
  const [product, setProduct] = useState({ name: "", price: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/products`, product);
      setProduct({ name: "", price: "" });
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
