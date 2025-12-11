import "./Student.css";

export default function Student() {
  return (
    <div className="StudentCard">
      <div className="Left">
        <div className="Avatar">JS</div>

        <div>
          <div className="Name">John Smith</div>
          <div className="Level">English - Beginner</div>
        </div>
      </div>

      <div className="Status">Active</div>
    </div>
  );
}
