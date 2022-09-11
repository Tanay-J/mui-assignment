import { Button, Container, Divider, Grid, Typography } from "@mui/material";

function OrderSummary() {
  return (
    <>
      <Typography variant="h5" fontWeight="bold">
        Order Summary
      </Typography>
      <Container sx={{ my: 2 }} disableGutters>
        <Grid container color="gray" justifyContent="space-between">
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

        <Grid container color="gray" justifyContent="space-between">
          <Grid item>
            <Typography variant="subtitle2" fontWeight="medium" sx={{ my: 1 }}>
              VAT(14%)
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle2" fontWeight="medium" sx={{ my: 1 }}>
              ₹ 30.00
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Divider />
      <Container sx={{ my: 2 }} disableGutters>
        <Grid container color="gray" justifyContent="space-between">
          <Grid item>
            <Typography variant="subtitle2" color="black">
              Total:
            </Typography>
            <Typography variant="caption">Including VAT</Typography>
          </Grid>
          <Grid item>
            <Typography color="black" variant="h6" fontWeight="bold">
              ₹ 1330.00
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "black",
          color: "white",
          borderRadius: "10px",
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
