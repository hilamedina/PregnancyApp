import '../LoginPage/LoginPage.css';
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
} from '@material-ui/core';

export default function LoginPage(props) {
  return (
    <>
      <div className="LoginPage-Div">
        <div className="LoginImage">
          <div className="LoginSignIn">
            <Grid>
              <Paper className="PaperStyle" elavation={10}>
                <form>
                  <Grid align="center">
                    <Avatar className="AvatarStyle"></Avatar>
                    <h2>Sign up</h2>
                  </Grid>
                  <TextField
                    label="Username"
                    placeholder="Enter your Username"
                    required
                  ></TextField>
                  <br />
                  <br />
                  <br />
                  <TextField
                    label="email"
                    placeholder="Enter your email"
                    required
                  ></TextField>
                  <br />
                  <br />
                  <br />
                  <TextField
                    label="Password"
                    placeholder="Enter your Password"
                    type="password"
                    required
                  ></TextField>
                  <br />
                  <br />
                  <br />
                  <Link
                    href="login"
                    onClick={props.returnToMainView}
                    className="btnStyle"
                    type="submit"
                    variant="contained"
                    fullWidth
                  >
                    {' '}
                    Sign in
                  </Link>

                  <div className="Links-Login">
                    <Typography>
                      <Link href="">Forgot Password ?</Link>
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
    </>
  );
}
