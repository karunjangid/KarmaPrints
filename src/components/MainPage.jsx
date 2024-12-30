import React from 'react';
import calendar from "../assets/calendar.png"
import vs from "../assets/nfscard.png"
import "./MainPage.css"
import logo from "../assets/logo.png"
                          
const MainPage = () => {
  return (
    <>
    <div className="images">
        <div className="img1">
            <img src="https://nfcw.de/wp-content/uploads/Premium-Design.gif" alt="" />
            <div className="card-overlay">
              <h2>Transform Your Business Digitally</h2>
              <p>NFS card is a Card that provides you a faster communication and also makes your identity Impressive.</p>
              <button>Create Now</button>
            </div>
        </div>
        <div className="img2">
            <img src="https://cdn.dribbble.com/users/3349387/screenshots/6505830/calender.gif" alt="" />
            <div className="card-overlay">
              <h2>Premium quality at best Price</h2>
              <p>Calendars, Notebooks and Diaries starting at Rs 160</p>
              <button style={{margin:"5px"}}>Calendars</button>
              <button style={{margin:"5px"}}>Notebooks</button>
              <br />
              <button style={{margin:"5px"}}>Diaries</button>
            </div>
        </div>
    </div>
    <h2>Explore All Categories</h2>
    <div className="categories">
        <div className="product">
            <img src="https://gkmockups.com/wp-content/uploads/2019/05/BusCard_Ort_Animation.gif" alt="" />
            <h4>Visiting Card & NFS Cards</h4>
        </div>
        <div className="product">
            <img src="https://culturestudio.net/wp-content/uploads/2024/01/tumbler.gif" alt="" />
            <h4>Custom Drinkware</h4>
        </div>
        <div className="product">
            <img src="https://www.bing.com/th/id/OGC.03176d4fc68a31bb678f95595d4bd1b6?pid=1.7&rurl=https%3a%2f%2fmedia.giphy.com%2fmedia%2fuya2uJGw62fqE%2fgiphy.gif&ehk=zIRujaxDqF27Xn1KA1f6%2bwNxeGNKj45Kz0QC6bcARhY%3d" alt="" />
            <h4>Photo Gifts</h4>
        </div>
        <div className="product">
            <img src="https://www.bing.com/th/id/OGC.641291e5e72df17fa1ed9c5dfd3dbdb8?pid=1.7&rurl=https%3a%2f%2fcdn.dribbble.com%2fusers%2f97383%2fscreenshots%2f1344461%2fmedia%2f1185bc49671b01077678f8b71a8024b7.gif&ehk=IZlyv7WJXggrynsL9fQA2JoGiDQYy4NEiMS8VNd9J6c%3d" alt="" />
            <h4>Customized Clothes</h4>
        </div>
        <div className="product">
            <img src="https://www.bing.com/th/id/OGC.0e0c574e53afdad3cb72fa949ef15798?pid=1.7&rurl=https%3a%2f%2fmymodernmet.com%2fwp%2fwp-content%2fuploads%2farchive%2fBOh6oQDtYH7kxv9Ay1Nq_animatedposter8.gif&ehk=T2g7DyCtYpTAqxUTzx8bEJzMk6G4k0mJKJRs4wFYjDk%3d" alt="" />
            <h4>Signs,Posters & Marketing Material</h4>
        </div>
        <div className="product">
            <img src="https://www.bing.com/th/id/OGC.70e1d1555be3bca1b32c63282427f9d2?pid=1.7&rurl=https%3a%2f%2fmoein.video%2fwp-content%2fuploads%2f2022%2f10%2farrow-Free-Animated-Icon-GIF-1080p-after-effects.gif&ehk=UzKw%2fsUsbcZR9HvZGk0Pz3NKiBr53kdQ3jIyVeKZTUE%3d" alt="" />
        </div>
    </div>
    <h2>Popular Projects</h2>
    <div className="popularprojects">
    <div className="product">
            <img src="https://www.bing.com/th/id/OGC.e630a131b454d4b19be349c7c1ebdade?pid=1.7&rurl=https%3a%2f%2fmedia.tenor.com%2fxz8LquLaMO8AAAAC%2fdrew-hoodie.gif&ehk=iOXSY3y%2fe917gVkE6XmBZEde9YHF7WU0ar57%2fSKURXk%3d" alt="" />
            <h4>Hoodies</h4>
    </div>        
    <div className="product">
            <img src="https://www.bing.com/th/id/OGC.9e43f8ea2f74444625c9aead7447ee48?pid=1.7&rurl=https%3a%2f%2fi.pinimg.com%2foriginals%2f59%2fc9%2fff%2f59c9ffe1102d3ac8c67d2c3d271b5bdf.gif&ehk=Bv1flxyJCIYvy4F2a94LZzOeI%2bSYMZoooOH5RqGyyeQ%3d" alt="" />
            <h4>Men's Polo Tshirt</h4>
    </div>        
    <div className="product">
            <img src="https://www.bing.com/th/id/OGC.b588cd97d5b381629c99f25cd5935327?pid=1.7&rurl=https%3a%2f%2fmedia1.tenor.com%2fm%2foKqsDZSEk2gAAAAC%2fbranded-notebooks-custom-notebooks.gif&ehk=vk38yNKj%2bDml8bGRiF6jnw1QVnXODTbbKp9UgHo0gGo%3d" alt="" />
            <h4>Personalized Notebooks</h4>
    </div>        
    <div className="product">
            <img src="https://www.bing.com/th/id/OGC.a54774fd66de9ec4bbd0aae2caf61e27?pid=1.7&rurl=https%3a%2f%2fmedia.giphy.com%2fmedia%2fIgLdmV6WzExAwRNR03%2fgiphy.gif&ehk=016IT6i%2b8WMw7szBQpr7FbAsimAjUgRtvm%2bDHSH2B%2fY%3d" alt="" />
            <h4>Visiting Cards</h4>
    </div>        
    <div className="product">
            <img src="https://c.tenor.com/cPNCarSN36wAAAAC/mug.gif" alt="" />
            <h4>Coffee Mug</h4>
    </div>        
    <div className="product">
            <img src="https://www.bing.com/th/id/OGC.70e1d1555be3bca1b32c63282427f9d2?pid=1.7&rurl=https%3a%2f%2fmoein.video%2fwp-content%2fuploads%2f2022%2f10%2farrow-Free-Animated-Icon-GIF-1080p-after-effects.gif&ehk=UzKw%2fsUsbcZR9HvZGk0Pz3NKiBr53kdQ3jIyVeKZTUE%3d" alt="" />
        </div>    
    </div>
    <h2>Branded Products</h2>
    <div className="popularprojects">
    <div className="product">
            <img src="https://www.bing.com/th/id/OGC.7aff2d009bf227ac35ce5a899260b6e1?pid=1.7&rurl=https%3a%2f%2fmedia.giphy.com%2fmedia%2fl2JhwdnrGvfnoXrzi%2fgiphy.gif&ehk=%2bVmOTmyVghHDgujb%2bph7t9CQT8%2bBZGdpYGIYyNOmGY4%3d" alt="" />
            <h4>3D designs</h4>
    </div>        
    <div className="product">
            <img src="https://5.imimg.com/data5/SELLER/Default/2023/12/373161127/LZ/IN/CI/20623258/premium-quality-7-in-1-combo-gift-new-joineee-kit-employee-joinee-kit-event-gift-1000x1000.jpeg" alt="" />
            <h4>Company New Joinee Catalogue</h4>
    </div>        
    <div className="product">
            <img src="https://www.bing.com/th/id/OGC.ed6b9d727fab5109d490a1c1597f01a6?pid=1.7&rurl=https%3a%2f%2fmedia3.giphy.com%2fmedia%2f3ohzdM2ijZbCKrX6wg%2fgiphy.gif&ehk=Ah0tibdwm4ceNhr%2bpOWPc81XQ1B2sBiiPlognD4yX6o%3d" alt="" />
            <h4>Fleece Jackets</h4>
    </div>        
    <div className="product">
            <img src="https://www.bing.com/th/id/OGC.2b0c388cb04856d42d1e896edaf58990?pid=1.7&rurl=https%3a%2f%2fmedia0.giphy.com%2fmedia%2fl49JDwt0iI8h3DCDu%2fgiphy.gif&ehk=utBE3ICFI%2bZ1kbH%2fHsS2%2bCa7PsGVm8qfvfvnOsiOl4U%3d" alt="" />
            <h4>Winter Jackets</h4>
    </div>        
    <div className="product">
            <img src="https://www.bing.com/th/id/OGC.2e016fc66c690720cfba23ebf5440750?pid=1.7&rurl=https%3a%2f%2fcdn.dribbble.com%2fusers%2f3776517%2fscreenshots%2f7060406%2fdesk-calendar.gif&ehk=q9myhnZP%2fg7FBGY%2bbaoTHFK6o%2b1o%2bUsWqOqMlRn%2ffAA%3d" alt="" />
            <h4>Desk Calendars</h4>
    </div>        
    <div className="product">
            <img src="https://www.bing.com/th/id/OGC.70e1d1555be3bca1b32c63282427f9d2?pid=1.7&rurl=https%3a%2f%2fmoein.video%2fwp-content%2fuploads%2f2022%2f10%2farrow-Free-Animated-Icon-GIF-1080p-after-effects.gif&ehk=UzKw%2fsUsbcZR9HvZGk0Pz3NKiBr53kdQ3jIyVeKZTUE%3d" alt="" />
        </div>    
    </div>
    <h2>Trending Products</h2>
    <div className="popularprojects">
    <div className="product">
            <img src="https://th.bing.com/th/id/OIP.qHAhMH_1A_lWOL9WVTxmpwHaHa?w=216&h=216&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
            <h4>Dry Jackets</h4>
    </div>        
    <div className="product">
            <img src="https://www.bing.com/th/id/OGC.a84ba0d324a81c09c00f3dd7bc0313da?pid=1.7&rurl=https%3a%2f%2fmedia1.tenor.com%2fimages%2fa84ba0d324a81c09c00f3dd7bc0313da%2ftenor.gif%3fitemid%3d17245404&ehk=oGamLQrbWMbWoEOUilQxeXSl9nhJh9ZDtqMUSfG5ed4%3d" alt="" />
            <h4>Customized @ADIDAS Hoodies</h4>
    </div>        
    <div className="product">
            <img src="https://th.bing.com/th/id/OIP.xQ4USgpGjl2kZywYvvuvDgHaJc?rs=1&pid=ImgDetMain" alt="" />
            <h4>Personalized Phone Cases</h4>
    </div>        
    <div className="product">
            <img src="https://th.bing.com/th/id/OIP.fOvPEarR0tbFQsz3sRWnTAAAAA?rs=1&pid=ImgDetMain" alt="" />
            <h4>Perfect Gift For your Partner</h4>
    </div>        
    <div className="product">
            <img src="https://i.etsystatic.com/17038291/r/il/8c203f/2390952528/il_fullxfull.2390952528_5y68.jpg" alt="" />
            <h4>Gift Box</h4>
    </div>        
    <div className="product">
            <img src="https://www.bing.com/th/id/OGC.70e1d1555be3bca1b32c63282427f9d2?pid=1.7&rurl=https%3a%2f%2fmoein.video%2fwp-content%2fuploads%2f2022%2f10%2farrow-Free-Animated-Icon-GIF-1080p-after-effects.gif&ehk=UzKw%2fsUsbcZR9HvZGk0Pz3NKiBr53kdQ3jIyVeKZTUE%3d" alt="" />
        </div>    
    </div>
    <div className="images">
        <div className="img1">
            <img src="https://www.bing.com/th/id/OGC.6cbbde7eb3436231b3b9ab896726bf86?pid=1.7&rurl=https%3a%2f%2fcdn.dribbble.com%2fusers%2f169251%2fscreenshots%2f1904492%2fnamecard_face05.gif&ehk=Bs4cXowuzzzH6nMpAtnPHVYwYxVHq6%2f89vfaTjO1uSc%3d" alt="" />
            <div className="card-overlay">
              <h2>Wants a Personalized Visiting Card</h2>
              <p>NFS card is a Card that provides you a faster communication and also makes your identity Impressive.</p>
              <button>Create Now</button>
            </div>
        </div>
        <div className="img2">
            <img src="https://www.bing.com/th/id/OGC.21f99a9b9b1124d165fbe110cd0b8100?pid=1.7&rurl=https%3a%2f%2fmedia.giphy.com%2fmedia%2f3QAUnTsafSMQE%2fgiphy.gif&ehk=tjCC2V0EfiFOBdg8Q4GHSXBRN%2b%2blJjSE6vdoOn5%2fdKs%3d" alt="" />
            <div className="card-overlay">
              <h2>Make Your Marriage Memorable with KarmaPrints</h2>
              <p>Starts From - 1000/-</p>
              <button style={{margin:"5px"}}>Photo Albums</button>
              <br />
              <button style={{margin:"5px"}}>LayFlat Albums</button>
              <br />
            </div>
        </div>
    </div>


    <h2>Explore More</h2>
    <div className="popularprojects">
    <div className="product">
            <p>Buy 4 @ Rs 260/-</p>
            <img src="https://blog.durafastlabel.com/wp-content/uploads/2019/12/Famous-brands-806742346_2125x1416.jpeg" alt="" />
            <h4>Labels</h4>
    </div>        
    <div className="product">
            <p>Buy 3 @ Rs 260/-</p>
            <img src="https://th.bing.com/th/id/OIP.4DK98srBGzinifkB5SPsRAHaEG?rs=1&pid=ImgDetMain" alt="" />
            <h4>Stickers</h4>
    </div>        
    <div className="product">
            <p>Buy 1 @ Rs 860/-</p>
            <img src="https://th.bing.com/th/id/OIP.DuVwUXdoydVX9ToNUoDLHQAAAA?rs=1&pid=ImgDetMainn" alt="" />
            <h4>Canvas Print</h4>
    </div>        
    <div className="product">
    <p>Buy 10 @ Rs 900/-</p>
            <img src="https://th.bing.com/th/id/OIP.1FuIHtMOAVBpzZOOK4DRAgHaGL?rs=1&pid=ImgDetMain" alt="" />
            <h4>Lanyards</h4>
    </div>        
    <div className="product">
    <p>Buy 1 @ Rs 300/-</p>
            <img src="https://static.vecteezy.com/system/resources/previews/000/572/853/original/purple-awesome-id-card-template-vector.jpg" alt="" />
            <h4>ID Cards</h4>
    </div>        
    <div className="product">
    <br />
            <img src="https://www.bing.com/th/id/OGC.70e1d1555be3bca1b32c63282427f9d2?pid=1.7&rurl=https%3a%2f%2fmoein.video%2fwp-content%2fuploads%2f2022%2f10%2farrow-Free-Animated-Icon-GIF-1080p-after-effects.gif&ehk=UzKw%2fsUsbcZR9HvZGk0Pz3NKiBr53kdQ3jIyVeKZTUE%3d" alt="" />
        </div>    
    </div>

    <h2>New Arrivals</h2>
    <div className="popularprojects">
    <div className="product">
    <p>Buy 100 @ Rs 250/-</p>
            <img src="https://images.template.net/wp-content/uploads/2017/01/06102139/Elegant-Leaf-Business-Card.jpg" alt="" />
            <h4>Leaf Visiting Cards</h4>
    </div>        
    <div className="product">
    <p>Buy 1500 @ Rs 1500/-</p>
            <img src="https://th.bing.com/th/id/OIP.Ne0gatt1GfNRri6aVyaLhwHaEj?rs=1&pid=ImgDetMain " alt="" />
            <h4>Bulk Visiting Cards</h4>
    </div>        
    <div className="product">
    <p>Buy 50 @ Rs 16500/-</p>
            <img src=" https://static.printmagic.com/uploads/2019/11/Wall-Calendar_Business-Corporate.jpg" alt="" />
            <h4>Customized Wall Calendars</h4>
    </div>        
    <div className="product">
    <p>Buy 30 @ Rs 15000/-</p>
            <img src="https://static.printmagic.com/uploads/2019/11/Wall-Calendar_Business-Corporate.jpg " alt="" />
            <h4>3D Light Prints</h4>
    </div>        
    <div className="product">
    <p>Buy 50 @ Rs 4000/-</p>
            <img src=" https://th.bing.com/th/id/OIP.kAeKGmedDj7-61eRQ4sQmgHaEr?w=295&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
            <h4>Bulk Diaries</h4>
    </div>        
    <div className="product">
        <br />
            <img src="https://www.bing.com/th/id/OGC.70e1d1555be3bca1b32c63282427f9d2?pid=1.7&rurl=https%3a%2f%2fmoein.video%2fwp-content%2fuploads%2f2022%2f10%2farrow-Free-Animated-Icon-GIF-1080p-after-effects.gif&ehk=UzKw%2fsUsbcZR9HvZGk0Pz3NKiBr53kdQ3jIyVeKZTUE%3d" alt="" />
        </div>    
    </div>


<div className="introduction">
    <h2 className='heading'>ABOUT US</h2>
    <div className="about">
        <div className="sec1">
            <h1>KarmaPrints India : Now Known as Leader of economy part</h1>
            <p>KarmaPrints is a Startup Company But KarmaPrints has helped business owners, entrepreneurs and individuals create their identities with custom designs and professional marketing. Our online printing services are intended to help you find high quality customised products you need – visiting cards, personalized clothing, gifting products, and much more.</p>
        </div>
        <div className="sec2">
            <h4>Even Low Quantities @ Best Prices</h4>
            <p>We offer low/ single product quantities at affordable prices.</p>
            <h4>High quality products and Easy design</h4>
            <p>Our products are made from high-quality materials and are designed to last.</p>
            <h4>Free replacement or Full Refund</h4>
            <p>Our team of experts is dedicated to providing you with the best possible service.</p>
            <h4>High Material</h4>
            <p>Our products are made from high-quality materials and are designed to last.</p>
        </div>
    </div>
</div>
<div className="footer">
    <div className="footer1">
        <img src={logo} alt="" />
        <p>KarmaPrints is a Startup Company But KarmaPrints has helped business owners, entrepreneurs and individuals create their identities with custom designs and professional marketing. Our online printing services are intended to help you find high quality customised products you need – visiting cards, personalized clothing, gifting products, and much more.</p>
    </div>
    <div className="footer2">
        <li>
            <ol style={{fontWeight:"bold"}}>Let Us Help</ol>
            <ul>My Query</ul>
            <ul>Track Order</ul>
            <ul>All Products</ul>
            <ul>FAQ</ul>
        </li>
    </div>
    <div className="footer3">
        <li>
            <ol style={{fontWeight:"bold"}}>Get in Touch</ol>
            <ul>Carrers</ul>
            <ul>Blog</ul>
            <ul>Help</ul>
            <ul>For investors</ul>
            <ul>For Media</ul>
            <ul>Sustainable report</ul>
            <ul>Annual Report</ul>
        </li>
    </div>
    <div className="footer4">
        <li>
            <ol style={{fontWeight:"bold"}}>Our Company</ol>
            <ul>Terms & COnditions</ul>
            <ul>Privacy & Cookie Policy</ul>
            <ul>Copyright Matters</ul>
            <ul>Patents & Trademarks</ul>
        </li>
    </div>
</div>
<div className="downfooter">
    <p>Copyright 2023 KarmaPrints. All rights reserved.</p>
</div>
    </>
  )
}

export default MainPage