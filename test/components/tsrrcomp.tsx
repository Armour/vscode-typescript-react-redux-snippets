import React from 'react';

interface IComponentNameStateProps {}

interface IComponentNameDispatchProps {}

interface IComponentNameOtherProps {}

type IComponentNameProps = IComponentNameStateProps & IComponentNameDispatchProps & IComponentNameOtherProps;

interface IComponentNameState {}

class ComponentName extends React.Component<IComponentNameProps, IComponentNameState> {
  public render() {
    return (
      <span>Body</span>
    );
  }
}

export default ComponentName;
