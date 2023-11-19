import React from "react";
import TitleBar from "../../Components/TilteBar.tsx";
import AddLabForm from "./form.tsx";

type AddProps = {
  aProp?: string;
};

const Add: React.FC<AddProps> = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "auto",
        minHeight: "100%",
        background: "white",
        justifyContent: "flex-start",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <TitleBar title={"Add Lab"} />
      <AddLabForm />
    </div>
  );
};

export default Add;
