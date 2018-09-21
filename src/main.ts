import { renderer } from '@dojo/framework/widget-core/vdom';
import { w } from '@dojo/framework/widget-core/d';
import { App } from './App';
import { Registry } from '@dojo/framework/widget-core/Registry';
import { registerRouterInjector } from '@dojo/framework/routing/RouterInjector';
import { config } from './routes'

const registry = new Registry();
registerRouterInjector(config, registry);

const domNode = document.getElementById('app') as HTMLElement;
renderer(() => w(App, {})).mount({ domNode, registry });
