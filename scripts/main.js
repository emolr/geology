!function(){var e=[{src:"https://farm7.staticflickr.com/6175/6176698785_7dee72237e_b.jpg",w:100,h:100}],a=[{src:"./images/canada/1.jpeg",w:1333,h:1e3},{src:"./images/canada/2.jpeg",w:1333,h:1e3},{src:"./images/canada/3.jpeg",w:1333,h:1e3},{src:"./images/canada/4.jpeg",w:750,h:1e3},{src:"./images/canada/5.jpeg",w:1333,h:1e3}],s=[{src:"./images/newzealand/1.jpeg",w:1333,h:1e3},{src:"./images/newzealand/2.jpeg",w:1333,h:1e3},{src:"./images/newzealand/3.jpeg",w:750,h:1e3},{src:"./images/newzealand/4.jpeg",w:1333,h:1e3},{src:"./images/newzealand/5.jpeg",w:750,h:1e3}],g=[{src:"./images/usa/1.jpeg",w:1333,h:1e3},{src:"./images/usa/2.jpeg",w:1333,h:1e3},{src:"./images/usa/3.jpeg",w:750,h:1e3},{src:"./images/usa/4.jpeg",w:1333,h:1e3},{src:"./images/usa/5.jpeg",w:1333,h:1e3}],c=[{src:"./images/portugal/1.jpeg",w:1333,h:1e3},{src:"./images/portugal/2.jpeg",w:1476,h:1e3},{src:"./images/portugal/3.jpeg",w:1476,h:1e3},{src:"./images/portugal/4.jpeg",w:1333,h:1e3},{src:"./images/portugal/5.jpeg",w:1476,h:1e3}],r=function(e){var a=document.querySelectorAll(".pswp")[0],s={index:0,escKey:!0,showHideOpacity:!0,shareEl:!1},g=new PhotoSwipe(a,PhotoSwipeUI_Default,e,s);g.init()};$("[data-gallery]").on("click",function(i){i.preventDefault();var n=$(this).data("gallery");switch(console.log(n),n){case"robertson":r(e);break;case"dinosaurProvincialPark":r(a);break;case"gns":r(s);break;case"newMexico":r(g);break;case"museu":r(c)}})}();