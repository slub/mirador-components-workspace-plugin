import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import ViewListIcon from '@mui/icons-material/ViewList';
import GridViewIcon from '@mui/icons-material/GridView';

export default class WorkspaceAddButton extends Component {

    render() {
        const { classes, t, setWorkspaceAddVisibility, isWorkspaceAddVisible } = this.props;
        return (
            <Tooltip title={isWorkspaceAddVisible ? t('select_workspace') : t('select_list')}>
                <Fab
                    size="medium"
                    color="primary"
                    id="addBtn"
                    disableRipple
                    aria-label={
                        isWorkspaceAddVisible
                        ? t('select_workspace') 
                        : t('select_list')
                    }
                    className={classes.fab}
                    classes={{ primary: classes.fabPrimary, secondary: classes.fabSecondary }}
                    variant={'circular'}
                    onClick={() => { 
                        setWorkspaceAddVisibility(!isWorkspaceAddVisible); 
                    }} >
                        {isWorkspaceAddVisible 
                        ? <GridViewIcon />
                        : <ViewListIcon />
                        }
                </Fab>
            </Tooltip>
        );
    }
}

WorkspaceAddButton.propTypes = {
    classes: PropTypes.objectOf(PropTypes.string).isRequired,
    isWorkspaceAddVisible: PropTypes.bool,
    setWorkspaceAddVisibility: PropTypes.func.isRequired,
    t: PropTypes.func,
 };
  
WorkspaceAddButton.defaultProps = {
    isWorkspaceAddVisible: false,
    t: key => key,
};
