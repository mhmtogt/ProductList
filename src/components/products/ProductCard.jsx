import React from "react";

const ProductCard =({products})=>{

    const {image,price,title}=products;
    return (
    <div className="card" > {/**<div key={id}>  asdfsf <div>   burada key hatası alırsın cünkü div olayını products içinde yaptık ve oradan gönderdik onun içim diğer sayfada olacak*/}
    <div className="price">
      <h3>
          {price}
      </h3>
      <img src={image} alt={title} width="300px" />
      <div className="card__over">
          <h2>
              {title}
          </h2>
      </div>
      </div>
      </div>
  )

};


// const ProductCard = ({ product }) => {
//   const { id, title, image, price } = product;
//   return (
//     <div>
//       <div>
//         <h3>{price}</h3>
//       </div>
//       <img src={image} alt={title} width="100px" />
//       <div>
//         <h2>{title}</h2>
//       </div>
//     </div>
//   );
// };


export default ProductCard;

