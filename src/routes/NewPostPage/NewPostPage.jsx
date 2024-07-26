import "./NewPostPage.scss";

function NewPostPage() {
  return (
    <div className="newPostPage">
      <div className="formContainer">
        <h1>Add New Post</h1>
        <div className="wrapper">
          <form action="">
            <div className="item">
              <label htmlFor="title">Title</label>
              <input type="text" id="title" name="title" />
            </div>
            <div className="item">
              <label htmlFor="price">Price</label>
              <input type="number" id="price" name="price" />
            </div>
            <div className="item">
              <label htmlFor="address">Address</label>
              <input type="text" id="address" name="address" />
            </div>
            <div className="item description">
              <label htmlFor="title">Description</label>
            </div>
            <div className="item">
              <label htmlFor="city">City</label>
              <input type="text" id="city" name="city" />
            </div>
            <div className="item">
              <label htmlFor="bedroom">Bedroom Number</label>
              <input type="number" id="bedroom" min={1} name="titlbedroom" />
            </div>
            <div className="item">
              <label htmlFor="bathroom">Bathroom Number</label>
              <input type="number" id="bathroom" min={1} name="bathroom" />
            </div>
            <div className="item">
              <label htmlFor="latitude">Latitude</label>
              <input type="text" id="latitude" name="latitude" />
            </div>
            <div className="item">
              <label htmlFor="longitude">Longitude</label>
              <input type="text" id="longitude" name="longitude" />
            </div>
            <div className="item">
              <label htmlFor="type">Type</label>
              <select name="type">
                <option value="rent" defaultChecked>
                  Rent
                </option>
                <option value="buy">Buy</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="property">Property</label>
              <select name="property">
                <option value="apartment">Apartment</option>
                <option value="house">House</option>
                <option value="condo">Condo</option>
                <option value="land">Land</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="utilities">Utilities Policy</label>
              <select name="utilities">
                <option value="owner">Owner is responsible</option>
                <option value="tenant">Tenant is responsible</option>
                <option value="shared">Shared</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="pet">Pet Policy</label>
              <select name="pet">
                <option value="allowed">Allowed</option>
                <option value="not-allowed">Not Allowed</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="income">Income Policy</label>
              <input
                type="text"
                id="income"
                name="income"
                placeholder="Income Policy"
              />
            </div>
            <div className="item">
              <label htmlFor="size">Total Size (sqft)</label>
              <input type="number" min={0} id="size" name="size" />
            </div>
            <div className="item">
              <label htmlFor="school">School</label>
              <input type="number" min={0} id="school" name="school" />
            </div>
            <div className="item">
              <label htmlFor="bus">Bus</label>
              <input type="number" min={0} id="bus" name="bus" />
            </div>
            <div className="item">
              <label htmlFor="restaurant">Restaurant</label>
              <input type="number" min={0} id="restaurant" name="restaurant" />
            </div>
            <button className="sendButton">Add</button>
          </form>
        </div>
      </div>
      <div className="sideContainer">
      </div>
    </div>
  );
}

export default NewPostPage;
