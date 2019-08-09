
export default {
    path: '/home/mart',//分类
    name: 'mart',
    redirect:"/mart/one",
    component: ()=>import('../../views/Mart'),

    children: [
      {
        path: "/mart/one",
        name: "list",
        component: ()=>import('../../components/mart/one'),
      },
      {
        path: "/mart/two",
        name: "list",
        component: ()=>import('../../components/mart/two'),
      },
      {
        path: "/mart/three",
        name: "list",
        component: ()=>import('../../components/mart/three'),
      },
      {
        path: "/mart/four",
        name: "list",
        component: ()=>import('../../components/mart/four'),
      },
      {
        path: "/mart/five",
        name: "list",
        component: ()=>import('../../components/mart/five'),
      },
      {
        path: "/mart/six",
        name: "list",
        component: ()=>import('../../components/mart/six'),
      },
      {
        path: "/mart/seven",
        name: "list",
        component: ()=>import('../../components/mart/seven'),
      },
      {
        path: "/mart/eight",
        name: "list",
        component: ()=>import('../../components/mart/eight'),
      },
      {
        path: "/mart/nine",
        name: "list",
        component: ()=>import('../../components/mart/nine'),
      },
      {
        path: "/mart/ten",
        name: "list",
        component: ()=>import('../../components/mart/ten'),
      },
      {
        path: "/mart/eleven",
        name: "list",
        component: ()=>import('../../components/mart/eleven'),
      },
      {
        path: "/mart/twelve",
        name: "list",
        component: ()=>import('../../components/mart/twelve'),
      },
      {
        path: "/mart/thirteen",
        name: "list",
        component: ()=>import('../../components/mart/thirteen'),
      },
      {
        path: "/mart/fourteen",
        name: "list",
        component: ()=>import('../../components/mart/fourteen'),
      },
      
    ],

}