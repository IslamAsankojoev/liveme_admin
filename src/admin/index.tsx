import { Admin, Resource, ShowGuesser } from "react-admin";
import { PostCreate, PostList, ProductEdit } from "../controller/posts";
import Login from "../components/Login/Login";
// @ts-ignore
// import dataProvider from "../dataProvider.js";
import authProvider from '../authProvider';
//@ts-ignore
//import drfProvider from 'ra-data-drf';
// import djangoProvider from "../djangoProvider";

import { SimpleLayout } from "../layout/SimpleLayout";
import { UserCreate, UserEdit, UserList, UserShow } from "../controller/users";
import { OrderCreate, OrderEdit, OrderList } from "../controller/orders";
import { CategoryCreate, CategoryEdit, CategoryList, CategoryShow } from "../controller/categories";
//@ts-ignore
import drfProvider from 'ra-data-django-rest-framework';

const App = () => {
    return (
        <Admin loginPage={Login} authProvider={authProvider} layout={SimpleLayout}
            dataProvider={drfProvider(`${process.env.REACT_APP_API}/api`)}
        >


            <Resource name="users" list={UserList} create={UserCreate} show={UserShow} edit={UserEdit} />
            <Resource name="products" list={PostList} create={PostCreate} show={ShowGuesser} edit={ProductEdit} />
            <Resource name="orders" list={OrderList} show={ShowGuesser} edit={OrderEdit} create={OrderCreate} />
            <Resource name="products/category" list={CategoryList} show={CategoryShow} edit={CategoryEdit} create={CategoryCreate} />
        </Admin>
    )
};

export default App;