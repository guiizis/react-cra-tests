import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { TextInput } from '.';

describe('<TextInput/>', () => {
  
  it('should have value from searchValue', () => {
    const fn = jest.fn();

    render(<TextInput filterInput={fn} searchValue={'testando'}/>);

    expect(screen.getByPlaceholderText(/type your search/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/type your search/i).value).toBe('testando')

  });
  
  it('should call handleChange on each key pressed', () => {
    const fn = jest.fn();

    render(<TextInput filterInput={fn}/>);

    const input = screen.getByPlaceholderText(/type your search/i);
    const value = 'testando';

    userEvent.type(input, value);

    expect(input.value).toBe(value);
    expect(fn).toHaveBeenCalled();
  });

  it('should match snapshot', () => {
    const fn = jest.fn();

    const { container } = render(<TextInput filterInput={fn}/>);

    expect(container.firstChild).toMatchSnapshot();
  });
});