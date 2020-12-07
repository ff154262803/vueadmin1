import $axios from '@/common/http';
// 获取管理员列表
export async function getUser(page = 1, size = 10) {
  let res = await $axios.get('/userlist', {
    params: {
      page,
      size,
    }
  })
  if (res.code == 200 && res.list) {
    return res.list
  } else {
    return []
  }
}
//添加管理员
export function addUser(data) {
  return $axios.post('/useradd', data)
}
//修改管理员
export function editUser(data) {
  return $axios.post('/useredit', data)
}
//删除管理员
export function delUser(uid) {
  return $axios.post('/userdelete', { uid })
}
