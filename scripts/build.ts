const { execSync } = require('child_process')
const { resolve } = require('path')

const root = resolve(__dirname, '..')
const run = (cmd: string) => execSync(cmd, { stdio: 'inherit', cwd: root })

/**
 * Run a TypeScript build to generate type definitions (but no JS)
 */
run(`yarn`)
