export function timeSince(date: any) {

  if (typeof date !== 'object') {
    date = new Date(date)
  }
  const dateNow = new Date() as any
  const seconds = Math.floor((dateNow - date) / 1000)

  let interval = seconds / 31536000

  if (interval > 1) {
    const time = interval < 2 ? ' year' : ' years'
    return Math.floor(interval) + time
  }

  interval = seconds / 2592000
  if (interval > 1) {
    const time = interval < 2 ? ' month ago' : ' months ago'
    return Math.floor(interval) + time
  }

  interval = seconds / 86400
  if (interval > 1) {
    const time = interval < 2 ? ' day ago' : ' days ago'
    return Math.floor(interval) + time
  }

  interval = seconds / 3600
  if (interval > 1) {
    const time = interval < 2 ? ' hour ago' : ' hours ago'
    return Math.floor(interval) + time
  }

  interval = seconds / 60
  if (interval > 1) {
    const time = interval < 2 ? ' minute ago' : ' minutes ago'
    return Math.floor(interval) + time
  }

  if (seconds < 0) {
    return 'agora'
  }

  const time = seconds < 2 ? ' second ago' : ' seconds ago'
  return Math.floor(seconds) + time
}