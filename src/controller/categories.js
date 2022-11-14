import {
    Edit,
    BooleanInput,
    NumberInput,
    Show,
    SimpleShowLayout,
    List,
    Datagrid,
    ImageField,
    TextField,
    BooleanField,
    Create,
    SimpleForm,
    TextInput,
    NumberField,
    DeleteButton,
    CloneButton,
    useRedirect
} from 'react-admin';
import { useLocation, useParams } from 'react-router-dom';
import * as React from "react";
import ImageInputCustom from "../components/Inputs/ImageInputCustom/ImageInputCustom";
import PaginationCustom from "../components/PaginationCustom/PaginationCustom";
import CustomToolbar from '../components/CustomToolbar/CustomToolbar';
import CustomCreateUpdate from "../components/CustomCreateUpdate/CustomCreateUpdate";
import FlagImage from '../components/FlagImage/FlagImage'
import CustomFilterSearch from '../components/CustomFilterSearch/CustomFilterSearch';

export const CategoryList = () => (
    <List perPage={10} pagination={<PaginationCustom />} filters={CustomFilterSearch} queryOptions={{ refetchInterval: 5000 }}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="title" />
            <ImageField source="image" />
            <TextField source="updated" />
            <TextField source="created" />
            <BooleanField source="is_published" />
            <NumberField source="count" />
            <CloneButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export const CategoryEdit = () => {
    const location = useLocation();
    const redirect = useRedirect();
    const { id } = useParams();
    return (
        <Edit>
            <SimpleForm toolbar={<CustomToolbar />} onSubmit={(data) => { CustomCreateUpdate(location, data, redirect, '/products/category', id) }}>
                <TextInput source="id" />
                <TextInput source="title_ru" label={<FlagImage flag={'ru'} title />} />
                <TextInput source="title_en" label={<FlagImage flag={'us'} title />} />
                <TextInput source="title_kg" label={<FlagImage flag={'kg'} title />} />
                <TextInput source="title_tr" label={<FlagImage flag={'tr'} title />} />
                <TextInput source="title_pl" label={<FlagImage flag={'pl'} title />} />
                <ImageInputCustom source="image" />
                <TextInput source="updated" />
                <TextInput source="created" />
                <BooleanInput source="is_published" />
                <NumberInput source="count" disabled={true} />
            </SimpleForm>
        </Edit>
    )
};
export const CategoryCreate = () => {
    const location = useLocation();
    const redirect = useRedirect();
    const { id } = useParams();
    return (
        <Create>
            <SimpleForm toolbar={<CustomToolbar />} onSubmit={(data) => { CustomCreateUpdate(location, data, redirect, '/products/category', id) }}>
                <TextInput source="title_ru" label={<FlagImage flag={'ru'} title />} />
                <TextInput source="title_en" label={<FlagImage flag={'us'} title />} />
                <TextInput source="title_kg" label={<FlagImage flag={'kg'} title />} />
                <TextInput source="title_tr" label={<FlagImage flag={'tr'} title />} />
                <TextInput source="title_pl" label={<FlagImage flag={'pl'} title />} />
                <ImageInputCustom source="image" />
            </SimpleForm>
        </Create>
    )
};

export const CategoryShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="title" />
            <ImageField source="image" />
            <BooleanField source="is_published" />
        </SimpleShowLayout>
    </Show>
);
