const bgLoader = (element, url, className) => {
  let loaded = false;
  const image = new Image();
  /* Show bg image when is loaded */
  image.onload = function () {
    loaded = true;
    element.style.backgroundImage = `url(${url})`;
    element.classList.remove(className);
  }
  image.src = url; 
}

export default bgLoader;