import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const AllProducts = () => {
  const [recipes, setRecipes] = useState([]);
  const [refetch, setRefetch] = useState(false);
  useEffect(() => {
    async function load() {
      const fetchData = await fetch("http://localhost:3000/recipes");
      const jsonData = await fetchData.json();
      setRecipes(jsonData);
    }
    load();
  }, [refetch]);
  const handleDelete = async (id) => {
    console.log(id);
    if (window.confirm("press ok if you are sure")) {
      const fetchData = await fetch(`http://localhost:3000/recipes/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const jsonData = await fetchData.json();
      setRefetch((prevState) => !prevState);
      console.log(jsonData);
      toast.success("success");
    } else return;
  };
  return (
    <div className="overflow-x-auto w-full">
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr>
            <th>ID</th>
            <th>Avatar</th>
            <th>Title</th>
            <th>Price</th>
            <th>Category</th>
            <th>Modify</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {recipes.map((recipe) => {
            return (
              <tr key={recipe.id}>
                <th>{recipe.id}</th>
                <td>
                  <img
                    className="w-10 h-10 rounded-full"
                    src={recipe.image}
                    alt=""
                  />
                </td>
                <td>{recipe.title}</td>
                <td>{recipe.price}</td>
                <td>{recipe.category}</td>
                <td>
                  <Link to={`/dashboard/edit-product/${recipe.id}`}>
                    <button className="text-white font-bold bg-yellow-500 px-4 py-2 rounded ms-2">
                      Edit
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDelete(recipe.id)}
                    className=" text-white font-bold bg-red-500 px-4 py-2 rounded ms-2"
                  >
                    Del
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AllProducts;
