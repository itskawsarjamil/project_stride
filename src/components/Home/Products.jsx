import SingleProduct from "./SingleProduct";
import PropTypes from "prop-types";
const Products = ({ recipes }) => {
  return (
    <div className="grid grid-cols-3  gap-8 my-5 auto-rows-fr">
      {/* {Array(6)
        .fill(null)
        .map((_, index) => (
          <SingleProduct key={index} />
        ))} */}
      {recipes.map((recipe) => {
        return <SingleProduct recipe={recipe} key={recipe.id} />;
      })}
    </div>
  );
};

Products.propTypes = {
  recipes: PropTypes.array,
};
export default Products;
