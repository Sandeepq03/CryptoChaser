import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./Components/Header";
import CoinPage from "./Pages/CoinPage";
import Homepage from "./Pages/Homepage";
import { makeStyles } from "@material-ui/core";
import Alert from './Components/Alert';


function App() {

  const useStyles = makeStyles(() => ({
    App: {
      backgroundColor: "#191429",
      color: "white",
      minHeight: "100vh"
    },
  }));

  const classes = useStyles();
  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Routes >
          <Route path="/" element={<Homepage />} />
          <Route path="/coins/:id" element={<CoinPage />} />
        </Routes>
      </div>
      <Alert />
    </BrowserRouter>
  )
}

export default App;
