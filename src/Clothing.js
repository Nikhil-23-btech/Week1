import React from 'react';
import Navbar from './Navbar';
const Clothing = () => {
  return (
    <div>
        <Navbar />
      <table border="1px">
        <tbody>
          <tr>
            <td><img src="photos/clothing/kudtha.jpg" width="500px" height="300px" alt="HP Victus 15" /></td>
            <td style={{ justifyContent: 'center', alignItems: 'center' }}>
              <h3>Chikankari Men's Kurta Set in Fine Clothing Craftsmanship<br/><br/>Price : 20$</h3>
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
            <td><img src="photos/clothing/trad.jpg" width="300px" height="300px" alt="Asus vivo book" /></td>
            <td style={{ justifyContent: 'center', alignItems: 'center' }}>
              <h3>Traditional Kurta & Koti Combo for Men | Wedding Available in XL Size<br/><br/>Price : 25$</h3>
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
            <td><img src="photos/clothing/slim.jpg" width="300px" height="300px" alt="Honor" /></td>
            <td style={{ justifyContent: 'center', alignItems: 'center' }}>
              <h3>EDINWOLF Cotton Solid Casual Slim Fit Spread Collor Short Kurta for Men<br /><br /> Price : 10$</h3>
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
            <td><img src="photos/clothing/martin.jpg" width="300px" height="300px" alt="MSI" /></td>
            <td style={{ justifyContent: 'center', alignItems: 'center' }}>
              <h3>Ben Martin Men's Cotton Angrakha Short Kurta<br /><br /> Price : 600$</h3>
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
            <td><img src="photos/clothing/coat.jpg" width="300px" height="300px" alt="lenovo Ideapad" /></td>
            <td style={{ justifyContent: 'center', alignItems: 'center' }}>
              <h3>Ben Martin Men's Fleece Hooded Cardigan Full Sleeve Standard Length Coat 2 Pockets<br /><br /> Price : 25$</h3>
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
