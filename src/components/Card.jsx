import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Products = () => {
  const url = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);

  const getDataProducts = async () => {
    const response = await fetch(url);
    const dataProduct = await response.json();
    setProducts(dataProduct);
  };

  useEffect(() => {
    getDataProducts();
  });

  return (
    <div className="container">
      <div className="row pt-5">
        <h1 className="fw-bold">Selamat Datang di Handes Shop</h1>
        <p>Catalog</p>
        {products.map((produk) => {
          return (
            <div className="Card col-lg d-flex pt-3">
              <CardProduct
                name={produk.title}
                img={produk.image}
                death={produk.death_year}
                description={produk.description}
                ascension={produk.ascension_year}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

function CardProduct(props) {
  return (
    <Card className="Card" style={{ width: "18rem"}}>
      <Card.Img
        variant="top"
        src={props.img}
        width="100"
        height="250"
      />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Button href={props.img}variant="primary">Lihat Gambar</Button>
      </Card.Body>
    </Card>
  );
}

export default Products;