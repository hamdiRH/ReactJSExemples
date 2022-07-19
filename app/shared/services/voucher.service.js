import axios from 'axios'
import { requestHeader } from '../utils/requestHeader'
import constants from './constants'

export const getVouchers = async ({ sortBy, limit, page }) => {
  const result = await axios.get(
    `${constants.baseApiUrl()}${constants
      .voucher()
      .fetchVouchers(sortBy, limit, page)}`,
    requestHeader(),
  )
  return result.data
}
export const getVoucher = async ({ id }) => {
  const result = await axios.get(
    `${constants.baseApiUrl()}${constants.voucher().fetchVoucherById(id)}`,
    requestHeader(),
  )
  return result.data
}
export const createVoucher = async ({ data, page, limit: paginationLimit }) => {
  const { track, limit, expires } = data.values
  await axios.post(
    `${constants.baseApiUrl()}${constants.voucher().createVoucher}`,
    { track, limit, expires },
    requestHeader(),
  )
  const result = await axios.get(
    `${constants.baseApiUrl()}${constants
      .voucher()
      .fetchVouchers('-createdAt', paginationLimit, page)}`,
    requestHeader(),
  )

  return result.data
}
export const deleteVoucher = async ({ id, body: { limit, page } }) => {
  await axios.delete(
    `${constants.baseApiUrl()}${constants.voucher().deleteVoucher(id)}`,
    requestHeader(),
  )
  const result = await axios.get(
    `${constants.baseApiUrl()}${constants
      .voucher()
      .fetchVouchers('-createdAt', limit, page)}`,
    requestHeader(),
  )

  return result.data
}
export const updateVoucher = async ({ id, ...rest }) => {
  const result = await axios.patch(
    `${constants.baseApiUrl()}${constants.voucher().updateVoucher(id)}`,
    rest,
    requestHeader(),
  )

  return result.data
}
