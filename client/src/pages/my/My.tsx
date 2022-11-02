import React, { useState, useEffect } from "react";
import Topbar from "../../components/topbar/Topbar";
// import { Loading } from "../../components/Loading.jsx";
import { Card } from "../../components/card/Card";
// import { Heart } from "react-spinners-css";
import GreenBall from "../../assets/green_circle.png";
import LightgreenBall from "../../assets/lightgreen_circle.png";
import YellowBall from "../../assets/yellow_circle.png";
import BlueBall from "../../assets/blue_circle.png";
import { PostType, Post } from "../../common/types";
import "./my.css";

export default function My() {
  document.documentElement.style.setProperty("--main-color", "#FFFFFF");

  const user = {
    displayName: "Jiyun Park",
    uid: 1,
  };
  let name: string, uid: number;

  const [postTypes, setPostTypes] = useState<PostType>({
    zero: 0,
    carbon: 0,
    food: 0,
    others: 0,
  });
  const tot =
    postTypes.zero + postTypes.carbon + postTypes.food + postTypes.others;

  const [posts, setPosts] = useState<Post[]>([]);
  // const [loading, setLoading] = useState(false);

  // const postId = firestore.collection(`users/${uid}`);
  // const ref = firestore.collection("posts");

  function getPosts() {
    // setLoading(true);
    // 서버에서 받아오기

    const postsData = {
      zero: [
        {
          id: 0,
          date: "zero",
          title: "zero",
          writer: "zero",
          image: "zero",
          contents: "zero",
          timestamp: 202204,
        },
      ],
      carbon: [
        {
          id: 1,
          date: "carbon",
          title: "carbon",
          writer: "carbon",
          image: "carbon",
          contents: "carbon",
          timestamp: 202204,
        },
      ],
      food: [
        {
          id: 2,
          date: "food",
          title: "food",
          writer: "food",
          image: "food",
          contents: "food",
          timestamp: 202204,
        },
        {
          id: 5,
          date: "food",
          title: "food",
          writer: "food",
          image: "food",
          contents: "food",
          timestamp: 202206,
        },
      ],
      others: [
        {
          id: 3,
          date: "others",
          title: "others",
          writer: "others",
          image: "others",
          contents: "others",
          timestamp: 202204,
        },
      ],
    };

    setPostTypes({
      zero: postsData.zero.length,
      carbon: postsData.carbon.length,
      food: postsData.food.length,
      others: postsData.others.length,
    });

    const totalPosts = [
      ...postsData.zero,
      ...postsData.carbon,
      ...postsData.food,
      ...postsData.others,
    ];
    totalPosts.sort((a, b) => {
      if (a.timestamp < b.timestamp) {
        return 1;
      }
      if (a.timestamp > b.timestamp) {
        return -1;
      }
      return 0;
    });

    setPosts(totalPosts);

    //   setLoading(false);
  }

  useEffect(() => {
    getPosts();
    if (user != null) {
      name = user.displayName;
      uid = user.uid;
    }
  }, []);

  //   if (loading){
  //     return <Loading/>;
  //   }

  return (
    <div style={{ backgroundColor: "var(--primary-green)" }}>
      <form>
        <Topbar />
        <div className="all">
          <div className="categoryName">Hello, {name!}</div>
          <div className="my_container">
            <div className="overview">
              <div className="overview_circles">
                <div className="overview_zero">
                  {/* <Heart color="var(--primary-green)" size="100"/> */}
                  <img src={GreenBall} width={(postTypes.zero / tot) * 400} />
                </div>
                <div className="overview_carbon">
                  {/* <Heart color="var(--primary-lightgreen)" size="100"/> */}
                  <img
                    src={LightgreenBall}
                    width={(postTypes.carbon / tot) * 400}
                  />
                </div>
                <div className="overview_food">
                  {/* <Heart color="var(--primary-yellow)" size="100"/> */}
                  <img src={YellowBall} width={(postTypes.food / tot) * 400} />
                </div>
                <div className="overview_others">
                  {/* <Heart color="var(--primary-blue)" size="100"/> */}
                  <img src={BlueBall} width={(postTypes.others / tot) * 400} />
                </div>
              </div>
              <div className="overview_text">
                <p>Until now, you wrote {postTypes.zero} Zero Waste, </p>
                <p>
                  {postTypes.carbon} Carbon Footprint, {postTypes.food} Food,
                  {postTypes.others} Others diaries.
                </p>
              </div>
            </div>
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
                No posts
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
        </div>
      </form>
    </div>
  );
}
