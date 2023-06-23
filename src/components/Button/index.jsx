import P from 'prop-types';
import { Component } from 'react';
import './styles.css';

export class Button extends Component {
  render() {
    const { text, loadMorePosts, disabled = false } = this.props;
    return (
      <button disabled={disabled} className="button" onClick={loadMorePosts}>
        {text}
      </button>
    );
  }
}

Button.defaultProps = {
  disabled: false,
};

Button.propTypes = {
  text: P.string.isRequired,
  loadMorePosts: P.func.isRequired,
  disabled: P.bool,
};
