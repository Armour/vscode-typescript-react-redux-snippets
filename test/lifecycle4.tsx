import React from 'react';

interface IComponentNameProps {}

interface IComponentNameState {}

class ComponentName extends React.Component<IComponentNameProps, IComponentNameState> {
    constructor(props: IComponentNameProps) {
        super(props);
        // _con4
    }

    public componentWillMount() {
        // _cwm4
    }

    public componentDidMount() {
        // _cdm4
    }

    public componentWillReceiveProps(nextProps: IComponentNameProps) {
        // _cwrp4
    }

    public shouldComponentUpdate(nextProps: IComponentNameProps, nextState: IComponentNameState) {
        // _scu4
    }

    public componentWillUpdate(nextProps: IComponentNameProps, nextState: IComponentNameState) {
        // _cwu4
    }

    public componentDidUpdate(prevProps: IComponentNameProps, prevState: IComponentNameState) {
        // _cdu4
    }

    public componentWillUnmount() {
        // _cwun4
    }

    public render() {
        return (
          <span>Body</span>
        );
    }
}

export default ComponentName;
