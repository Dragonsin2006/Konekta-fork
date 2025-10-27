import React, { useState } from "react";

// DEMO SAMPLE POSTS DATA
const posts = [
  {
    user: {
      name: "Sky Williams",
      avatar: "https://randomuser.me/api/portraits/women/50.jpg",
      color: "border-pink-400",
      time: "1d ago"
    },
    content: (
      <>
        Had an amazing time at the
        <span className="font-semibold text-pink-600"> Garbage Café </span> ♻️ –
        turning waste into meals. Inspiring concept!
      </>
    ),
    images: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1528150177500-7e7e63368f9c?auto=format&fit=crop&w=800&q=80"
    ],
    caption: (
      <>
        <span className="font-semibold">Anna</span> Sharing a moment of change 🌱
      </>
    ),
    actionColor: "pink-500"
  },
  {
    user: {
      name: "David Josh",
      avatar: "https://randomuser.me/api/portraits/men/42.jpg",
      color: "border-blue-400",
      time: "2h ago"
    },
    content: (
      <>
        Just visited <span className="font-semibold text-blue-600">Blue City</span> 🌍 – one of the most magical places I’ve ever seen!
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
    actionColor: "blue-500"
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
        Hiking in the <span className="font-semibold text-green-600">Western Ghats</span> – pure bliss 🌿
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
        Sunset at <span className="font-semibold text-yellow-600">Marine Drive</span> 🌅 – Mumbai vibes!
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
  }
];

const PostFeed = () => {
  // Each post's: [slideIdx, likeCount, liked(bool), comments[]]
  const [state, setState] = useState(posts.map(() => ({
    slide: 0,
    likeCount: 0,
    liked: false,
    comments: [],
    showCommentBox: false,
    shareCount: 0
  })));

  // Arrow navigation for carousel per post
  const handlePrev = (idx, imgLen) => {
    setState(prev =>
      prev.map((v, i) =>
        i === idx ? { ...v, slide: v.slide === 0 ? imgLen - 1 : v.slide - 1 } : v
      )
    );
  };
  const handleNext = (idx, imgLen) => {
    setState(prev =>
      prev.map((v, i) =>
        i === idx ? { ...v, slide: v.slide === imgLen - 1 ? 0 : v.slide + 1 } : v
      )
    );
  };

  // Like logic
  const handleLike = idx => {
    setState(prev =>
      prev.map((v, i) =>
        i === idx
          ? { ...v, liked: !v.liked, likeCount: v.liked ? v.likeCount - 1 : v.likeCount + 1 }
          : v
      )
    );
  };

  // Toggle and submit comment
  const handleToggleComment = idx => {
    setState(prev =>
      prev.map((v, i) =>
        i === idx ? { ...v, showCommentBox: !v.showCommentBox } : v
      )
    );
  };
  const handleComment = (idx, comment) => {
    if (!comment) return;
    setState(prev =>
      prev.map((v, i) =>
        i === idx
          ? { ...v, comments: [...v.comments, comment], showCommentBox: false }
          : v
      )
    );
  };

  // Share logic
  const handleShare = idx => {
    setState(prev =>
      prev.map((v, i) =>
        i === idx ? { ...v, shareCount: v.shareCount + 1 } : v
      )
    );
    alert("Shared! (Demo)");
  };

  return (
    <div className="space-y-10 max-w-xl mx-14 mt-4">
      {posts.map((post, idx) => {
        const s = state[idx];
        const hasCarousel = post.images.length > 1;
        return (
          <div key={idx} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
            {/* User Info */}
            <div className="flex items-center p-4">
              <img src={post.user.avatar} className={`w-12 h-12 rounded-full border-2 ${post.user.color}`} alt={post.user.name} />
              <div className="ml-3">
                <div className="font-semibold text-gray-900">{post.user.name}</div>
                <div className="text-xs text-gray-500">{post.user.time}</div>
              </div>
            </div>
            {/* Main Text */}
            <div className="px-4 pb-3 text-gray-800 text-[15px]">{post.content}</div>
            {/* Carousel */}
            <div className="relative flex justify-center">
              <div className="relative w-96 h-80 overflow-hidden rounded-lg">
                <div
                  className="carousel-track flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${s.slide * 24}rem)` }}>
                  {post.images.map((img, i) => (
                    <img key={i} src={img} className="w-96 h-80 object-cover flex-shrink-0" alt={`post-${idx}-img-${i}`} />
                  ))}
                </div>
              </div>
              {hasCarousel && (
                <>
                  <button
                    onClick={() => handlePrev(idx, post.images.length)}
                    className={`absolute left-5 top-1/2 -translate-y-1/2 rounded-full bg-white shadow-md hover:bg-${post.actionColor} hover:text-white p-2`}
                  >‹</button>
                  <button
                    onClick={() => handleNext(idx, post.images.length)}
                    className={`absolute right-5 top-1/2 -translate-y-1/2 rounded-full bg-white shadow-md hover:bg-${post.actionColor} hover:text-white p-2`}
                  >›</button>
                </>
              )}
            </div>
            {/* Caption */}
            <div className="px-4 py-3 text-gray-700 text-sm">{post.caption}</div>
            {/* Actions */}
            <div className="flex items-center justify-between px-4 py-3 border-t border-gray-100">
              <div className="flex gap-6">
                <button
                  className={`flex items-center gap-2 text-gray-600 hover:text-red-500 ${s.liked ? "text-red-500" : ""}`}
                  onClick={() => handleLike(idx)}>
                  ❤️ Like {s.likeCount > 0 && <span>({s.likeCount})</span>}
                </button>
                <button
                  className="flex items-center gap-2 text-gray-600 hover:text-blue-500"
                  onClick={() => handleToggleComment(idx)}>
                  💬 Comment {s.comments.length > 0 && <span>({s.comments.length})</span>}
                </button>
                <button
                  className="flex items-center gap-2 text-gray-600 hover:text-green-500"
                  onClick={() => handleShare(idx)}>
                  🔗 Share {s.shareCount > 0 && <span>({s.shareCount})</span>}
                </button>
              </div>
            </div>
            {/* Comment Box */}
            {s.showCommentBox && (
              <form
                className="px-4 py-2 flex gap-2"
                onSubmit={e => {
                  e.preventDefault();
                  handleComment(idx, e.target.elements.comment.value);
                  e.target.reset();
                }}>
                <input
                  name="comment"
                  className="flex-grow rounded px-3 py-1 border border-gray-300"
                  placeholder="Write a comment..."
                  autoFocus
                />
                <button type="submit" className="bg-blue-500 text-white px-3 rounded">Post</button>
              </form>
            )}
            {/* Comment List */}
            {s.comments.length > 0 && (
              <div className="px-4 pb-4 space-y-1">
                {s.comments.map((c, i) => (
                  <div key={i} className="text-sm text-gray-800 bg-gray-50 px-2 py-1 rounded">{c}</div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default PostFeed;
