import { TextField } from "@mui/material";
import styles from "./index.module.css";

const Home = () => {
  return (
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
        label="Username"
        type="search"
      />
    </div>
  );
};

export default Home;
