import { fetchUtils } from 'react-admin';
import { stringify } from 'query-string';
import axios from 'axios';
import lodash from 'lodash';

const apiUrl = `${process.env.REACT_APP_API}/api`;
const httpClient = fetchUtils.fetchJson;
const token = JSON.parse(localStorage.getItem('auth'))?.user?.token?.access
export default {
    getList: (resource, params) => {
        const { page, perPage } = params.pagination;
        const { field, order } = params.sort;
        const query = {
            sort: JSON.stringify([field, order]),
            range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
            filter: JSON.stringify(params.filter),
        };
        const url = `${apiUrl}/${resource}/?${stringify(query)}`;

        return axios.get(url, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(({ data }) => ({
            data: data.results,
            total: data.length
        }));
    },

    getOne: (resource, params) =>
        axios.get(`${apiUrl}/${resource}/${params.id}/`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(({ data }) => {
            return { data: data }
        }),


    getMany: (resource, params) => {
        const query = {
            filter: JSON.stringify({ ids: params.ids }),
        };
        const url = `${apiUrl}/${resource}/?${stringify(query)}`;
        return httpClient(url).then(({ json }) => ({ data: json }));
    },

    getManyReference: (resource, params) => {
        const { page, perPage } = params.pagination;
        const { field, order } = params.sort;
        const query = {
            sort: JSON.stringify([field, order]),
            range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
            filter: JSON.stringify({
                ...params.filter,
                [params.target]: params.id,
            }),
        };
        const url = `${apiUrl}/${resource}/?${stringify(query)}`;

        return httpClient(url).then(({ headers, json }) => ({
            data: json,
            total: 100,
        }));
    },

    create: (resource, params) =>
        axios.post(`${apiUrl}/${resource}/`,
            params.data.image ? { ...lodash.pickBy(params.data, (value) => value && value), image: params.data.image.rawFile }
                : { ...lodash.pickBy(params.data, (value) => value && value) },
            {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data'
                }
            }).then(({ data }) => {
                return { data: data }
            }),

    update: (resource, params) => {
        console.log(params)
        return axios.put(`${apiUrl}/${resource}/${params.id}`,
            params.data.image ? { ...lodash.pickBy(params.data, (value) => value && value), image: params.data.image.rawFile }
                : params.data,
            {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data'
                }
            }).then(({ data }) => {
                return { data: data }
            })
    },

    updateMany: (resource, params) => {
        const query = {
            filter: JSON.stringify({ id: params.ids }),
        };
        return httpClient(`${apiUrl}/${resource}/?${stringify(query)}`, {
            method: 'PUT',
            body: JSON.stringify(params.data),
        }).then(({ json }) => ({ data: json }));
    },

    delete: (resource, params) =>
        axios.delete(`${apiUrl}/${resource}/${params.id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(({ data }) => ({ data: data })),

    deleteMany: (resource, params) => {
        const query = {
            filter: JSON.stringify({ id: params.ids }),
        };
        return httpClient(`${apiUrl}/${resource}/?${stringify(query)}`, {
            method: 'DELETE',
            body: JSON.stringify(params.data),
        }).then(({ json }) => ({ data: json }));
    },


};