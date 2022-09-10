import groq from 'groq';
import { sanityClient } from '../../sanity';

const feedQuery = groq`
*[_type == "projects" ] | order(_createdAt desc)
`


export default async function handler(
    req,
    res
) {
    const projects = await sanityClient.fetch(feedQuery);
    res.status(200).json({ projects })
}
