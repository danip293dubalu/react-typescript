import React from "react";
import "./App.css";
import { Container } from "reactstrap";
// import { MyComponent } from "./MyComponen";
import { ProductListContainer } from "./products";

// type Product = { id: number; name: string };

// const products: Product[] = [
//   { id: 1, name: "Café" },
//   { id: 2, name: "Té" },
// ];

function App() {
  return (
    <Container>
      <ProductListContainer>hola</ProductListContainer>
    </Container>
  );
}

export default App;
