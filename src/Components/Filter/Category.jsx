import "./Category.css";
export const Category = () => {
  return (
    <div>
      <h3>Category</h3>
      <div className="list-container">
        <div className="list">
          <button>All Items</button>
          <button>Featured</button>
          <button>New Items</button>
        </div>
        <div className="list">
          <button>On Sale</button>
          <button>Best Seller</button>
          <button>On Sale</button>
        </div>
      </div>
    </div>
  );
};
