import { useEffect, useState } from "react";
import toast from "react-hot-toast";
// import Alert from "../components/alert";

const AddProduct = () => {
  // State to manage the form inputs
  // const [showAlert, setShowAlert] = useState(false);

  const [formData, setFormData] = useState({
    id: "",
    title: "",
    price: "",
    description: "",
    image: "",
    category: "",
  });

  const [categories, setCategories] = useState([]);
  // const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    async function load() {
      const fetchCategories = await fetch("http://localhost:3000/categories");
      const categoriesData = await fetchCategories.json();
      setCategories(categoriesData);

      // const fetchRecipes = await fetch("http://localhost:3000/recipes");
      // const recipesData = await fetchRecipes.json();
      // setRecipes(recipesData);
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

  // const confirmAlert = (x = true) => {
  //   setShowAlert(x);
  // };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // setShowAlert(true);
    SubmitForm();
    toast.success("success");
  };

  const SubmitForm = () => {
    if (validateForm() && window.confirm("press ok if all info are correct")) {
      // setRecipes([...recipes, formData]);
      sendDatatoDB();
      // Clear the form
      setFormData({
        id: "",
        title: "",
        price: "",
        description: "",
        image: "",
        category: "",
      });
    } else {
      alert("Please fill in all fields");
    }
  };

  const sendDatatoDB = async () => {
    // console.log(recipes);
    console.log(formData);
    const fetchResponse = await fetch("http://localhost:3000/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await fetchResponse.json();
    console.log(data);
  };

  // Validate form inputs
  const validateForm = () => {
    return (
      formData.id &&
      formData.category &&
      formData.description &&
      formData.image &&
      formData.price &&
      formData.title
    );
  };

  return (
    <div>
      <h2 className="text-xl text-center font-bold mb-5">Add a Recipe</h2>
      {/* {showAlert && (
        <Alert SubmitForm={SubmitForm} confirmAlert={confirmAlert} />
      )} */}
      <form onSubmit={handleSubmit}>
        <div className="my-3 flex justify-between">
          <label>ID:</label>
          <input
            className="mx-2 border-2 border-black rounded"
            type="text"
            name="id"
            value={formData.id}
            onChange={handleChange}
            required
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
          </select>
        </div>

        <button
          className="btn btn-primary mt-5"
          type="submit"
          // onClick={() => document.getElementById("my_modal_1").showModal()}
          // onClick={() => setShowAlert(true)}
        >
          Add Recipe
        </button>
      </form>
      {/* <button className="btn" onClick={() => setShowAlert(true)}>
        show modal
      </button> */}
    </div>
  );
};

export default AddProduct;
