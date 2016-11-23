// Poor man's jQuery
const $ = document.querySelector.bind(document);

// Poor man's React
const h = (type, attributes = {}, children) => {
  let $node = document.createElement(type);
  Object.keys(attributes).forEach(e => (typeof attributes[e] === 'function')
    ? $node.addEventListener(e, attributes[e], false)
    : $node.setAttribute(e, attributes[e])
  );
  if (typeof children === 'string') {
    $node.innerHTML = children;
  } else if (Array.isArray(children)) {
    children.forEach(e => typeof e === 'string' ? ($node.innerHTML += e) : $node.appendChild(e));
  }
  return $node;
}

const util = {
  geo: {
    API_URL: 'https://nominatim.openstreetmap.org/reverse',
    transformGeoParams(lat, lng) {
      return `format=json&accept-language=en-us&lat=${lat}&lon=${lng}`;
    },
    transformResponseToCountry({ address }) {
      return address;
    },
    getLocation() {
      return new Promise(resolve => navigator.geolocation.getCurrentPosition(resolve));
    },
  }
};