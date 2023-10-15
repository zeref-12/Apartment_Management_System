export default function card4() {
    return (
      <>
        <div id="container">
          <div className="product-details">
            <h1 className="apartmentname">Apartment NO.4</h1>
            <span className="hint-star star">
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star-o" aria-hidden="true"></i>
            </span>
            <p className="information">
              Whether it’s winter, spring, summer or fall – you need a list of
              clever, catchy apartment marketing slogans that are sure to get the
              attention of your prospects. The list we’ve compiled does just that!
              Newly updated for 2021
            </p>
            <div className="control">
              <button className="btn">
                <span className="buy">Visit now</span>
              </button>
            </div>
          </div>
          <div className="product-image">
            <img
src="https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923__480.jpg"              alt=""
            />
            <div className="info">
              <h2> Description</h2>
              <ul>
                <li>
                  <strong>BHK: </strong>3{" "}
                </li>
                <li>
                  <strong>Location: </strong>Delhi
                </li>
                <li>
                  <strong>Area: </strong>Dwarka
                </li>
                <li>
                  <strong>Environment: </strong>Eco-Friendly
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }
  