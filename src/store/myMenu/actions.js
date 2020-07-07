export function addToMenu(id) {
  return {
    type: 'add_to_menu', payload: id
  } 
}

export function removeFromMenu(id) {
  return {
    type: 'remove_from_menu', payload: id
  } 
}