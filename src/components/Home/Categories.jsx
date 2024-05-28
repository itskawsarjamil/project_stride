/* eslint-disable react/prop-types */
import SingleCategory from "./SingleCategory";

const Categories = ({ categories }) => {
  return (
    <div className="flex gap-4 justify-between items-center mt-5 flex-wrap">
      {categories.map((category) => {
        return <SingleCategory key={category.id} category={category} />;
      })}
    </div>
  );
};

export default Categories;
