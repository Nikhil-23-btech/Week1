import React from 'react';
import Navbar from './Navbar';
const Clothing = () => {
  return (
    <div>
        <Navbar />
      <table border="1px">
        <tbody>
          <tr>
            <td><img src="photos/sports/dumbell.jpg" width="500px" height="300px" alt="Cockatoo dumbells" /></td>
            <td style={{ justifyContent: 'center', alignItems: 'center' }}>
              <h3>Cockatoo ADB-01 2.5 KG- 40 Kg Adjustable Dumbbell Set, Home Workout Gym Equipment Men and Women, Quick One-Second Adjustment 15-IN-1 Dumbbell Dumbbells Set For Home Gym (40 Kg, Red) <br/><br/>Price : 90$</h3>
            </td>
            <td style={{ justifyContent: 'center', alignItems: 'center' }}>
              <form>
                <input type="submit" value="Buy now" />
              </form>
              <br /><br />
              <form>
                <input type="submit" value="Add To Cart" />
              </form>
            </td>
          </tr>
          <tr>
            <td><img src="photos/sports/sg.jpg" width="300px" height="300px" alt="SG Cricked full kit" /></td>
            <td style={{ justifyContent: 'center', alignItems: 'center' }}>
              <h3>SG Full Cricket Kit Combo with Spofly™ Brand Stumps     <br/><br/>Price : 1000$</h3>
            </td>
            <td style={{ justifyContent: 'center', alignItems: 'center' }}>
              <form>
                <input type="submit" value="Buy now" />
              </form>
              <br /><br />
              <form>
                <input type="submit" value="Add To Cart" />
              </form>
            </td>
          </tr>
          <tr>
            <td><img src="photos/sports/ss.jpg" width="300px" height="300px" alt="SS Cricket bat " /></td>
            <td style={{ justifyContent: 'center', alignItems: 'center' }}>
              <h3>Superb Stroke SS (Red) Cricket Bat Full Size Popular Willow Hard Pressed Shaped with Bat Cover<br /><br /> Price : 45$</h3>
            </td>
            <td style={{ justifyContent: 'center', alignItems: 'center' }}>
              <form>
                <input type="submit" value="Buy now" />
              </form>
              <br /><br />
              <form>
                <input type="submit" value="Add To Cart" />
              </form>
            </td>
          </tr>
          <tr>
            <td><img src="photos/sports/batmntn.jpg" width="300px" height="300px" alt="MSI" /></td>
            <td style={{ justifyContent: 'center', alignItems: 'center' }}>
              <h3>YONEX GR 303 I Badminton Racquet (Black) - Pack of 2 0       <br /><br /> Price : 40$</h3>
            </td>
            <td style={{ justifyContent: 'center', alignItems: 'center' }}>
              <form>
                <input type="submit" value="Buy now" />
              </form>
              <br /><br />
              <form>
                <input type="submit" value="Add To Cart" />
              </form>
            </td>
          </tr>
          <tr>
            <td><img src="photos/sports/footbal.jpg" width="300px" height="300px" alt="Nivia Shining Star - 2022 Football" /></td>
            <td style={{ justifyContent: 'center', alignItems: 'center' }}>
              <h3>Nivia Shining Star - 2022 Football/Rubberized Stitched Football/32 Panels/International Match Ball/Size - 5 (Black & White) <br /><br /> Price : 50$</h3>
            </td>
            <td style={{ justifyContent: 'center', alignItems: 'center' }}>
              <form>
                <input type="submit" value="Buy now" />
              </form>
              <br /><br />
              <form>
                <input type="submit" value="Add To Cart" />
              </form>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="cont">
        <center>
          <h4>For further information mail us<br />abc@gmail.com</h4>
        </center>
      </div>
    </div>
  );
};

export default Clothing;
