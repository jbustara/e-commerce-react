import React from "react";
import { useFilterContext } from "../context/filter_context";
import GridView from "./GridView";
import ListView from "./ListView";

const ProductList = () => {
  const { filtered_products: products, grid_view } = useFilterContext();
  if (!products.length) {
    return (
      <h5 style={{ testTransform: "none" }}>
        Sorry, no products matched your search
      </h5>
    );
  }
  if (grid_view) {
    return <GridView products={products}>product list</GridView>;
  } else {
    return <ListView products={products} />;
  }
};

export default ProductList;
