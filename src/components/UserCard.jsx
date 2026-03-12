function UserCard({ name, email }) {
  // 🎨 1. Logic สำหรับเลือกสีตามตัวอักษรแรก
  const getAvatarColor = (name) => {
    const firstChar = name.charAt(0).toUpperCase();
    const charCode = firstChar.charCodeAt(0);

    // ตรวจสอบช่วง ASCII Code (A-G: 65-71, H-N: 72-78)
    if (charCode >= 65 && charCode <= 71) return "#3182ce"; // Blue
    if (charCode >= 72 && charCode <= 78) return "#38a169"; // Green
    return "#805ad5"; // Purple (O-Z และอื่นๆ)
  };

  // 🆔 2. สร้างตัวอักษรย่อ (Initials)
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");

  // 🚀 3. Return UI เพียงก้อนเดียวที่รวมทุกอย่างไว้แล้ว
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
          background: getAvatarColor(name), // 🔥 ใช้ Function เลือกสีตรงนี้!
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
        <div style={{ fontWeight: "bold", color: "#2d3748" }}>{name}</div>
        <div style={{ fontSize: "0.85rem", color: "#718096" }}>{email}</div>
      </div>
    </div>
  );
}

export default UserCard;
