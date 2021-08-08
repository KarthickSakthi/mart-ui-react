import React from 'react';
import '../css/Footer.css'
const Footer=()=>{
    return(
        <div class="Footer">
       <p class="description"> Keeping the flag of #No1 and in full flow has added an immense deal of coolness here during his journey as a MART</p>
       <div class='container'>

           <div class="left">
           <dl class="Shop">
               <dd><h1>Shop</h1></dd>
               <dd><a>Earbud</a></dd>
               <dd><a>Headphone</a></dd>
               <dd><a>Earphone</a></dd>
               <dd><a>Airbuds</a></dd>
               <dd><a>ipad</a></dd>
           </dl>
           </div>

           <div class="centre">
           <dl class="Mart">
               <dd><h1>Mart</h1></dd>
               <dd><a>About Mart</a></dd>
               <dd><a>Read Our Blog</a></dd>
               <dd><a>Terms Of Use</a></dd>
               <dd><a>Terms Of Service</a></dd>
               <dd><a>Privacy Policy</a></dd>
           </dl>
           </div>

           <div class="right">
           <dl class="Help">
               <dd><h1>Help</h1></dd>
               <dd><a>Track Orders</a></dd>
               <dd><a>Warranty & Support</a></dd>
               <dd><a>Bulk Orders</a></dd>
               <dd><a>FAQs</a></dd>
               <dd><a>Product Verification</a></dd>
           </dl>
           </div>
           
       </div>
       <footer>&copy; 2021 MART Private Limited. All Rights Reserved</footer>

        </div>
    )
  
}
export default Footer;