import { useState } from "react";
import "./Rating.css";
export const Rating = () => {
  const hoverFeedback = {
    1: "Worst",
    2: "Poor",
    3: "Ok",
    4: "Good",
    5: "Excellent",
  };

  return (
    <div className="component-description">
      <h2 className="component-heading">Rating Component</h2>
      <div className="rating">
        <p> Controlled Rating component </p>
        <StarRating />
      </div>
      <div className="rating">
        <p> Read Only </p>
        <StarRating preActive={2} readOnly={true} />
      </div>
      <p> Hover Feedback </p>
      <div className="rating">
        <StarRating showFeedback={true} feedback={hoverFeedback} />
      </div>
    </div>
  );
};

const StarRating = ({
  preActive = 0,
  readOnly = false,
  disabled = false,
  iconType = "star",
  showFeedback = false,
  feedback,
  count = 5,
}) => {
  const [hover, setHover] = useState(0);
  const [active, setActive] = useState(preActive);

  return (
    <>
      <ul className="inline-list">
        {[...Array(count)].map((star, index) => {
          index += 1;
          return (
            <li
              key={index}
              className={`list-spacing ${
                index <= (hover || active) ? `${iconType}-active` : ""
              } ${readOnly ? "read-only" : ""} ${disabled ? "disabled" : ""}`}
              onClick={() => setActive(index)}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(active)}
            >
              <i className={`fas fa-${iconType} fa-lg star-icon`}></i>
            </li>
          );
        })}
        {showFeedback && (
          <li className="feedback">{feedback[hover || active]}</li>
        )}
      </ul>
    </>
  );
};

//<h3> Different Rating Counts </h3>
//     <div className="rating-examples">
//     <div className="rating">
//      <StarRating count={5} />
//    </div>
//    <div className="rating">
//      <StarRating count={7} />
//    </div>
//    <div className="rating">
//      <StarRating count={9} />
//    </div>
//  </div>
