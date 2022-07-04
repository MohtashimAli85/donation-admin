import * as React from "react";
import { DashboardMenuItem, Menu, MenuItemLink } from "react-admin";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import PeopleIcon from "@mui/icons-material/People";
import HistoryIcon from "@mui/icons-material/History";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";

export const CustomMenu = (props) => (
  <Menu {...props}>
    <DashboardMenuItem />
    <MenuItemLink to="/user" primaryText="Users" leftIcon={<PeopleIcon />} />
    <MenuItemLink
      to="/volunteer"
      primaryText="Volunteers"
      leftIcon={<DeliveryDiningIcon />}
    />
    <MenuItemLink
      to="/orgnization"
      primaryText="Organizations"
      leftIcon={<CorporateFareIcon />}
    />
    <MenuItemLink
      to="/order"
      primaryText="Donations"
      leftIcon={<VolunteerActivismIcon />}
    />
    <MenuItemLink
      to="/history"
      primaryText="History"
      leftIcon={<HistoryIcon />}
    />
  </Menu>
);
