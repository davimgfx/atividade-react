import { useState } from 'react';
import Products from '../components/products/Products';
import { productsList } from '../components/products';

const PRODUCTS_PER_PAGE = 10;

export default function ProductsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(productsList.length / PRODUCTS_PER_PAGE);

  return (
    <section>
      <h1>Listagem de produtos</h1>
      <Products
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        productsPerPage={PRODUCTS_PER_PAGE}
      />
    </section>
  );
}
