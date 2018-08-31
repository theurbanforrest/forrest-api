//added this file from tutorial: https://loopback.io/doc/en/lb2/Connect-your-API-to-a-data-source.html
/*

IMPORTANT: This file executes everytime the API starts up.

If you do an app.models.CustomUser.create([{}]), it will overwrite that model!!

*/

module.exports = function(app) {
  
/*** example data for CustomUser and CustomAccessToken 

  app.dataSources.undercrowd_p1.automigrate('CustomUser', function(err){
    
    app.models.CustomUser.create([{
      realm: "the realm",
      username: "ned stark",
      password: 'winteriscoming',
      email: 'kingned@thenorth.com',
      emailVerified: true,
      verificationToken: 'xyz123'
    }, ], function(err, CustomAccessTokens) {
      if(err) throw err;

      console.log('Model CustomUser created: \n', CustomAccessTokens);
    });

  });


  app.dataSources.undercrowd_p1.automigrate('CustomAccessToken', function(err){
    
    app.models.CustomAccessToken.create([{
      ttl: 45,
      scopes: ['hello','world'],
      created: '2018-06-15',
      userId: 'XYZ123',
      principalType: 'hello'
    }, ], function(err, CustomAccessTokens) {
      if(err) throw err;

      console.log('Model CustomAccessToken created: \n', CustomAccessTokens);
    });

  });


/*** example data for BobaOrder

  app.dataSources.undercrowd_p1.automigrate('BobaOrder', function(err) {
    if (err) throw err;

    app.models.BobaOrder.create([{
      name: 'Johnny Tsunami',
      user_id: 'XYZ123',
      plus_one: 'Kealoha Makalani',
      drink_pref: 'beer and whiskey',
      food_allergies: '',
      order_accepted: true
    }, {
      name: 'Lui Chan',
      user_id: 'XYZ123',
      plus_one: 'Sharon Choi',
      drink_pref: 'red wine',
      food_allergies: '',
      order_accepted: true
    }, ], function(err, coffeeShops) {
      if (err) throw err;

      console.log('Models created: \n', coffeeShops);
    });
  });

***/



/** example data for UserProfile
  app.dataSources.undercrowd_p1.automigrate('UserProfile', function(err){
    if (err) throw err;

    app.models.UserProfile.create([{
      user_id: 'XYZ1',
      user_name: 'theurbanforrest',
      picture: ''

    }, {
      user_id: 'XYZ2',
      user_name: 'stratboi4',
      picture: ''
    }, ], function(err, userProfiles){
      if (err) throw err;

      console.log('Models created: \n', userProfiles)
    })
  });
  **/

  /*example data for CommentEvent model
  app.dataSources.undercrowd_p1.automigrate('CommentEvent', function(err) {
    if (err) throw err;

    app.models.CommentEvent.create([{
      comment_id: 1,
      comment_user_id: 'A56',
      event_name: 'like',
      event_user_id: 'B9',
      event_body: '',
      timestamp: Date.now()
    }, ], function(err, coffeeShops) {
      if (err) throw err;

      console.log('Models created: \n', coffeeShops);
    });
  });

  */

  //example data for RiderComment model

  /** commenting this out so it doesn't overwrite the server when it boots up**/
  
/**

  app.dataSources.undercrowd_p1.automigrate('RiderComment', function(err){
    if (err) throw err;

    app.models.RiderComment.create([{
      user_name: 'Sophie Chan',
      user_id: 'A9',
      comment_body: 'this is my first comment!',
      comment_on_line: 'A',
      station_name: 'High St',
      station_uid: 'row-azcc_nqbi.fphi',
      station_lines: 'A-C-E',
      status: '',
      timestamp: 1514495588990

    }, ], function(err, riderComments) {
      if (err) throw err;

      console.log('Models created: \n', riderComments);
    })
  });


  //example data for Comment model

  /** when this is commented out, it does not overwrite when the server boots up

  app.dataSources.undercrowd_test.automigrate('Comment', function(err) {
    if (err) throw err;

    app.models.Comment.create([{
      user_id: 'A1',
      comment_body: 'omg you gotta be shitting me, where is this train'
    }, {
      user_id: 'A2',
      comment_body: 'A train at Jay St. is stuck in the station..'
    }, {
      user_id: 'A3',
      comment_body: '#MTAsucks'
    }, ], function(err, comments) {
      if (err) throw err;

      console.log('Models created: \n', comments);
    });
  });
  **/
};
