import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Tabs, Tab } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

function TopBar({ event_change, value }) {
  const classes = useStyles();


  const handleChange = (e, newValue) => {
    event_change(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="secondary"
        textColor="secondary"
        variant="fullWidth"
        centered
      >
        <Tab
          icon={
            <img
              style={{ width: "20px" }}
              src="https://www.codingninjas.com/assets-landing/images/all-events-selected.svg"
            ></img>
          }
          label="All Events"
          value="ALL_EVENTS"
        />

        <Tab
          icon={
            <img
              style={{ width: "20px" }}
              src="https://www.codingninjas.com/assets-landing/images/webinar-unselected.svg"
              alt=""
            />
          }
          label="Webinar"
          value="WEBINAR"
        />

        <Tab
          icon={
            <img
              style={{ width: "20px" }}
              src="https://www.codingninjas.com/assets-landing/images/coding-events-unselected.svg"
              alt=""
            />
          }
          label="Coding Event"
          value="CODING_EVENT"
        />

        <Tab
          icon={
            <img
              style={{ width: "20px" }}
              src="https://files.codingninjas.in/bootcamp_events_unselected-5397.png"
              alt=""
            />
          }
          label="Bootcamp Event"
          value="BOOTCAMP_EVENT"
        />

        <Tab
          icon={
            <img
              style={{ width: "20px" }}
              src="https://files.codingninjas.in/workshop_selected-5396.png"
              alt=""
            />
          }
          label="Workshop"
          value="WORKSHOP"
        />
      </Tabs>
    </Paper>
  );
}

export default TopBar;
