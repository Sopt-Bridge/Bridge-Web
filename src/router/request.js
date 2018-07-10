import Main from '../pages/Request/RequestMain.vue'
import Write from '../pages/Request/RequestWrite.vue'
// import Request from '../pages/Request/Request.vue'
import Detail from '../pages/Request/RequestDetail.vue'


export const RequestMain = {
  path: '/request',
  name: 'Request',
  component: Main
}

export const RequestWrite = {
  path: '/request/write',
  name: 'write',
  component: Write
}

export const RequestDetail = {
  path: '/request/detail/:id',
  component: Detail
}