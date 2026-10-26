import { useState } from 'react';
import { productsList } from '.';
import Pagination from '../pagination/Pagination';
import './Products.css';

export default function Products() {
  const productsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(productsList.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = productsList.slice(
    startIndex,
    startIndex + productsPerPage
  );

  return (
    <>
      <div className="products__table-wrapper">
        <table className="products__table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nome</th>
              <th scope="col">Descrição</th>
            </tr>
          </thead>
          <tbody>
            {currentProducts.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.nome}</td>
                <td>{product.descricao}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </>
  );
}
