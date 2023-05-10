import BlankComponent from './components/BlankComponent';
import WorkspaceAddButton from './components/WorkspaceAddButton';
import WorkspaceControlPanel from './components/WorkspaceControlPanel';
import WorkspaceMenuButton from './components/WorkspaceMenuButton';
import { setWorkspaceAddVisibility, updateWorkspace } from 'mirador/dist/es/src/state/actions';
import { getWorkspace, getWorkspaceType } from 'mirador/dist/es/src/state/selectors';
import translations from './locales';

export default [
  {
    component: BlankComponent,
    mode: 'wrap',
    target: 'WorkspaceOptionsButton'
  },
  {
    component: BlankComponent,
    mode: 'wrap',
    target: 'FullScreenButton'
  },
  {
    component: WorkspaceAddButton,
    mode: 'wrap',
    target: 'WorkspaceAddButton',
    config: {
      translations
    },
    mapDispatchToProps: {
      setWorkspaceAddVisibility: setWorkspaceAddVisibility,
    },
    mapStateToProps: (state) => ({
      isWorkspaceAddVisible: getWorkspace(state).isWorkspaceAddVisible,
    })
  },
  {
    component: WorkspaceControlPanel,
    mode: 'wrap',
    target: 'WorkspaceControlPanel'
  },
  {
    component: WorkspaceMenuButton,
    mode: 'wrap',
    target: 'WorkspaceMenuButton',
    config: {
      translations
    },
    mapDispatchToProps: {
      updateWorkspace: updateWorkspace,
    },
    mapStateToProps: (state) => ({
      workspaceType: getWorkspaceType(state),
      disabled: getWorkspace(state).isWorkspaceAddVisible,
    })
  }
];
