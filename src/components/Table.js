import React from "react";
import "../App.css";
const Table = () => {
  return (
    <div className="table-container">
      <div className="table-box">
        <h3>Basic Plan</h3>
        <table>
          <tbody>
            <tr>
              <td>
                <strong>Work Type:</strong> Online Data Entry Work
              </td>
            </tr>
            <tr>
              <td>
                <strong>Work Description:</strong> Type as per Company Provided
                Image
              </td>
            </tr>
            <tr>
              <td>
                <strong>Supported Devices:</strong> Smart Phone, Tab, Laptop &
                Desktop
              </td>
            </tr>
            <tr>
              <td>
                <strong>Project Available:</strong> Weekly
              </td>
            </tr>
            <tr>
              <td>
                <strong>Project Duration:</strong> 15 Days / Project
              </td>
            </tr>
            <tr>
              <td>
                <strong>Page Available for each Project:</strong> 30 Pages
              </td>
            </tr>
            <tr>
              <td>
                <strong>Payment Per Page:</strong> Rs 250 for 100% accuracy
              </td>
            </tr>

            <tr>
              <td>
                <strong>Weekly Earnings </strong> ₹7,500/-
              </td>
            </tr>
            <tr>
              <td>
                <strong>Payment Duration:</strong> Weekly
              </td>
            </tr>
            <tr>
              <td>
                <strong>Payment Mode:</strong> Bank transfer, Google Pay,
                Phonepe & PayTM payment
              </td>
            </tr>
            <tr>
              <td>
                <b style={{ fontSize: "22px", color: "#1b1e7b" }}>
                  <center>
                    <p>Service Charge :</p>₹3,930/-
                  </center>
                </b>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="table-box">
        <h3>Standard Plan</h3>
        <table>
          <tbody>
            <tr>
              <td>
                <strong>Work Type:</strong> Online Data Entry Work
              </td>
            </tr>
            <tr>
              <td>
                <strong>Work Description:</strong> Type as per Company Provided
                Image
              </td>
            </tr>
            <tr>
              <td>
                <strong>Supported Devices:</strong> Smart Phone, Tab, Laptop &
                Desktop
              </td>
            </tr>
            <tr>
              <td>
                <strong>Project Available:</strong> Daily
              </td>
            </tr>
            <tr>
              <td>
                <strong>Project Duration:</strong> 25 Days / Project
              </td>
            </tr>
            <tr>
              <td>
                <strong>Page Available for each Project:</strong> 60 Pages
              </td>
            </tr>
            <tr>
              <td>
                <strong>Payment Per Page:</strong> Rs 250 for 100% accuracy
              </td>
            </tr>
            <tr>
              <td>
                <strong>Weekly Earnings </strong> ₹15,000/-
              </td>
            </tr>
            {/* <tr>
              <td>
                <strong>Maximum Earnings:</strong> Unlimited
              </td>
            </tr> */}
            <tr>
              <td>
                <strong>Payment Duration:</strong> Weekly
              </td>
            </tr>
            <tr>
              <td>
                <strong>Payment Mode:</strong> Bank transfer, Google Pay,
                Phonepe & PayTM payment
              </td>
            </tr>
            <tr>
              <td>
                <b style={{ fontSize: "22px", color: "#1b1e7b" }}>
                  <center>
                    <p>Service Charge :</p>₹4,690/-
                  </center>
                </b>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="table-box">
        <h3>Premium Plan</h3>
        <table>
          <tbody>
            <tr>
              <td>
                <strong>Work Type:</strong> Online Data Entry Work
              </td>
            </tr>
            <tr>
              <td>
                <strong>Work Description:</strong> Type as per Company Provided
                Image
              </td>
            </tr>
            <tr>
              <td>
                <strong>Supported Devices:</strong> Smart Phone, Tab, Laptop &
                Desktop
              </td>
            </tr>
            <tr>
              <td>
                <strong>Project Available:</strong> Unlimited
              </td>
            </tr>
            <tr>
              <td>
                <strong>Project Duration:</strong> 40 Days / Project
              </td>
            </tr>
            <tr>
              <td>
                <strong>Page Available for each Project:</strong> 100 Pages
              </td>
            </tr>
            <tr>
              <td>
                <strong>Payment Per Page:</strong> Rs 250 for 100% accuracy
              </td>
            </tr>
            <tr>
              <td>
                <strong>Weekly Earnings </strong> ₹25,000/-
              </td>
            </tr>
            {/* <tr>
              <td>
                <strong>Maximum Earnings:</strong> Unlimited
              </td>
            </tr> */}
            <tr>
              <td>
                <strong>Payment Duration:</strong> Monthly
              </td>
            </tr>
            <tr>
              <td>
                <strong>Payment Mode:</strong> Bank transfer, Google Pay,
                Phonepe & PayTM payment
              </td>
            </tr>
            <tr>
              <td>
                <b style={{ fontSize: "22px", color: "#1b1e7b" }}>
                  <center>
                    <p>Service Charge :</p>₹6,570/-
                  </center>
                </b>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p
        className="warni"
        style={{ color: "#6b747b", fontFamily: "Open Sans,sans serif" }}
      >
        <b style={{ fontWeight: "999" }}>Note : </b>For all the plans credits
        are based on the accuracy of the tier each tier should have minimum 80%.
        If you don't achieve in one tier no worries you can proceed with another
        tier.
      </p>
    </div>
  );
};

export default Table;
