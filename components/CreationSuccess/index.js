//assets
import SuccessGif from '../../public/success.gif'

//nextjs
import Image from 'next/image'

const CreationSuccess = () => {
	return (
		<div style={{ textAlign: 'center', marginTop: '10rem' }}>
			<h4>Successfully created your meetup!</h4>
			<Image src={SuccessGif} alt='successfully created the meetup' height={100} width={100} />
		</div>
	)
}

export default CreationSuccess
