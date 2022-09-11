import { Grid } from "@mui/material";
import { BillingDetails, Navbar, OrderSummary } from "./components";

function App() {
  return (
    <div>
      <Navbar />
      <Grid
        container
        justifyContent="center"
        alignContent="center"
        sx={{ my: "80px" }}
      >
        <Grid item sx={{ px: "80px" }}>
          <BillingDetails />
        </Grid>
        <Grid item sx={{ px: "80px" }} alignSelf="center">
          <OrderSummary />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
