import type { NextApiRequest, NextApiResponse} from "next";

type TestRes = {
    requestMethod : string
    queryString : string
    headerHost : string
    headerUA : string
}

export default (req:NextApiRequest, res:NextApiResponse<TestRes>) => {
    const result:TestRes = {
        requestMethod: req.method,
        queryString: req.query.id,
        headerHost: req.headers.host,
        headerUA: req.headers["user-agent"],
    } 
    res.status(200).json(result)
}