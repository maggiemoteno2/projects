import { combineReducers } from 'redux'
import users from './users/reducer'
import books from './books/reducer'
import computer from './computer/reducer'
import author from './books/reducer'
import {removeComputer} from './actions/index'
import{editTitle} from './actions/index'

export default combineReducers({
  users,
  books,
  computer,
  author,
  removeComputer,
  editTitle,

  
})