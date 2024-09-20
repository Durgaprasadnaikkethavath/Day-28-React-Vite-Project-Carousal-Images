import React from "react";
import Carousel from "better-react-carousel";
import "./Gallery.css";

const Gallery = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Welcome Carousel</h1>
      <Carousel>
        <Carousel.Item>
          <img
            src="https://img.freepik.com/free-photo/black-white-beauty-product_23-2151307283.jpg"
            alt="product images"
            className="product_image"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg"
            alt="product images"
            className="product_image"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://cdn.pixabay.com/photo/2021/06/04/06/09/cherries-6308871_1280.jpg"
            alt="product images"
            className="product_image"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://img.freepik.com/free-photo/black-white-beauty-product_23-2151307283.jpg"
            alt="product images"
            className="product_image"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://img.freepik.com/free-photo/organic-cosmetic-product-with-dreamy-aesthetic-fresh-background_23-2151382816.jpg"
            alt="product images"
            className="product_image"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://img.freepik.com/free-photo/black-white-beauty-product_23-2151307283.jpg"
            alt="product images"
            className="product_image"
          />
        </Carousel.Item>
      </Carousel>
      <h1 style={{ color: "red", textAlign: "center" }}>
        its loop and cols and row carousel autoplay also added
      </h1>
      <Carousel loop cols={2} rows={1} autoplay={3000}>
        <Carousel.Item>
          <img
            src="https://img.freepik.com/free-photo/black-white-beauty-product_23-2151307283.jpg"
            alt="product images"
            className="product_image"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg"
            alt="product images"
            className="product_image"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://cdn.pixabay.com/photo/2021/06/04/06/09/cherries-6308871_1280.jpg"
            alt="product images"
            className="product_image"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://img.freepik.com/free-photo/black-white-beauty-product_23-2151307283.jpg"
            alt="product images"
            className="product_image"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://img.freepik.com/free-photo/organic-cosmetic-product-with-dreamy-aesthetic-fresh-background_23-2151382816.jpg"
            alt="product images"
            className="product_image"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://img.freepik.com/free-photo/black-white-beauty-product_23-2151307283.jpg"
            alt="product images"
            className="product_image"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Gallery;
