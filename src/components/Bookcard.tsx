import type {BookVolume} from "../Types";
interface BookCardProps {
  book: BookVolume;
}
const BookCard = ({ book }: BookCardProps) => {
  const { title, authors, categories, imageLinks, pageCount } = book.volumeInfo;
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 flex gap-6 shadow-sm hover:shadow-md transition">
      <div className="shrink-0">
        {imageLinks?.thumbnail ? (
          <img 
            src={imageLinks.thumbnail} 
            alt={title} 
            className="w-24 h-36 object-cover rounded shadow-sm"
          />
        ) : (
          <div className="w-24 h-36 bg-gray-100 rounded flex items-center justify-center text-xs text-gray-400 font-medium">
            No Cover
          </div>
        )}
      </div>
      <div className="flex flex-col justify-center">
        <h3 className="text-lg font-bold text-gray-900 leading-tight mb-2">{title}</h3>
        <div className="text-sm text-gray-600 space-y-1">
          <p>
            <span className="font-semibold text-gray-700">Author(s):</span> {authors ? authors.join(', ') : 'Unknown'}
          </p>
          <p>
            <span className="font-semibold text-gray-700">Genre:</span> {categories ? categories.join(', ') : 'Uncategorized'}
          </p>
          <p>
            <span className="font-semibold text-gray-700">Volume (Pages):</span> {pageCount ? pageCount : 'N/A'}
          </p>
        </div>
      </div>
    </div>
  );
};
export default BookCard;