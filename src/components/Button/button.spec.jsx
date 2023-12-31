import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from '.';

describe('<Button/>', () => {
  it('should render the button with text', () => {
    const fn = jest.fn();
    render(<Button text="load more" loadMorePosts={fn} />);

    const button = screen.getByRole('button', { name: /load more/i });
    expect(button).toBeInTheDocument();
  });

  it('should call function on button click', () => {
    const fn = jest.fn();

    render(<Button text="load more" loadMorePosts={fn} />);

    const button = screen.getByRole('button', { name: /load more/i });

    fireEvent.click(button);
    expect(fn).toHaveBeenCalled();
  });

  it('should be disabled when disabled is true', () => {
    const fn = jest.fn();

    render(<Button text="load more" disabled={true} loadMorePosts={fn} />);
    const button = screen.getByRole('button', { name: /load more/i });

    expect(button).toBeDisabled();
  });

  it('should be enabled when disabled is false', () => {
    const fn = jest.fn();

    render(<Button text="load more" disabled={false} loadMorePosts={fn} />);

    const button = screen.getByRole('button', { name: /load more/i });

    expect(button).toBeEnabled();
  });

  it('should match snapshot', () => {
    const fn = jest.fn();

    const { container } = render(<Button text="load more" loadMorePosts={fn} disabled={false} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
