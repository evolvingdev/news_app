import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/Card";
import "./Feed.css";
import { Rings, ColorRing } from "react-loader-spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import Bookmark from "../Bookmark/Bookmark";

function Feed() {
  const [spinner, setSpinner] = useState(true);
  const [paginatedFeed, setPaginatedFeed] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(10);

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=Apple&from=2023-06-02&sortBy=popularity&apiKey=ee0f7560eefb4e618012d3c2470926e5"
      )
      .then(function (response) {
        // handle success
        console.log(response.data.articles);
        setSpinner(false);
        setPaginatedFeed([
          ...paginatedFeed,
          ...response.data.articles.slice(startIndex, endIndex),
        ]);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, [startIndex]);

  const populatePaginatedFeed = () => {
    setStartIndex(startIndex + 10);
    setEndIndex(endIndex + 10);
  };

  return (
    <div>
      <div className="parent">
        {spinner ? (
          <>
            {" "}
            <div
              style={{
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Rings
                height="120"
                width="120"
                color="#4fa94d"
                radius="6"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="rings-loading"
              />
            </div>
          </>
        ) : (
          <>
              <Bookmark />
            <InfiniteScroll
              dataLength={paginatedFeed.length} //This is important field to render the next data
              next={populatePaginatedFeed}
              hasMore={true}
              loader={
                <ColorRing
                  visible={true}
                  height="80"
                  width="80"
                  ariaLabel="blocks-loading"
                  wrapperStyle={{}}
                  wrapperClass="blocks-wrapper"
                  colors={[
                    "#e15b64",
                    "#f47e60",
                    "#f8b26a",
                    "#abbd81",
                    "#849b87",
                  ]}
                />
              }
              endMessage={
                <p style={{ textAlign: "center" }}>
                  <b>Yay! You have seen it all</b>
                </p>
              }
              style={{
                width: "99vw",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {paginatedFeed !== null ? (
                paginatedFeed.map((item, idx) => {
                  return <Card news={item} />;
                })
              ) : (
                <>Loading...</>
              )}{" "}
            </InfiniteScroll>
          </>
        )}
      </div>
    </div>
  );
}

export default Feed;
