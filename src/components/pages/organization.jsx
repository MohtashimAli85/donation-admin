import * as React from "react";
import {
  Datagrid,
  List,
  Show,
  SimpleShowLayout,
  TextField,
  EmailField,
  TextInput,
  ShowButton,
  DeleteButton,
  BooleanField,
  UrlField,
  Edit,
  SimpleForm,
  BooleanInput,
  EditButton,
} from "react-admin";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { ToolBar } from "../ui/toolbar";
const organizationFilter = [
  <TextInput label="Search" source="name" alwaysOn />,
  <BooleanInput label="Status" source="status" />,
  // <TextInput label="Status" source="status" defaultValue="default" />,
];
export const OrganizationList = (props) => (
  <div className="mt-7">
    <List {...props} exporter={false} actions={null}>
      <ToolBar filters={organizationFilter} addFilter={true} />
      <Datagrid rowClick="show">
        <TextField source="uid" />
        <TextField source="name" />
        <EmailField source="email" />
        <BooleanField source="status" label="Status" />
        <ShowButton label="" />
        <EditButton />
        <DeleteButton label="" redirect={false} />
      </Datagrid>
    </List>
  </div>
);
export const OrganizationShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="uid" label="Id" />
      <TextField source="name" label="Name" />
      {/* <TextInput source="Organization Name" /> */}
      <BooleanField source="status" label="Status" TrueIcon={CheckCircleIcon} />
      <TextField source="cnic" label="CNIC" />
      <TextField source="phone" label="Phone" />
      <EmailField source="email" label="Email" />
      <UrlField source="doc" label="Document" />
    </SimpleShowLayout>
  </Show>
);
export const OrganizationEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      {/* <ReferenceInput source="uid" options={{ disabled: true }} /> */}
      <BooleanInput source="status" label="Status" />
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
