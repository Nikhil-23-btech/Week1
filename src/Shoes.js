import React from 'react';
import Navbar from './Navbar';
const Clothing = () => {
  return (
    <div>
        <Navbar />
      <table border="1px">
        <tbody>
          <tr>
            <td><img src="photos/shoes/uspolo.jpg" width="500px" height="300px" alt="HP Victus 15" /></td>
            <td style={{ justifyContent: 'center', alignItems: 'center' }}>
              <h3>U.S. Polo Assn.'s colour-block stylish fashion sneakers <br/><br/>Price : 50$</h3>
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
            <td><img src="photos/shoes/sprx.jpg" width="300px" height="300px" alt="Asus vivo book" /></td>
            <td style={{ justifyContent: 'center', alignItems: 'center' }}>
              <h3>Sparx Men's Canvas Sneaker            <br/><br/>Price : 20$</h3>
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
            <td><img src="photos/shoes/frml.jpg" width="300px" height="300px" alt="Honor" /></td>
            <td style={{ justifyContent: 'center', alignItems: 'center' }}>
              <h3>San Frissco Men's Shoe Black Leather – Round Toe Formal Oxfords: Wrinkle-Free Patent Upper, Lightweight Design, and Cushioned Footbed for All-Day Comfort<br /><br /> Price : 35$</h3>
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
            <td><img src="photos/shoes/cent.jpg" width="300px" height="300px" alt="MSI" /></td>
            <td style={{ justifyContent: 'center', alignItems: 'center' }}>
              <h3>Centrino Mens 7957 Classic Moccasins Non-Lace Up Formal Shoes for Office, Party,Wedding | Dress Shoes | Extra Cushioning Insole | Lightweight & Comfortable<br /><br /> Price : 35$</h3>
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
            <td><img src="photos/shoes/fausto.jpg" width="300px" height="300px" alt="lenovo Ideapad" /></td>
            <td style={{ justifyContent: 'center', alignItems: 'center' }}>
              <h3>FAUSTO Men's Formal Lace Up Oxford Shoes for Office|Meetings|Daily|Comfort|Fashion|Stylish|Parties|Outdoor|Occasions|Lightweight with TPR Welted Sole (6-13 UK)<br /><br /> Price : 25$</h3>
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
