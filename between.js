
////////////////////////////////////////////////////////////////////////////////
//      __         __                               _
//     / /_  ___  / /__      _____  ___  ____      (_)____
//    / __ \/ _ \/ __/ | /| / / _ \/ _ \/ __ \    / / ___/
//   / /_/ /  __/ /_ | |/ |/ /  __/  __/ / / /   / (__  )
//  /_.___/\___/\__/ |__/|__/\___/\___/_/ /_(_)_/ /____/
//                                           /___/
////////////////////////////////////////////////////////////////////////////////

between = function(input, low_value, high_value, or_equal_to = false) {
  if (or_equal_to) {
    return input => low_value && input <= high_value;
  } else {
    return input > low_value && input < high_value;
  }
}

Number.prototype.between = function(low_value, high_value) {
  return between(this, low_value, high_value)
}

Date.prototype.between = function(low_value, high_value) {
  return between(this, low_value, high_value)
}
