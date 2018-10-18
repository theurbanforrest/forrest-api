///CRON JOB - Update user_names of RiderComments and CommentEvents
///
///

//Get Start timestamp
let startTimeStamp = Date.now();

//Get all BobaOrders updated since last timestamp
let y = this._getBobaOrdersSince(timestamp);

//For each, update all RiderComments
for(i=0;i<y.length;i++){

	//Get all RiderComments
	let z = this._getRiderComments(y[i]);

	//For each, PUT the name change
	for(k=0;k<z.length;z++){

		this._putRiderComment(z[k]);
	}

}

//For each, update all CommentEvents
for(j=0;j<y.length;j++){

	//Get all CommentEvents
	let aa = this._getCommentEvents(aa[j]);

	//For each, PUT the name change
	for(m=0;m<aa.length;m++){

		this._putCommentEvent(aa[m]);
	}
}

//Get End timestamp

let EndTimeStamp = Date.now();

//Log entry

this._putCronUserNameUpdate(startTimeStamp,EndTimeStamp,y);

/// END CRON JOB
///
///

