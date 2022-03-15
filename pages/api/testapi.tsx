import type { NextApiRequest, NextApiResponse} from "next";

type TestRes = {
    requestMethod : string
    queryString : string
    headerHost : string
    headerUA : string
}

export default (req:NextApiRequest, res:NextApiResponse<TestRes>) => {
    const result:TestRes = {
        requestMethod: String(req.method),
        queryString: String(req.query.id),
        headerHost: String(req.headers.host),
        headerUA: String(req.headers["user-agent"]),
    } 
    res.status(200).json(result)
}