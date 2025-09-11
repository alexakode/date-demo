import "./App.css";
import {
  Box,
  Container,
  Card,
  CardContent,
  Typography,
  Button,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from "@mui/material";

function App() {
  const theme = createTheme({ shape: { borderRadius: 16 } });
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Box>
          <Container>
            <Card>
              <CardContent>
                <h1>Hello, welcome to our website!</h1>
              </CardContent>
            </Card>
            <Box component="section" sx={{ my: 4 }}>
              <Typography variant="h4" component="h2" gutterBottom>
                About Us
              </Typography>
              <Typography variant="body1">
                We are a company dedicated to providing the best services to our
                customers. Our team is passionate about delivering high-quality
                solutions tailored to your needs.
              </Typography>
              <Button variant="contained" color="primary">
                Learn More
              </Button>
            </Box>
          </Container>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
