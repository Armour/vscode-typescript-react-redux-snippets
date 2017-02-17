import React from 'react';
import { connect } from 'react-redux';

interface IComponentNameProps {}

interface IComponentNameState {}

class ComponentName extends React.Component<IComponentNameProps, IComponentNameState> {
    public render() {
        return (<span>Body</span>);
    }
}

const mapStateToProps = (state) => ({
    // ..mapStateToProps
});

const mapDispatchToProps = (dispatch) => ({
    // ..mapDispatchToProps
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ComponentName);
