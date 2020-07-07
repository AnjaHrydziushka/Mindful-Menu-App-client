export function addToMenu(id) {
  // console.log("Add to cart action")
  return {
    type: 'add_to_menu', payload: id
  } 
}

export function removeFromMenu(id) {
  console.log("Remove from cart action")
  return {
    type: 'remove_from_menu', payload: id
  } 
}

export function emptyMenu() {
  console.log("Empty cart action")
  return {
    type: 'empty_menu'
  } 
}