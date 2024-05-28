import PropTypes from "prop-types";

const SingleProduct = ({ recipe }) => {
  // console.log(recipe);
  const { category, description, price, title, image } = recipe;
  return (
    <div>
      <div className="card w-fit bg-base-100 shadow-xl h-full">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <div className="flex justify-between">
            <h4>{price}</h4>
            <h4>{category}</h4>
          </div>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Edit</button>
            <button className="btn btn-primary">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

SingleProduct.propTypes = {
  recipe: PropTypes.object,
};

export default SingleProduct;
