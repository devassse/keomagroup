var database = [
    {
        username: 'devasse',
        password: 'supersecret'
    }
];

var newsfeed = [
    {
        userProfile: 'devasse',
        feed: 'Javascript is really interesting'
    },
    {
        userProfile: 'jayson',
        feed: 'I am not born for this all staff'
    }
]

var userInput = prompt('Username: ');
var passInput = prompt('Password: ');

function signIn(user, pass){
    if(userInput === database[0].username && passInput === database[0].password) {
        document.write('Hello', user);
        document.write(newsfeed[0].userProfile);
        document.write(newsfeed[0].feed);
    }else {
        document.write('Sorry, register first!!');
    }
};

signIn(userInput, passInput);