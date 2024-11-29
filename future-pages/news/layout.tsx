import Header from "@/components/Header";
import React from "react";

type Props = {};

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header
        heading="FSM Safety Insights"
        subheading="Stay informed with the latest in safety technology, training and trends"
      />
      {children}
    </>
  );
};

export default layout;
