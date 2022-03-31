import React, { useEffect, useState } from "react";
import { Card } from "./Card";
import styled from "./electronics.module.css";
<<<<<<< HEAD
import SearchProduct from "./SearchProduct";
=======
>>>>>>> fa3c0b6384e5366436a88ff86b7a9bc1406d3113

export function Electronics() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8000/items`)
      .then((r) => r.json())
      .then((d) => setdata([...d]))
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      <SearchProduct/>
      <div className={styled.container_}>
        {data.map((e, index) => (
          <Card key={index} ob={e} />
        ))}
      </div>
    </>
  );
}
