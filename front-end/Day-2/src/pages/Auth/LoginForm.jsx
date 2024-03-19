import { Button, Grid, TextField } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (state && state.email && state.password) {
      console.log("Email:", state.email);
      console.log("Password:", state.password);

      navigate("/services");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              required
              id="email"
              name="email"
              label="Email"
              fullWidth
              autoComplete="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="password"
              name="password"
              label="Password"
              fullWidth
              autoComplete="password"
              type="password"
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              className=" w-full"
              type="submit"
              variant="contained"
              size="large"
              sx={{
                padding: ".8rem 0",
                bgcolor: "#18c0d1",

                "&:hover": {
                  bgcolor: "#eb247b",
                },
                "&:active": {
                  bgcolor: "#eb247b",
                },
              }}
            >
              Login
            </Button>
          </Grid>
        </Grid>
      </form>
      <div className="flex justify-center flex-col items-center">
        <div className="py-3 flex items-center">
          <p>if you have don't have account ?</p>
          <Button
            onClick={() => navigate("/register")}
            className="ml-5"
            size="small"
            sx={{
              color: "#eb247b",
              "&:hover": {
                color: "#18c0d1",
              },
              "&:active": {
                color: "#18c0d1",
              },
            }}
          >
            Register
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
