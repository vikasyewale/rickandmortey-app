import { useNavigate } from '@tanstack/react-router';

interface Props {
  characters: any[];
  page: number;
  totalPages: number;
  onRowClick: (id: number) => void;
}

export default function CharacterTable({ characters, page, totalPages, onRowClick }: Props) {
  const navigate = useNavigate();

  const changePage = (newPage: number) => {
    navigate({ search: (prev) => ({ ...prev, page: newPage }) });
  };

  return (
    <>


      <div className="">
        <table className="table table-bordered table-hover">
          <thead className="text-center">
            <tr>
              <th scope="col" >
                Name
              </th>
              <th scope="col" >
                Status
              </th>
              <th scope="col">
                Species
              </th>
              <th scope="col">
                Origin
              </th>
            </tr>
          </thead>
          <tbody>

            {characters.map((char, idx) => (
              <tr
                key={char.id}
                onClick={() => onRowClick(char.id)}
                className={`hover:bg-blue-100 cursor-pointer transition ${idx % 2 === 0 ? 'bg-gray-50' : ''}`}
              >
                <td className="border border-gray-200 px-4 py-6 sm:px-6 sm:py-4 whitespace-nowrap font-medium text-xs sm:text-base text-center">
                  {char.name}
                </td>
                <td className="border border-gray-200 px-4 py-6 sm:px-6 sm:py-4 whitespace-nowrap text-center">
                  <span
                    className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${char.status === 'Alive'
                        ? 'bg-green-100 text-green-800'
                        : char.status === 'Dead'
                          ? 'bg-red-100 text-red-800'
                          : 'bg-gray-200 text-gray-700'
                      }`}
                  >
                    {char.status}
                  </span>
                </td>
                <td className="border border-gray-200 px-2 py-3 sm:px-6 sm:py-4 whitespace-nowrap text-xs sm:text-base text-center">
                  {char.species}
                </td>
                <td className="border border-gray-200 px-2 py-3 sm:px-6 sm:py-4 whitespace-nowrap text-xs sm:text-base text-center">
                  {char.origin.name}
                </td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>

      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item"><button
            onClick={() => changePage(page - 1)}
            disabled={page <= 1}
            className="page-link"
          >
            ← Prev
          </button></li>
          <li className="page-item">
            <span className="page-link">
              Page {page} of {totalPages}
            </span>
          </li>
          <li className="page-item">
            <button
              onClick={() => changePage(page + 1)}
              disabled={page >= totalPages}
              className="page-link"
            >
              Next →
            </button></li>
        </ul>
      </nav>



    </>

  );
}
