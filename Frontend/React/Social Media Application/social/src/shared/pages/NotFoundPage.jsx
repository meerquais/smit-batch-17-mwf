import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <main className='mx-auto mt-16 max-w-xl text-center'>
      <h1 className='text-4xl font-bold'>404</h1>
      <p className='mt-2 text-slate-500'>The page you are looking for does not exist.</p>
      <Link className='mt-4 inline-block rounded-lg bg-primary px-4 py-2 text-white' to='/feed'>
        Back to feed
      </Link>
    </main>
  );
}
