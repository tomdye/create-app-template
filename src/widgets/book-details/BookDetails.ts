import { WidgetBase } from '@dojo/framework/widget-core/WidgetBase';
import { v, w } from '@dojo/framework/widget-core/d';
import { books } from '../../books';
import { Link } from '@dojo/framework/routing/Link';
import * as css from './BookDetails.m.css';

export interface BookDetailsProperties {
	isbn: string;
}

export class BookDetails extends WidgetBase<BookDetailsProperties> {
	protected render() {

		const { isbn } = this.properties;
		const book = books.filter(book => book.isbn === isbn)[0];

		return v('div', { classes: css.root }, [
			v('div', { classes: css.modal }, [
				book ? v('div', {}, [
					v('div', { classes: css.header }, [
						w(Link, { classes: css.close, to: 'books' }, [ 'Close X'])
					]),
					v('h1', {}, [ book.title ]),
					v('h2', {}, [ book.subtitle ]),
					v('h3', {}, [ book.author ]),
					v('p', {}, [ book.description ])
				]) : v('p', {}, [ 'Book not found' ])
			])
		]);
	}
}

export default BookDetails;
