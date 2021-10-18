import type { NextApiRequest, NextApiResponse } from "next";
import type { ResourceResponse } from "types/Resource/ResourceResponse";



export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResourceResponse>
) {
  res.status(200).json({
    data: {
      type: "resource",
      id: "1",
      attributes: {
        id: 1,
        owner: "John Doe",
        description: "This is my first resource",
        slug: "my-first-resource",
        createdAt: new Date("2020-01-01T00:00:00.000Z"),
        data: {
          type: "location",
          attributes: {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [125.6, 10.1],
            },
            properties: {
              name: "Dinagat Islands",
            },
          },
        },
        likes: 12,
        comments: [
          {
            owner: "John Doe",
            content: "This is my first comment",
            photoUrl: "https://placekitten.com/300/300",
          },
        ],
        validated: true,
      },
    },
  });
}
