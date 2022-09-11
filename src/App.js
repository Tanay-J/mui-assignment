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
        <Grid 
          item
          xs={12} 
          sm={12} 
          md={6} 
          lg={5} 
          sx={{ px: "80px" }}
        >
          <BillingDetails />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={5}
          lg={4}
          sx={{ px: "80px", my: "40px" }}
          alignSelf="center"
        >
          <OrderSummary />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
