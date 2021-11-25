import fetch from "../config/fetch";

/* 登陸 */

export const login = data => fetch('admin/login',data,'post')

/* 退出 */

export const signout = () => fetch('admin/signout');

/* 獲取用戶信息*/

export const getAdminInfo = () => fetch('admin/info')