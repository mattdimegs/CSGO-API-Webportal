import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalHeader from "./localComponents/header";
import Home from "./localComponents/home";
import AllMatches from "./localComponents/allMatches";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <GlobalHeader /> <Home />
              </>
            }
          />
          <Route
            path="/statistics/allmatches"
            element={
              <>
                <GlobalHeader /> <AllMatches />
              </>
            }
          />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
