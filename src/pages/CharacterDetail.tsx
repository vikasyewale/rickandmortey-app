import { useQuery } from '@tanstack/react-query';
import { fetchCharacterById } from '../api/rickAndMorty';
import { useParams } from '@tanstack/react-router';

export default function CharacterDetail() {
  const { id } = useParams({ from: '/character/$id' });

  const { data, isLoading } = useQuery({
    queryKey: ['character', id],
    queryFn: () => fetchCharacterById(id),
  });

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No character found</p>;

  return (
    <div>
      <h1>{data.name}</h1>
      <img src={data.image} alt={data.name} />
      <p><strong>Status:</strong> {data.status}</p>
      <p><strong>Species:</strong> {data.species}</p>
      <p><strong>Gender:</strong> {data.gender}</p>
      <p><strong>Origin:</strong> {data.origin.name}</p>
    </div>
  );
}
