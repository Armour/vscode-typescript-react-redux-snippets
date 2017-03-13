import React from 'react';

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
    // _cwrp
  }

  public shouldComponentUpdate(nextProps: IComponentNameProps, nextState: IComponentNameState) {
    // _scu
  }

  public componentWillUpdate(nextProps: IComponentNameProps, nextState: IComponentNameState) {
    // _cwu
  }

  public componentDidUpdate(prevProps: IComponentNameProps, prevState: IComponentNameState) {
    // _cdu
  }

  public componentWillUnmount() {
    // _cwun
  }

  public render() {
    return (
      <span>Body</span>
    );
  }
}

export default ComponentName;
