import $axios from "@/common/http"  // 导入封装好的axios!

/**
 * 获取轮播图列表
 */
export async function getBanner() {
  let res = await $axios.get("/bannerlist")
  if (res.code == 200 && res.list) {
    return res.list
  } else {
    return [];
  }
}
/**
 * 添加拓博图
 * @param {*} data  添加的数据
 */
export function addBanner(data) {
  return $axios.post("/banneradd", data)
}
/**
 * 修改规格
 * @param {*} data  修改的数据
 */
export function editBanner(data) {
  return $axios.post("/banneredit", data)
}
/**
 * 删除规格
 * @param {*} id  删除id
 */
export function delBanner(id) {
  return $axios.post("/bannerdelete", { id })
}


