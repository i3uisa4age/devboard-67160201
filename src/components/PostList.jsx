import { useState } from "react";
import PostCard from "./PostCard";
import PostSkeleton from "./PostSkeleton";

// Component ย่อยสำหรับนับจำนวนโพสต์ (Challenge ระดับ 1)
function PostCount({ count }) {
  return (
    <div style={{ marginBottom: "1rem", color: "#4a5568", fontWeight: "500" }}>
      โพสต์ทั้งหมด: {count} รายการ
    </div>
  );
}

function PostList({ posts, favorites, onToggleFavorite }) {
  const [search, setSearch] = useState("");

  const filtered = posts.filter((post) =>
    post.title?.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div>
      <h2
        style={{
          color: "#2d3748",
          borderBottom: "2px solid #1e40af",
          paddingBottom: "0.5rem",
        }}
      >
        โพสต์ล่าสุด
      </h2>

      <PostCount count={filtered.length} />

      <input
        type="text"
        placeholder="ค้นหาโพสต์..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: "0.5rem 0.75rem",
          border: "1px solid #cbd5e0",
          borderRadius: "6px",
          fontSize: "1rem",
          marginBottom: "1rem",
          boxSizing: "border-box",
        }}
      />

      {/* Logic ลำดับการแสดงผล: Skeleton -> Not Found -> List */}
      {posts.length === 0 ? (
        <PostSkeleton />
      ) : filtered.length === 0 ? (
        <p style={{ color: "#718096", textAlign: "center", padding: "2rem" }}>
          ไม่พบโพสต์ที่ค้นหา
        </p>
      ) : (
        filtered.map((post) => (
          <PostCard
            key={post.id}
            title={post.title}
            body={post.body}
            isFavorite={favorites.includes(post.id)}
            onToggleFavorite={() => onToggleFavorite(post.id)}
          />
        ))
      )}
    </div>
  );
}

export default PostList;
