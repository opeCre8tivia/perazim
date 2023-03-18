import React from "react";

type Props = {
  heading: string;
  color?: "red" | "black";
};

const SectionHeading = ({
  heading = "Section Heading",
  color = "black",
}: Props) => {
  return (
    <div
      style={{
        fontSize: "28px",
        fontWeight: "bold",
        textAlign: "center",
        fontFamily: "sans-serif",
        padding: 4,
        margin: 4,
        color: color,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {heading}
      {/* line */}
      <div className="w-[20%] h-[4px] bg-gradient-to-tr from-orange-400 to-red-500"></div>
    </div>
  );
};

export default SectionHeading;
