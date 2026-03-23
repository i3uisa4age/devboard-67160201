function UserCard({ name, email }) {
  const getAvatarColor = (name) => {
    // ป้องกันกรณีไม่มีชื่อส่งมา
    if (!name) return "#805ad5";

    const firstChar = name.charAt(0).toUpperCase();
    const charCode = firstChar.charCodeAt(0);
    if (charCode >= 65 && charCode <= 71) return "#3182ce"; // Blue
    if (charCode >= 72 && charCode <= 78) return "#38a169"; // Green
    return "#805ad5"; // Purple
  };

  const initials = name
    ? name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .substring(0, 2)
    : "?";

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        border: "1px solid #e2e8f0",
        borderRadius: "8px",
        padding: "0.75rem 1rem",
        marginBottom: "0.75rem",
        background: "white",
      }}
    >
      <div
        style={{
          width: "40px",
          height: "40px",
          background: getAvatarColor(name),
          color: "white",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "bold",
          fontSize: "0.9rem",
        }}
      >
        {initials}
      </div>
      <div>
        <strong style={{ display: "block", color: "#2d3748" }}>{name}</strong>
        <span style={{ fontSize: "0.85rem", color: "#718096" }}>{email}</span>
      </div>
    </div>
  );
}

export default UserCard;
