import { AppBar, Container, Toolbar, Typography } from "@mui/material";

function Navbar() {
  return (
    <>
      <AppBar position="relative" sx={{ backgroundColor: "white", py: 1 }}>
        <Toolbar>
          <Container>
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
