const {Query} = require('./Query')
const {auth} = require('./Mutation/auth')
const {note} = require('./Mutation/note')
const {Subscription} = require('./Subscription')
const {User} = require('./User')
const {Note} = require('./Note')
const {NoteResponse} = require('./NoteResponse')

module.exports = {
  Query,
  Mutation: {
    ...auth,
    ...note,
  },
  Subscription,
  User,
  Note,
  NoteResponse,
}
