import React, { Component } from 'react';


export default class WorkspaceControlPanel extends Component {
    render() {
        const variant = 'default';

        return (
            <this.props.TargetComponent {...this.props.targetProps} variant={variant}/>
        );
    }
}
