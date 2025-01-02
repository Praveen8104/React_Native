import { registerRootComponent } from 'expo';

import App from './App';
import Card from './Components/task';
import Tables from './Components/tables';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(Card);
// registerRootComponent(App);
// registerRootComponent(Tables);


