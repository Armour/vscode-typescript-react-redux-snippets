import React from 'react';
import { connect, Dispatch } from 'react-redux';

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

const mapStateToProps = (state: any): IComponentNameStateProps => {
    return {
        // ...mapStateToProps
    };
};

const mapDispatchToProps = (dispatch: Dispatch<any>): IComponentNameDispatchProps => {
    return {
        // ...mapDispatchToProps
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ComponentName);
