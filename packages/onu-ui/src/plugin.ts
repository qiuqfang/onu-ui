import * as plugins from '@onu-ui/components'
import { provideGlobalConfig } from '@onu-ui/utils'
import { version } from '../package.json'
import type { InstallOptions } from '@onu-ui/utils'
import type { App, Plugin } from 'vue'

const INSTALLED_KEY = Symbol('OnuUI_Installed')

export const createInstaller = (components: Plugin[] = []) => {
  const install = (app: App, options?: InstallOptions) => {
    if (app[INSTALLED_KEY]) return

    app[INSTALLED_KEY] = true
    components.forEach(c => app.use(c))

    if (options) provideGlobalConfig(options, app, true)

    // plugin install
    app.config.globalProperties.$message = plugins.OMessage
  }

  return {
    version,
    install,
  }
}
