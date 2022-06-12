export default function handler(req, res) {
	const requestBody = req.body
	console.log('request body', requestBody)

	if (!requestBody.title || !requestBody.description || !requestBody.address || !requestBody.imageUrl) {
		return res.status(400).json({ data: 'title or description or addess or imageUrl not found!' })
	}
	return res.status(200).json({
		data: {
			title: requestBody.title,
			description: requestBody.description,
			address: requestBody.address,
			imageUrl: requestBody.imageUrl,
		},
	})
}
