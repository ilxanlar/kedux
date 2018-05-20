import { connect } from 'react-redux';
import { remove, set } from './actionCreators';

export default function withKedux(fields) {
  const mapStateToProps = state => Object.keys(fields).reduce((result, shortName) => {
    const value = state.kedux[fields[shortName].path];

    return {
      ...result,
      [shortName]: typeof value !== 'undefined' ? value : fields[shortName].defaultValue
    };
  }, {});

  const mapDispatchToProps = {
    remove: shortName => remove(fields[shortName].path),
    set: (shortName, value) => set(fields[shortName].path, value)
  };

  return connect(mapStateToProps, mapDispatchToProps);
}
