import {
	Edit,
	SimpleForm,
	TextInput,
	Create,
	Show,
	SimpleShowLayout,
	TextField,
	Datagrid,
	List,
	NumberField,
	NumberInput,
	ImageField,
	useRedirect,
} from 'react-admin'
import * as React from 'react'
import ImageInputCustom from '../components/Inputs/ImageInputCustom/ImageInputCustom'
import PaginationCustom from '../components/PaginationCustom/PaginationCustom'
import CustomToolbar from '../components/CustomToolbar/CustomToolbar'
import CustomCreateUpdate from '../components/CustomCreateUpdate/CustomCreateUpdate'
import CustomFilterSearch from '../components/CustomFilterSearch/CustomFilterSearch'
import { useLocation, useParams } from 'react-router-dom'

export const RoleList = () => (
	<List
		perPage={10}
		pagination={<PaginationCustom />}
		filters={CustomFilterSearch}
	>
		<Datagrid rowClick="edit">
			<TextField source="back_id" />
			<TextField source="type" />
			<ImageField source="image" />
			<NumberField source="discount" />
			<NumberField source="score_pay" />
		</Datagrid>
	</List>
)

export const RoleEdit = () => {
	const location = useLocation()
	const redirect = useRedirect()
	const { id } = useParams()
	return (
		<Edit>
			<SimpleForm
				toolbar={<CustomToolbar />}
				onSubmit={(data) => {
					CustomCreateUpdate(location, data, redirect, '/role', id)
				}}
			>
				<TextInput source="back_id" />
				<TextInput source="type" />
				<ImageInputCustom source="image" />
				<NumberInput source="discount" />
				<NumberInput source="score_pay" />
			</SimpleForm>
		</Edit>
	)
}

export const RoleCreate = () => {
	const location = useLocation()
	const redirect = useRedirect()
	const { id } = useParams()
	return (
		<Create>
			<SimpleForm
				toolbar={<CustomToolbar />}
				onSubmit={(data) => {
					CustomCreateUpdate(location, data, redirect, '/role', id)
				}}
			>
				<TextInput source="back_id" />
				<TextInput source="type" />
				<ImageInputCustom source="image" />
				<NumberInput source="discount" />
				<NumberInput source="score_pay" />
			</SimpleForm>
		</Create>
	)
}

export const RoleShow = () => (
	<Show>
		<SimpleShowLayout>
			<TextField source="back_id" />
			<TextField source="type" />
			<NumberField source="discount" />
			<NumberField source="score_pay" />
		</SimpleShowLayout>
	</Show>
)
