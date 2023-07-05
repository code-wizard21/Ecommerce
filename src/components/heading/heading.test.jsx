import { render, screen } from '@testing-library/react';

import Heading from './heading';

const defaultProps = {
    mainText: "React",
    subText: "Start learning react"
}

describe('Heading', () => {
  it('renders heading with mainText and subText from props', () => {
    render(<Heading {...defaultProps} />);

    const heading = screen.getByTestId('heading');

    expect(heading).toHaveTextContent(defaultProps.mainText)
    expect(heading).toHaveTextContent(defaultProps.subText)

  });
});