import {
	BooleanInput,
	Edit,
	SimpleForm,
	TextInput,
	Datagrid,
	TextField,
	BooleanField,
	List,
	Create,
	SelectInput,
	RadioButtonGroupInput,
	ReferenceField,
	ReferenceInput,
	DeleteButton,
	useRedirect,
} from 'react-admin'
import * as React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import PaginationCustom from '../components/PaginationCustom/PaginationCustom'
import CustomColoredField from '../components/CustomColoredField/CustomColoredField'
import CustomFilterSearch from '../components/CustomFilterSearch/CustomFilterSearch'
import ImageInputCustom from '../components/Inputs/ImageInputCustom/ImageInputCustom'
import CustomCreateUpdate from '../components/CustomCreateUpdate/CustomCreateUpdate'

export const OrderEdit = () => {
	const location = useLocation()
	const redirect = useRedirect()
	const { id } = useParams()

	return (
		<Edit>
			<SimpleForm
				onSubmit={(data) => {
					CustomCreateUpdate(location, data, redirect, '/orders', id)
				}}
			>
				<TextInput source="id" />
				<TextInput source="created" />
				<TextInput source="updated" />
				<ReferenceInput source="user" reference="users">
					<SelectInput optionText="username" />
				</ReferenceInput>
				<TextInput source="client_email" />
				<TextInput source="client_address" />
				<TextInput source="client_phone" />
				<TextInput source="client_name" />
				<ImageInputCustom source="image" />
				<br />
				<SelectInput
					source="order_time"
					label={'delivery time'}
					defaultValue={'take 3 hours'}
					choices={[
						{ id: 'take 3 hours', name: 'take 3 hours' },
						{ id: 'take 1 hours', name: 'take 1 hours' },
						{ id: 'succtake 1 dayess', name: 'take 1 day' },
						{ id: 'take 2 day', name: 'take 2 day' },
					]}
				/>

				<RadioButtonGroupInput
					source="payment_method"
					choices={[
						{ id: 'Cash', name: 'Cash' },
						{ id: 'Bank', name: 'Bank' },
						{ id: 'Card', name: 'Card' },
					]}
				/>
				<SelectInput
					source="order_status"
					choices={[
						{ id: 'pending', name: 'pending' },
						{ id: 'accepted', name: 'accepted' },
						{ id: 'success', name: 'success' },
						{ id: 'cenceled', name: 'cenceled' },
					]}
				/>
				<BooleanInput source="is_published" />
			</SimpleForm>
		</Edit>
	)
}

export const OrderList = () => (
	<List pagination={<PaginationCustom />} filters={CustomFilterSearch}>
		<Datagrid rowClick="edit" size="small">
			<TextField source="id" sx={{ my: -2 }} />
			<CustomColoredField source="order_status" />
			<ReferenceField source="user" reference="users">
				<TextField source="username" />
			</ReferenceField>
			<TextField source="client_email" />
			<TextField source="client_address" />
			<TextField source="client_phone" />
			<TextField source="client_name" />
			<TextField source="payment_method" />
			<BooleanField source="is_published" />
			<DeleteButton />
		</Datagrid>
	</List>
)
export const OrderCreate = () => {
	const location = useLocation()
	const redirect = useRedirect()
	const { id } = useParams()

	return (
		<Create>
			<SimpleForm
				onSubmit={(data) => {
					CustomCreateUpdate(location, data, redirect, '/orders', id)
				}}
			>
				<ReferenceInput source="user" reference="users">
					<SelectInput optionText="username" />
				</ReferenceInput>
				<TextInput source="client_email" />
				<TextInput source="client_address" />
				<TextInput source="client_phone" />
				<TextInput source="client_name" />
				<RadioButtonGroupInput
					source="payment_method"
					choices={[
						{ id: 'Cash', name: 'Cash' },
						{ id: 'Bank', name: 'Bank' },
						{ id: 'Card', name: 'Card' },
					]}
				/>
				<SelectInput
					source="order_status"
					choices={[
						{ id: 'pending', name: 'pending' },
						{ id: 'accepted', name: 'accepted' },
						{ id: 'success', name: 'success' },
						{ id: 'cenceled', name: 'cenceled' },
					]}
				/>
			</SimpleForm>
		</Create>
	)
}
