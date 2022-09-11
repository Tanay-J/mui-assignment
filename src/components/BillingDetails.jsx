import {
  Checkbox,
  FormControl,
  FormControlLabel,
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
      <Typography
        variant="h5"
        fontWeight="bold"
        sx={{ color: "#a9a9a9", mb: 2 }}
      >
        Billing Details
      </Typography>
      <Grid container spacing={2.5} className="text-field">
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            size="small"
            name="name"
            placeholder="Name"
            aria-label="name"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl size="small" fullWidth>
            <InputLabel sx={{ fontSize: "small" }}>Select Country</InputLabel>
            <Select label="Select Country">
              <MenuItem value={"Bangladesh"}>Bangladesh</MenuItem>
              <MenuItem value={"Bhutan"}>Bhutan</MenuItem>
              <MenuItem value={"India"}>India</MenuItem>
              <MenuItem value={"Nepal"}>Nepal</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            size="small"
            name="address1"
            placeholder="Address"
            aria-label="Address"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            size="small"
            name="address2"
            placeholder="Address Line 2"
            aria-label="Address Line 2"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            size="small"
            variant="outlined"
            name="city"
            placeholder="City"
            aria-label="city"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            size="small"
            variant="outlined"
            name="zip"
            placeholder="ZIP"
            aria-label="zip"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth size="small">
            <InputLabel sx={{ fontSize: "small" }}>State</InputLabel>
            <Select label="State">
              <MenuItem value={"Karnataka"}>Karnataka</MenuItem>
              <MenuItem value={"Kerala"}>Kerala</MenuItem>
              <MenuItem value={"Maharashtra"}>Maharashtra</MenuItem>
              <MenuItem value={"Meghalaya"}>Meghalaya</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <FormControlLabel
        control={<Checkbox />}
        label="Set as default payment method"
        sx={{ my: 2, color: "#a9a9a9" }}
      />
    </>
  );
}

export { BillingDetails };
