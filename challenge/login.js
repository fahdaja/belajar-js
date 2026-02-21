const user = [
    { username: 'user1', password: 'pass1' },
    { username: 'user2', password: 'pass2' },
    { username: 'user3', password: 'pass3' }
];
    
function isLogin(inputUser) {
    const foundUser = user.find(u => u.username === inputUser.username && u.password === inputUser.password);

    if (foundUser) {
        console.log('Login successful');
        return true;
    } else {
        console.log('Login failed, incorrect username or password');
        return false;
    }
}

console.log(isLogin({ username: 'user1', password: 'pass2' }));
