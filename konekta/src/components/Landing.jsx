import React, { useRef } from "react";
import PostFeed from "./PostFeed";
import "./Landing.css";

// Sidebar nav links and SVGs, all inline
const Sidebar = () => (
  <aside className="w-16 md:w-60 bg-[#121212] flex flex-col items-center pt-4 gap-6 flex-shrink-0 min-h-screen transition-all">
    <a href="profile.html">
      <img
        src="https://randomuser.me/api/portraits/women/44.jpg"
        alt="Profile"
        className="profile-img"
      />
    </a>
    <nav className="flex flex-col gap-2 w-full items-center">
      <a href="#" className="nav-item flex items-center px-3 py-2">
        {/* Search icon */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" width="24" height="24">
          <circle cx="11" cy="11" r="7"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65" strokeLinecap="round" strokeLinejoin="round"></line>
        </svg>
        <span className="ml-2 hidden md:inline">Search</span>
      </a>
      <a href="#" className="nav-item flex items-center px-3 py-2">
        {/* Explore icon */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" width="24" height="24">
          <polygon points="12 2 19 21 12 17 5 21 12 2"></polygon>
        </svg>
        <span className="ml-2 hidden md:inline">Explore</span>
      </a>
      <a href="#" className="nav-item flex items-center px-3 py-2">
        {/* Reels icon */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" width="24" height="24">
          <rect x="2" y="4" width="20" height="16" rx="4"></rect>
          <polygon points="10 10 16 14 10 18 10 10" fill="white"></polygon>
        </svg>
        <span className="ml-2 hidden md:inline">Reels</span>
      </a>
      <a href="#" className="nav-item flex items-center px-3 py-2 relative">
        {/* Messages icon */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" width="24" height="24">
          <path d="M21 15V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z"></path>
          <polyline points="3 8 12 13 21 8"></polyline>
        </svg>
        <span className="ml-2 hidden md:inline">
          Messages <span className="badge">8</span>
        </span>
      </a>
      <a href="#" className="nav-item flex items-center px-3 py-2">
        {/* Notifications icon */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" width="24" height="24">
          <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"></path>
          <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
        </svg>
        <span className="ml-2 hidden md:inline">Notifications</span>
      </a>
      <a href="#" className="nav-item flex items-center px-3 py-2">
        {/* Create icon */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" width="24" height="24">
          <rect x="4" y="4" width="16" height="16" rx="2"></rect>
          <line x1="12" y1="8" x2="12" y2="16"></line>
          <line x1="8" y1="12" x2="16" y2="12"></line>
        </svg>
        <span className="ml-2 hidden md:inline">Create</span>
      </a>
    </nav>
  </aside>
);

const stories = [
  {
    bg: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    profile: "https://randomuser.me/api/portraits/women/65.jpg",
    name: "Laura Quinn",
    live: true,
  },
  {
    bg: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=400&q=80",
    profile: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "James Williams",
    live: false,
  },
  {
    bg: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    profile: "https://randomuser.me/api/portraits/women/11.jpg",
    name: "Lura Cap",
    live: false,
  },
  {
    bg: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    profile: "https://randomuser.me/api/portraits/men/36.jpg",
    name: "Michael Daws",
    live: false,
  },
  {
    bg: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=400&q=80",
    profile: "https://randomuser.me/api/portraits/women/32.jpg",
    name: "Dora Swis",
    live: false,
  },
  {
    bg: "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?auto=format&fit=crop&w=400&q=80",
    profile: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Cris",
    live: false,
  },
  {
    bg: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    profile: "https://randomuser.me/api/portraits/women/23.jpg",
    name: "Kiara Dua",
    live: false,
  },
  {
    bg: "https://images.unsplash.com/photo-1482062364825-616fd23b8fc1?auto=format&fit=crop&w=400&q=80",
    profile: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Fenn",
    live: false,
  },
  {
    bg: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80",
    profile: "https://randomuser.me/api/portraits/men/33.jpg",
    name: "Julian Fox",
    live: false,
  },
];

const StoriesCarousel = () => {
  const carouselRef = useRef(null);
  const scrollLeft = () => {
    carouselRef.current.scrollBy({ left: -120, behavior: "smooth" });
  };
  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: 120, behavior: "smooth" });
  };

  return (
    <div className="relative flex items-center w-fit">
      {/* Left Arrow */}
      <button
        type="button"
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800/60 hover:bg-gray-900 rounded-full w-8 h-8 flex items-center justify-center z-10 text-white"
        onClick={scrollLeft}
      >
        <svg width="22" height="22" viewBox="0 0 24 24">
          <path
            fill="none"
            stroke="white"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <div
        ref={carouselRef}
        className="flex gap-4 overflow-x-auto py-2 scrollbar-hide snap-x snap-mandatory w-[700px]"
      >
        {stories.map((story, i) => (
          <div
            key={i}
            className="story-card relative w-24 h-40 rounded-xl overflow-hidden bg-gray-900 shadow flex-shrink-0"
          >
            <img
              className="story-bg absolute inset-0 w-full h-full object-cover"
              src={story.bg}
              alt={`Story ${i + 1}`}
            />
            {story.live && <span className="live-badge">LIVE</span>}
            <div className="user-info absolute bottom-2 left-2 flex items-center">
              <img
                src={story.profile}
                className="w-6 h-6 rounded-full border-2 border-pink-500"
                alt={story.name}
              />
              <span className="ml-1 text-white text-xs font-semibold">
                {story.name}
              </span>
            </div>
          </div>
        ))}
      </div>
      {/* Right Arrow */}
      <button
        type="button"
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800/60 hover:bg-gray-900 rounded-full w-8 h-8 flex items-center justify-center z-10 text-white"
        onClick={scrollRight}
      >
        <svg width="22" height="22" viewBox="0 0 24 24">
          <path
            fill="none"
            stroke="white"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
};

const posts = [
  {
    user: {
      name: "Sky Williams",
      avatar: "https://randomuser.me/api/portraits/women/50.jpg",
      color: "border-pink-400",
      time: "1d ago"
    },
    text: <>
      Had an amazing time at the
      <span className="font-semibold text-pink-600"> Garbage Café </span> ♻️ –
      turning waste into meals. Inspiring concept!
    </>,
    images: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1528150177500-7e7e63368f9c?auto=format&fit=crop&w=800&q=80"
    ],
    caption: <> <span className="font-semibold">Anna</span> Sharing a moment of change 🌱 </>,
    buttons: ["Like", "Comment", "Share"],
    color: "pink-500"
  },
  {
    user: {
      name: "David Josh",
      avatar: "https://randomuser.me/api/portraits/men/42.jpg",
      color: "border-blue-400",
      time: "2h ago",
    },
    content: (
      <>
        Just visited{" "}
        <span className="font-semibold text-blue-600">Blue City</span> 🌍 – one of the most magical places I’ve ever seen!
      </>
    ),
    images: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
    ],
    caption: (
      <>
        <span className="font-semibold">David Josh</span> Exploring the blue city 💙
      </>
    ),
    actionColor: "blue-500",
  },
  {
    user: {
      name: "Emily",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      color: "border-green-400",
      time: "3h ago",
    },
    content: (
      <>
        Hiking in the{" "}
        <span className="font-semibold text-green-600">Western Ghats</span> – pure bliss 🌿
      </>
    ),
    images: [
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1523413651479-597eb2da0ad1?auto=format&fit=crop&w=800&q=80"
    ],
    caption: (
      <>
        <span className="font-semibold">Priya Nair</span> Lost in the greens 🍃
      </>
    ),
    actionColor: "green-500",
  },
{
  user: {
    name: "Alex Chen",
    avatar: "https://randomuser.me/api/portraits/men/76.jpg",
    color: "border-yellow-400",
    time: "5h ago",
  },
  content: (
    <>
      Sunset at{" "}
      <span className="font-semibold text-yellow-600">Marine Drive</span> 🌅 – Mumbai vibes!
    </>
  ),
  images: [
    "https://images.unsplash.com/photo-1501973801540-537f08ccae7b?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=80"
  ],
  caption: (
    <>
      <span className="font-semibold">Alex Chen</span> Mumbai meri jaan 🌇
    </>
  ),
  actionColor: "yellow-500"
},
  
  
  // Add other posts following the same structure...
];


const Landing = () => (
  <div className="flex min-h-screen bg-[#0a0a0a] font-inter">
    <Sidebar />
    <main className="flex-grow bg-[#181818] p-6 overflow-auto w-full">
      {/* Stories Carousel Section */}
      <StoriesCarousel />
      <PostFeed />
      {/* Add more main/feed sections here if needed */}
    </main>
    {/* Optional right sidebar/activity section can be added here */}
  </div>
);

export default Landing;
