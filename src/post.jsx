import React from "react";
import { MessageSquare, Heart } from "lucide-react";
import "./post.css";
import { Link } from "react-router-dom";

const posts = [
    {
        id: 1,
        username: "anupamv",
        avatar: "https://i.pravatar.cc/40?img=1",
        content: "The Ultimate Driving Machine   BMW",
        image: "https://wallpapercave.com/wp/wp12970093.jpg",
        likes: 15,
        comments: 3,
    },
    {
        id: 2,
        username: "devgirl",
        avatar: "https://i.pravatar.cc/40?img=2",
        content: "Designed for driving, built for passion BMW m3",
        image: "",
        video: "https://www.youtube.com/embed/x6OaIcF3hbQ?autoplay=1&mute=1&loop=1&playlist=x6OaIcF3hbQ",
        likes: 42,
        comments: 8,
    },
    {
        id: 4,
        username: "devgirl",
        avatar: "https://i.pravatar.cc/40?img=2",
        content: "Designed for driving, built for passion BMW m3",
        image: "https://wallpapercave.com/dwp2x/wp14985800.webp",
        likes: 42,
        comments: 8,
    }, {
        id: 5,
        username: "praveen",
        avatar: "https://i.pravatar.cc/40?img=2",
        content: "Designed for driving, built for passion BMW m3",
        image: "https://i.pinimg.com/736x/13/0d/08/130d0835cea55fbb12e132a88bb991a2.jpg",
        likes: 42,
        comments: 8,
    }, {
        id: 6,
        username: "devgirl",
        avatar: "https://i.pravatar.cc/40?img=2",
        content: "Designed for driving, built for passion BMW m3",
        image: "https://i.pinimg.com/736x/b9/d5/16/b9d516266d54939a791256ecded57dbb.jpg",
        likes: 42,
        comments: 8,
    }, {
        id: 7,
        username: "devgirl",
        avatar: "https://i.pravatar.cc/40?img=2",
        content: "Designed for driving, built for passion BMW m3",
        image: "",
        video: "https://www.youtube.com/embed/WBrZ0lkrS2w?autoplay=1&mute=1&loop=1&playlist=WBrZ0lkrS2w",
        likes: 42,
        comments: 8,
    }, {
        id: 3,
        username: "Surya",
        avatar: "https://play-lh.googleusercontent.com/1iGCXNIdPo_q4oq-8S3PT_acwaEy_D7LV4WbCAFNnVBEsWoNO9S6sk5RfCfonmgJyUo",
        content: "Designed for driving, built for passion BMW m3",
        image: "https://play-lh.googleusercontent.com/1iGCXNIdPo_q4oq-8S3PT_acwaEy_D7LV4WbCAFNnVBEsWoNO9S6sk5RfCfonmgJyUo",
        likes: 42,
        comments: 8,
    },
];

const Post = () => {
    return (
        <div className="app-container">
            <div className="sidebar">
                <h2 className="sidebar-title">Dashboard</h2>
                <ul className="sidebar-menu">
                    <li><Link to="/">Home</Link> </li>
                    <li><Link to="/Post">Posts</Link> </li>
                    <li><Link to="/Post">Messages</Link> </li>
                    <li><Link to="/Post">Profile</Link> </li>
                    <li><Link to="/Post">Settings</Link> </li>
                </ul>
            </div>

            {/* Main Content */}
            <div className="content">
                <div className="post-grid">

                    {posts.map((post) => (
                        <div key={post.id} className="post-card">
                            <div className="post-content">
                                <div className="post-header">
                                    <img src={post.avatar} alt="User Avatar" className="avatar" />
                                    <p className="username">@{post.username}</p>
                                </div>
                                <p className="post-text">{post.content}</p>
                                {post.image && post.image !== "" ? (
                                    <img src={post.image} alt="Post" className="post-image" />
                                ) : post.video && post.video !== "" ? (
                                    <iframe
                                        width="100%"
                                        height="315"
                                        src={
                                            (() => {
                                                // Extract video ID from the YouTube URL
                                                const match = post.video.match(/(?:\/embed\/|v=)([a-zA-Z0-9_-]{11})/);
                                                const videoId = match ? match[1] : "";
                                                return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}`;
                                            })()
                                        }
                                        title="YouTube video"
                                        frameBorder="0"
                                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
                                        allowFullScreen
                                        className="post-video"
                                    ></iframe>
                                ) : null}


                                <div className="post-actions">
                                    <div className="ic"><Heart className="icon" /> {post.likes}
                                        <MessageSquare className="icon" /> {post.comments}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Post;