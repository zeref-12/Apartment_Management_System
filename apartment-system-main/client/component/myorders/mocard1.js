export default function card1() {
  return (
    <>
      <div id="container">
        <div className="product-details">
          <h1 className="apartmentname">Apartment NO.1</h1>
          <span className="hint-star star">
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star-o" aria-hidden="true"></i>
          </span>
          
          <p>
            <table>
              <tr>
                <th>Address </th>
                <th>17/A, Risali Sector</th>
              </tr>
              <tr>
                <td>Location </td>
                <td>Chhattisgarh, India</td>
              </tr>
              <tr>
                <td>Status </td>
                <td>Pending</td>              </tr>
            </table>
            </p>


        </div>
        <div className="product-image">
          <img
src="https://cdn.pixabay.com/photo/2016/08/11/23/48/mountains-1587287_1280.jpg" alt=""         />
        </div>
      </div>
    </>
  );
}
