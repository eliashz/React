const findCategories = (products) => {
  const cat = [];
  products.map((product) => {
    !cat.includes(product.category) && cat.push(product.category);
  });
  return cat;
};

export default findCategories;
