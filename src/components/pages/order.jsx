import * as React from "react";
import {
  Datagrid,
  Show,
  Edit,
  SimpleShowLayout,
  SimpleForm,
  TextField,
  EmailField,
  TextInput,
  ShowButton,
  RichTextField,
  DeleteButton,
  List,
  // CreateButton,
} from "react-admin";
import { ToolBar } from "../ui/toolbar";

const orderFilters = [
  <TextInput label="Search" source="q" alwaysOn />,
  <TextInput label="Status" source="status" defaultValue="default" />,
];

export const OrderList = (props) => (
  <div className="mt-7">
    <List exporter={false} actions={null}>
      <ToolBar filters={orderFilters} />
      <Datagrid rowClick="show">
        <TextField source="id" />
        <TextField source="pickUpDate" label="Pick up Date" />
        <TextField source="pickUpTime" label="Pick up Time" />
        <TextField source="status" />
        <TextField source="type" />
        <ShowButton label="" />
        <DeleteButton label="" redirect={false} />
      </Datagrid>
    </List>
  </div>
);
export const OrderShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" label="Id" />
      <TextField source="title" label="Title" />
      <RichTextField source="description" label="Description" />
      {/* <TextInput source="Organization Name" /> */}
      <TextField source="userName" label="User Name" />
      <TextField source="userPhone" label="User Phone" />
      <EmailField source="email" label="Email" />
      <TextField source="type" label="Type" />
      <TextField source="clothes" label="Clothes" />
      <TextField source="shoes" label="Shoes" />
    </SimpleShowLayout>
  </Show>
);
export const OrderEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      {/* <ReferenceInput source="uid" options={{ disabled: true }} /> */}
      <TextInput source="id" disabled label="Id" />
      <TextInput source="name" />
      <TextInput source="cnic" />
      <TextInput source="phone" />
      <TextInput source="email" />
    </SimpleForm>
  </Edit>
);
// export const OrganizationCreate = (props) => (
//   <Create {...props}>
//     <SimpleForm>
//       <TextInput source="name" />
//       <TextInput source="Organization Name" />
//       <TextInput source="cnic" />
//       <TextInput source="phone" />
//       <TextInput source="email" />
//     </SimpleForm>
//   </Create>
// );
