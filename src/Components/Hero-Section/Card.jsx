import cashmere from "../../assets/Media_Folder/cashmere.png";

export const Card = () => {
  return (
    <div className="Product-details">
      <div className="">
        {" "}
        <img src={cashmere} alt="Cashmere" />
      </div>
      <div className="">
        <p>Women wool cashmere</p>
        <p>Rating:★★★★★</p>
        <p>Available: 220</p>
      </div>
    </div>
  );
};
