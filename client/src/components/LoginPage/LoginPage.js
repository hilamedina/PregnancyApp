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
  return (
    <div className="LoginPage-Div">
      <div className="LoginImage">
        <div className="LoginSignIn">
          <Grid>
            <Paper className="PaperStyle" elavation={10}>
              <Grid align="center">
                <Avatar className="AvatarStyle">
                  {/* <LockOpenIcon /> */}
                  {/* <AssignmentIndIcon /> */}
                </Avatar>
                <h2>Sign in</h2>
              </Grid>
              <TextField
                label="Username"
                placeholder="Enter your Username"
                fullWidth
                required
              ></TextField>
              <br />
              <br />
              <br />
              <TextField
                label="Password"
                placeholder="Enter your Password"
                type="password"
                fullWidth
                required
              ></TextField>
              <br />
              <br />
              <br />
              <Button
                className="btnStyle"
                type="submit"
                variant="contained"
                fullWidth
              >
                Sign in
              </Button>
              <div className="Links-Login">
                <Typography>
                  <Link href="#">Forgot Password ?</Link>
                </Typography>
                <Typography>
                  Do you have an account?
                  <Link href="#"> Sign in</Link>
                </Typography>
              </div>
            </Paper>
          </Grid>
        </div>
      </div>
    </div>
  );
}
