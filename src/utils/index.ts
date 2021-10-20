import { createMixin } from '@alexlit/vue-console-log';
import { action } from '@storybook/addon-actions';
import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';
import { html } from 'lit';

import { mapEvents } from './map-events.util';

const { $log } = createMixin().methods;

export { $log, action, addons, create, html, mapEvents };
