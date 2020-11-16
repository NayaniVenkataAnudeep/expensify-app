import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_API_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
};
firebase.initializeApp(firebaseConfig);

const database = firebase.database()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export { firebase, googleAuthProvider, database as default }

//const dbRootRef = firebase.database().ref()

/*
dbRootRef.child('expenses').push({
    description: 'Rent',
    note: 'This was the final payment for that address',
    amount: 109500,
    createdAt: 98283628922
})

dbRootRef.child('expenses').push({
    description: 'Phone Bill',
    note: '',
    amount: 10200,
    createdAt: 98283628922
})

dbRootRef.child('expenses').push({
    description: 'Coffee',
    note: '',
    amount: 1000,
    createdAt: 98283628922
})

dbRootRef.child('expenses').on('value', (snapshot) => {
    const expenses = []

    snapshot.forEach((childSnapshot) => {
        expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
        })
    })

    console.log(expenses)
})

dbRootRef.child('expenses').on('child_added', (snapshot) => {
    console.log(snapshot.key, snapshot.val())
})


dbRootRef.child('expenses').on('child_removed', (snapshot) => {
    console.log(snapshot.key, snapshot.val())
})

dbRootRef.child('expenses').on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val())
})
*/


/*
dbRootRef.set({
    name: 'Anudeep',
    age: 24,
    stressLevel: 6,
    job: {
        title: 'SE',
        company: 'Google'
    },
    location: {
        city: 'Hyderabad',
        country: 'India'
    },
    attributes: {
        height: 6,
        weight: 80
    }
}).then(() => {
    console.log('Data saved successfully.')
}).catch((e) => {
    console.log('Error adding data: ', e)
})
*/

/*
const onValueChange = dbRootRef.on('value', (snapshot) => {
        const val = snapshot.val()
        console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
    }, (e) => {
        console.log('Error while fetching: ', e)
    })

dbRootRef.off(onValueChange)

 dbRootRef.once('value')
    .then((snapshot) => {
        const val = snapshot.val()
        console.log(val)
    }).catch((e) => {
        console.log('Error while fetching: ', e)
    })
*/

/*
dbRootRef.update({
    stressLevel: 9,
    'job/company': 'Amazon',
    'location/city': 'Bangalore'
})
*/

/*
dbRootRef.child('isSingle').remove().then(() => {
    console.log('Data removed successfully.')
}).catch((e) => {
    console.log('Error while removing: ', e)
})
*/