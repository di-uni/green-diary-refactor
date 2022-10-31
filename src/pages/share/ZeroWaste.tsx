import React, {useState, useEffect} from "react";
// import { Loading } from "../../components/Loading.jsx";
// import {firestore} from '../../firebase.js';
import Topbar from "../../components/topbar/Topbar";
import { Card } from "../../components/card/Card";
import "./share.css"; 

export default function ZeroWaste() {
    interface post {
        id: number,
        date: string,
        title: string, 
        writer: string,
        image: string,
        contents: string,
        timestamp: number
    }
    const [posts, setPosts] = useState<post[]>([]);
//   const [loading, setLoading] = useState(false);

//   const ref = firestore.collection("posts");

    function getPosts(){
        const postsData = [{
            id: 0,
            date: "zero",
            title: "zero", 
            writer: "zero",
            image: "zero",
            contents: "zero",
            timestamp: 202204
        }, {
            id: 1,
            date: "zero",
            title: "zero", 
            writer: "zero",
            image: "zero",
            contents: "zero",
            timestamp: 202205
        }, {
            id: 2,
            date: "carbon",
            title: "carbon", 
            writer: "carbon",
            image: "carbon",
            contents: "carbon",
            timestamp: 202203
        }, {
            id: 4,
            date: "food",
            title: "food", 
            writer: "food",
            image: "food",
            contents: "food",
            timestamp: 202206
        }];

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
    // ref.get().then((item) => {
    //   var items = item.docs.map((doc) => doc.data());
    //   items = items.filter(function (a) {
    //     if ((a.category == "Zero Waste") && a.isPublic)
    //       return a;
    //   });
    //   items.sort(function (a, b) {
    //     if (a.timestamp < b.timestamp) {
    //       return 1;
    //     }
    //     if (a.timestamp > b.timestamp) {
    //       return -1;
    //     }
    //     return 0;
    //   });
    //   setPosts(items);
    //   setLoading(false);
    // })
    }

    useEffect(() => {
        getPosts();
    }, []);

//   if (loading){
//     return <Loading/>;
//   }


    return(
        // read fierbase info
        <div style={{ backgroundColor: "var(--primary-green)" }}>
        <form>
            <Topbar/>
            <div className="all">
            <div className="categoryName">Zero Waste</div>
            {(posts.length === 0) ? 
            <div style={{ color:"white", 
                            height: '75.7vh',
                            display: 'flex',  
                            justifyContent:'center', 
                            alignItems:'center',
                            fontSize: '20px'
            }}> No posts </div>: 
            <div className="post_cards">
                {posts.map((post) => (
                <Card 
                    id={post.id}
                    date={post.date}
                    title={post.title}
                    writer={post.writer}
                    image={post.image}
                    contents={post.contents}
                />
                ))}
            </div>
            } 
            </div>
        </form>
        </div>
        
    );
}