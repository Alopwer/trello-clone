import firebase from 'firebase/app'
import store from '../store'
import { createFirestoreInstance } from 'redux-firestore'

const rrfConfig = {

}

const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance
}

export default rrfProps