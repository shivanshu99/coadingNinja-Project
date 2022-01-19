import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles({
  root: {
    "& > * + *": {
      marginTop: 2,
    },
  },
});

function PaginationComp({ count, offset_change }) {
  const classes = useStyles();
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
    offset_change(20 * (value - 1));
  };

  return (
    <div className={classes.root}>
      <Pagination
        color="secondary"
        count={count}
        page={page}
        onChange={handleChange}
      />
    </div>
  );
}

export default PaginationComp;
