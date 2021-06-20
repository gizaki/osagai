/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable function-paren-newline */
import nodePlop, { ActionType } from 'node-plop'
import shell from 'shelljs'
import camelcase from 'camelcase'

const plop = nodePlop('plop-templates/plopfile.hbs')

interface Answers {
  componentName: string
  description: string
  destinationDirectory: string
}

async function createPackage() {
  plop.setHelper('capitalize', (text) =>
    camelcase(text, {
      pascalCase: true,
    }),
  )

  plop.setGenerator('component', {
    description: 'Generates a component package',
    prompts: [
      {
        type: 'input',
        name: 'componentName',
        message: 'Enter component name:',
      },
    ],

    actions(answers: any) {
      const actions: ActionType[] = []

      if (!answers) return actions

      const { componentName } = answers as Answers

      actions.push({
        type: 'addMany',
        templateFiles: 'component/**',
        destination: '../packages/components/{{dashCase componentName}}',
        base: 'component/',
        data: {
          componentName,
        },
        abortOnFail: true,
      })

      return actions
    },
  })

  const { runPrompts, runActions } = plop.getGenerator('component')

  const answers = await runPrompts()
  await runActions(answers)
}

async function run() {
  await createPackage()
  shell.exec('yarn')
}

run()
