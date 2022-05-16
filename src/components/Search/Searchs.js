import React from "react";
import styles from "./Search.module.scss";

const Searchs = ({ setSearchs }) => {
  let searchBtn = (e) => {
    e.preventDefault();
  };
  return (
    <form
      className={`${styles.searchs} d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-2`}
    >
      <input
        onChange={(e) => {
          setSearchs(e.target.value);
        }}
        placeholder="Put a ID number 1-126"
        className={styles.input}
        type="text"
      />
      <button
        onClick={searchBtn}
        className={`${styles.btn} btn btn-success fs-5`}
      >
        Search
      </button>
    </form>
  );
};

export default Searchs;