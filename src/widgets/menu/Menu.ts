import { WidgetBase } from '@dojo/framework/widget-core/WidgetBase';
import { v, w } from '@dojo/framework/widget-core/d';
import { ActiveLink } from '@dojo/framework/routing/ActiveLink';

import * as css from './Menu.m.css';

export class Menu extends WidgetBase {
	protected render() {
		return v('header', { classes: css.root }, [
			v('nav', { classes: css.nav }, [
				w(ActiveLink, { activeClasses: [css.active], to: 'home', classes: css.link }, [ 'HOME' ]),
				w(ActiveLink, { activeClasses: [css.active], to: 'books', classes: css.link }, [ 'BOOKS' ])
			])
		]);
	}
}

export default Menu;
