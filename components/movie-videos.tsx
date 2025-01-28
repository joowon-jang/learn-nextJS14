import { API_URL } from '../app/(home)/page';

async function getVideos(id: string) {
  // console.log(new Date());
  await new Promise((resolve) => setTimeout(resolve, 3000));
  throw new Error('Error');
  // const response = await fetch(`${API_URL}/${id}/videos`);
  // return await response.json();
}

async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);
  return <h6>{JSON.stringify(videos)}</h6>;
}

export default MovieVideos;
