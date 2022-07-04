import * as React from "react";
import { Admin, Resource, Title } from "react-admin";
import { UserList, UserShow } from "./components/pages/user";
import { VolunteerList, VolunteerShow } from "./components/pages/volunteer";
import {
  OrganizationList,
  OrganizationShow,
  OrganizationEdit,
} from "./components/pages/organization";
import { OrderList, OrderShow } from "./components/pages/order";
import { HistoryList, HistoryShow } from "./components/pages/history";
import { theme } from "./theme/theme";
import { firebaseConfig as config } from "./FIREBASE_CONFIG";
import {
  FirebaseDataProvider,
  FirebaseAuthProvider,
} from "react-admin-firebase";
import { CustomLayout } from "./layout/customlayout.jsx";
import Dashboard from "./components/pages/dashboard.jsx";
import PersonSharpIcon from "@mui/icons-material/PersonSharp";
// const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");
const options = {
  logging: true,
  rootRef: "root_collection/user",
};
const dataProvider = FirebaseDataProvider(config);
const authProvider = FirebaseAuthProvider(config, options);
const myAuthProvider = {
  // Copy all authprovider functionality
  ...authProvider,
  // Wrap the login and check for custom claims
  login: async (params) => {
    const user = await authProvider.login(params);
    // console.log(user);
    // getPermissions is how when get the custom claims for the logged in user
    const claims = await authProvider.getPermissions();
    console.log(claims);
    // const isAdmin = Array.isArray(claims) && claims.includes("admin");ya
    if (claims.user_id === process.env.REACT_APP_ADMIN_ID) {
      return user;
    }
    // Make sure user is logged out, if not an admin
    await authProvider.logout();
    throw new Error("Login error, invalid permissions");
  },
};
// console.log(dataProvider.getList());
const App = () => (
  <Admin
    authProvider={myAuthProvider}
    dataProvider={dataProvider}
    theme={theme}
    layout={CustomLayout}
    dashboard={Dashboard}
  >
    <Resource
      name="user"
      options={{ label: "Users" }}
      icon={PersonSharpIcon}
      list={UserList}
      show={UserShow}
    />
    <Resource
      name="orgnization"
      options={{ label: "Organizations" }}
      list={OrganizationList}
      show={OrganizationShow}
      edit={OrganizationEdit}
    />
    <Resource
      name="volunteer"
      options={{ label: "Volunteer" }}
      icon={PersonSharpIcon}
      list={VolunteerList}
      show={VolunteerShow}
    />
    <Resource
      name="order"
      options={{ label: "Donations" }}
      list={OrderList}
      show={OrderShow}
    />
    <Resource
      name="history"
      options={{ label: "History" }}
      list={HistoryList}
      show={HistoryShow}
    />
  </Admin>
);
export default App;
