import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../Redux/apiProductsSlice";
import { useSelector, useDispatch } from "react-redux";
import { addProductInCart } from "../Redux/productsSlice";
import Navbar from "../Organisms/Navbar";

export default function ProductDetails() {
  const dispatch = useDispatch();

  const { productId } = useParams();
  const {
    data: productDetails,
    error: productDetailsError,
    isLoading: productDetailsIsLoading,
  } = useGetProductByIdQuery(productId);

  return (
    <>
      <Navbar firstColor={"white"} secondColor={"white"} />
      <div className="flex flex-col h-screen px-5">
        {productDetailsError ? (
          <>Oh no, there was an error</>
        ) : productDetailsIsLoading ? (
          <div className="flex flex-col lg:flex-row justify-center items-center h-[90%]">
            <span className="loading loading-spinner text-warning loading-lg"></span>
          </div>
        ) : productDetails ? (
          <div className="flex flex-col lg:flex-row justify-center items-center h-[90%]">
            <div className="lg:mr-20">
              <img
                className="max-w-[150px] lg:max-w-[400px]"
                src={productDetails.image}
                alt="image not found"
              />
            </div>
            <div className="text-center lg:text-left">
              <div className="lg:text-[26px] text-[20px] font-medium mb-2 mx-auto max-w-[450px]">
                {productDetails.title}
              </div>
              <div className="text-xl font-medium mb-6 mx-auto max-w-[450px] text-red-500">
                $ {productDetails.price}
              </div>
              <div className="mb-8 mx-auto max-w-[450px]">
                {productDetails.description}
              </div>
              <button
                onClick={() => dispatch(addProductInCart(productDetails))}
                className="py-4 px-8 bg-black text-white"
              >
                Add to cart
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}
