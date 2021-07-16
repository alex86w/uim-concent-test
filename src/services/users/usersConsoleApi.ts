// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** "接口测试" GET /from/${param0} */
export async function UsersConsoleHandler(
  params: {
    // path
    name: string;
  },
  options?: { [key: string]: any },
) {
  const { name: param0, ...queryParams } = params;
  return request<API.Response>(`/from/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}
