import React from "react";
import "./Card.css";
function Card(props) {
  return (
    <>
      <a
        href={props.news.url}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <div className="card">
          <h2 className="title">{props.news.title}</h2>
          <div className="author">
            {" "}
            <span>By {props.news.author}</span>{" "}
          </div>
          <div className="mainImg">
            <img
              src={props.news.urlToImage}
              width="560px"
              height="auto"
              alt=""
            />
          </div>
          <span className="description">{props.news.description}</span>
        </div>
      </a>{" "}
    </>
  );
}

export default Card;
