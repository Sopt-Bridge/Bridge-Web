import RequestMain from '../pages/Request/RequestMain.vue'
import RequestWrite from '../pages/Request/RequestWrite.vue'
import Request from '../pages/Request/Request.vue'
import RequestDetail from '../pages/Request/RequestDetail.vue'


export const request = {
    path : '/request',
    name : 'Request',
    component : Request,
    children : [
        {
            path :'',
            component : RequestMain
        },
        {
            path : 'write',
            component : RequestWrite
        },
        {
            path : 'detail/:id',
            component : RequestDetail
        }
    ]
}