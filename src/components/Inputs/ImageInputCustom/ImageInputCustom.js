import * as React from 'react'
import { ImageField, ImageInput } from 'react-admin'

const ImageInputCustom = (props) => {
	const [newImage, setNewImage] = React.useState(false)
	const setImage = () => {
		setNewImage(true)
	}

	return (
		<>
			<ImageInput
				{...props}
				onChange={(e) => {
					setImage()
				}}
			>
				<ImageField source={'src'} />
			</ImageInput>
			{!newImage && <ImageField source={'image'} />}
		</>
	)
}
export default ImageInputCustom
