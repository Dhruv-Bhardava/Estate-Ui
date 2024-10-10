import "./List.scss";
import { listData } from "../../lib/dummyData";
import Card from "../Card/Card";

function List({ posts }) {
  return (
    <div className="list">
      {posts.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
}

export default List;
