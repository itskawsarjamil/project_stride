import { useState } from "react";
import Accordian from "../components/Home/Accordian";
import Banner from "../components/Home/Banner";
import Categories from "../components/Home/Categories";
import Products from "../components/Home/Products";
import { useEffect } from "react";

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    async function load() {
      const fetchCategories = await fetch("http://localhost:3000/categories");
      const categoriesData = await fetchCategories.json();
      setCategories(categoriesData);

      const fetchRecipes = await fetch("http://localhost:3000/recipes");
      const recipesData = await fetchRecipes.json();
      console.log();
      setRecipes(recipesData.reverse().slice(0, 3));
    }
    load();
  }, []);
  return (
    <div className="">
      <Banner />
      <Categories categories={categories} />
      <Products recipes={recipes} />
      <Accordian />
    </div>
  );
};

export default Home;
