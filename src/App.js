import logo from "./logo.svg";
import "./App.css";
import Design from "./Design";
import { Grid } from "@mui/material";
import { clrs } from "./DataSheet";

function App() {
  return (
    <div className="App">
      <Grid container spacing={2}>
        <Grid item xs={0.1} xl={1.5}>
          <p style={{color:clrs[1]}}>d</p>
        </Grid>
        <Grid item xs={11.6} xl={9}>
          <Design />
        </Grid>
        <Grid item xs={0.1} xl={1.5}>
          <p style={{color:clrs[1]}}>d</p>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
