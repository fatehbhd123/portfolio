import groq from 'groq';
import { sanityClient } from '../../sanity';

const feedQuery = groq`
*[_type == "skills" ] | order(_createdAt asc)
`


export default async function handler(
    req,
    res
) {
    const skills = await sanityClient.fetch(feedQuery);
    res.status(200).json({ skills })
}
