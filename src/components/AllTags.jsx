import axios from "axios";
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";


const useStyles = makeStyles({
  tags: {
    color: "#424242",
    fontSize: "14px",
    padding: "6px 12px",
    fontWeight: 400,
    borderRadius: "2px",
    background: "#eee",
    marginBottom: "10px",
    marginRight: "5px",
    cursor: "Pointer",
  },
  selectd_tags: {
    color: "#fff",
    background: "#fa7328",
    fontSize: "14px",
    padding: "6px 12px",
    fontWeight: 400,
    borderRadius: "2px",
    marginBottom: "10px",
    marginRight: "5px",
    cursor: "Pointer",
  },
});

function AllTags({ set_tags, setSelectedtags, selectedtags }) {
  const [tags, setTags] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    axios
      .get("https://api.codingninjas.com/api/v3/event_tags")
      .then((res) => {

        setTags(res.data.data.tags);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handlechange = (e) => {
    let filt_arr = [];
    let temp_tag = e.target.innerHTML;
    if (!selectedtags.includes(temp_tag)) {
      setSelectedtags((selectedtags) => [...selectedtags, temp_tag]);
    } else {
      filt_arr = selectedtags.filter((e) => e !== temp_tag);
      setSelectedtags(filt_arr);
    }
  };

  return (
    <div>
      <h1>Tags</h1>
      {tags.map((tag, index) => {
        let className = classes["tags"];
        if (selectedtags.includes(tag)) {
          className = classes["selectd_tags"];
        }
        return (
          <Box
            key={index}
            className={className}
            component="div"
            onClick={handlechange}
          >
            {tag}
          </Box>
        );
      })}
    </div>
  );
}

export default AllTags;
