const { execSync } = require('child_process')
const { resolve } = require('path')

const root = resolve(__dirname, '..')
const run = (cmd: string) => {
  execSync(cmd, {
    stdio: 'inherit',
    cwd: root,
  })
}

run(`yarn`)
