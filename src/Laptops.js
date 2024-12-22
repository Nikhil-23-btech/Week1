import React from 'react';
import Navbar from './Navbar';
const laptops = () => {
  return (
    <div>
        <Navbar />
      <table border="1px">
        <tbody>
          <tr>
            <td><img src="photos/laptops/hp.jpg" width="500px" height="300px" alt="HP Victus 15" /></td>
            <td style={{ justifyContent: 'center', alignItems: 'center' }}>
              <h2>HP Victus 15</h2>
              <h3>HP Victus Gaming Laptop,12th Gen Intel Core i5-12450H,4GB RTX 2050 GPU,15.6-inch (39.6 cm), FHD,IPS,8GB DDR4, 512GB SSD, Backlit KB,Dual Speakers(MSO, Blue,2.37 kg),fa1310tx</h3>
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
            <td><img src="photos/laptops/asus.jpg" width="300px" height="300px" alt="Asus vivo book" /></td>
            <td style={{ justifyContent: 'center', alignItems: 'center' }}>
              <h2>Asus vivo book</h2>
              <h3>ASUS Vivobook 16X, 16" FHD+, 144Hz 300nits, Intel Core i5-12500H 2.5 GHz, Creator/Gaming Laptop (16GB RAM/512GB SSD/RTX 3050/win 11/Office Home/50WHr Battery/Cool Silver/1.80 kg), K3605ZC-RP587WS</h3>
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
            <td><img src="photos/laptops/honor.jpg" width="300px" height="300px" alt="Honor" /></td>
            <td style={{ justifyContent: 'center', alignItems: 'center' }}>
              <h2>Honor</h2>
              <h3>HONOR MagicBook X16 Pro 2024, 13th Gen Intel Core i5-13420H (16GB/512GB NVMe SSD, 16-inch (40.64 cm) FHD IPS Anti-Glare Thin and Light Laptop/Windows 11/Backlit Keyboard/Fingerprint/1.75Kg), Gray <br /><br /> Price : 700$</h3>
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
            <td><img src="photos/laptops/msi.jpg" width="300px" height="300px" alt="MSI" /></td>
            <td style={{ justifyContent: 'center', alignItems: 'center' }}>
              <h2>MSI</h2>
              <h3>MSI Thin 15, Intel 13th Gen. Core i5-13420H, 40CM FHD 144Hz Gaming Laptop(16GB/512GB NVMe SSD/Windows 11 Home/NVIDIA GeForce RTX 3050,GDDR6 4GB/Cosmos Gray/1.86Kg), B13U C-1805IN <br /><br /> Price : 600$</h3>
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
            <td><img src="photos/laptops/lenovo.jpg" width="300px" height="300px" alt="lenovo Ideapad" /></td>
            <td style={{ justifyContent: 'center', alignItems: 'center' }}>
              <h2>lenovo Ideapad</h2>
              <h3>Lenovo IdeaPad Gaming 3 Intel Core i5-11320H 15.6" (39.62cm) FHD IPS 250nits 120Hz Gaming Laptop (16GB/512GB SSD/Win 11/Office 21/NVIDIA GTX 1650 4GB/Alexa/3 Month Game Pass/Black/2.2Kg), 82K101M5IN <br /><br /> Price : 800$</h3>
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

export default laptops;
