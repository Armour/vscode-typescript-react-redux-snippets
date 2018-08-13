import * as React from 'react';

interface IComponentNameProps {}

interface IComponentNameState {}

class ComponentName extends React.Component<IComponentNameProps, IComponentNameState> {
  public render() {
    return (
      <span>Body</span>
    );
  }
}

export default ComponentName;
