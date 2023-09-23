export const seePassword = () => {
    const x = document.getElementById('myInput');
    if (x.type === 'password') {
      x.type = 'text';
    } else {
      x.type = 'password';
    }
  };