import React from "react";
import { MessageSquare, Heart } from "lucide-react";
import "./App.css";
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
    image: "https://wallpapercave.com/dwp2x/wp14985800.webp",
    likes: 42,
    comments: 8,
  },{
    id: 3,
    username: "devgirl",
    avatar: "https://i.pravatar.cc/40?img=2",
    content: "Designed for driving, built for passion BMW m3",
    image: "",
    likes: 42,
    comments: 8,
  },{
    id: 4,
    username: "devgirl",
    avatar: "https://i.pravatar.cc/40?img=2",
    content: "Designed for driving, built for passion BMW m3",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZuG4NPBNnPleaYrYQw3b1yxGCPQDKPKAUlQ&s",
    likes: 42,
    comments: 8,
  },{
    id: 5,
    username: "devgirl",
    avatar: "https://i.pravatar.cc/40?img=2",
    content: "Designed for driving, built for passion BMW m3",
    image: "https://i.pinimg.com/736x/b9/d5/16/b9d516266d54939a791256ecded57dbb.jpg",
    likes: 42,
    comments: 8,
  },
];

export default function SocialMediaApp() {
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
      <div className="main-content">
        
        {posts.map((post) => (
          <div key={post.id} className="post-card">
            <div className="post-content">
              <div className="post-header">
                <img src={post.avatar} alt="User Avatar" className="avatar" />
                <p className="username">@{post.username}</p>
              </div>
              <p className="post-text">{post.content}</p>
              <img src={post.image} alt="Post" className="post-image" />
              <div className="post-actions">
                <div className="ic"><Heart className="icon" /> {post.likes}
                <MessageSquare className="icon" /> {post.comments}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
