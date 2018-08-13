import * as React from 'react';

interface IComponentNameProps {}

interface IComponentNameState {}

class ComponentName extends React.Component<IComponentNameProps, IComponentNameState> {
  constructor(props: IComponentNameProps) {
    super(props);
    // _con
  }

  public componentWillMount() {
    // _cwm
  }

  public componentDidMount() {
    // _cdm
  }

  public componentWillReceiveProps(nextProps: IComponentNameProps) {
    // _cwr
  }

  public shouldComponentUpdate(nextProps: IComponentNameProps, nextState: IComponentNameState): boolean {
    // _scup
    return true;
  }

  public componentWillUpdate(nextProps: IComponentNameProps, nextState: IComponentNameState) {
    // _cwup
  }

  public componentDidUpdate(prevProps: IComponentNameProps, prevState: IComponentNameState) {
    // _cdup
  }

  public componentWillUnmount() {
    // _cwun
  }

  public render() {
    // _ren
    return (
      <span>Body</span>
    );
  }
}

export default ComponentName;
