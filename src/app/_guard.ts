// Int(6);
// Int 1 online
// int 2 login || signup
// int 3 new teatre || update
// int 4 new kino || update
// int 5 kino date new || update
// int 6 reserve
// int 7 cansel reserve

const user = JSON.parse(localStorage.getItem('cinemaUser'));
let index;

export const _guardFn = function (param) {
  if ( user ) {
    user['auth'] += '';
    index = user['auth'].charAt(param);
  }
  if ( index === '1' ) {
    return true;
  }
  return false;
};
