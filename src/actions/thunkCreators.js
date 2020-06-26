import {
    addBoard,
    deleteBoard,
    login,
    logout,
    fetching,
    fetchingSuccess,
    addList,
    deleteList
} from "./index";

const initialize = () => () => {
    
}

export const createBoardThunk = (board) => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore();
        const { boardId, ...boardProps } = board
        dispatch(fetching());
        firestore
            .collection("boards")
            .doc(boardId)
            .set({
                ...boardProps,
                lists: []
            })
            .then(() => {
                dispatch(fetchingSuccess())
                dispatch(addBoard(board))
            });
    };
};

export const deleteBoardThunk = (boardId) => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore();
        dispatch(fetching())
        firestore
            .collection("boards")
            .doc(boardId)
            .delete()
            .then(() => {
                dispatch(fetchingSuccess())
                dispatch(deleteBoard(boardId));
            });
    };
};

export const signInTA = (credentials) => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        firebase
            .auth()
            .signInWithEmailAndPassword(credentials.email, credentials.pwd)
            .then(() => {
                dispatch(login());
            });
    };
};

export const signOutTA = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        firebase
            .auth()
            .signOut()
            .then(() => {
                dispatch(logout());
            });
    };
};

export const signUpTA = (newUser) => (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase()
    const firestore = getFirestore()

    firebase.auth().createUserWithEmailAndPassword(
        newUser.email,
        newUser.pwd
    ).then((res) => {
        firestore.collection('users').doc(res.user.uid).set({
            name: newUser.name,
            email: newUser.email
        })
    }).then(() => {
        // dispatch()
    }).catch(() => {
        console.log('errormsg')
    })
}

const getParentData = async (collection, doc, firestore) => {
    const boardRef = await firestore.collection(collection).doc(doc).get()
    const boardData = await boardRef.data()
    return boardData
}

export const createListThunk = (list) => {
    return async (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore();
        const { listId, ...listProps } = list

        dispatch(fetching())
        firestore.collection("lists").doc(listId).set({
            ...listProps,
            cards: []
        })

        const parentData = getParentData('boards', list.boardId, firestore)
        firestore.collection('boards').doc(list.boardId).set({
            lists: parentData.lists?.concat(listId)
        }, { merge: true })

        dispatch(fetchingSuccess())
        dispatch(addList(list))
    };
};

export const deleteListThunk = (ids) => {
    return async (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore();

        dispatch(fetching())
        debugger
        firestore.collection("lists").doc(ids.listId).delete()

        const parentData = getParentData('boards', ids.boardId, firestore)

        firestore.collection('boards').doc(ids.boardId).set({
            lists: parentData.lists?.filter(id => id !== ids.listId)
        }, { merge: true })

        dispatch(fetchingSuccess())
        dispatch(deleteList(ids))
    };
};