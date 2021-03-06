const getVersion = () => (location.host.split('.')[0] === 'next' ? '@next' : '')

export const tsAppIndex = (view, config) => {
  return `
import App from 'overmind'
import createConnect, { TConnect } from 'overmind-${view}'
${config.trim()}

declare module 'overmind' {
  interface IState extends TState<typeof config> {}
  interface IEffects extends TEffects<typeof config> {}
}

const app = new App(config)

export type Connect = TConnect<typeof app>

export const connect = createConnect(app)

export default app
`
}

export const getPackageWithVersion = (name) => name + getVersion()
