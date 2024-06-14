'use client';
import React from 'react';
import { useState, useEffect } from 'react';

interface Product {
  _id: string;
  nameProduct: string;
  qtd: number;
  category: string;
}

interface Category {
  name: string;
  img_url: string;
}

const Products = () => {
  const [productList, setProductList] = useState<Product[]>([]);
  const [categoryList, setCategoryList] = useState<Category[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useEffect(() => {
    fetch('http://127.0.0.1:5000/products')
      .then((res) => res.json())
      .then((data) => {
        setProductList(data);
        setLoading(false);
      });
    
    fetch('http://127.0.0.1:5000/categories')
      .then((res) => res.json())
      .then((data) => {
        setCategoryList(data);
      });
  }, []);

  if (isLoading) return <p className="text-center">Loading...</p>;
  if (!productList.length) return <p className="text-center">No products available</p>;
  if (!categoryList.length) return <p className="text-center">No categories available</p>;

  const filterProducts = (category: string) => {
    setSelectedCategory(category);
  };

  const filteredProducts = selectedCategory === 'all'
    ? productList
    : productList.filter(product => product.category === selectedCategory);

  return (
    <main className="flex flex-col items-center p-4 bg-violet-200 min-h-screen">
      <div id="filters" className="mb-4">
        <button onClick={() => filterProducts('all')} className="bg-purple-500 text-white py-2 px-4 m-2 rounded hover:bg-violet-800">Todos</button>
        {categoryList.map(category => (
          <button 
            key={category.name} 
            onClick={() => filterProducts(category.name)} 
            className="bg-purple-500 text-white py-2 px-4 m-2 rounded hover:bg-violet-800">
            {category.name}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        {filteredProducts.map(({ _id, nameProduct, qtd }) => (
          <div key={_id} className="bg-white border border-gray-300 rounded p-4 shadow-md">
            <p className="text-xl font-semibold mb-2">{nameProduct}</p>
            <p className="text-gray-600">Quantidade: {qtd}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Products;