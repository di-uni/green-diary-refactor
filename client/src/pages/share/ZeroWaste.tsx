import React, { useState, useEffect } from "react";
// import { Loading } from "../../components/Loading.jsx";
// import {firestore} from '../../firebase.js';
import Topbar from "../../components/topbar/Topbar";
import { Card } from "../../components/card/Card";
import { Post } from "../../common/types";
import "./share.css";

export default function ZeroWaste() {
  const [posts, setPosts] = useState<Post[]>([]);
  //   const [loading, setLoading] = useState(false);
  //   const ref = firestore.collection("posts");

  function getPosts() {
    const postsData = [
      {
        id: 0,
        date: "zero",
        title: "zero",
        writer: "zero",
        image: "zero",
        contents: "zero",
        timestamp: 202204,
      },
      {
        id: 1,
        date: "zero",
        title: "zero",
        writer: "zero",
        image: "zero",
        contents: "zero",
        timestamp: 202205,
      },
      {
        id: 2,
        date: "carbon",
        title: "carbon",
        writer: "carbon",
        image: "carbon",
        contents: "carbon",
        timestamp: 202203,
      },
      {
        id: 4,
        date: "food",
        title: "food",
        writer: "food",
        image: "food",
        contents: "food",
        timestamp: 202206,
      },
    ];

    postsData.sort((a, b) => {
      if (a.timestamp < b.timestamp) {
        return 1;
      }
      if (a.timestamp > b.timestamp) {
        return -1;
      }
      return 0;
    });

    setPosts(postsData);
    // setLoading(true);
    // setLoading(false);
  }

  useEffect(() => {
    getPosts();
  }, []);

  //   if (loading){
  //     return <Loading/>;
  //   }

  return (
    // read fierbase info
    <div style={{ backgroundColor: "var(--primary-green)" }}>
      <form>
        <Topbar />
        <div className="all">
          <div className="categoryName">Zero Waste</div>
          {posts.length === 0 ? (
            <div
              style={{
                color: "white",
                height: "75.7vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "20px",
              }}
            >
              {" "}
              No posts{" "}
            </div>
          ) : (
            <div className="post_cards">
              {posts.map((post) => (
                <Card
                  key={post.id}
                  date={post.date}
                  title={post.title}
                  writer={post.writer}
                  image={post.image}
                  contents={post.contents}
                />
              ))}
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
