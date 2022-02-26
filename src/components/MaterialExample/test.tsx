import { render, screen } from '@testing-library/react'

import MaterialExample from '.'

describe('<MaterialExample />', () => {
  it('should render the heading', () => {
    const { container } = render(<MaterialExample />)

    expect(
      screen.getByRole('button', { name: /MaterialExample/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
