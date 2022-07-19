// Time converter
export const TimeConverter = milliseconds => {
  const valTime = Math.floor(milliseconds / 1000)
  const days = Math.floor(valTime / 86400)
  const restHour = valTime % 86400
  const hours = Math.floor(restHour / 3600)
  const minutes = Math.floor((valTime % 3600) / 60)
  const seconds = (valTime % 3600) % 60
  return {
    days,
    hours,
    minutes,
    seconds,
  }
}
/* ------------------------------------------------- */
