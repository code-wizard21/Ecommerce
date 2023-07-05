import { render, screen } from '@testing-library/react';

import Button from './button';

const defaultProps = {
    text: "React",
    href: "/home"
}

describe('Button', () => {
  it('renders button with text and link from props', () => {
    render(<Button {...defaultProps} />);

    const button = screen.getByRole('link');

    expect(button).toHaveTextContent(defaultProps.text)
    expect(button).toHaveAttribute('href', defaultProps.href)

  });
});