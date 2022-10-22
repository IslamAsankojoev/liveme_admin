import {useRecordContext, useRefresh, useEditContext, useUpdate, ImageField} from "react-admin";
import React from 'react';
import axios from 'axios';
import { parseCookies} from 'nookies';
import Box from "@mui/material/Box";
import { green } from '@mui/material/colors';
import { CircularProgress} from "@mui/material";
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const ImageUploadCustom = () => {
    const record = useRecordContext();
    const refresh = useRefresh()
    const imageRef = React.useRef(null);
    const [loading, setLoading] = React.useState(false);
    const [success, setSuccess] = React.useState(false);

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!loading) {
            setSuccess(false);
            setLoading(true);
        }
        axios.patch(`${process.env.REACT_APP_API}/api/products/category/${record.id}/`, {
            image: imageRef.current.files[0],
        }, {
            headers:{
                'Authorization': 'Bearer ' + parseCookies().access_token,
                'Content-Type': 'multipart/form-data'
            }
        }
        ).then(res=>{
            if(res.status===200 || res.status===201){
                setSuccess(true);
                setLoading(false);
                refresh();
            }
        })
    }

    return <>
    <p>Image</p>
    <Box >

        <Box sx={{ m: 1, position: 'relative' }}>
            <input ref={imageRef} type="file" onChange={(e)=>{handleSubmit(e)}}/>

            {loading ? (
                    <CircularProgress
                        size={24}
                        sx={{
                            color: green[500],
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            marginTop: '-12px',
                            marginLeft: '-12px',
                        }}
                    />
                    ): (<CheckBoxIcon sx={{
                        color: green[500],
                    }}/>)}
        </Box>
        <img src={record.image} width={100}/>
    </Box>
    </>
};

export default ImageUploadCustom;
