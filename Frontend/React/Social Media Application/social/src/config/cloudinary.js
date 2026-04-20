import axios from 'axios';

export const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
export const UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

export async function uploadToCloudinary(file, folder = 'social-posts') {
  try {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', UPLOAD_PRESET);
    formData.append('folder', folder);
    formData.append('quality', 'auto');
    formData.append('fetch_format', 'auto');

    const url = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/upload`;
    const { data } = await axios.post(url, formData);

    if (!data?.secure_url) {
      throw new Error('Cloudinary upload did not return secure_url');
    }

    return data.secure_url;
  } catch (error) {
    throw new Error(error?.response?.data?.error?.message || 'Failed to upload media to Cloudinary');
  }
}
