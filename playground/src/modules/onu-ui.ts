import OnuUI from 'onu-ui'
import type { UserModule } from '../types'

export const install: UserModule = app => app.use(OnuUI)
