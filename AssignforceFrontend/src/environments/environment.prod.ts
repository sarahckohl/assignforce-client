export const environment = {
  production: true,
  name: 'prod',
  baseUrl: 'https://ec2-35-173-212-152.compute-1.amazonaws.com:4200',

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
    redirectUri: 'https://ec2-35-173-212-152.compute-1.amazonaws.com:4200/callback',
    scope: 'openid profile'
  },

  apiUrls: {
    addressController: {
      baseUrl: 'https://ec2-35-173-212-152.compute-1.amazonaws.com:8765/address-service',
      create: '',
      update: '/',
      findAll: '',
      find: '/',
      remove: '/'
    },

    batchController: {
      baseUrl: 'https://ec2-35-173-212-152.compute-1.amazonaws.com:8765/batch-service',
      create: '',
      update: '/',
      findAll: '',
      find: '/',
      remove: '/'
    },

    buildingController: {
      baseUrl: 'https://ec2-35-173-212-152.compute-1.amazonaws.com:8765/building-service',
      create: '',
      update: '/',
      findAll: '',
      find: '/',
      remove: '/'
    },

    locationController: {
      baseUrl: 'https://ec2-35-173-212-152.compute-1.amazonaws.com:8765/location-service',
      create: '',
      update: '/',
      findAll: '',
      find: '/',
      remove: '/'
    },

    roomController: {
      baseUrl: 'https://ec2-35-173-212-152.compute-1.amazonaws.com:8765/room-service',
      create: '',
      update: '/',
      findAll: '',
      find: '/',
      remove: '/'
    },

    curriculumController: {
      baseUrl: 'https://ec2-35-173-212-152.compute-1.amazonaws.com:8765/curr-service',
      create: '',
      update: '/',
      findAll: '',
      find: '/',
      remove: '/'
    },

    focusController: {
      baseUrl: 'https://ec2-35-173-212-152.compute-1.amazonaws.com:8765/focus-service',
      create: '',
      update: '/',
      findAll: '',
      find: '/',
      remove: '/'
    },

    skillController: {
      baseUrl: 'https://ec2-35-173-212-152.compute-1.amazonaws.com:8765/skillsserver',
      create: '',
      update: '/',
      findAll: '',
      find: '/',
      remove: '/'
    },

    trainerController: {
      baseUrl: 'https://ec2-35-173-212-152.compute-1.amazonaws.com:8765/trainer-service',
      create: '',
      update: '/',
      findAll: '',
      find: '/',
      remove: '/'
    },

    settingController: {
      baseUrl: 'https://ec2-35-173-212-152.compute-1.amazonaws.com:8765/settings-service',
      create: '',
      update: '/',
      findAll: '',
      find: '/',
      remove: '/'
    },

    unavailableController: {
      baseUrl: 'https://ec2-35-173-212-152.compute-1.amazonaws.com:8765/unavailabilityserver',
      create: '',
      update: '/',
      findAll: '',
      find: '/',
      remove: '/'
    }
  }
};