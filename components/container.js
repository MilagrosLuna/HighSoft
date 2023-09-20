import PropTypes from 'prop-types';

export default function Container({ children }) {
  return (
    <div className="w-screen flex justify-center">
      <div className="max-w-6xl w-full px-4">{children}</div>
    </div>
  );
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
