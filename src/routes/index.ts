import { Router } from 'express'
import authRoutes from './auth'
import { badRequest, clientErrorHandler, healthCheck, logErrors } from './common.js'

const router = Router()

/* api routes */
router.use('/auth', authRoutes)

/* common */
router.get('/health-check', healthCheck)
router.use(logErrors)
router.use(clientErrorHandler)
router.use(badRequest)

export default router