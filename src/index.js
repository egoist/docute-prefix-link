import absolutify from './absolutify'

export default options => ({ event }) => {
  if (options) {
    event.on('content:updated', () => {
      absolutify(options)
    })
  }
}
