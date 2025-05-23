import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";

  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  async function fetchProductData() {
    setLoading(true);

    try {
      const res = await fetch(API_URL);
      const data = await res.json();

      setPosts(data);
    }

    catch(error) {
      console.log("Error : ", error);
      setPosts([]);
    }

    setLoading(false);
  }

  useEffect( () => {
    fetchProductData();
  }, [])

  return (
    <div className="mb-5">
      {
        loading ? <Spinner/> : 
        posts.length > 0 ? 
        (<div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
          {
            posts.map( (item) => (
              <Product key={item.id} item={item}/>
            ))
          }
        </div>) :
        (<div className="flex justify-center items-center h-screen">
          <p className="text-[#0F172A] font-extrabold text-5xl">
            No data found
          </p>
        </div>)
      }
    </div>
  )
};

export default Home;
