import { useEffect } from "react";
export const Slider = () => {
  useEffect(() => {
    document.title = "Slider Component";
  }, []);
  return (
    <div className="component-description">
      <h2>Slider</h2>
    </div>
  );
};
