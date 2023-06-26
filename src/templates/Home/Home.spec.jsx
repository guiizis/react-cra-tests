import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { screen } from '@testing-library/react';
import { render, waitForElementToBeRemoved } from '@testing-library/react';
import Home from '.';
import userEvent from '@testing-library/user-event';

const handlers = [
  rest.get('*jsonplaceholder.typicode.com*', async (req, res, ctx) => {
    return res(
      ctx.json([
        {
          userId: 1,
          id: 1,
          title: 'title1',
          body: 'body1',
          url: 'img1.jpg',
        },
        {
          userId: 2,
          id: 2,
          title: 'title2',
          body: 'body2',
          url: 'img2.jpg',
        },
        {
          userId: 3,
          id: 3,
          title: 'title3',
          body: 'body3',
          url: 'img3.jpg',
        },
      ]),
    );
  }),
];

const server = setupServer(...handlers);

describe('<Home/>', () => {
  beforeAll(() => {
    server.listen();
  });

  afterEach(() => server.resetHandlers());

  afterAll(() => {
    server.close();
  });

  it('should render searchInput, posts and loadMore', async () => {
    render(<Home />);

    const noMorePosts = screen.getByText('Não existem Posts');

    expect.assertions(3);

    await waitForElementToBeRemoved(noMorePosts);

    const search = screen.getByPlaceholderText(/type your search/i);
    expect(search).toBeInTheDocument();

    const images = screen.getAllByRole('img', { name: /title/i });
    expect(images).toHaveLength(3);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('should search for Inputs', async () => {
    render(<Home />);

    const noMorePosts = screen.getByText('Não existem Posts');

    expect.assertions(11);

    await waitForElementToBeRemoved(noMorePosts);

    const search = screen.getByPlaceholderText(/type your search/i);

    expect(screen.getByRole('heading', { name: 'title1' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'title2' })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'title4' })).not.toBeInTheDocument();

    userEvent.type(search, 'title1');
    expect(screen.getByRole('heading', { name: 'title1' })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'title2' })).not.toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'title4' })).not.toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Você pesquisou por/i })).toBeInTheDocument();

    userEvent.clear(search);
    expect(screen.getByRole('heading', { name: 'title1' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'title2' })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'title4' })).not.toBeInTheDocument();

    userEvent.type(search, 'Kamino');
    expect(screen.getByText('Não existem Posts')).toBeInTheDocument();
  });

  it('should load more posts with button', async () => {
    render(<Home />);

    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });

});
