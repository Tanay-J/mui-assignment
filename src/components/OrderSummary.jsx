import { Button, Container, Divider, Grid, Typography } from "@mui/material";
import Brightness1Icon from "@mui/icons-material/Brightness1";

function OrderSummary() {
  return (
    <>
      <Typography variant="h5" fontWeight="bold">
        Order Summary
      </Typography>
      <Container sx={{ my: 3 }} disableGutters>
        <Grid container color="#a9a9a9" justifyContent="space-between">
          <Grid item>
            <Typography variant="subtitle2" fontWeight="medium">
              Balance amount
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle2" fontWeight="medium">
              ₹ 1300.00
            </Typography>
          </Grid>
        </Grid>

        <Grid
          container
          color="#a9a9a9"
          justifyContent="space-between"
          sx={{ my: 2 }}
        >
          <Grid item sx={{ display: "flex", alignItems: "center" }}>
            <Typography variant="subtitle2" fontWeight="medium">
              VAT(14%)
            </Typography>
            <Brightness1Icon
              sx={{ mx: 1, color: "gainsboro", fontSize: "20px" }}
            ></Brightness1Icon>
          </Grid>
          <Grid item>
            <Typography variant="subtitle2" fontWeight="medium">
              ₹ 30.00
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Divider />
      <Container sx={{ my: 3 }} disableGutters>
        <Grid container color="#a9a9a9" justifyContent="space-between">
          <Grid item>
            <Typography variant="subtitle2" color="black">
              Total:
            </Typography>
            <Typography variant="caption">Including VAT</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6" color="black" fontWeight="bold">
              ₹ 1330.00
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Button
        variant="contained"
        size="large"
        sx={{
          backgroundColor: "black",
          color: "white",
          borderRadius: "8px",
          textTransform: "none",
        }}
        fullWidth
      >
        Checkout
      </Button>
    </>
  );
}

export { OrderSummary };
