import { Admin, Resource, ShowGuesser, fetchUtils } from 'react-admin'
import { ProductCreate, ProductList, ProductEdit } from '../controller/products'
import Login from '../components/Login/Login'
// @ts-ignore
// import dataProvider from "../dataProvider.js";
import authProvider from '../authProvider'
//@ts-ignore
//import drfProvider from 'ra-data-drf';
// import djangoProvider from "../djangoProvider";

import { SimpleLayout } from '../layout/SimpleLayout'
import { UserCreate, UserEdit, UserList, UserShow } from '../controller/users'
import { OrderCreate, OrderEdit, OrderList } from '../controller/orders'
import {
	CategoryCreate,
	CategoryEdit,
	CategoryList,
	CategoryShow,
} from '../controller/categories'
//@ts-ignore
import drfProvider from 'ra-data-django-rest-framework'
import Cookies from 'js-cookie'

//@ts-ignore
const fetchJson = (url, options = {}) => {
	//@ts-ignore
	if (!options.headers) {
		//@ts-ignore
		options.headers = new Headers({ Accept: 'application/json' })
	}
	// add your own headers here
	//@ts-ignore
	options.headers.set('Authorization', `Bearer ${Cookies.get('auth')}`)
	return fetchUtils.fetchJson(url, options)
}
const dataProvider = drfProvider(`${process.env.REACT_APP_API}/api`, fetchJson)

const App = () => {
	return (
		<Admin
			loginPage={Login}
			authProvider={authProvider}
			layout={SimpleLayout}
			dataProvider={dataProvider}
		>
			<Resource
				name="users"
				list={UserList}
				create={UserCreate}
				show={UserShow}
				edit={UserEdit}
			/>
			<Resource
				name="products"
				list={ProductList}
				create={ProductCreate}
				show={ShowGuesser}
				edit={ProductEdit}
			/>
			<Resource
				name="orders"
				list={OrderList}
				show={ShowGuesser}
				edit={OrderEdit}
				create={OrderCreate}
			/>
			<Resource
				name="products/category"
				list={CategoryList}
				show={CategoryShow}
				edit={CategoryEdit}
				create={CategoryCreate}
			/>
		</Admin>
	)
}

export default App
