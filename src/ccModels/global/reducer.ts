import { GlobalSt } from './state';

export function loadMenu(): GlobalSt {
  console.log('reducer, loadMenu');
  return {
    menus: [
      {
        path: '/',
        name: 'welcome',
        icon: 'barcode',
        children: [
          {
            path: '/welcome',
            name: 'one',
            icon: 'smile',
            children: [
              {
                path: '/welcome/welcome',
                name: 'two',
                icon: 'smile',
                exact: true,
              },
            ],
          },
        ],
      },
      {
        path: '/demo',
        name: 'demo',
        icon: 'heart',
      },
    ],
  };
}

export function changeTile(title: string): GlobalSt {
  console.log('changeTile');
  return {
    tile: title,
  };
}
