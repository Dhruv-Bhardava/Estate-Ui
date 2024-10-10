import { Await, useLoaderData } from "react-router-dom";
import Card from "../../component/Card/Card";
import Filter from "../../component/Filter/Filter";
import Maps from "../../component/Map/Maps";
// import { listData } from "../../lib/dummyData";
import "./ListPage.scss";
import { Suspense } from "react";

function ListPage() {
  const data = useLoaderData();

  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />
          <Suspense fallback={<p>Loading...</p>}>
            <Await
              resolve={data.postResponse}
              errorElement={<p>Error loading posts!</p>}
            >
              {(postResponse) =>
                postResponse.data.map((post) => (
                  <Card key={post.id} item={post} />
                ))
              }
            </Await>
          </Suspense>
        </div>
      </div>
      <div className="mapContainer">
        <Suspense fallback={<p>Loading...</p>}>
          <Await
            resolve={data.postResponse}
            errorElement={<p>Error loading posts!</p>}
          >
            {(postResponse) => <Maps items={postResponse.data} />}
          </Await>
        </Suspense>
      </div>
    </div>
  );
}

export default ListPage;
