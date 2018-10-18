///CRON Hello World
///
///
///To be run via pm2 every hour at :08 "8 * * * *"


let a = 'cron_start_helloWorld';
let b = Date.now();
let c = 'howzit braddah';

let bb = JSON.stringify({

	'user_id': a,
	'timestamp': b,
	'picture_data': c
})

let accessToken = 'YZwNzRzk8mAcJdrsNpOcUqxfz1ZoRTjer4h7QaocyGDccLhEhVhCUV333BveZElI';

let theUrl = 'https://liquidpineapple.com:3000/api/ProfilePicture?access_token=' + accessToken;
let x = fetch(theUrl,{
	method: 'POST',
	headers: {
	  'Accept': 'application/json',
	  'Content-Type': 'application/json',
	},
	body: bb
})
.then((resp) => {
	console.log('cron_start_helloWorld was successful at ' + Date.now());
})
.catch((err) => {
	console.log('cron_start_helloWorld errored with ' + err + ' at ' + Date.now());
});

