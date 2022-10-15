import {    ReferenceField,    Edit,    BooleanInput,    NumberInput,    ReferenceInput,    RichTextField,    Show,    SimpleShowLayout,    List,    Datagrid,    ImageField,    TextField,    DateField,    BooleanField,    Create,    SimpleForm,    TextInput,    required,    ImageInput,    SelectInput,    DeleteButton,    ArrayInput,    SimpleFormIterator,    FormDataConsumer,    Labeled,    useGetOne,    CloneButton} from 'react-admin';import React from "react";import GetOne from "../components/GetOne/GetOne";import ImageInputCustom from "../components/Inputs/ImageInputCustom/ImageInputCustom";export const PostList = () => (    <List>        <Datagrid rowClick="edit" >            <TextField source="id" />            <TextField source="title" />            <TextField source="regular_price" />            <TextField source="sale_price" />            <BooleanField source="is_published" />            <ReferenceField source="category_id" reference="products/category" >                <TextField source="title" />            </ReferenceField>            <TextField source="slug" />            <CloneButton/>            <DeleteButton/>        </Datagrid>    </List>);export const ProductEdit = () => (    <Edit>        <SimpleForm>            <GetOne/>            <TextInput source="id" />            <TextInput source="title" sx={{width: '400px'}}/>            <TextInput source="title_ru" sx={{width: '400px'}}/>            <TextInput source="title_en" sx={{width: '400px'}}/>            <TextInput source="title_kg" sx={{width: '400px'}}/>            <TextInput source="title_tr" sx={{width: '400px'}}/>            <TextInput source="description" minRows={3}/>            <TextInput source="description_ru" />            <TextInput source="description_en" />            <TextInput source="description_kg" />            <TextInput source="description_tr" />            <TextInput source="brand" />            <ImageInputCustom source='image'/>            <TextInput source="regular_price" />            <TextInput source="sale_price" />            <NumberInput source="stock" />            <ReferenceInput source="category_id" reference="products/category">                <SelectInput optionText="title" />            </ReferenceInput>            <TextInput source="created" />            <TextInput source="updated" />            <BooleanInput source="is_published" />            <TextInput source="slug" />        </SimpleForm>    </Edit>);export const PostCreate = () => (    <Create>        <SimpleForm>            <TextInput source="title" validate={[required()]} fullWidth  name={'title'}/>            <TextInput source="description" multiLine={true} label="Short description"  name={'desc'}/>            <ImageInputCustom source='image'/>            <ReferenceInput source="category_id" reference="products/category" name={'category_id'}>                <SelectInput optionText="title" />            </ReferenceInput>            <BooleanInput name={'is_published'} source="is_published" />        </SimpleForm>    </Create>);export const PostShow = () => (    <Show>        <SimpleShowLayout>            <TextField source="title" />            <TextField source="teaser" />            <RichTextField source="body" />            <DateField label="Publication date" source="published_at" />        </SimpleShowLayout>    </Show>);