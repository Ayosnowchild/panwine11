import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./home.css";
import Button from "../../components/Button/button";
import { MinusIcon, PlusIcon } from "../../components/icons";

function Home() {
  const data = [
    {
      image: "../../../images/Image.png",
      title: "Clearsprings",
      info: "Clearsprings",
      price: "#12,000.00",
    },
    {
      image:
        "data:image/jpeg;base64,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",
      title: "Four Cousins",
      info: "Four Cousins",
      price: "#12,500.00",
    },
    {
      image: "../../../images/Image.png",
      title: "Clearsprings",
      info: "Clearsprings",
      price: "#12,000.00",
    },
    {
      image: "../../../images/Image.png",
      title: "Clearsprings",
      info: "Clearsprings",
      price: "#12,000.00",
    },
    {
      image: "../../../images/Image.png",
      title: "Clearsprings",
      info: "Clearsprings",
      price: "#12,000.00",
    },
    {
      image: "../../../images/Image.png",
      title: "Clearsprings",
      info: "Clearsprings",
      price: "#12,000.00",
    },
    {
      image: "../../../images/Image.png",
      title: "Clearsprings",
      info: "Clearsprings",
      price: "#12,000.00",
    },
    {
      image: "../../../images/Image.png",
      title: "Clearsprings",
      info: "Clearsprings",
      price: "#12,000.00",
    },
    {
      image: "../../../images/Image.png",
      title: "Clearsprings",
      info: "Clearsprings",
      price: "#12,000.00",
    },
    {
      image: "../../../images/Image.png",
      title: "Clearsprings",
      info: "Clearsprings",
      price: "#12,000.00",
    },
    {
      image: "../../../images/Image.png",
      title: "Clearsprings",
      info: "Clearsprings",
      price: "#12,000.00",
    },
    {
      image: "../../../images/Image.png",
      title: "Clearsprings",
      info: "Clearsprings",
      price: "#12,000.00",
    },
    {
      image: "../../../images/Image.png",
      title: "Clearsprings",
      info: "Clearsprings",
      price: "#12,000.00",
    },
    {
      image: "../../../images/Image.png",
      title: "Clearsprings",
      info: "Clearsprings",
      price: "#12,000.00",
    },
    {
      image: "../../../images/Image.png",
      title: "Clearsprings",
      info: "Clearsprings",
      price: "#12,000.00",
    },
    {
      image: "../../../images/Image.png",
      title: "Clearsprings",
      info: "Clearsprings",
      price: "#12,000.00",
    },
    {
      image: "../../../images/Image.png",
      title: "Clearsprings",
      info: "Clearsprings",
      price: "#12,000.00",
    },
    {
      image: "../../../images/Image.png",
      title: "Clearsprings",
      info: "Clearsprings",
      price: "#12,000.00",
    },
    {
      image: "../../../images/Image.png",
      title: "Clearsprings",
      info: "Clearsprings",
      price: "#12,000.00",
    },
    {
      image: "../../../images/Image.png",
      title: "Clearsprings",
      info: "Clearsprings",
      price: "#12,000.00",
    },
  ];
  return (
    <div>
      <Navbar />
      <div className="home-banner">
        <p className="home-banner-big">
          Tastefulness & Elegance of a Best Wine
        </p>
        <p className="home-banner-small">
          Browse our collection to find that delectable taste you desire
        </p>
        <Button title={"Explore Products"} />
      </div>
      <div className="home-arrivals">
        <p className="arriv-para">New Arrivals</p>
        <div className="home-flex">
          {data.map((product) => {
            return (
              <ProductCard
                image={product.image}
                title={product.title}
                info={product.info}
                price={product.price}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;

export function ProductCard({ image, title, info, count, price }) {
  return (
    <div className="product-card">
      <img src={image} alt="product" className="product-image" />
      <div className="product-caption">
        <p className="caption-one">{title}</p>
        <p className="caption-two">{info}</p>
      </div>
      <div className="card-last">
        <div className="card-box">
          <div className="card-icon-box">
            <MinusIcon />
          </div>
          <p>100</p>
          <div className="card-icon-box">
            <PlusIcon />
          </div>
        </div>
        <p className="product-price">{price}</p>
      </div>
    </div>
  );
}
