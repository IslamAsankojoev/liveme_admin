import { Menu } from 'react-admin';

import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import PeopleIcon from '@mui/icons-material/People';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import CategoryIcon from '@mui/icons-material/Category';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

export const SimpleMenu = () => (
    <Menu>
        <Menu.Item to="users" primaryText="Users" leftIcon={<PeopleIcon />} />
        <Menu.Item to="products" primaryText="Products" leftIcon={<ProductionQuantityLimitsIcon />} />
        <Menu.Item to="orders" primaryText="Orders" leftIcon={<MoveToInboxIcon />} />
        <Menu.Item to="products/category" primaryText="Category" leftIcon={<CategoryIcon />} />
        <Menu.Item to="role" primaryText="Roles" leftIcon={<ManageAccountsIcon />} />
    </Menu>
);