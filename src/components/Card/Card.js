import React, { useState } from "react";
import "./Card.css";
import AddIcon from "@mui/icons-material/Add";
import DoneIcon from "@mui/icons-material/Done";

function Card(props) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  return (
    <>
      {/* <a
        href={props.news.url}
        style={{ textDecoration: "none", color: "inherit" }}
      > */}

      <div className="card">
        <h2 className="title">{props.news.title}</h2>
        <div className="author">
          {" "}
          <span>By {props.news.author}</span>{" "}
          <div
            className="bookmarkButton"
            onClick={() => {
              // setBookmarkItems([...bookmarkItems, props.news ]);
              isBookmarked ? setIsBookmarked(false) : setIsBookmarked(true);
            }}
          >
            {isBookmarked ? <DoneIcon /> : <AddIcon />}
            {isBookmarked ? "Added" : "Bookmark"}
          </div>
        </div>
        <div className="mainImg">
          <img src={props.news.urlToImage} width="560px" height="auto" alt="" />
        </div>
        <span className="description">{props.news.description}</span>
      </div>
      {/* </a>{" "} */}
    </>
  );
}

export default Card;
