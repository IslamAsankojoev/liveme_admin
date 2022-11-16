import { useRecordContext } from 'react-admin'
import { Alert } from '@mui/material'
import React from 'react'

const CustomColoredField = () => {
	const record = useRecordContext()
	const [status, setStatus] = React.useState()

	React.useEffect(() => {
		record.order_status === 'pending' && setStatus('warning')
		record.order_status === 'accepted' && setStatus('info')
		record.order_status === 'success' && setStatus('success')
		record.order_status === 'cenceled' && setStatus('error')
	}, [record.order_status])
	return (
		<Alert variant="filled" severity={status}>
			{record.order_status}
		</Alert>
	)
}
export default CustomColoredField
