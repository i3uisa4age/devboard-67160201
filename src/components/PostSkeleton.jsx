function PostSkeleton() {
  const skeletonItem = (key) => (
    <div
      key={key}
      style={{
        border: "1px solid #e2e8f0",
        borderRadius: "8px",
        padding: "1rem",
        marginBottom: "1rem",
        background: "white",
      }}
    >
      {/* Title Placeholder */}
      <div
        style={{
          width: "60%",
          height: "20px",
          background: "#e2e8f0",
          borderRadius: "4px",
          marginBottom: "1rem",
        }}
      ></div>
      {/* Body Placeholder */}
      <div
        style={{
          width: "90%",
          height: "15px",
          background: "#f1f5f9",
          borderRadius: "4px",
          marginBottom: "0.5rem",
        }}
      ></div>
      <div
        style={{
          width: "80%",
          height: "15px",
          background: "#f1f5f9",
          borderRadius: "4px",
        }}
      ></div>
    </div>
  );

  return <div>{[1, 2, 3].map((i) => skeletonItem(i))}</div>;
}
export default PostSkeleton;
