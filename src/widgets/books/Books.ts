import { WidgetBase } from '@dojo/framework/widget-core/WidgetBase';
import { v, w } from '@dojo/framework/widget-core/d';
import { books } from '../../books';
import { Link } from '@dojo/framework/routing/Link';
import * as css from './Books.m.css';

export class Books extends WidgetBase {
	protected render() {
		return v('ul', { classes: css.root }, books.map((book, index) => {
			return v('li', { classes: css.item, key: `book-${index}`}, [
				w(Link, { classes: css.link, to: 'book-details', params: { isbn: book.isbn } }, [ book.title ])
			]);
		}));
	}
}

export default Books;
