import { notification } from 'antd'

export const openNotificationWithIcon = (
  type,
  message,
  description,
  callBack = () => null,
) => {
  notification[type]({
    message,
    description,
    key: Math.random(),
    onClick: () => {
      callBack()
    },
  })
}
