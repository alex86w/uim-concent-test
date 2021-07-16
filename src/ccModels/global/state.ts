import { MenuDataItem } from '@ant-design/pro-layout';

export interface GlobalSt {
  menus?: MenuDataItem[];
  isLoadingMenu?: boolean;
  tile?: string;
}

// function getInitialState(): GlobalSt {
//   console.log('getInitialState')
//   return {
//     isLoadingMenu: false,
//   };
// }


export default {
  isLoadingMenu: false,
} as GlobalSt;
