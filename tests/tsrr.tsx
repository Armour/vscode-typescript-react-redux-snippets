import * as React from 'react';
import { connect } from 'react-redux';
import { AnyAction, Dispatch } from 'redux';

// Component

interface IComponentNameStateProps {}

interface IComponentNameDispatchProps {}

type IComponentNameComponentProps = IComponentNameStateProps & IComponentNameDispatchProps;

interface IComponentNameComponentState {}

class ComponentNameComponent extends React.Component<IComponentNameComponentProps, IComponentNameComponentState> {
  public render() {
    return (
      <span>Body</span>
    );
  }
}

// Container

interface IComponentNameProps {}

const mapStateToProps = (state: any, ownProps: IComponentNameProps): IComponentNameStateProps => {
  return {
    // ...mapStateToProps
  };
};

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>, ownProps: IComponentNameProps): IComponentNameDispatchProps => {
  return {
    // ...mapDispatchToProps
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ComponentNameComponent);
