import { getTemplate } from './storybook'

describe('[ helpers / storybook ]', () => {
  describe('#getTemplate', () => {
    describe('when `Component` and `args` are provided', () => {
      it('should return a `Component` with `defaultProps`, and `args`', () => {
        const Component = (props) => ({ props })
        Component.defaultProps = { defaultProps: 'defaultProps', foo: 'bar' }

        const args = { args: 'args', foo: 'foo' }

        const result = getTemplate(Component)(args)

        expect(result).toMatchInlineSnapshot(`
          <Component
            args="args"
            defaultProps="defaultProps"
            foo="foo"
          />
        `)
      })
    })
  })
})
