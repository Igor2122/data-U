const data = [{
        name: 'John Doe',
        age: 32,
        gender: 'male',
        lookingfor: 'female',
        location: 'Boston MA',
        image: 'https://randomuser.me/api/portraits/men/82.jpg'
    },
    {
        name: 'Jen Smith',
        age: 26,
        gender: 'female',
        lookingfor: 'male',
        location: 'Miami FL',
        image: 'https://randomuser.me/api/portraits/women/82.jpg'
    },
    {
        name: 'William Johnson',
        age: 38,
        gender: 'male',
        lookingfor: 'female',
        location: 'Lynn MA',
        image: 'https://randomuser.me/api/portraits/men/83.jpg'
    }
];

const profiles = profileIterator(data);
//  Next Event 
document.getElementById('next').addEventListener('click', nextProfile);
document.getElementById('previous').addEventListener('click', nextProfile);

// Next Profile display 

function nextProfile(e) {

    let currntProfile = '';
    if (e.target.id === 'next') {
        currntProfile = profiles.next().value;
        console.log(e.target);
    } else if(e.target.id === 'previous') {
        currntProfile = profiles.previous().value;
        console.log(profiles.previous().value);
        console.log(e.target);
    }

    document.getElementById('profileDisplay').innerHTML = `
    <ul class="list-group">
        <li class="list-group-item">Name: ${currntProfile.name}</li>
        <li class="list-group-item">Age: ${currntProfile.age}</li>
        <li class="list-group-item">Location: ${currntProfile.location}</li>
        <li class="list-group-item">Preference: ${currntProfile.gender} Looking for ${currntProfile.lookingfor}</li>
    </ul>
    `;
    document.getElementById('imageDisplay').innerHTML = `
        <img src="${currntProfile.image}" >
    `

}

//   Profile iterator
function profileIterator(profiles) {
    let nextIndex = 0;

    return {
        next: function () {
            return nextIndex < profiles.length ? {
                value: profiles[nextIndex++],
                done: false
            } : {
                done: true
            }

        },
        previous: function () {
            return nextIndex < profiles.length ? {
                value: profiles[nextIndex--],
                done: false
            } : {
                done: true
            }
        }
    };
}



// let character = 'II';

// if(character == character.toUpperCase()){
//     console.log('true');

// } else {
//     console.log('false');

// }