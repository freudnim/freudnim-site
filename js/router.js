/** credits:
 * https://dev.to/thedevdrawer/single-page-application-routing-using-hash-or-url-9jha
 * https://blog.pshrmn.com/how-single-page-applications-work/
 * https://fontawesomeicons.com/svg/icons/twitter
 * */
const routes = {
  "/": {
    template: "/templates/index.html",
  },
  "/pricing": {
    template: "/templates/pricing.html",
  },
  "/tos": {
    template: "/templates/tos.html",
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

const idToFolders = {
  emotes: { count: 18, path: "imgs/emotes", class: "emote", isAnimated: false },
  "animated-emotes": {
    count: 42,
    path: "imgs/animated_emotes",
    class: "emote",
    isAnimated: true,
  },
  stickers: {
    count: 8,
    path: "imgs/animated_stickers",
    class: "sticker",
    isAnimated: true,
  },
  panels: {
    count: 12,
    path: "imgs/panels",
    class: "panel",
    isAnimated: false,
  },
  halfbody: {
    count: 9,
    path: "imgs/halfbody",
    class: "illustration",
    isAnimated: false,
    reverseOrder: true,
  },
  fullbody: {
    count: 1,
    path: "imgs/fullbody",
    class: "illustration",
    isAnimated: false,
  },
  refsheets: {
    count: 3,
    path: "imgs/refsheets",
    class: "illustration",
    isAnimated: false,
  },
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

  // dynamically add all images
  for (const [id, entry] of Object.entries(idToFolders)) {
    addImagesFromFolderToId(id, entry);
  }

  // allow for horizontal scrolling in illustrations
  const scrollContainers = document.querySelectorAll(".carousel");
  for (let i = 0; i < scrollContainers.length; i++) {
    const container = scrollContainers[i];
    container.addEventListener("wheel", (evt) => {
      evt.preventDefault();
      container.scrollLeft += evt.deltaY;
    });
  }
};

function addImagesFromFolderToId(id, entry) {
  // This only works locally.
  // const { path, type } = entry;
  // $.ajax({
  //   url: path,
  //   success: function (data) {
  //     $(data)
  //       .find("a")
  //       .attr("href", function (i, val) {
  //         if (val.match(/\.(jpe?g|png|gif)$/)) {
  //           $(`#${id}`).append(`<img src=${val} class=${type} >`);
  //         }
  //       });
  //   },
  // });
  const parent = document.getElementById(id);
  for (let i = 1; i <= entry.count; i++) {
    var img = document.createElement("img");
    img.src = `${entry.path}\\${i}.${entry.isAnimated ? "gif" : "png"}`;
    img.className = `${entry.class}`;
    var child = img;
    if (entry.class === "illustration") {
      var slide = document.createElement("div");
      slide.className = "slide";
      slide.appendChild(img);
      child = slide;
    }
    if (entry.reverseOrder) {
      parent.prepend(child);
    } else {
      parent.appendChild(child);
    }
  }
}

// add an event listener to the window that watches for url changes
window.onpopstate = locationHandler;
// call the urlLocationHandler function to handle the initial url
window.route = route;
// call the urlLocationHandler function to handle the initial url
locationHandler();
