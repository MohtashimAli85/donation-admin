import * as React from "react";
import {
  Datagrid,
  List,
  Show,
  TextField,
  EmailField,
  TextInput,
  ShowButton,
  DeleteButton,
  Labeled,
  useResourceContext,
  useListContext,
} from "react-admin";
import { ToolBar } from "../ui/toolbar";
const volunteerFilter = [<TextInput label="Search" source="name" alwaysOn />];
const ResourceName = () => {
  const resource = useResourceContext();
  const { data, isLoading } = useListContext();
  if (isLoading) return null;
  return <>{+data + resource}</>;
};
export const VolunteerList = (props) => {
  return (
    <div className="mt-7">
      <ResourceName pew={props} />
      <List exporter={false} actions={null} {...props}>
        <ToolBar filters={volunteerFilter} />
        <Datagrid rowClick="show">
          <TextField source="uid" label="UID" />
          <TextField source="name" />

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
export const VolunteerShow = (props) => (
  <Show {...props}>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-5 gap-5 sm:gap-0">
      <Labeled>
        <TextField source="uid" label="UID" />
      </Labeled>
      <Labeled>
        <TextField source="name" label="Name" />
      </Labeled>

      <Labeled>
        <EmailField source="email" />
      </Labeled>
    </div>
  </Show>
);
