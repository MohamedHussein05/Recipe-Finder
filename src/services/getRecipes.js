const BASEURL = "https://api.edamam.com/api/recipes/v2?type=public";

const getRecipes = (search, filter, next) => {
  const diet = filter ? `&diet=${filter}` : filter;
  return fetch(
    next ||
      `${BASEURL}&q=${search}&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}&field=label&field=image${diet}&field=healthLabels&field=totalTime&field=dietLabels`,
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "X-Requested-With",
      },
    }
  )
    .then((res) => res.json())
    .then((res) => res);
};

export default getRecipes;
