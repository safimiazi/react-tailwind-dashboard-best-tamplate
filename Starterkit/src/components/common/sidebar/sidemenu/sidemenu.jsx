

export const MENUITEMS = [
  {
    menutitle: 'MAIN',
  },
      {
        icon: (<i className="side-menu__icon bx bx-home"></i>),
        type: 'sub',
        Name: '',
        active: false,
        selected: false,
         dirchange: false,
        title: 'Dashboards',
        badge: '',
        badgetxt: '12',
        class: 'badge !bg-warning/10 !text-warning !py-[0.25rem] !px-[0.45rem] !text-[0.75em] ms-2',
        children: [
          { path: `${import.meta.env.BASE_URL}dashboards/dashboard`, type: 'link', active: false, selected: false, dirchange: false, title: 'Dashboard' },
        ]
      },

  {
    menutitle: "MODULES",
  },
      {
        title: "Apartment Management",
        icon: (
          <i className="bx bx-layer side-menu__icon"></i>
        ),
        type: "sub",
        selected: false, 
        dirchange: false,
        active: false,
        children: [
          
          {
            path: `${import.meta.env.BASE_URL}apartment-management/floor-manage`,
            title: "Floor Manage",
            type: "link",
            active: false,
            selected: false, 
            dirchange: false,
          },
          {
            path: `${import.meta.env.BASE_URL}apartment-management/unit-manage`,
            title: "Unit Manage",
            type: "link",
            selected: false, 
            dirchange: false,
            active: false,
            
          },
          {
            path: `${import.meta.env.BASE_URL}apartment-management/room-manage`,
            title: "Room Manage",
            type: "link",
            selected: false, 
            dirchange: false,
            active: false,
            
          },
          {
            path: `${import.meta.env.BASE_URL}apartment-management/seat-manage`,
            title: "Seat Manage",
            type: "link",
            selected: false, 
            dirchange: false,
            active: false,
            
          },
        ],
      },
 
];
