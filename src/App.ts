import { WidgetBase } from '@dojo/framework/widget-core/WidgetBase';
import { Outlet } from '@dojo/framework/routing/Outlet';
import { v, w } from '@dojo/framework/widget-core/d';
import * as css from './App.m.css';
import { Menu } from './widgets/menu/Menu';
import { Home } from './widgets/home/Home';
import { Books } from './widgets/books/Books';
import { BookDetails } from './widgets/book-details/BookDetails';
import { MatchDetails } from '@dojo/framework/routing/interfaces';

export class App extends WidgetBase {
	protected render() {
		return v('div', { classes: css.root }, [
			w(Menu, {}),
			w(Outlet, { id: 'home', renderer: () => w(Home, {})}),
			w(Outlet, { id: 'books', renderer: () => w(Books, {})}),
			w(Outlet, { id: 'book-details', renderer: (matchDetails: MatchDetails) => w(BookDetails, { isbn: matchDetails.params.isbn })})
		]);
	}
}

export default App;
