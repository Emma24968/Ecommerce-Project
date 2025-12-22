import "./Color.css";
export const Color = () => {
  return (
    <div className="color-filter">
      <div className="row">
        {" "}
        
        <div className="color-circle clear">×</div>
        <div className="color-circle yellow"></div>
        <div className="color-circle red"></div>
        <div className="color-circle blue"></div>
        <div className="color-circle green"></div>
      </div>
      <div className="row">
        {" "}
        <div className="color-circle black"></div>
        <div className="color-circle cyan"></div>
        <div className="color-circle pink"></div>
        <div className="color-circle orange"></div>
      </div>
    </div>
  );
};
