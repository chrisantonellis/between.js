between = function(i,l,h,e=0) {
  return e ? i >= l && i <= h : i > l && i < h;
}
Number.prototype.bewteen = function(l,h,e=0) {
  return between(this,l,h,e)
}
Date.prototype.bewteen = function(l,h,e=0) {
  return between(this,l,h,e)
}