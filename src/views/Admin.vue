<template>
   
    
     
  <div class="row row1">
    
    <div class=" col-2 side-nav navbar-expand-lg navbar-mainbg">
        
          <div class=" navbar-collapse" id="navbarSupportedContent">
            <ul class=" side navbar-nav ml-auto">
                
                    <div class="d-logo" >                   
                  
                     <img class="logo" src="../assets/image/logo.png" alt="" />
                  
                    </div>
                
                <div class="hori-selector"><div class="left"></div><div class="right"></div></div>
                
                <li class="nav-item active">
                    <a class="nav-link" href="javascript:void(0);">               
                    <div id="icon1" onclick="myNav1()"  class="in-con">
                     <i id="icon1"  class="far fa-address-book"></i>
                    </div>
                    </a>
                </li>
                <li class="nav-item ">
                    <a class="nav-link" href="javascript:void(0);">                   
                    <div id="icon2" style=" background-color:#1F1D2B;  box-shadow: 0px 0px 0px 0px #1F1D2B; color:#FCAB28" onclick="myNav2()"   class="
                    in-con">
                     <i class="far fa-address-book"></i>
                    </div>
                    </a>
                </li>
                <li class="nav-item ">
                    <a class="nav-link" href="javascript:void(0);">                   
                    <div id="icon3"  style=" background-color:#1F1D2B;  box-shadow: 0px 0px 0px 0px #1F1D2B; color:#FCAB28"  onclick="myNav3()"   class="in-con">
                     <i  class="far  fa-address-book"></i>
                    </div>
                    </a>
                </li>
                <li class="nav-item ">
                    <a class="nav-link" href="javascript:void(0);">                   
                    <div id="icon4"  style=" background-color:#1F1D2B;  box-shadow: 0px 0px 0px 0px #1F1D2B; color:#FCAB28"  onclick="myNav4()"   class="in-con">
                     <i class="far fa-address-book"></i>
                    </div>
                    </a>
                </li>
                <li class="nav-item ">
                    <a class="nav-link" href="javascript:void(0);">                   
                    <div id="icon5"  style=" background-color:#1F1D2B;  box-shadow: 0px 0px 0px 0px #1F1D2B; color:#FCAB28"  onclick="myNav5()"   class="in-con">
                     <i class="far fa-address-book"></i>
                    </div>
                    </a>
                </li>
                <li class="nav-item ">
                    <a class="nav-link" href="javascript:void(0);">                   
                    <div id="icon6"  style=" background-color:#1F1D2B;  box-shadow: 0px 0px 0px 0px #1F1D2B; color:#FCAB28"  onclick="myNav6()"   class="in-con">
                     <i class="far fa-address-book"></i>
                    </div>
                    </a>
                </li>
                <li class="nav-item ">
                    <a class="nav-link" href="javascript:void(0);">                   
                    <div id="icon7"  style=" background-color:#1F1D2B;  box-shadow: 0px 0px 0px 0px #1F1D2B; color:#FCAB28"  onclick="myNav7()"   class="in-con">
                     <i class="far fa-address-book"></i>
                    </div>
                    </a>
                </li>



          
            </ul>
        </div>
    </div>
    
    
    <div class="col main">
        
         <router-view/>
      
    </div>
  
    
  </div>
   
    
   
</template>


<script>

import '../assets/js/script.js'

import '../assets/js/side.js'

export default {
     
    name:'Admin'
    
}
    
</script>

 

<style scoped>

@import '../assets/css/style.css'
    
</style> 