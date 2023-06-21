import { render, screen } from '@testing-library/react';
import { Posts } from '.'

describe('<Posts>', () => {
  
  const props = [
    {
      id: '1',
      title: 'teste 1',
      body: 'teste 1',
      cover: 'img/img1.png'
    },
    {
      id: '2',
      title: 'teste 2',
      body: 'teste 2',
      cover: 'img/img2.png'
    },
    {
      id: '3',
      title: 'teste 3',
      body: 'teste 3',
      cover: 'img/img3.png'
    },
  ];

  it('should render posts', () => {
    render(<Posts posts={props}/>);

    expect(screen.getAllByRole('heading', {name: /teste/i})).toHaveLength(6);
    expect(screen.getAllByRole('img', {name: /teste/i})).toHaveLength(3);
    expect(screen.getByRole('img', {name: 'teste 3'})).toHaveAttribute('src', 'img/img3.png');
    expect(screen.getByRole('img', {name: 'teste 3'})).toHaveAttribute('src', 'img/img3.png');
  });

  it('should no render posts', () => {
    render(<Posts posts={[]}/>);

    expect(screen.queryAllByRole('heading', {name: /teste/i})).toHaveLength(0);
  });

  it('should match snapshot', () => {
    const {container} = render(<Posts posts={props}/>);

    expect(container.firstChild).toMatchSnapshot();
  });
})