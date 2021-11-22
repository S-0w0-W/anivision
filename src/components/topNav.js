import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: "white",
  },
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
}));

export default function TopNav({ PageName }) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  function handleDrawerOpen() {
    setOpen(true);
  }

  const list = (anchor) => (
    <div className={classes.list} role="presentation">
      <List>
        {["Home", "About", "THREE", "Landing", "Projects", "Testing"].map((text, index) => (
          <ListItem button key={text} component={Link} to={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (

    <div className={classes.root}>
      {/* <div className="menu"> */}
      <div id="menuButton">
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleDrawerOpen}
        >

          <MenuIcon style={
            {
              color: "white",
              fontSize: 40
            }
          } />
        </IconButton>

        <Typography variant="h6" className={classes.title}>
          {PageName}
        </Typography>
      </div>





      {/* </div> */}
      <Drawer open={open} onClose={() => setOpen(false)} anchor="left">
        {list()}
      </Drawer>
    </div>
  );
}
