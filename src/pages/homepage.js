import React from 'react';
import Slider from "react-slick";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../pages/homepage.css';
import ViewInfo from './ViewInfo'
import { Carousel } from 'react-responsive-carousel';


export default function Homepage(props){
  const buttonText = 'CheckOut';
  const style ={  backgroundColor:'#DBFF80',color:'black',border: 'none'}
  const labelText = 'Products';
  const labelStyle={  paddingLeft:'150px',paddingTop:'10px'}

  return (
    <div>
      <div class=' row nav'>
        <div class='col-md-2 col-sm-2'>
          <img src={require('../images/logo/Group 3.png')} />
        </div>
        <div class='col-md-2 col-sm-2'>
          Home
        </div>
        <div class='col-md-2 col-sm-2'>
          Products
        </div>
        <div class='col-md-6 col-sm-6 last-child'>
          contact@hello.step.co.ke +254 721 123 123
        </div>
      </div>

      <div className="green">
      <Carousel infiniteLoop useKeyboardArrows autoPlay showThumbs={false}>
             <div class="row">
                <div class="col-md-6 slidetext">
                  <p>Whether you are stocking up on kids t-shirt or getting<br />ready for a special occasions with girls dresses
                  and party<br /> wear,you will be sure to find what you need at step
                  </p>
                </div>
                <div class="col-md-6 slideimg"><img src={require('../images/bg2.png')} /></div>
              </div>

             <div class="row">
                  <div class="col-md-6 slidetext">
                  <p>Whether you are stocking up on kids t-shirt or getting<br />ready for a special occasions with girls dresses
                  and party<br /> wear,you will be sure to find what you need at step
                  </p>
                  </div>
                  <div class="col-md-6 slideimg"> <img src={require('../images/bg1.png')} /></div>
             </div>

             <div class="row">
                  <div class="col-md-6 slidetext">
                  <p>Whether you are stocking up on kids t-shirt or getting<br />ready for a special occasions with girls dresses
                  and party<br /> wear,you will be sure to find what you need at step
                  </p>
                  </div>
                  <div class="col-md-6 slideimg"><img src={require('../images/bg3.png')} /> </div>
             </div>
         </Carousel>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <div class="row">
              <div class="col-md-4">
                <label style={labelStyle}>{labelText}</label>
              </div>
              <div class="col-md-8">
                <div class="input-group">
                  <input type="text" class="form-control" placeholder="Search Products" />
                  <span class="input-group-btn">
                    <button type="button" class="btn btn-default" aria-label="Left Align">
                    <span class="glyphicon glyphicon-search" aria-hidden="true"></span>
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>



         <div class="col-md-4">
           <div className="cart">
             <button type="button" class="btn btn-default">
               <span class="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span>
             </button>
              0 items in your cart <button style={style}>{buttonText}</button>
           </div>
         </div>
       </div>


        <div class="clothes">
          <div class="row">
            <div class="col-md-3 ">
              <div className="card">
                <div>
                  <img src={require('../images/C2187291.jpg')}/>
                </div>
                <div className="text">
                  <p>Toddler Girl Jacket</p>
                  <p class="cash"> KES 2000 </p>
                  <button style={style}>Add To Cart</button>
                  <p><a href='info'>View</a></p>
                </div>
              </div>
            </div>


          <div class="col-md-3 ">
          <div className="card">
            <div>
              <img src={require('../images/download.jpg')}/>
            </div>
            <div className="text">
              <p>Toddler Girl Green Jacket</p>
              <p class="cash"> KES 2500 </p>
              <button style={style}>Add To Cart</button>
              <p><a href='info'>View</a></p>
            </div>
          </div>

          </div>



          <div class="col-md-3">
            <div className="card">
              <div>
                <img src={require('../images/253I116.jpg')}/>
              </div>
              <div className="text">
                <p>Toddler Girl Jacket</p>
                <p class="cash"> KES 2000 </p>
                <button style={style}>Add To Cart</button>
                <p><a href='info'>View</a></p>
              </div>
            </div>
          </div>

          <div class="col-md-3">
            <div className="card">
              <div>
                <img src={require('../images/LPU07564I_L110_1__22719.1533843228.jpg')}/>
              </div>
              <div className="text">
                <p>Toddler Girl Jacket</p>
                <p class="cash"> KES 2000 </p>
                <button style={style}>Add To Cart</button>
                <p><a href='info'>View</a></p>
              </div>
            </div>
          </div>
        </div>

          <div class="secondrow">
          <div class="row">
            <div class="col-md-3">
            <div className="card">
              <div>
                <img src={require('../images/253H848.jpg')}/>
              </div>
              <div className="text">
                <p>Toddler Girl Jacket</p>
                <p class="cash"> KES 2000 </p>
                <button style={style}>Add To Cart</button>
                <p><a href='info'>View</a></p>
              </div>
            </div>
          </div>
          <div class="col-md-3">
          <div className="card">
            <div>
              <img src={require('../images/LBQ07693N_L061__48267.1531314211.jpg')}/>
            </div>
            <div className="text">
              <p>Toddler Girl Jacket</p>
              <p class="cash"> KES 2000 </p>
              <button style={style}>Add To Cart</button>
              <p><a href='info'>View</a></p>
            </div>
          </div>
          </div>
          <div class="col-md-3">
          <div className="card">
            <div>
              <img src={require('../images/LPU07933T_L677__15104.1544211133.jpg')}/>
            </div>
            <div className="text">
              <p>Toddler Girl Jacket</p>
              <p class="cash"> KES 2000 </p>
              <button style={style}>Add To Cart</button>
              <p><a href='info'>View</a></p>
            </div>
          </div>
          </div>
            <div class="col-md-3">
            <div className="card">
              <div>
                <img src={require('../images/C2187101.jpg')}/>
              </div>
              <div className="text">
                <p>Toddler Girl Jacket</p>
                <p class="cash"> KES 2000 </p>
                <button style={style}>Add To Cart</button>
                <p><a href='info'>View</a></p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class=' row footer'>
      <div class='col-md-2'>
        <img src={require('../images/logo/Group 3.png')} />
      </div>
      <div class='col-md-2'>
        Home
      </div>
      <div class='col-md-2'>
        Products
      </div>
      <div class='col-md-6 last-child'>
        contact@hello.step.co.ke +254 721 123 123
      </div>
    </div>


  </div>
























  )
}
