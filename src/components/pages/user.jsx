import * as React from "react";
import {
  Datagrid,
  List,
  Show,
  TextField,
  BooleanField,
  EmailField,
  TextInput,
  ShowButton,
  DeleteButton,
  Labeled,
  useResourceContext,
  useListContext,
  FunctionField,
} from "react-admin";
import { ToolBar } from "../ui/toolbar";
const userFilter = [
  <TextInput label="Search" source="name" alwaysOn />,
  <TextInput label="Gender" source="gender" defaultValue="male" />,
];
// const ResourceName = () => {
//   const resource = useResourceContext();
//   const { data, isLoading } = useListContext();
//   if (isLoading) return null;
//   return <>{+data + resource}</>;
// };
export const UserList = (props) => {
  return (
    <div className="mt-7">
      <List exporter={false} actions={null} {...props}>
        <ToolBar filters={userFilter} />
        <Datagrid rowClick="show">
          <TextField source="id" />
          <TextField source="name" />
          <TextField source="gender" />
          <FunctionField
            label="Location"
            render={(record) => `${record.latitude} - ${record.longitude}`}
          />
          <EmailField source="email" />

          {/* <TextField source="website" /> */}
          {/* <TextField source="company.name" /> */}
          <ShowButton label="" />
          <DeleteButton label="" redirect={false} />
        </Datagrid>
      </List>
    </div>
  );
};
export const UserShow = (props) => (
  <Show {...props}>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-5 gap-5 sm:gap-0">
      <Labeled>
        <TextField source="uid" label="UID" />
      </Labeled>
      <Labeled>
        <TextField source="name" label="Name" />
      </Labeled>
      <Labeled>
        <TextField source="gender" />
      </Labeled>
      <Labeled>
        <BooleanField source="isDonor" label="Donor" />
      </Labeled>
      <Labeled>
        <TextField source="age" />
      </Labeled>
      <Labeled>
        <TextField source="bloodGroup" />
      </Labeled>
      <Labeled>
        <EmailField source="email" />
      </Labeled>
    </div>
  </Show>
);
// export const UserEdit = (props) => (
//   <Edit {...props}>
//     <SimpleForm>
//       {/* <ReferenceInput source="uid" options={{ disabled: true }} /> */}
//       <TextInput source="uid" disabled label="Id" />
//       <TextInput source="name" />
//       <TextInput source="gender" />
//       <BooleanInput source="isDonor" />
//       <TextInput source="age" />
//       <TextInput source="bloodGroup" />
//       <TextInput source="email" />
//     </SimpleForm>
//   </Edit>
// );
// export const UserCreate = (props) => (
//   <Create {...props}>
//     <SimpleForm>
//       <TextInput source="name" />
//       <TextInput source="gender" />
//       <BooleanInput source="isDonor" />
//       <TextInput source="age" />
//       <TextInput source="bloodGroup" />
//       <TextInput source="email" />
//     </SimpleForm>
//   </Create>
// );
