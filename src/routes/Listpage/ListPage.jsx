import Card from "../../component/Card/Card";
import Filter from "../../component/Filter/Filter";
import Maps from "../../component/Map/Maps";
import { listData } from "../../lib/dummyData";
import "./ListPage.scss";

function ListPage() {
  const data = listData;

  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />
          {data.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="mapContainer">
        <Maps  items={data}/>
      </div>
    </div>
  );
}

export default ListPage;
