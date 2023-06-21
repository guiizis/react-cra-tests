import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from '.';

describe('<Button/>', () => {

  it('should render the button with text', () => {
    render(<Button text="load more" />);

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
    render(<Button text="load more" disabled={true} />);

    const button = screen.getByRole('button', { name: /load more/i });
    
    expect(button).toBeDisabled();
  });

  it('should be enabled when disabled is false', () => {
    render(<Button text="load more" disabled={false} />);

    const button = screen.getByRole('button', { name: /load more/i });
    
    expect(button).toBeEnabled();
  });

  it('should call function on button click', () => {
    const fn = jest.fn();

   const {container} = render(<Button text="load more" loadMorePosts={fn} disabled={false} />);

   expect(container.firstChild).toMatchSnapshot();
   
  });
})
