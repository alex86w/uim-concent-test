import { ccReducer, getRootState, useC2Mod } from '@/concents/services/concent';
import ProLayout, { PageContainer } from '@ant-design/pro-layout'
import { useEffect } from 'react';
import { IRouteComponentProps } from 'umi';

let i = 0

const Layout: React.FC<IRouteComponentProps> = ({ children }) => {
    const { state: { menus, tile }, dispatch } = useC2Mod('$$global')

    console.log('Layout',menus)

    return (
        <div
            style={{
                height: '100vh',
            }}
        >
            <ProLayout

                menuItemRender={(item, dom) => <div>pre {dom}</div>}
                subMenuItemRender={(_, dom) => <div>pre {dom}</div>}
                logo="https://gw.alipayobjects.com/mdn/rms_b5fcc5/afts/img/A*1NHAQYduQiQAAAAAAAAAAABkARQnAQ"
                menuHeaderRender={(logo, title) => (
                    <div
                        id="customize_menu_header"
                        onClick={() => {
                            window.open('https://remaxjs.org/');
                        }}
                    >
                        {logo}
                        {title}
                    </div>
                )}
                location={{
                    pathname: '/',
                }}
            >
                {children}
            </ProLayout>
        </div>
    );
};

export default Layout