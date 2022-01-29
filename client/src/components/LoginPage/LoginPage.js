import '../LoginPage/LoginPage.css';
import { Grid, Paper, Avatar } from '@material-ui/core';
// import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
// import LockOpenIcon from '@mui/icons-material/LockOpen';

export default function LoginPage() {
  return (
    <div className="LoginPage-Div">
      <div className="LoginImage">
        <div className="LoginSignIn">
          <Grid>
            <Paper className="PaperStyle" elavation={10}>
              <Avatar>
                {/* <LockOpenIcon /> */}
                {/* <AssignmentIndIcon /> */}
              </Avatar>
              Sign in
            </Paper>
          </Grid>
        </div>
      </div>
    </div>
  );
}
