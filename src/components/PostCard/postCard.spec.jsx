import { render, screen } from '@testing-library/react';
import { PostCard } from '.';
import { postCardPropsMock as props } from './mock';

describe('<PostCard/>', () => {
  it('should render postCard correctly', () => {
    render(<PostCard {...props} />);

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute('src', props.cover);
    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute('src', props.cover);
    expect(screen.getByText('test 2')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = render(<PostCard {...props} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
