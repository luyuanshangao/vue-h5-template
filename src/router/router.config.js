/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  // {
  //   path: '/',
  //   component: () => import('@/views/layouts/index'),
  //   redirect: '/home',
  //   meta: {
  //     title: '首页',
  //     keepAlive: false
  //   },
  //   children: [
  //     {
  //       path: '/home',
  //       name: 'Home',
  //       component: () => import('@/views/home/index'),
  //       meta: { title: '首页', keepAlive: false }
  //     },
  //     {
  //       path: '/about',
  //       name: 'About',
  //       component: () => import('@/views/home/about'),
  //       meta: { title: '关于我', keepAlive: false }
  //     }
  //   ]
  // }
   {
    path: '/',
    component: () => import('@/views/index/index'),
    redirect: '/index',
    meta: {
      title: '首页',
      keepAlive: false
    },
    children: [
          {
              path: '/index',
              name: 'Index',
              component: () => import('@/views/index/index'),
          },
    ]
  }
]
