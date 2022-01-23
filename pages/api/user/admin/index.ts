import { withAuth } from "@middleware/auth";
import withDatabase from "@middleware/mongoose";
import User from "@models/User";
import { handleError } from "@utils/handleError";
import { getPagination, getTotalPages } from "@utils/pagination";
import type { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const { limit, offset } = getPagination(
            parseInt(<string>req.query.page) || 0,
            parseInt(<string>req.query.limit) || 3
        );
        let query = {};
        User.find(query)
            .skip(offset) //Notice here
            .limit(limit)
            .exec((err, user) => {
                if (err) {
                    return res.json(err);
                }
                User.countDocuments(query).exec((count_error, count) => {
                    if (err) {
                        handleError(res, err, "user/all");
                    }
                    return res.status(200).json({
                        data : {
                            type       : "user",
                            id         : "all",
                            totalItems: count,
                            totalPages: getTotalPages(count, limit),
                            attributes : user.map((element) => ({
                                uid        : element._id,
                                fullName   : element.fullName,
                                email      : element.email,
                                photoURL   : element.photoURL,
                                role       : element.role,
                                validation : element.validation,
                            })),
                        }
                    });
                });
            });
    } catch (err) {
        handleError(res, err, "user/all");
    }
}

export default withAuth(withDatabase(handler));
