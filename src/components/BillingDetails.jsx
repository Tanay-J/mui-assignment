import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import "./styles.css";

function BillingDetails() {
  return (
    <>
      <Typography variant="h5" fontWeight="bold" sx={{ color: "gray", mb: 2 }}>
        Billing Details
      </Typography>
      <Grid container spacing={2} className="inputRounded">
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            size="small"
            name="name"
            placeholder="Name"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl size="small" fullWidth>
            <InputLabel>Select Country</InputLabel>
            <Select label="Select Country">
              <MenuItem value={"India"}>India</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            size="small"
            name="address1"
            placeholder="Address"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            size="small"
            name="address2"
            placeholder="Address Line 2"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            size="small"
            variant="outlined"
            name="city"
            placeholder="City"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            size="small"
            variant="outlined"
            name="zip"
            placeholder="ZIP"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth size="small">
            <InputLabel>State</InputLabel>
            <Select label="State">
              <MenuItem value={"Maharashtra"}>Maharashtra</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </>
  );
}

export { BillingDetails };
