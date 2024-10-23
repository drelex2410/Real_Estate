import { Application } from '@nativescript/core';
import { installPlugin } from '@nativescript/theme';

// Install the theme plugin
installPlugin();

Application.run({ moduleName: 'app-root' });