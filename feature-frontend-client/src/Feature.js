import { useFlag } from "@unleash/proxy-client-react";

const Feature = ({ name, invert, children }) => {
  const feature = useFlag("Walgreens-festive-discounts");
  
  if (invert) {
    if (!feature) {
      return children;
    }
  } else {
    if (feature) {
      return children;
    }
  }

  return null;
};

export default Feature;
