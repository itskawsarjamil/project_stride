import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const EditProduct = () => {
  // State to manage the form inputs
  const prevData = useLoaderData();
  //   const navigate = useNavigate();
  //   console.log(prevData);

  const [formData, setFormData] = useState({
    id: prevData.id,
    title: prevData.title,
    price: prevData.price,
    description: prevData.description,
    image: prevData.image,
    category: prevData.category,
  });
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function load() {
      const fetchCategories = await fetch("http://localhost:3000/categories");
      const categoriesData = await fetchCategories.json();
      setCategories(categoriesData);
    }
    load();
  }, []);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
    if (window.confirm("press okay if modification is confirm")) {
      sendDatatoDB();
      toast.success("success");
    } else {
      return;
    }
    // navigate("/dashboard/all-products");
  };

  const sendDatatoDB = async () => {
    // console.log(recipes);
    // console.log(formData);
    const fetchResponse = await fetch(
      `http://localhost:3000/recipes/${prevData.id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );
    const data = await fetchResponse.json();
    console.log(data);
  };

  return (
    <div>
      <h2 className="text-xl text-center font-bold mb-5">Add a Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div className="my-3 flex justify-between">
          <label>ID:</label>
          <input
            className="mx-2 border-2 border-black rounded bg-gray-200"
            type="text"
            name="id"
            value={formData.id}
            onChange={handleChange}
            readOnly
          />
        </div>
        <div className="my-3 flex justify-between">
          <label>Recipe Name:</label>
          <input
            className="mx-2 border-2 border-black rounded"
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="my-3 flex justify-between">
          <label>Price:</label>
          <input
            className="mx-2 border-2 border-black rounded"
            type="text"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>

        <div className="my-5 flex justify-between">
          <label>description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="mx-2 border-2 border-black rounded ps-4"
            required
          />
        </div>
        <div className="my-3 flex justify-between">
          <label>image:</label>
          <input
            className="mx-2 border-2 border-black rounded"
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
          />
        </div>
        <div className="my-5 flex justify-between">
          <label>Category:</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="">Select a category</option>
            {categories.map((category) => (
              <option key={category.id} value={category.title}>
                {category.title}
              </option>
            ))}

            {/* <option value="Main Course">Main Course</option>
            <option value="Dessert">Dessert</option> */}
          </select>
        </div>
        <button className="btn btn-primary mt-5" type="submit">
          Edit Recipe
        </button>
      </form>
    </div>
  );
};

export default EditProduct;
