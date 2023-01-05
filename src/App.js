 import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

import Card from "./components/Card";
import propertList from "./propertyList";
function App() {
  console.log(propertList);
  return (
    <div className="container-fluid">
      
      <div className="row">
        <form class="row g-3">
          
            <div class="hello">
              <select class="form-select" aria-label="Default select example">
              <option selected>Location</option>
              <option value ="1">hyderabad</option>
              <option  value="2">banglore</option>
              <option value ="3">chennai</option>
            </select>
           
          </div>
         
          
            <div class="jani">
              <select class="form-select" aria-label="Default select example">
              <option selected>Delhi</option>
              <option value ="1">UP</option>
              <option  value="2">Haryana</option>
              <option value ="3">Punjab</option>
            </select>
          
          </div>
         
            <div class="cost">
              <select
              class="form-select" aria-label="Default select example"
             
               >
              <option selected>Price</option>
              <option value="1">10 dollor</option>
              <option  value="2">20 dollor</option>
              <option value="3" >30 doller</option>
            </select>
           
          </div>
          
          <div class="property">
              <select class="form-select" aria-label="Default select example">
              <option selected>Property Type</option>
              <option value ="1">house</option>
              <option value ="2">flat</option>
              <option value ="3">dual</option>
            </select>
          </div>
          
          <div class="btn">
            <button type="submit" >
              Search
            </button>
          </div>
        </form>
      </div>
      
      <div className="container m-5 d-flex  flex-row justify-content-between">
        {propertList.map((elem, index) => {
          return  <Card key={index} data={elem} />;
        })}
      </div>
    </div>
  );
}

export default App;
