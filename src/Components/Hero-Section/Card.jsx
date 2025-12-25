import cashmere from "../../assets/Media_Folder/cashmere.png";

export const Card = ({title}) => {
  return (
    <div className="Product-details w-[75%] bg-white m-10 p-4 rounded">
      <div className="bg-gray-500 rounded">
        {" "}
        <img
          src={cashmere}
          alt="Cashmere"
          className="w-[205px] h-[205px] mb-2 "
        />
      </div>
      <div className="flex">
        <div className="">
          {" "}
          <p  className="font-semibold">{title}</p>
          <p>
            Rating:<span className="text-yellow-400 font-bold">★★★★★</span>{" "}
          </p>
          <p>Available: 220</p>
        </div>
        <div className="">
          <button className="w-10 mt-[40px] h-10 rounded bg-blue-800 text-[20px] text-white">
            +
          </button>
        </div>
      </div>
    </div>
  );
};
