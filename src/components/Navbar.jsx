import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import Brightness1Icon from "@mui/icons-material/Brightness1";

function Navbar() {
  return (
    <>
      <AppBar position="relative" sx={{ backgroundColor: "white", py: 1 }}>
        <Toolbar>
          <Container sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Brightness1Icon sx={{ color: "black" }}></Brightness1Icon>
            <Typography variant="h5" fontWeight="bold" sx={{ color: "black" }}>
              LOGO
            </Typography>
          </Container>
        </Toolbar>
      </AppBar>
    </>
  );
}

export { Navbar };
