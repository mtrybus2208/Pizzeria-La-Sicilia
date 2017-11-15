 const mapObj = (function(){
  /* cache DOM elements */
  const $map = document.querySelector('.gmap');
  const uluru = {lat: 54.352133, lng: 18.651209};
  const displayCorrection = {lat: 54.352733, lng: 18.651209}
  /* Create Map styles JSON */
  const mapStyles = [{"featureType":"all","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#dfcc90"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"color":"#dfcc90"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"landscape","elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"color":"#dfcc90"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#dfcc90"},{"lightness":17}]}];
  /* Init Map */
  const initMap = ()=> {
    const mapOptions = {
      zoom: 16,
      center: displayCorrection,
      styles: mapStyles
    }
    const map = new google.maps.Map( $map, mapOptions);
    const markerOptions = {  
      position: uluru,
      map: map,  
      icon: './../../images/marker5.png', 
    }
    const marker = new google.maps.Marker(markerOptions);      
  }
  /* Return object with initMap function */
  return {
    initMap: initMap
  }
})()
/* Create initMap function as global variable reference */ 
window.initMap = mapObj.initMap;