import React from "react";
import "./style.css";

const Card = (props) => {
  return (
    <div className="card">
      <div className="card=header">
      <h5 className="card-title">{props.name}</h5>
      </div>
  <img src={props.image} className="card-img" alt={props.image}
  style ={{height:"250px", width: "249px"}}/>
  
    
    
    <p className="card-footer">{props.title}</p>
  </div>











    
  );
};
{

  /* <div className='card text-center'>
    //   <div className='overflow'>
    //     {/* <img scr={props.image} /> */
    //</div>
    //   <div className="card-body text-dark">
    //     <h4 className='card-title'>{props.name}</h4>
  
    //     <img */}
    //       src={props.image}
    //       alt={props.image}
    //       style={{ height: "100px", width: "100px" }}
    //     ></img>
    //     <hr/>
    //     <h6 className="card-title-2">{props.title}</h6>
    //   </div>
    // </div>
  /* <div className="card">
  <div className="card-header">
    <div className="row">
      <div className="col-sm-10">
        <h5>{props.name}</h5>
      </div>
      <div className="col-sm-2">
        <button type="button" className="btn btn-secondary">
          View
        </button>
        <button type="button" className="btn btn-primary">
          Save
        </button>
      </div>
    </div>
  </div>
  <div className="card-body">
    <div className="row">
      <div className="col">
        <p className="card-title">{props.title}</p>
        <p className="card-text">{props.role}</p>
      </div>
    </div>
    <div className="row">
      <div className="col-sm-2">
        <img
          src={props.image}
          alt={props.genre}
          style={{ height: "100px", width: "100px" }}
        ></img>
      </div>
      <div className="col-sm-10">
        <p className="card-description">{props.lore}</p>
      </div>
    </div>
  </div>
</div>
  );
}; */
}

export default Card;
