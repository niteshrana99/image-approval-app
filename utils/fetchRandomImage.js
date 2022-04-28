const baseUrl = 'https://api.unsplash.com';
const API_KEY = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY;

export const fetchRandomImageData = async () => {
  let url = `${baseUrl}/photos/random?client_id=${API_KEY}`;
  return fetch(url);
};