import { mount } from '@vue/test-utils'
import GigsToday from '@/app/pages/GigsToday/GigsToday.vue'
import { FIRST_DAY } from '../../../services/__mocks__/gigs-sample'
import { stubNow } from '../../../../../test/helpers'

jest.mock('@/app/services/jota-api')

describe('Gigs Today', () => {
  it('renders today gigs', async () => {
    stubNow('2017-09-18')
    const wrapper = mount(GigsToday)
    await wait()
    expect(wrapper.text()).toContain(FIRST_DAY.gigs[0].title)
  })
})

function wait() {
  return new Promise(resolve => setImmediate(resolve))
}
