import { Button, Grid, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const userData = {
      role: "ROLE_USER",
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      mobile: data.get("mobile"),
      email: data.get("email"),
      password: data.get("password"),
    };

    console.log(userData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="First Name"
              fullWidth
              autoComplete="given-name"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Last Name"
              fullWidth
              autoComplete="given-name"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="mobile"
              name="mobile"
              label="Mobile"
              fullWidth
              autoComplete="mobile"
              inputProps={{ type: "number" }}
            />
          </Grid>
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
              Register
            </Button>
          </Grid>
        </Grid>
      </form>
      <div className="flex justify-center flex-col items-center">
        <div className="py-3 flex items-center">
          <p>if you have already account ?</p>
          <Button
            onClick={() => navigate("/login")}
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
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
