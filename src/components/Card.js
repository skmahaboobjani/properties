// import logo from "../logo.svg";
import image from "./image.png"
const Card = (props) => {

    console.log(props);
    const d = props.data ;
  return (
    <>
      <div className="row  g-3">
        <div className="col">
          <div className="card h-100">
            <img src={image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h6>${d.price} /month</h6>
              <h5 className="card-title">{d.title}</h5>
              <p className="card-text">
                {d.location.street},{d.location.city},{d.location.state}-{d.location.pincode}
              </p>
            </div>
            <div className="card-footer">
              <small className="text-muted d-flex justify-content-between ">
                <span>{d.description.bed} rooms</span>
                <span>{d.description.bathroom} halls</span>
                <span>{d.description.length} - {d.description.breadth}</span>
              </small>
            </div>
          </div>
        </div>
       
       
      </div>
    </>
  );
};

export default Card;
