import React from "react";

const label = (props: React.PropsWithChildren) => {
  return (
    <span className="block text-sm font-medium text-slate-700">
      {props.children}
    </span>
  );
};

export default label;
