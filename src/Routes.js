import { Route, Routes } from "react-router-dom";
import { Alert } from "./Components/Alert";
import { Avatar } from "./Components/Avatar";
import { Badge } from "./Components/Badge";
import { Button } from "./Components/Button";
import { Card } from "./Components/Card";
import { ImageComponent } from "./Components/Image";
import { InputComponent } from "./Components/Input";
import { Lists } from "./Components/Lists";
import { Modal } from "./Components/Modal";
import { Navigation } from "./Components/Navigation";
// import { Slider } from "./Components/Slider";
import { TextUtilities } from "./Components/TextUtilities";
import { Toast } from "./Components/Toast";
import { Description } from "./Components/Description";
// import { Rating } from "./Components/Rating";
import { NoComponent } from "./Components/404";

export const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/alert" element={<Alert />} />
      <Route path="/avatar" element={<Avatar />} />
      <Route path="/badge" element={<Badge />} />
      <Route path="/button" element={<Button />} />
      <Route path="/card" element={<Card />} />
      <Route path="/image" element={<ImageComponent />} />
      <Route path="/input" element={<InputComponent />} />
      <Route path="/lists" element={<Lists />} />
      <Route path="/modal" element={<Modal />} />
      <Route path="/navigation" element={<Navigation />} />
      <Route path="/text-utilities" element={<TextUtilities />} />
      <Route path="/toast" element={<Toast />} />
      {/* <Route path="/rating" element={<Rating />} /> */}
      <Route path="/" element={<Description />} />
      <Route path="*" element={<NoComponent />} />
    </Routes>
  );
};
