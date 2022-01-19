import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

function SecondaryTopBar({ event_sub_change, value }) {
  const classes = useStyles();


  const handleChange = (e, newValue) => {
    event_sub_change(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="secondary"
        textColor="secondary"
      >
        <Tab label="Upcoming" value="Upcoming" />
        <Tab label="Archived" value="Archived" />
        <Tab label="All Time Favorites" value="All Time Favorites" />
      </Tabs>
    </Paper>
  );
}

export default SecondaryTopBar;
