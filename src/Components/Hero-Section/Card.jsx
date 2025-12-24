import cashmere from "../../assets/Media_Folder/cashmere.png";

export const Card = () => {
  return (
    <div className="Product-details">
      <div className="">
        {" "}
        <img src={cashmere} alt="Cashmere" />
      </div>
      <div className="">
        <div className="">        <p>Women wool cashmere</p>
        <p>
          Rating:<span className="text-yellow-400 font-bold">★★★★★</span>{" "}
        </p>
        <p>Available: 220</p>
</div>
        <div className="">
          <button className="w-10 h-10 rounded bg-blue-800 font-[200px] text-white">+</button>
        </div>
      </div>
    </div>
  );
};
