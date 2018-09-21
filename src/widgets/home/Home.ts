import { WidgetBase } from '@dojo/framework/widget-core/WidgetBase';
import { v } from '@dojo/framework/widget-core/d';
import * as css from './Home.m.css';

export class Home extends WidgetBase {
	protected render() {
		return v('div', { classes: css.root }, [
			'Browse books'
		]);
	}
}

export default Home;
