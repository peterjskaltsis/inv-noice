import { NowRequest, NowResponse } from '@vercel/node'
import handler from '../../utils/proto'

const router = handler()

/**
 * Return the API version.
 */
router.get((req: NowRequest, res: NowResponse) => {
  return res.status(200).json({
    success: true,
    version: "1.0"
  })
})

export default router