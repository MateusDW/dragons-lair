import {
  DRAGONS_ROUTE,
  DRAGON_DETAIL_ROUTE,
  DRAGON_REGISTER_ROUTE,
  LOGIN_ROUTE,
  REDIRECT_ROUTE,
} from '../constants'
import {
  DragonLair,
  DragonsLair,
  DragonsNest,
  Entrance,
  HomeRedirect,
} from '../pages'

export const ROUTES = [
  {
    path: REDIRECT_ROUTE(),
    Component: HomeRedirect,
  },
  {
    path: LOGIN_ROUTE(),
    Component: Entrance,
  },
  {
    path: DRAGONS_ROUTE(),
    Component: DragonsLair,
    isPrivate: true,
  },
  {
    path: DRAGON_DETAIL_ROUTE(),
    Component: DragonLair,
    isPrivate: true,
  },
  {
    path: DRAGON_REGISTER_ROUTE(),
    Component: DragonsNest,
    isPrivate: true,
  },
]
