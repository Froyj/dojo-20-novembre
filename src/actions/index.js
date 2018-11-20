export const userAdd = (name, image) => ({
  type : 'USER_ADD',
  name,
  image
})

export const userRemove = (id) => ({
  type : 'USER_REMOVE',
  id
})