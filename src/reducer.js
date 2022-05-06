const initialState = ['topinfo','bottominfo','Head','Body', 'Foot']

const taskreducer= (state=initialState, action) => {
  

  switch (action.type) {
    case 'ADD':
    return [action.task,action.task,initialState[2],initialState[3],initialState[4],]

    default:
      return initialState
  }
}

export default taskreducer;