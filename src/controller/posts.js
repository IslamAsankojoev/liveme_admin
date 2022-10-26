import {
    ReferenceField,
    Edit,
    BooleanInput,
    NumberInput,
    ReferenceInput,
    RichTextField,
    Show,
    SimpleShowLayout,
    List,
    Datagrid,
    TextField,
    DateField,
    BooleanField,
    Create,
    TextInput,
    SelectInput,
    DeleteButton,
    CloneButton,
    TabbedForm,
    FormTab, useRedirect, ImageField
} from 'react-admin';
import React from "react";
import ImageInputCustom from "../components/Inputs/ImageInputCustom/ImageInputCustom";
import { useLocation, useParams } from "react-router-dom";
import CustomCreateUpdate from "../components/CustomCreateUpdate/CustomCreateUpdate";
import CustomFilterSearch from '../components/CustomFilterSearch/CustomFilterSearch';
import FlagImage from '../components/FlagImage/FlagImage';



export const PostList = () => (
    <List filters={CustomFilterSearch}>
        <Datagrid rowClick="edit" >
            <TextField source="id" />
            <TextField source="title" />
            <ImageField source="image" />
            <TextField source="regular_price" />
            <TextField source="sale_price" />
            <BooleanField source="is_published" />
            <ReferenceField source="category" reference="products/category">
                <TextField source="title" />
            </ReferenceField>
            <TextField source="slug" />
            <CloneButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export const ProductEdit = () => {
    const location = useLocation();
    const redirect = useRedirect();
    const { id } = useParams();

    return (
        <Edit>
            <TabbedForm onSubmit={(data) => { CustomCreateUpdate(location, data, redirect, '/products', id) }}>
                <FormTab label={<FlagImage flag={'ru'} tab="Russian" />}>
                    <TextInput source="title_ru" sx={{ width: '400px' }} />
                    <TextInput source="description_ru" />
                </FormTab>
                <FormTab label={<FlagImage flag={'us'} tab="English" />}>
                    <TextInput source="title_en" sx={{ width: '400px' }} />
                    <TextInput source="description_en" />
                </FormTab>
                <FormTab label={<FlagImage flag={'kg'} tab="Kyrgyz" />}>
                    <TextInput source="title_kg" sx={{ width: '400px' }} />
                    <TextInput source="description_kg" />
                </FormTab>
                <FormTab label={<FlagImage flag={'tr'} tab="Turkish" />}>
                    <TextInput source="title_tr" sx={{ width: '400px' }} />
                    <TextInput source="description_tr" />
                </FormTab>
                <FormTab label={<FlagImage flag={'pl'} tab="Polish" />}>
                    <TextInput source="title_pl" sx={{ width: '400px' }} />
                    <TextInput source="description_pl" />
                </FormTab>
                <FormTab label="Details">
                    <TextField source="id" />
                    <ImageInputCustom source="image" />
                    <TextInput source="regular_price" />
                    <TextInput source="sale_price" />
                    <NumberInput source="stock" />
                    <ReferenceInput source="category" reference="products/category">
                        <SelectInput optionText="title" />
                    </ReferenceInput>
                    <TextInput source="created" />
                    <TextInput source="updated" />
                    <BooleanInput source="is_published" />
                    <TextInput source="slug" />
                </FormTab>

            </TabbedForm>

        </Edit>
    )
};
export const PostCreate = () => {
    const location = useLocation();
    const redirect = useRedirect();
    const { id } = useParams();
    return (
        <Create>
            <TabbedForm onSubmit={(data) => { CustomCreateUpdate(location, data, redirect, '/products', id) }}>
                <FormTab label={<FlagImage flag={'ru'} tab="Russian" />}>
                    <TextInput source="title_ru" sx={{ width: '400px' }} />
                    <TextInput source="description_ru" />
                </FormTab>
                <FormTab label={<FlagImage flag={'us'} tab="English" />}>
                    <TextInput source="title_en" sx={{ width: '400px' }} />
                    <TextInput source="description_en" />
                </FormTab>
                <FormTab label={<FlagImage flag={'kg'} tab="Kyrgyz" />}>
                    <TextInput source="title_kg" sx={{ width: '400px' }} />
                    <TextInput source="description_kg" />
                </FormTab>
                <FormTab label={<FlagImage flag={'tr'} tab="Turkish" />}>
                    <TextInput source="title_tr" sx={{ width: '400px' }} />
                    <TextInput source="description_tr" />
                </FormTab>
                <FormTab label={<FlagImage flag={'pl'} tab="Polish" />}>
                    <TextInput source="title_pl" sx={{ width: '400px' }} />
                    <TextInput source="description_pl" />
                </FormTab>
                <FormTab label="Details">
                    <TextField source="id" />
                    <ImageInputCustom source="image" />
                    <TextInput source="regular_price" />
                    <TextInput source="sale_price" />
                    <NumberInput source="stock" />
                    <ReferenceInput source="category" reference="products/category">
                        <SelectInput optionText="title" />
                    </ReferenceInput>
                    <BooleanInput source="is_published" defaultValue={true} />
                    <TextInput source="slug" />
                </FormTab>

            </TabbedForm>
        </Create>
    )
};

export const PostShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="title" />
            <TextField source="teaser" />
            <RichTextField source="body" />
            <DateField label="Publication date" source="published_at" />
        </SimpleShowLayout>
    </Show>
);
