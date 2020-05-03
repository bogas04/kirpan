// DOM constants
const $query = $('input[name="query"]');
const $geoLocationButton = $(".geo-location");
const $results = $(".search-results");

// Event listeners
function onGeoLocation() {
  const {
    getLocation,
    API_URL,
    transformGeoParams,
    transformResponseToCountry,
  } = util.geo;

  const previousValue = $geoLocationButton.innerText;
  $geoLocationButton.innerText = "Detecting...";

  getLocation()
    .then(({ coords: { latitude, longitude } }) =>
      fetch(`${API_URL}?${transformGeoParams(latitude, longitude)}`)
    )
    .then((r) => r.json())
    .then(transformResponseToCountry)
    .then(({ state, country }) => {
      $geoLocationButton.innerText = previousValue;
      $query.value = country;
      onQueryInput(country);
    })
    .catch(console.error);
}

function onQueryInput(query = "") {
  const value = this.value || query;
  const newQueryParams = `?q=${value}`;
  history.pushState({ path: newQueryParams }, "", newQueryParams);
  const data = getData(value);

  $results.innerHTML = "";

  if (data.length > 0) {
    data.forEach(([country, info]) =>
      $results.appendChild(
        h("div", {}, [
          h("h2", {}, [
            h(
              "small",
              {
                title:
                  info.maybe === true
                    ? "Maybe"
                    : info.allowed
                    ? "Allowed"
                    : "Not allowed",
              },
              info.maybe === true ? "?" : info.allowed ? "✓" : "✗"
            ),
            info.formalName,
          ]),
          h(
            "ul",
            { style: "list-style: none" },
            info.laws.map(([law, source]) =>
              h("li", {}, [
                h("blockquote", {}, law.trim()),
                h("a", { href: source }, "Source"),
              ])
            )
          ),
        ])
      )
    );
  } else {
    const url = [
      `https://github.com/bogas04/SikhJS/issues/new?`,
      `title=${encodeURIComponent("Add information for " + value)}&`,
      `body=${encodeURIComponent("<!-- Add information here -->")}`,
    ].join("");

    $results.appendChild(
      h(
        "h4",
        {},
        `
      Sorry, we don't have information regarding <code>${value}</code>.
      Provide <a href="${url}" target="_blank">here</a>.
    `
      )
    );
  }

  $(".form").scrollIntoView();
}

// Attach event listeners
$geoLocationButton.addEventListener("click", onGeoLocation);
["change", "input"].forEach((event) =>
  $query.addEventListener(event, onQueryInput)
);

// Init
init();

// Service Worker Registeration
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("sw.js", { scope: "./" })
    .then((reg) => console.log("Registration succeeded. Scope is " + reg.scope))
    .catch(console.error);
}

function init() {
  $query.value = new URLSearchParams(window.location.search).get("q") || "";
  if ($query.value) {
    onQueryInput($query.value);
  }
  $query.focus();
}
