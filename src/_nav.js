
export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
        //text: 'NEW',
      },
    },

    {
      name: 'Users',
      url: '/buttons',
      icon: 'icon-people',
      children: [
        {
          name: 'Owners',
          url: '/user/owner',
          // icon: 'icon-user-follow',
        },
        {
          name: 'Instructor',
          url: '/user/instructor',
          // icon: 'icon-user',
        },
        {
          name: 'Students',
          url: '/user/students',
          // icon: 'icon-user-follow',
        },
      ],
    },
   
    
    {
      name: 'Course',
      url: '/buttons',
      icon: 'icon-list',
      children: [
        {
          name: 'Course Category',
          url: '/course/coursecategory',
          // icon: 'icon-user-follow',
        },
        {
          name: 'Add Course',
          url: '/course/course',
          // icon: 'icon-user-follow',
        }, 
        {
          name: 'List Course',
          url: '/course/courselist',
          // icon: 'icon-user-follow',
        },         
      ],
    },

    {
      name: 'Coupon Management',
      url: '/buttons',
      icon: 'icon-list',
      children: [
        {
          name: 'Coupon List',
          url: '/coupons/list',
          // icon: 'icon-user-follow',
        },
      ],
    },

    {
      name: 'Events Management',
      url: '/buttons',
      icon: 'icon-list',
      children: [
        {
          name: 'Events List',
          url: '/events/list',
          // icon: 'icon-user-follow',
        },
      ],
    },

    {
      name: 'Events Engine',
      url: '/buttons',
      icon: 'icon-list',
      children: [
        {
          name: 'Notifications',
          url: '/eventsengine/notification',
          // icon: 'icon-user-follow',
        },
        {
          name: 'History',
          url: '/eventsengine/history',
          // icon: 'icon-user',
        },
        {
          name: 'Pending notifications',
          url: '/eventsengine/pending',
          // icon: 'icon-user-follow',
        },
      ],
    },



    {
      name: 'Setting',
      url: '/buttons',
      icon: 'icon-list',
      children: [
        {
          name: 'Site Setting',
          url: '/settings/sitesetting',
          // icon: 'icon-user-follow',
        },
        {
          name: 'Subscription Package',
          url: '/settings/subspackage',
          // icon: 'icon-user',
        },        
      ],
    },

    {
      name: 'CMS',
      url: '/buttons',
      icon: 'icon-list',
      url: '/cms/aboutus',
    },

    {
      name: 'Group',
      url: '/buttons',
      icon: 'icon-list',
      url: '/groups',
    },


    {
      name: 'Email Templates',
      url: '/buttons',
      icon: 'icon-list',
      url: '/emailtemplate',
    },

    {
      name: 'Plan',
      url: 'http://coreui.io/react/',
      icon: 'icon-graph',
      class: 'mt-auto',
    },
    {
      name: 'Help',
      url: 'http://coreui.io/react/',
      icon: 'icon-map',
      
    },
    // {
    //   name: 'Settings',
    //   url: '/settings',
    //   icon: 'icon-settings',
      
    // },

    
  ],
};
