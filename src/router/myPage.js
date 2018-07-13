import MyPage from '@/pages/MyPage.vue'
import MyRequest from '@/pages/Request/MyRequest.vue'


export const myPage = {
    path : '/myPage',
    name : 'myPage',
    component : MyPage
}

export const myWrite = {
    path : '/myRequest',
    name : 'myRequest',
    component : MyRequest
}