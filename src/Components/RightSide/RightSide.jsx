
import TeacherReview from "../TeacherReview/TeacherReview";
import Updates from "../Updates/Updates";
import "./RightSide.css";

const RightSide = () => {
  return (
    <div className="RightSide">
      <div>
        <h3>Updates</h3>
        <Updates />
      </div>
      <div>
        <h3>Customer Review</h3>
        <TeacherReview />
      </div>
    </div>
  );
};

export default RightSide;