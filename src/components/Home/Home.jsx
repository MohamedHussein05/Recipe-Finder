import React, { useEffect, useState } from "react";
import "./Home.css";
import { Error, RecipeItem, Loader } from "../";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faX,
  faMagnifyingGlass,
  faChevronDown,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import getRecipes from "../../services/getRecipes";

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(0);
  const [next, setNext] = useState("");
  const [filter, setFilter] = useState("Filter by diet");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [noResult, setNoResult] = useState(false);

  const dietFilters = [
    "balanced",
    "high-fiber",
    "hight-protein",
    "low-carb",
    "low-fat",
    "low-sodium",
  ];

  useEffect(() => {
    const selectedFilterTitle = document.querySelector(".selectedFilterTitle");
    if (!selectedFilterTitle) return;

    selectedFilterTitle.textContent = filter;
    search && searchRecipes();
  }, [filter]);

  useEffect(() => {
    (count || error) && setLoading(false);
  }, [count, error]);

  const searchRecipes = (e) => {
    if (e?.keyCode && e?.keyCode != 13) return;
    if (!search.trim()) return;
    const dietFilter = dietFilters.includes(filter) ? filter : "";

    setLoading(true);

    getRecipes(search, dietFilter)
      .then((res) => {
        const filteredRecipes = filterRecipes(res.hits);
        if (!filteredRecipes) return;

        setNoResult(false);
        setRecipes([...filteredRecipes]);
        setCount(res.count);

        const nextLink = res?._links?.next?.href;
        setNext(nextLink ? nextLink : null);
      })
      .catch(() => setError(true));
  };

  const searchMore = () => {
    if (next === null) return;

    getRecipes(null, null, next)
      .then((res) => {
        const filteredRecipes = filterRecipes(res?.hits);
        setRecipes([...recipes, ...filteredRecipes]);

        const nextLink = res?._links?.next?.href;
        setNext(nextLink ? nextLink : null);
      })
      .catch(() => setError(true));
  };

  const filterRecipes = (recipes) => {
    if (!recipes.length) {
      setNoResult(true);
      setCount(0);
      return setLoading(false);
    }

    return recipes.map((recipe) => ({
      label: recipe?.recipe?.label,
      image: recipe?.recipe?.image,
      diet: recipe?.recipe?.dietLabels,
      time: recipe?.recipe?.totalTime,
      healthLabels: recipe?.recipe?.healthLabels,
    }));
  };

  const clearSearch = () => {
    setRecipes([]);
    setSearch("");
    setCount(0);
    setLoading(false);
    setError(false);
    setNoResult(false);
    setNext("");
    setFilter("Filter by diet");

    let allFilters = document.querySelector(".filterList");
    allFilters = document.querySelectorAll("li");
    allFilters = Array.from(allFilters);

    if (!allFilters.length) return;

    const target = allFilters.find((item) => item.textContent === filter);
    const all = allFilters.find((item) => item.textContent === "all");

    target?.classList.remove("selectedFilter");
    all?.classList.add("selectedFilter");
  };

  const selectFilter = (e) => {
    const target = e?.target;
    let allFilters = e?.currentTarget?.querySelectorAll("li");
    allFilters = Array.from(allFilters);

    if (!target?.textContent || !allFilters.length) return;

    allFilters.forEach((li) => li.classList.remove("selectedFilter"));
    target.classList.add("selectedFilter");
    setFilter(target?.textContent);
  };
  return (
    <>
      {error ? (
        <Error />
      ) : (
        <div className="home container">
          <div>
            <h2 className="homeTitle">search results</h2>
            <div className="searchParam">
              <input
                type="text"
                className="searchInput"
                id="searchInput"
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={searchRecipes}
                value={search}
              />
              <div className="searchActions">
                {count ? (
                  <span className="results">{`(${count} recipe${
                    count > 1 && "s"
                  })`}</span>
                ) : (
                  ""
                )}
                {recipes.length ? (
                  <FontAwesomeIcon
                    onClick={clearSearch}
                    className="searchIcon"
                    icon={faX}
                  />
                ) : (
                  <FontAwesomeIcon
                    onClick={searchRecipes}
                    className="clearIcon"
                    icon={faMagnifyingGlass}
                  />
                )}
              </div>
            </div>
            <div className="filterRecipes">
              <div className="filterTitle">
                <span className="selectedFilterTitle" />
                <FontAwesomeIcon icon={faChevronDown} />
              </div>
              <ul onClick={selectFilter} className="filterList">
                <li className="selectedFilter">all</li>
                {dietFilters.map((dietFilter) => (
                  <li key={dietFilter}>{dietFilter}</li>
                ))}
              </ul>
            </div>
          </div>
          {loading ? (
            <Loader />
          ) : noResult ? (
            <p className="noResult">
              <FontAwesomeIcon icon={faCircleExclamation} />
              <span>Your search did not match any</span>
            </p>
          ) : (
            !!recipes.length && (
              <div className="homeBody">
                {recipes.map((recipe) => (
                  <RecipeItem
                    key={`${recipe.label}+${recipe.image}`}
                    image={recipe.image}
                    label={recipe.label}
                    time={recipe.time}
                    healthLabels={recipe.healthLabels}
                  />
                ))}
              </div>
            )
          )}
          {next && !loading && !noResult && (
            <button type="button" className="loadMoreBtn" onClick={searchMore}>
              load more
            </button>
          )}
        </div>
      )}
    </>
  );
};
export default Home;
