export const environment = {
  production: true,
  name: 'prod',
  baseUrl: 'https://assignforce.cfapps.io',

  appRoutes: {
    login: 'login',
    overview: 'overview',
    batches: 'batches',
    locations: 'locations',
    curricula: 'curricula',
    trainers: 'trainers',
    profile: 'profile',
    reports: 'reports',
    settings: 'settings',
    callback: 'callback'
  },

  security_config: {
    roles: ['SVP of Technology', 'Trainer'],
    groups: ['Operations'],
    permissions: []
  },

  auth0: {
    namespace: 'https://revature.com/',
    title: 'AssignForce Login',
    clientId: 'tjQhcs0O4mRV2iry6SAO0Gy1YQcBrWCa', //hydra
    domain: 'revature.auth0.com',
    responseType: 'token id_token',
    audience: 'hydra-gateway',
    redirectUri: 'https://assignforce.cfapps.io/callback',
    scope: 'openid profile'
  },

  apiUrls: {
    addressController: {
      baseUrl: 'https://af-data.cfapps.io/addresses',
      create: '',
      update: '/',
      findAll: '',
      find: '/',
      remove: '/'
    },

    batchController: {
      baseUrl: 'https://af-data.cfapps.io/batches',
      create: '',
      update: '/',
      findAll: '',
      find: '/',
      remove: '/'
    },

    buildingController: {
      baseUrl: 'https://af-data.cfapps.io/buildings',
      create: '',
      update: '/',
      findAll: '',
      find: '/',
      remove: '/'
    },

    locationController: {
      baseUrl: 'https://af-data.cfapps.io/locations',
      create: '',
      update: '/',
      findAll: '',
      find: '/',
      remove: '/'
    },

    roomController: {
      baseUrl: 'https://af-data.cfapps.io/rooms',
      create: '',
      update: '/',
      findAll: '',
      find: '/',
      remove: '/'
    },

    curriculumController: {
      baseUrl: 'https://af-data.cfapps.io/curricula',
      create: '',
      update: '/',
      findAll: '',
      find: '/',
      remove: '/'
    },

    focusController: {
      baseUrl: 'https://af-data.cfapps.io/curricula',
      create: '',
      update: '/',
      findAll: '',
      find: '/',
      remove: '/'
    },

    skillController: {
      baseUrl: 'https://af-data.cfapps.io/skills',
      create: '',
      update: '/',
      findAll: '',
      find: '/',
      remove: '/'
    },

    trainerController: {
      baseUrl: 'https://af-data.cfapps.io/trainers',
      create: '',
      update: '/',
      findAll: '',
      find: '/',
      remove: '/'
    },

    settingController: {
      baseUrl: 'https://af-data.cfapps.io/settings',
      create: '',
      update: '/',
      findAll: '',
      find: '/',
      remove: '/'
    },

    unavailableController: {
      baseUrl: 'https://af-data.cfapps.io/unavailables',
      create: '',
      update: '/',
      findAll: '',
      find: '/',
      remove: '/'
    }
  }
};
