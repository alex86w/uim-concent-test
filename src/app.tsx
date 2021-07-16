import { PageLoading } from '@ant-design/pro-layout';
import './concents/configs/runConcent'
import { cst, dispatch } from 'concent'
import { createElement } from 'react';

/** 获取用户信息比较慢的时候会展示一个 loading */
export const initialStateConfig = {
    loading: <PageLoading />,
};




export async function getInitialState() {
    // console.log('${cst.MODULE_GLOBAL}/loadMenu')
    //  await dispatch(`${cst.MODULE_GLOBAL}/loadMenu`)
}
