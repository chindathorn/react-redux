export const increment = (number) => {
  return {
    type: 'INCREMENT',
    payload: number
  }
}

export const decrement = () => {
  return {
    type: 'DECREMENT'
  }
}

export const log = () => {
  return {
    type: 'SIGN_IN'
  }
}