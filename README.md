# Rick and Morty Character Explorer

A modern, responsive React 18+ app built with TypeScript, Vite, TanStack Query, TanStack Router, and TanStack Table.  
Browse, search, and explore Rick and Morty characters with paginated lists and detailed views.

## Features

- **Paginated character list** from the [Rick and Morty API](https://rickandmortyapi.com/documentation)
- **Responsive UI** with Boostrap
- **Column sorting and zebra striping**
- **Persisted page state** in the URL for refresh and link sharing
- **Refresh button** to re-fetch the current page
- **Character detail view** on a dedicated route
- **Modern React stack:** TanStack Query, Router, Table

## Getting Started

### 1. Install dependencies

```sh
npm install
```

### 2. Start the development server

```sh
npm run dev
```

### 3. Build for production

```sh
npm run build
```

## Tech Stack

- [React 18+](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [TanStack Query](https://tanstack.com/query/latest)
- [TanStack Router](https://tanstack.com/router/latest)
- [TanStack Table](https://tanstack.com/table/latest)

## Project Structure

```
src/
  components/      # UI components (CharacterTable, etc.)
  pages/           # Page components (CharacterList, CharacterDetail)
  api/             # API utilities
  Router/          # Routing setup
  App.tsx          # App entry point
  main.tsx         # Vite/React entry
```

## Customization

- To change the API or add new features, edit files in `src/`.
- Tailwind CSS is used for styling. Edit `src/index.css` and use Tailwind utility classes in components.

## License

MIT

---

_This project is for educational/demo purposes and uses the public Rick and Morty API._
