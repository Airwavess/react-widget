import AppBar from "@material-ui/core/AppBar";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
}));

const NavBar = () => {
  const classes = useStyle();

  return (
    <AppBar position="relative">
      <Toolbar>
        <CameraIcon className={classes.icon} />
        <Typography variant="h6" color="inherit" noWrap>
          React widget
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
