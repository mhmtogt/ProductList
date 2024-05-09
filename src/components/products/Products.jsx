import React from "react";
import ProductCard from "./ProductCard";
import "./Products.scss";


const Products = ({products}) => {
    console.log(products)
    return (
        <div className="products-list">   


        { products.map((products)=>(
                <ProductCard key={products.id} products={products}/>

             ))}  

            

                    {/***  //! Map'e ait olan callback  parametresinde destructuring ****
                     * 
                    
                    { products.map(({id,image,price,title})=>

                (

                <div key={id}>
                  <div>
                    <h3>
                        {price}
                    </h3>
                    <img src={image} alt={title} width="300px" />
                    <div>
                        <h2>
                            {title}
                        </h2>
                    </div>
                  </div>
                </div>
                )
            )}


            **************************************************************************************************************************************************
            
{/* 
                //! Map'in içinde destructure etme
             { products.map((products)=>{
                
                const {id,image,price,title}= products
                console.log(price)
                return (
                (

                <div key={id}>
                  <div>
                    <h3>
                        {price}
                    </h3>
                    <img src={image} alt={title} width="300px" />
                    <div>
                        <h2>
                            {title}
                        </h2>
                    </div>
                  </div>
                </div>
                ))}
            )}
         *
            **********************************************************************************************************************************************************
            
            
            **** destructuring yapmadan kulllanma ****
         
        { products.map((products)=>(
                <div key={products.id}>
                  <div>
                    <h3>
                        {products.price}
                    </h3>
                    <img src={products.image} alt={products.title} width="300px" />
                    <div>
                        <h2>
                            {products.title}
                        </h2>
                    </div>
                  </div>
                </div>
                
            )

            )
        } */}



        </div>

       
    );
};

export default Products;