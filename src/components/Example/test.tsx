import { render, screen } from '@testing-library/react'

import Example from '.'

describe('<Example />', () => {
  it('should render the heading', () => {
    const { container } = render(<Example />)

    expect(
      screen.getByRole('heading', { name: /Example/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
