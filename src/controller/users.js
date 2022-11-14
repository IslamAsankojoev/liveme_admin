import {
    Edit,
    EmailField,
    SimpleForm,
    TextInput,
    Create,
    Show,
    SimpleShowLayout,
    TextField,
    Datagrid,
    List,
    PasswordInput,
    EditButton,
    DeleteButton,
    ReferenceArrayField,
    BooleanField,
    SelectInput,
    ReferenceInput,
    FunctionField,
    ImageField,
    required
} from 'react-admin';
import * as React from "react";
import PaginationCustom from "../components/PaginationCustom/PaginationCustom";
import CustomFilterSearch from '../components/CustomFilterSearch/CustomFilterSearch';
import countries from '../utils/countries';

export const UserList = () => (
    <List perPage={10} pagination={<PaginationCustom />} filters={CustomFilterSearch}>
        <Datagrid >
            <TextField source="id" />
            <TextField source="username" />
            <EmailField source="email" />
            <TextField source="address" />
            <FunctionField
                label="Country"
                render={record => {
                    const country = countries.find((item) => item.code === record.country);
                    return country ? country.name : '';
                }}
            />;
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export const UserEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="first_name" />
            <TextInput source="last_name" />
            <TextInput source="username" />
            <TextInput source="email" validate={[required()]} />
            <TextInput source="address" />
            <SelectInput source="country" choices={countries} optionText="name"
                optionValue="code" />
            <PasswordInput source="password" />
            <ReferenceArrayField reference="orders" source="order_set">
                <Datagrid >
                    <TextField source="id" />
                    <TextField source="created" />
                    <TextField source="updated" />
                    <TextField source="client_email" />
                    <TextField source="client_address" />
                    <TextField source="client_phone" />
                    <TextField source="client_name" />
                    <TextField source="payment_method" />
                    <TextField source="order_status" />
                    <BooleanField source="is_published" />
                    <EditButton />
                    <DeleteButton />
                </Datagrid>
            </ReferenceArrayField>
        </SimpleForm>
    </Edit>
);

export const UserCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="first_name" />
            <TextInput source="last_name" />
            <TextInput source="username" />
            <TextInput source="email" validate={[required()]} />
            <TextInput source="address" />
            <SelectInput source="country" choices={countries} optionText="name"
                optionValue="code" />
            <PasswordInput source="password" />
        </SimpleForm>
    </Create>
);


export const UserShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="first_name" />
            <TextField source="last_name" />
            <TextField source="username" />
            <EmailField source="email" />
            <TextField source="address" />
            <TextField source="password" />
        </SimpleShowLayout>
    </Show>
);


