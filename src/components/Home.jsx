import React, { useEffect, useState } from "react";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import { Grid, ThemeProvider, Box } from "@material-ui/core";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import Container from "@material-ui/core/Container";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import TopBar from "./TopBar";
import AllTags from "./AllTags";
import Events from "./Events";
import axios from "axios";
import SecondaryTopBar from "./SecondaryTopBar";
import PaginationComp from "./PaginationComp";
import Header from "./Header";
import hcbgImage from "../img.jpg";
import Footer from "./footer";

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
    backgroundImage: `url(${hcbgImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover !important'
  },
  align:{
    marginLeft: '50%',
    marginBottom: "10px"
  },
	backc: {
		backgroundColor: "#FAF7F2"
  },
  size:{
    maxWidth: '1600px',
    marginTop:"50px",
    marginBottom: "50px"
  }
}));
const light = {
  palette: {
    type: "light",
  },
};
const dark = {
  palette: {
    type: "dark",
  },
};

function Home() {
  const classes = useStyles();

  const [AllEvents, setAllEvents] = useState([]);
  const [event_category, setEvent_category] = useState("ALL_EVENTS");
  const [event_sub_category, setEvent_sub_category] = useState("Upcoming");
  const [selected_tags, setSelected_Tags] = useState([]);
  const [offset, setOffset] = useState(0);
  const [tag_str, setTag_str] = useState("");
  const [theme, setTheme] = useState(true);
  const [count, setCount] = useState(0);
  const icon = !theme ? <Brightness7Icon /> : <Brightness3Icon />;
  const appliedTheme = createMuiTheme(theme ? light : dark);

  const event_change = (val) => setEvent_category(val);
  const event_sub_change = (val) => setEvent_sub_category(val);
  const offset_change = (val) => setOffset(val);

  useEffect(() => {
    let tags_str = "";
    selected_tags.map((curr_tag) => {
      return (tags_str += curr_tag + ",");
    });
    setTag_str(tags_str);
  }, [selected_tags]);

  useEffect(() => {
    axios
      .get(
        `https://api.codingninjas.com/api/v3/events?event_category=${event_category}&event_sub_category=${event_sub_category}&tag_list=${tag_str}&offset=${offset}`
      )
      .then((res) => {
        setAllEvents(res.data.data.events);
        setCount(res.data.data.page_count);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [event_category, tag_str, event_sub_category, offset]);

  return (
		<div className={classes.root}>
			<Header icon={icon} settheme={setTheme} theme={theme} />
			<Container className={classes.size}>
				<Grid container spacing={3} className={classes.backc}>
					<ThemeProvider theme={appliedTheme}>
						<Grid item xs={12}>
							<TopBar
								event_change={event_change}
								value={event_category}
							/>
							<SecondaryTopBar
								event_sub_change={event_sub_change}
								value={event_sub_category}
							/>
						</Grid>
					</ThemeProvider>
					<Grid item md={9} xs={8}>
						<ThemeProvider theme={appliedTheme}>
							<Events AllEvents={AllEvents} />
						</ThemeProvider>
					</Grid>
					<Grid item md={3} xs={4}>
						<AllTags
							setSelectedtags={setSelected_Tags}
							selectedtags={selected_tags}
						/>
					</Grid>
					{!(Array.isArray(AllEvents) && AllEvents.length) ? null : (
						<Box mt="3rem" className={classes.align}>
							<PaginationComp
								count={count}
								offset_change={offset_change}
							/>
						</Box>
					)}
				</Grid>
			</Container>
			<Footer />
		</div>
  );
}

export default Home;
