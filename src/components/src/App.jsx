// import "./App.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./Product";
import { productData, responsive } from "./data";

export default function Apple() {
  const product = productData.map((item) => (
    <Product
      name={item.name}
      url={item.img}
      dollor={item.doller}
      cents={item.cents}
      rating={item.rating}
      reviews={item.reviews}
    />
  ));

  return (
    <div>
      <h1>React multi carousel</h1>
      <div className="gap-8 bg-red-300 ">
      <Carousel showDots={true} responsive={responsive}>
        {product}
      </Carousel>
      </div>
    </div>
  );
}
