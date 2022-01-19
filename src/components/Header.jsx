import React from "react";
import { Grid, Box, IconButton, Typography } from "@material-ui/core";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
	backc: {
		backgroundColor: "#FAF7F2"
	},

}));
function Header({ icon, settheme, theme }) {
   const classes = useStyles();
  return (
		<Grid container>
			<Grid item xs={5}>
				<Box height="8rem" width="20vw" clone>
					<img
						src="https://www.codingninjas.com/assets-landing/images/CNLOGO.svg"
						alt=""
					/>
				</Box>
			</Grid>
			<Grid item xs={5}>
				<Box mt={4} color="white">
					<Typography variant="h4" component="h1">
						Events & News
					</Typography>

					<Typography variant="body2" component="p">
						Learn, Compete & Grow
					</Typography>
				</Box>
			</Grid>
			
		</Grid>
  );
}

export default Header;
