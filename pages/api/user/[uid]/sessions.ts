import { withAuth } from "@middleware/auth";
import withDatabase from "@middleware/mongoose";
import SessionToken from "@models/SessionToken";
import { getUser } from "@utils/getCurrentUser";
import { handleError } from "@utils/handleError";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { uid } = req.query;
  try {
    const user = await getUser(req);
    if (!user) {
      return res.status(401).json({
        data: null,
        error: {
          code: 401,
          message: "Unauthorized",
        },
      });
    }
    if (user._id != uid as string) {
      return res.status(403).json({
        data: null,
        error: {
          code: 403,
          message: "Forbidden",
          fields: {
            user,
          },
        },
      });
    }

    const sessions = await SessionToken.find({ uid });

    return res.status(200).json({
      data: { attributes: sessions },
      error: null,
    });
  } catch (err) {
    handleError(res, err, "user/sessions");
  }
}

export default withAuth(withDatabase(handler));
