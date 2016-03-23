module.exports = {

  // application routes
  '/gateway': {
    name: 'gateway',
    component: require('../components/layouts/default'),
    subRoutes: {
      '/home': {
        name: 'home',
        component: require('../components/home/index')
      },
      '/devices': {
        name: 'devices',
        component: {
          name: 'Devices',
          template: '<div id="#devices"><router-view /></div>'
        },
        subRoutes: {
          '/': {
            name: 'devices/index',
            component: require('../components/devices/index')
          },
          '/view/:deviceId': {
            name: 'devices/view',
            component: require('../components/devices/view')
          },
          '/add': {
            name: 'devices/add',
            component: require('../components/devices/add')
          }
        }
      },
      '/users': {
        name: 'users',
        component: {
          name: 'Users',
          template: '<div id="#users"><router-view /></div>'
        },
        subRoutes: {
          '/': {
            name: 'users/index',
            component: require('../components/users/index')
          },
          '/view/:userId': {
            name: 'users/view',
            component: require('../components/users/view')
          },
          '/edit/:userId': {
            name: 'users/edit',
            component: require('../components/users/edit')
          },
          '/add': {
            name: 'users/add',
            component: require('../components/users/add')
          }
        }
      },

      // no route
      'no-route': {
        name: 'no-route',
        component: {
          template: '<div><h3>Route not wired up</h3><p>Add config/route, add to config/navigation, create components/component.vue</p></div>'
        }
      }
    }
  },

  // login
  '/login': {
    component: require('../components/layouts/mask'),
    subRoutes: {
      '/index': {
        name: 'login/index',
        component: require('../components/login/index')
      }
    }
  }
}
