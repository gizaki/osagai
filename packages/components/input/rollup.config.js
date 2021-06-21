import { component } from '../../../rollup.config'
import packageJSON from './package.json'

export default component({
  external: [
    ...Object.keys(packageJSON.dependencies),
    ...Object.keys(packageJSON.peerDependencies),
  ],
})
