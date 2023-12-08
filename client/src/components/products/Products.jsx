// import { useLocation, useParams } from "react-router-dom";
// import { useSelector } from "react-redux";

// const Products = () =>{
//     const [wishlist, setWishlist] = useState([])
//     const [cart, setCart] = useState([])
//     const { category } = useParams()
//     const products = useSelector((state) => state.products)

//     return (
//         <>
//         <h1>{category}</h1>
//         <div>
//             {category === 'all' ? products.map((product) => {
//                 return (
//                     <div className="product-details" key={product.name}>
//                     <img src={`${product.imgUrl}`}/>
//                     <div id='product-card'>
//                       <h4>{product.itemname}</h4>
//                       <h4>{product.cost}</h4>
//                       <h4>{product.color}</h4>
//                       <p>{product.details}</p>
//                     </div>
//                   </div>
//                 )
//             }):
//              products.filter((product) => product.category === category).map((product) => {
//                 return (
//                     <div className="product-details" key={product.name}>
//                     <img src={`${product.imgUrl}`}/>
//                     <div id='product-card'>
//                       <h4>{product.itemname}</h4>
//                       <h4>{product.cost}</h4>
//                       <h4>{product.color}</h4>
//                       <p>{product.details}</p>
//                     </div>
//                   </div>
//                 )
//             })}
             
//         </div>
//         </>
        
//     )
// }


// export default Products;





// const getAllProducts = async () => {
//   const response = await fetch("http://localhost:3000/nike/products/")
//   const data = await response.json();
//   console.log(response)
//   setProducts(data);
  // const token = window.localStorage.getItem('token')
  // const cartResponse = await fetch("http://localhost:3000/nike/cartItem/new", {
  //     headers: {
  //         authorization: token
  //     }
  // })
  // const cartData = cartResponse.json()
  // setCart(cartData)
  // console.log(cartResponse)
//   };
//   getAllProducts();

// },[location.pathname])