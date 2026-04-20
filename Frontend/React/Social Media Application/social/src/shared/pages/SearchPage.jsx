import SearchBar from '../components/SearchBar';
import Navbar from '../components/Navbar';

export default function SearchPage() {
  return (
    <>
      <Navbar />
      <main className='feed-shell'>
        <div className='rounded-2xl border border-slate-200/80 bg-white/85 p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900/70'>
          <h1 className='mb-3 text-xl font-semibold'>Search</h1>
          <SearchBar />
          <p className='mt-3 text-sm text-slate-500'>
            Use the search input to find users and posts. Press arrow keys and Enter to select.
          </p>
        </div>
      </main>
    </>
  );
}
