import axios from 'axios';
import { parseCookies } from "nookies";
import lodash from 'lodash';

const CustomCreateUpdate = (location, data, redirect, redirectTo, id) => {
    let token = parseCookies().auth;
    //        let path = location.pathname.replace('/create', '')
    try {
        if (location.pathname.includes('create')) {
            axios.post(
                `${process.env.REACT_APP_API}/api${redirectTo}/`,
                data.image ? { ...lodash.pickBy(data, (value) => value && value), image: data.image.rawFile }
                    : { ...lodash.pickBy(data, (value) => value && value) }
                , {
                    headers: {
                        'Authorization': 'Bearer ' + token,
                        'Content-Type': 'multipart/form-data',
                    }
                }).then((_) => {
                    redirect(redirectTo)
                })
        } else {
            axios.patch(
                `${process.env.REACT_APP_API}/api${redirectTo}/${id}/`,
                data.image ? { ...lodash.pickBy(data, (value) => value && value), image: data.image.rawFile }
                    : { ...lodash.pickBy(data, (value) => value && value) }
                , {
                    headers: {
                        'Authorization': 'Bearer ' + token,
                        'Content-Type': 'multipart/form-data',
                    }
                }).then((_) => {
                    redirect(redirectTo)
                })
        }
    }
    catch (error) {
        console.log(error, 'create update error')
    }
};

export default CustomCreateUpdate;