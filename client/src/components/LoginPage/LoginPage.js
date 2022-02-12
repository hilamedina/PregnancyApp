import '../LoginPage/LoginPage.css';
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
  // FormControlLabel,
  // Checkbox,
} from '@material-ui/core';
// import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
// import LockOpenIcon from '@mui/icons-material/LockOpen';

export default function LoginPage() {
  const onSubmit = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className="LoginPage-Div">
      <div className="LoginImage">
        <div className="LoginSignIn">
          <Grid>
            <Paper className="PaperStyle" elavation={10}>
              <form onSubmit={onSubmit}>
                <Grid align="center">
                  <Avatar className="AvatarStyle">
                    {/* <LockOpenIcon /> */}
                    {/* <AssignmentIndIcon /> */}
                  </Avatar>
                  <h2>Sign up</h2>
                </Grid>
                <TextField
                  label="UserId"
                  placeholder="Enter your Username"
                  // fullwidth
                  required
                ></TextField>
                <br />
                <br />
                <br />
                <TextField
                  label="email"
                  placeholder="Enter your email"
                  // fullWidth
                  required
                ></TextField>
                <br />
                <br />
                <br />
                <TextField
                  label="Password"
                  placeholder="Enter your Password"
                  type="password"
                  // fullWidth
                  required
                ></TextField>
                <br />
                <br />
                <br />
                <button
                  className="btnStyle"
                  type="submit"
                  variant="contained"
                  // fullWidth
                >
                  Sign in
                </button>
                <div className="Links-Login">
                  <Typography>
                    <Link href="#">Forgot Password ?</Link>
                  </Typography>
                  <Typography>
                    Do you have an account?
                    <Link href="#"> Sign in</Link>
                  </Typography>
                </div>
              </form>
            </Paper>
          </Grid>
        </div>
      </div>
    </div>
  );
}
