import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: (location) => location.pathname === "/",
});

registerApplication({
  name: "@teste/react-simple",
  app: () =>
    System.import(
      "@teste/react-simple"
    ),
  activeWhen: (location) => location.pathname == "/react-simple",
});

registerApplication({
  name: "@teste/react-multiple",
  app: () =>
    System.import(
      "@teste/react-multiple"
    ),
  activeWhen: ["/react-multiple"],
});

registerApplication({
  name: "@teste/react-parcel",
  app: () =>
    System.import(
      "@teste/react-parcel"
    ),
  activeWhen: ["/react-parcel"],
});



// registerApplication({
//   name: "@teste/navbar",
//   app: () => System.import("@teste/navbar"),
//   activeWhen: ["/"]
// });

start({
  urlRerouteOnly: true,
});
