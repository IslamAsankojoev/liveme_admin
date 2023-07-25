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
	FormTab,
	useRedirect,
	ImageField,
} from 'react-admin'
import React from 'react'
import ImageInputCustom from '../components/Inputs/ImageInputCustom/ImageInputCustom'
import { useLocation, useParams } from 'react-router-dom'
import CustomCreateUpdate from '../components/CustomCreateUpdate/CustomCreateUpdate'
import CustomFilterSearch from '../components/CustomFilterSearch/CustomFilterSearch'
import FlagImage from '../components/FlagImage/FlagImage'

export const ProductList = () => (
	<List filters={CustomFilterSearch}>
		<Datagrid rowClick="edit">
			<TextField source="id" />
			<TextField source="title" />
			<ImageField source="image" />
			<TextField source="price" />
			<TextField source="sale" />
			<BooleanField source="is_published" />
			<ReferenceField source="category" reference="products/category">
				<TextField source="title" />
			</ReferenceField>
			<CloneButton />
			<DeleteButton />
		</Datagrid>
	</List>
)

export const ProductEdit = () => {
	const location = useLocation()
	const redirect = useRedirect()
	const { id } = useParams()

	return (
		<Edit>
			<TabbedForm
				onSubmit={(data) => {
					CustomCreateUpdate(location, data, redirect, '/products', id)
				}}
			>
				<FormTab label={<FlagImage flag={'ru'} tab="Russian" />}>
					<TextInput source="title_ru" sx={{ width: '100%' }} />
					<TextInput
						source="description_ru"
						multiline
						sx={{ width: '100%' }}
						minRows={4}
					/>
					<TextInput source="price_ru" />
					<TextInput source="stock_ru" />
				</FormTab>
				<FormTab label={<FlagImage flag={'kz'} tab="Kazakhstan" />}>
					<TextInput source="title_kz" sx={{ width: '100%' }} />
					<TextInput
						source="description_kz"
						multiline
						sx={{ width: '100%' }}
						minRows={4}
					/>
					<TextInput source="price_kz" />
					<TextInput source="stock_kz" />
				</FormTab>
				<FormTab label={<FlagImage flag={'de'} tab="German" />}>
					<TextInput source="title_de" sx={{ width: '100%' }} />
					<TextInput
						source="description_de"
						multiline
						sx={{ width: '100%' }}
						minRows={4}
					/>
					<TextInput source="price_de" />
					<TextInput source="stock_de" />
				</FormTab>
				<FormTab label={<FlagImage flag={'us'} tab="English" />}>
					<TextInput source="title_en" sx={{ width: '100%' }} />
					<TextInput
						source="description_en"
						multiline
						sx={{ width: '100%' }}
						minRows={4}
					/>
					<TextInput source="price_en" />
					<TextInput source="stock_en" />
				</FormTab>
				<FormTab label={<FlagImage flag={'kg'} tab="Kyrgyz" />}>
					<TextInput source="title_kg" sx={{ width: '100%' }} />
					<TextInput
						source="description_kg"
						multiline
						sx={{ width: '100%' }}
						minRows={4}
					/>
					<TextInput source="price_kg" />
					<TextInput source="stock_kg" />
				</FormTab>
				<FormTab label={<FlagImage flag={'tr'} tab="Turkish" />}>
					<TextInput source="title_tr" sx={{ width: '100%' }} />
					<TextInput
						source="description_tr"
						multiline
						sx={{ width: '100%' }}
						minRows={4}
					/>
					<TextInput source="price_tr" />
					<TextInput source="stock_tr" />
				</FormTab>
				<FormTab label={<FlagImage flag={'pl'} tab="Polish" />}>
					<TextInput source="title_pl" sx={{ width: '100%' }} />
					<TextInput
						source="description_pl"
						multiline
						sx={{ width: '100%' }}
						minRows={4}
					/>
					<TextInput source="price_pl" />
					<TextInput source="stock_pl" />
				</FormTab>
				<FormTab label="Details">
					<TextField source="id" />
					<ImageInputCustom source="image" />
					<TextInput source="sale" />
					<ReferenceInput source="category" reference="products/category">
						<SelectInput optionText="title" />
					</ReferenceInput>
					<TextInput source="created" />
					<TextInput source="updated" />
					<BooleanInput source="is_published" />
				</FormTab>
			</TabbedForm>
		</Edit>
	)
}
export const ProductCreate = () => {
	const location = useLocation()
	const redirect = useRedirect()
	const { id } = useParams()
	return (
		<Create>
			<TabbedForm
				onSubmit={(data) => {
					CustomCreateUpdate(location, data, redirect, '/products', id)
				}}
			>
				<FormTab label={<FlagImage flag={'ru'} tab="Russian" />}>
					<TextInput source="title_ru" sx={{ width: '100%' }} />
					<TextInput
						source="description_ru"
						multiline
						sx={{ width: '100%' }}
						minRows={4}
					/>
					<NumberInput source="price_ru" />
					<NumberInput source="stock_ru" />
				</FormTab>
				<FormTab label={<FlagImage flag={'kz'} tab="Kazakhstan" />}>
					<TextInput source="title_kz" sx={{ width: '100%' }} />
					<TextInput
						source="description_kz"
						multiline
						sx={{ width: '100%' }}
						minRows={4}
					/>
					<NumberInput source="price_kz" />
					<NumberInput source="stock_kz" />
				</FormTab>
				<FormTab label={<FlagImage flag={'de'} tab="German" />}>
					<TextInput source="title_de" sx={{ width: '100%' }} />
					<TextInput
						source="description_de"
						multiline
						sx={{ width: '100%' }}
						minRows={4}
					/>
					<NumberInput source="price_de" />
					<NumberInput source="stock_de" />
				</FormTab>
				<FormTab label={<FlagImage flag={'us'} tab="English" />}>
					<TextInput source="title_en" sx={{ width: '100%' }} />
					<TextInput
						source="description_en"
						multiline
						sx={{ width: '100%' }}
						minRows={4}
					/>
					<NumberInput source="price_en" />
					<NumberInput source="stock_en" />
				</FormTab>
				<FormTab label={<FlagImage flag={'kg'} tab="Kyrgyz" />}>
					<TextInput source="title_kg" sx={{ width: '100%' }} />
					<TextInput
						source="description_kg"
						multiline
						sx={{ width: '100%' }}
						minRows={4}
					/>
					<NumberInput source="price_kg" />
					<NumberInput source="stock_kg" />
				</FormTab>
				<FormTab label={<FlagImage flag={'tr'} tab="Turkish" />}>
					<TextInput source="title_tr" sx={{ width: '100%' }} />
					<TextInput
						source="description_tr"
						multiline
						sx={{ width: '100%' }}
						minRows={4}
					/>
					<NumberInput source="price_tr" />
					<NumberInput source="stock_tr" />
				</FormTab>
				<FormTab label={<FlagImage flag={'pl'} tab="Polish" />}>
					<TextInput source="title_pl" sx={{ width: '100%' }} />
					<TextInput
						source="description_pl"
						multiline
						sx={{ width: '100%' }}
						minRows={4}
					/>
					<NumberInput source="price_pl" />
					<NumberInput source="stock_pl" />
				</FormTab>
				<FormTab label="Details">
					<TextField source="id" />
					<ImageInputCustom source="image" />
					<TextInput source="sale" />
					<ReferenceInput source="category" reference="products/category">
						<SelectInput optionText="title" />
					</ReferenceInput>
					<BooleanInput source="is_published" defaultValue={true} />
				</FormTab>
			</TabbedForm>
		</Create>
	)
}

export const ProductShow = () => (
	<Show>
		<SimpleShowLayout>
			<TextField source="title" />
			<TextField source="teaser" />
			<RichTextField source="body" />
			<DateField label="Publication date" source="published_at" />
		</SimpleShowLayout>
	</Show>
)
