import { NowRequest, NowResponse } from '@vercel/node'
import Router, { withRouterRequests } from '../utils/router'

// All routes for /api/magic
class MagicAPI extends Router {
    get(req: NowRequest, res: NowResponse) {
        res.send("MADE IT MUM!")
    }

    post(req: NowRequest, res: NowResponse) {
        res.send("POSTED")
    }
}

export default withRouterRequests(MagicAPI)
