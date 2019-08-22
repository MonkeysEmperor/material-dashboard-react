/*!

=========================================================
* Material Dashboard React - v1.7.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// Getting started
import Tutorial from "layouts/Documentation/Sections/Tutorial.jsx";
import RoutingSystem from "layouts/Documentation/Sections/RoutingSystem.jsx";
import Variables from "layouts/Documentation/Sections/Variables.jsx";
import Styles from "layouts/Documentation/Sections/Styles.jsx";
import LintCommands from "layouts/Documentation/Sections/LintCommands.jsx";
import BuildTools from "layouts/Documentation/Sections/BuildTools.jsx";

// Components
import Buttons from "layouts/Documentation/Sections/Buttons.jsx";
import Cards from "layouts/Documentation/Sections/Cards.jsx";
import CheckboxRadio from "layouts/Documentation/Sections/CheckboxRadio.jsx";
import Dropdown from "layouts/Documentation/Sections/Dropdown.jsx";
import Icons from "layouts/Documentation/Sections/Icons.jsx";
import Inputs from "layouts/Documentation/Sections/Inputs.jsx";
import Navigation from "layouts/Documentation/Sections/Navigation.jsx";
import Notifications from "layouts/Documentation/Sections/Notifications.jsx";
import Sidebar from "layouts/Documentation/Sections/Sidebar.jsx";
import Tables from "layouts/Documentation/Sections/Tables.jsx";
import Tabs from "layouts/Documentation/Sections/Tabs.jsx";
import Tasks from "layouts/Documentation/Sections/Tasks.jsx";
import Typography from "layouts/Documentation/Sections/Typography.jsx";
import Tooltips from "layouts/Documentation/Sections/Tooltips.jsx";

// Plugins
import GoogleMaps from "layouts/Documentation/Sections/GoogleMaps.jsx";

const docsRoutes = [
  {
    name: "Getting started",
    path: "/documentation/tutorial",
    routes: [
      {
        path: "/documentation/tutorial",
        name: "Tutorial",
        component: Tutorial
      },
      {
        path: "/documentation/routing-system",
        name: "RoutingSystem",
        component: RoutingSystem
      },
      {
        path: "/documentation/variables",
        name: "Variables",
        component: Variables
      },
      { path: "/documentation/styles", name: "Styles", component: Styles },
      {
        path: "/documentation/lint-commands",
        name: "Lint",
        component: LintCommands
      },
      {
        path: "/documentation/build-tools",
        name: "Build Tools",
        component: BuildTools
      }
    ]
  },
  {
    name: "Components",
    path: "/documentation/buttons",
    routes: [
      { path: "/documentation/buttons", name: "Buttons", component: Buttons },
      { path: "/documentation/cards", name: "Cards", component: Cards },
      {
        path: "/documentation/checkbox-radio",
        name: "CheckboxRadio",
        component: CheckboxRadio
      },
      {
        path: "/documentation/dropdown",
        name: "Dropdown",
        component: Dropdown
      },
      { path: "/documentation/icons", name: "Icons", component: Icons },
      { path: "/documentation/inputs", name: "Inputs", component: Inputs },
      {
        path: "/documentation/navigation",
        name: "Navigation",
        component: Navigation
      },
      {
        path: "/documentation/notifications",
        name: "Notifications",
        component: Notifications
      },
      { path: "/documentation/sidebar", name: "Sidebar", component: Sidebar },
      { path: "/documentation/tables", name: "Tables", component: Tables },
      { path: "/documentation/tabs", name: "Tabs", component: Tabs },
      { path: "/documentation/tasks", name: "Tasks", component: Tasks },
      {
        path: "/documentation/tooltips",
        name: "Tooltips",
        component: Tooltips
      },
      {
        path: "/documentation/typography",
        name: "Typography",
        component: Typography
      }
    ]
  },
  {
    name: "Plugins",
    path: "/documentation/charts",
    routes: [
      {
        path: "/documentation/google-maps",
        name: "GoogleMaps",
        component: GoogleMaps
      }
    ]
  },
  { redirect: true, path: "/documentation", pathTo: "/documentation/tutorial" }
];

export default docsRoutes;