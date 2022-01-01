export function stringDateToUTCDate(dateStr: string) {
  const inputDate = new Date(dateStr)
  return new Date(inputDate.getTime() - inputDate.getTimezoneOffset() * 60000)
}
