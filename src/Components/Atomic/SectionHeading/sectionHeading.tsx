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
      }}
    >
      {heading}
    </div>
  );
};

export default SectionHeading;
