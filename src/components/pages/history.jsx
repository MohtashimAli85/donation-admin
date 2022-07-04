import * as React from "react";
import {
  Datagrid,
  List,
  Show,
  SimpleShowLayout,
  TextField,
  TextInput,
  ShowButton,
  DeleteButton,
} from "react-admin";
import { ToolBar } from "../ui/toolbar";
const historyFilter = [
  <TextInput label="Search" source="donation_method" alwaysOn />,
  <TextInput label="Status" source="status" defaultValue="accepted" />,
];
export const HistoryList = (props) => (
  <div className="mt-7">
    <List {...props} actions={null} exporter={false}>
      <ToolBar filters={historyFilter} />
      <Datagrid rowClick="show">
        <TextField source="order_id" label="Order Id" />
        <TextField source="donation_method" label="Donation Method" />{" "}
        <TextField source="status" label="Status" />
        <TextField source="donor_pickUpDate" label="Pick up Date" />
        <TextField source="donor_pickUpTime" label="Pick up Time" />
        <ShowButton label="" />
        <DeleteButton label="" redirect={false} />
      </Datagrid>
    </List>
  </div>
);
export const HistoryShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="order_id" label="Order Id" />
      <TextField source="donation_method" label="Donation Method" />
      <TextField source="donor_pickUpDate" label="Pick up Date" />
      <TextField source="donor_pickUpTime" label="Pick up Time" />
      <TextField source="donor_name" label="Donor Name" />
      <TextField source="donor_phone" label="Donor Phone" />
      <TextField source="volunteer_id" label="Volunteer Id" />
    </SimpleShowLayout>
  </Show>
);
// export const HistoryEdit = (props) => (
//   <Edit {...props}>
//     <SimpleForm>
//       {/* <ReferenceInput source="uid" options={{ disabled: true }} /> */}
//       <TextInput source="id" disabled label="Id" />
//       <TextInput source="name" />
//       <TextInput source="cnic" />
//       <TextInput source="phone" />
//       <TextInput source="email" />
//     </SimpleForm>
//   </Edit>
// );
// export const HistoryCreate = (props) => (
//   <Create {...props}>
//     <SimpleForm>
//       <TextInput source="name" />
//       <TextInput source="History Name" />
//       <TextInput source="cnic" />
//       <TextInput source="phone" />
//       <TextInput source="email" />
//     </SimpleForm>
//   </Create>
// );
