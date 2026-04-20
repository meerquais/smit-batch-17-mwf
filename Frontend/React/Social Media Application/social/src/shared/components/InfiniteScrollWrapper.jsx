import useInfiniteScroll from '../../features/post/hooks/useInfiniteScroll';

/**
 * @param {{children: React.ReactNode, hasMore: boolean, loading: boolean, loadMore: () => Promise<void>}} props
 */
export default function InfiniteScrollWrapper({ children, hasMore, loading, loadMore }) {
  const { sentinelRef } = useInfiniteScroll(loadMore, hasMore, loading);

  return (
    <div>
      {children}
      {loading && <p className='p-2 text-xs text-slate-500'>Loading...</p>}
      <div ref={sentinelRef} />
    </div>
  );
}
