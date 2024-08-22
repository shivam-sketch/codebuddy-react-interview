// material-ui
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

// ==============================|| FORM WIZARD - BASIC ||============================== //

export default function AddressForm() {
  return (
    <>
      <Typography variant="h5" gutterBottom sx={{ mb: 2 }}>
        Form 1
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            type="email"
            required
            id="emailIdBasic"
            name="emailId"
            label="Email Id"
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            type="password"
            id="lastNameBasic"
            name="password"
            label="Password"
            fullWidth
            autoComplete="family-name"
          />
        </Grid>
      </Grid>
    </>
  );
}
