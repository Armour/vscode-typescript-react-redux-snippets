import { connect, Dispatch } from 'react-redux';

import ChildComponentName from 'components/tsrrcomp';

interface IComponentNameProps {}

const mapStateToProps = (state: any, ownProps: IComponentNameProps): any => {
  return {
    // ...mapStateToProps
  };
};

const mapDispatchToProps = (dispatch: Dispatch<any>, ownProps: IComponentNameProps): any => {
  return {
    // ...mapDispatchToProps
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChildComponentName);
