import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import MiradorMenuButton from 'mirador/dist/es/src/containers/MiradorMenuButton';
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import WindowIcon from '@mui/icons-material/Window';

export default class WorkspaceMenuButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { classes, t, workspaceType, updateWorkspace, disabled } = this.props;
        return (
            <MiradorMenuButton
                aria-haspopup="true"
                aria-label={ workspaceType==='elastic' ? t('select_mosaic') : t('select_elastic') }
                aria-owns={'workspace-menu'}
                className={classNames(classes.ctrlBtn)}
                id="workspaceTypeBtn"
                disabled={disabled}
                onClick={() => {
                    if(workspaceType ==='elastic') {
                        updateWorkspace({
                            type: 'mosaic'
                        });
                    } else {
                        updateWorkspace({
                            type: 'elastic'
                        });
                    }
                }} 
                >
                { workspaceType==='elastic' ?  <AutoAwesomeMosaicIcon /> : <WindowIcon /> }
            </MiradorMenuButton>
        );
    }
}

WorkspaceMenuButton.propTypes = {
    workspaceType: PropTypes.string.isRequired,
    updateWorkspace: PropTypes.func.isRequired,
    classes: PropTypes.objectOf(PropTypes.string).isRequired,
    t: PropTypes.func,
};

WorkspaceMenuButton.defaultProps = {
    t: key => key,
};
