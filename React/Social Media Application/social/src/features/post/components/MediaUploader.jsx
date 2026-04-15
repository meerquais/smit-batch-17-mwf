import { useState } from 'react';
import { uploadToCloudinary } from '../../../config/cloudinary';

/**
 * @param {{onUploaded: (url: string) => void, folder?: string}} props
 */
export default function MediaUploader({ onUploaded, folder = 'social-posts' }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      setLoading(true);
      setError('');
      const url = await uploadToCloudinary(file, folder);
      onUploaded(url);
    } catch (uploadError) {
      setError(uploadError.message || 'Upload failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='space-y-2'>
      <input type='file' accept='image/*,video/*' onChange={handleChange} />
      {loading && <p className='text-xs text-slate-500'>Uploading...</p>}
      {error && <p className='text-xs text-rose-500'>{error}</p>}
    </div>
  );
}
