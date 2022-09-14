export default async function handler(req, res) {
    const data = JSON.parse(req.body);
    const mutations = [{
        createOrReplace: {
            _type: 'contact',
            name: data.name,
            email: data.email,
            message: data.message

        }
    }]

    const result = await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/data/mutate/${process.env.NEXT_PUBLIC_SANITY_DATASET}`, {
        method: 'post'
        , headers: {
            'content-type': 'application/json',
            Authorization: `Bearer ${process.env.SANITY_API_TOKEN}`
        },
        body: JSON.stringify({ mutations })
    })

    const json = await result.json()
    res.status(200).json({ message: 'Sent!' })
}
