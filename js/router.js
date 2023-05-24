/** credits:
 * https://dev.to/thedevdrawer/single-page-application-routing-using-hash-or-url-9jha
 * https://blog.pshrmn.com/how-single-page-applications-work/
 * https://fontawesomeicons.com/svg/icons/twitter
 * */
const routes = {
  "/": {
    template: "/templates/index.html",
    // title: "Home",
    // description: "This is the home page",
  },
  "/pricing": {
    template: "/templates/pricing.html",
    // title: "About Us",
    // description: "This is the about page",
  },
  "/tos": {
    template: "/templates/tos.html",
    // title: "Contact Us",
    // description: "This is the contact page",
  },
};

const route = (event) => {
  event = event || window.event; // get window.event if event argument not provided
  event.preventDefault();
  // window.history.pushState(state, unused, target link);
  window.history.pushState({}, "", event.target.href);
  locationHandler();
};

// create document click that watches the nav links only
document.addEventListener("click", (e) => {
  const { target } = e;
  if (!target.matches("nav a")) {
    return;
  }
  e.preventDefault();
  route();
});

const idToEmoteFolders = {
  emotes: { path: "imgs/emotes", type: "emote" },
  "animated-emotes": { path: "imgs/animated_emotes", type: "emote" },
  stickers: { path: "imgs/animated_stickers", type: "sticker" },
  panels: { path: "imgs/panels", type: "panel" },
  halfbody: { path: "imgs/halfbody", type: "halfbody" },
  fullbody: { path: "imgs/fullbody", type: "fullbody" },
  refsheets: { path: "imgs/refsheets", type: "refsheet" },
};

const locationHandler = async () => {
  const location = window.location.pathname; // get the url path
  // if the path length is 0, set it to primary page route
  if (location.length == 0) {
    location = "/";
  }
  // get the route object from the urlRoutes object
  const route = routes[location] || routes["404"];
  // get the html from the template
  const html = await fetch(route.template).then((response) => response.text());
  // set the content of the content div to the html
  document.getElementById("content").innerHTML = html;
  // set the title of the document to the title of the route
  //   document.title = route.title;
  // set the description of the document to the description of the route
  //   document
  //     .querySelector('meta[name="description"]')
  //     .setAttribute("content", route.description);
  for (const [id, entry] of Object.entries(idToEmoteFolders)) {
    addImagesFromFolderToId(id, entry);
  }
};

function addImagesFromFolderToId(id, entry) {
  const { path, type } = entry;
  $.ajax({
    url: path,
    success: function (data) {
      $(data)
        .find("a")
        .attr("href", function (i, val) {
          if (val.match(/\.(jpe?g|png|gif)$/)) {
            $(`#${id}`).append(`<img src=${val} class=${type} >`);
          }
        });
    },
  });
}

// add an event listener to the window that watches for url changes
window.onpopstate = locationHandler;
// call the urlLocationHandler function to handle the initial url
window.route = route;
// call the urlLocationHandler function to handle the initial url
locationHandler();
