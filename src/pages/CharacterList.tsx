import { useQuery } from '@tanstack/react-query';
import { fetchCharacters } from '../api/rickAndMorty';
import { useNavigate, useSearch } from '@tanstack/react-router';
import CharacterTable from '../components/CharacterTable';

export default function CharacterList() {
  const navigate = useNavigate();
  const search = useSearch({ strict: false });
  const page = Number(search.page ?? 1);

  const { data, isFetching, refetch } = useQuery({
    queryKey: ['characters', page],
    queryFn: () => fetchCharacters(page),
    keepPreviousData: true,
  });

  const handleRowClick = (id: number) => {
    navigate({ to: `/character/${id}` });
  };

  return (
    <div>
      <h1 className="text-primary">Rick and Morty Characters</h1>
      <button onClick={() => refetch()} disabled={isFetching}>
        🔄 Refresh
      </button>

      {data && (
        <CharacterTable
          characters={data.results}
          page={page}
          totalPages={data.info.pages}
          onRowClick={handleRowClick}
        />
      )}
    </div>
  );
}
