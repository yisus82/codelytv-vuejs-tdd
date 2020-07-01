import LoadSpinner from '@/app/shared-components/LoadSpinner.vue'
import { Wrap } from '../../../../test/helpers'

describe('LoadSpinner.vue', () => {
  it('does not show loading', () => {
    const wrapper = Wrap(LoadSpinner).withProps({ isLoading: false }).mount()
    expect(wrapper.text()).not.toContain('Loading...')
  })

  it('shows loading text', () => {
    const wrapper = Wrap(LoadSpinner).withProps({ isLoading: true }).mount()

    expect(wrapper.text()).toContain('Loading...')
  })

  it('does not show loading spinner', () => {
    const wrapper = Wrap(LoadSpinner).withProps({ isLoading: false }).mount()
    expect(wrapper.find(`[data-testid="loading"]`).element).toBeUndefined()
  })

  it('shows loading spinner', async () => {
    const wrapper = Wrap(LoadSpinner).withProps({ isLoading: true }).mount()

    expect(wrapper.find(`[data-testid="loading"]`).element).not.toBeUndefined()
  })
})
