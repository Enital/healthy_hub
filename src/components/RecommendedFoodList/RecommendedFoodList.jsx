import css from './RecommendedFoodList.module.css';

function RecommendedFoodList({ products }) {
  return (
    <ul className={css.list}>
      {products.map(product => {
        return (
          <li key={product._id} className={css.item}>
            <img
              width="46px"
              height="46px"
              src={product.img}
              alt={product.name}
            />
            <div>
              <h3 className={css.name}> {product.name}</h3>
              <p className={css.calories}>
                <span>100 g </span>
                {product.calories} calories
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default RecommendedFoodList;
