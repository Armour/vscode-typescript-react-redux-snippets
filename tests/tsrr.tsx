import * as React from 'react';
import { connect } from 'react-redux';
import { AnyAction, Dispatch } from 'redux';

// Component

interface IComponentNameStateProps {}

interface IComponentNameDispatchProps {}

type IComponentNameProps = IComponentNameStateProps & IComponentNameDispatchProps;

interface IComponentNameState {}

class ComponentName extends React.Component<IComponentNameProps, IComponentNameState> {
  public render() {
    return (
      <span>Body</span>
    );
  }
}

// Container

interface IComponentNameOwnProps {}

const mapStateToProps = (state: any, ownProps: IComponentNameOwnProps): IComponentNameStateProps => {
  return {
    // ...mapStateToProps
  };
};

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>, ownProps: IComponentNameOwnProps): IComponentNameDispatchProps => {
  return {
    // ...mapDispatchToProps
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ComponentName);
