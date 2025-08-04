import { createRootRoute, createRoute, createRouter } from '@tanstack/react-router';
import App from './App';
import CharacterList from './pages/CharacterList';
import CharacterDetail from './pages/CharacterDetail';

const rootRoute = createRootRoute({ component: App });

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: CharacterList,
});

const detailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/character/$id',
  component: CharacterDetail,
});

const routeTree = rootRoute.addChildren([indexRoute, detailRoute]);

export const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
