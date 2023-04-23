import React, { useState } from "react";
import { TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./index.module.css";

const Home = () => {
  const [loading, setLoading] = useState(false);
  function handleClick() {
    setLoading(true);
  }

  return (
    <>
      <div className={`${styles.searchFieldHome}`}>
        <TextField
          InputProps={{
            sx: {
              "& input": {
                textAlign: "center",
              },
            },
          }}
          id="outlined-search"
          label="Steam ID"
          type="search"
        />
      </div>
      <div className={`${styles.searchButtonHome}`}>
        <LoadingButton
          onClick={handleClick}
          startIcon={<SearchIcon />}
          loading={loading}
          loadingPosition="start"
          variant="outlined"
        >
          <span>Search</span>
        </LoadingButton>
      </div>
    </>
  );
};

export default Home;
