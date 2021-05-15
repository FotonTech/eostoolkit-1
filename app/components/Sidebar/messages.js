/*
 * Home Messages
 *
 * This contains all the text for the Home component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  attachAccount: {
    id: 'app.components.Sidebar.attachAccount',
    defaultMessage: 'Login',
  },
  detachAccount: {
    id: 'app.components.Sidebar.detachAccount',
    defaultMessage: 'Logout',
  },
  changeNetwork: {
    id: 'app.components.Sidebar.changeNetwork',
    defaultMessage: 'Change Network',
  },
  multiSigMode: {
    id: 'app.components.Sidebar.multiSigMode',
    defaultMessage: 'Multisig Mode',
  },
  singleSigMode: {
    id: 'app.components.Sidebar.singleSigMode',
    defaultMessage: 'Singlesig Mode',
  },
});
