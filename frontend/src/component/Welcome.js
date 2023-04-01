import { Grid, Typography } from "@material-ui/core";
import video from './video.mp4';

const Welcome = (props) => {
  return (
    <Grid container item direction="column" alignItems="center" justify="center">
      
      <video className='videoTag' autoPlay loop muted 
        style={{minWidth: "100%",minHeight: "91.5vh",maxWidth: "100%",maxHeight: "91.5vh",objectFit: "cover",
          zIndex: "-1", boxSizing:"border-box",backgroundColor: "rgba(35,45,57,0.8)"}}>
          <source src={video} type='video/mp4' />
      </video>
    </Grid>
  );
};

export const ErrorPage = (props) => {
  return (
    <Grid
      container
      item
      direction="column"
      alignItems="center"
      justify="center"
      style={{ padding: "30px", minHeight: "93vh" }}
    >
      <Grid item>
        <Typography variant="h2">Error 404</Typography>
      </Grid>
    </Grid>
  );
};

export default Welcome;
