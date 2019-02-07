//added this file from tutorial: https://loopback.io/doc/en/lb2/Connect-your-API-to-a-data-source.html
/*

IMPORTANT: This file executes everytime the API starts up.

If you do an app.models.CustomUser.create([{}]), it will overwrite that model!!

*/

module.exports = function(app) {

  /*** BOOT DATA FOR FORREST'S NEW EVENT MANAGER
  ***
  ***

  /// GROUP

    app.dataSources.undercrowd_p1.automigrate('Group', function(err){
      
      app.models.Group.create([{

        name: 'Cheeky Cheek Entertainment Inc.',
        description: 'Live DJ for weddings',
        business_address: '260 Madison Ave. New York, NY 10016',
        fk_flavor_id: 1,
        fk_status_id: 1,
        fk_customuser_id: 1,
        last_modified: {
          'time': '2019-02-07T00:00:00Z',
          'user': 'DJ Forrest'
        }

      }, ], function(err, Groups) {
        if(err) throw err;

        console.log('Model Group created: \n', Groups);
      });

    });

  /***

  /// PERSON
    app.dataSources.undercrowd_p1.automigrate('Person', function(err){
      
      app.models.Person.create([{

        name: 'DJ Forrest',
        description: "NYC and Hawaii's hottest beat mixer",
        phone: '808-284-0677',
        email: 'djforrest@urbanbeats.com',
        fk_flavor_id: 1,
        fk_status_id: 1,
        fk_group_id: 1,
        fk_customuser_id: 1,
        last_modified: {
          'time': 1543893497082,
          'user': 'DJ Forrest'
        }

      }, ], function(err, Persons) {
        if(err) throw err;

        console.log('Model Person created: \n', Persons);
      });

    });

  /// TASK
    app.dataSources.undercrowd_p1.automigrate('Task', function(err){
      
      app.models.Task.create([{

        name: 'Chan and Ching Wedding',
        description: 'A big wedding of sorts',
        task_date_time: 1543893497082,
        due_date_time: 1543893497082,
        length_in_ms: 50000,
        fk_flavor_id: 1,
        fk_status_id: 1,
        fk_parent_task_id: 1,
        fk_customuser_id: 1,
        last_modified: {
          'time': 1543893497082,
          'user': 'DJ Forrest'
        }

      }, ], function(err, Tasks) {
        if(err) throw err;

        console.log('Model Task created: \n', Tasks);
      });

    });

  /**/
  /// ENTRY
  /**
    app.dataSources.undercrowd_p1.automigrate('Entry', function(err){
      
      app.models.Entry.create([{

        name: 'DJ Forrest - deposit due',
        description: 'Payment 1 of 2 for dj and sound services',
        entry_date_time: 1543893497082,
        due_date_time: 1543893497082,
        amount: '287.50',
        fk_flavor_id: 1,
        fk_status_id: 1,
        fk_task_id: 1,
        fk_customuser_id: 1,
        last_modified: {
          'time': 1543893497082,
          'user': 'DJ Forrest'
        }

      }, ], function(err, Entrys) {
        if(err) throw err;

        console.log('Model Entry created: \n', Entrys);
      });

    });

  /**

  /// STATUS
    app.dataSources.undercrowd_p1.automigrate('Status', function(err){
      
      app.models.Status.create([{

        name: 'active',
        model: 'group',
        description: 'Group that should appear as active',
        last_modified: {
          'time': 1543893497082,
          'user': 'DJ Forrest'
        }

      }, ], function(err, Statuses) {
        if(err) throw err;

        console.log('Model Status created: \n', Statuses);
      });

    });

  /// FLAVOR
    app.dataSources.undercrowd_p1.automigrate('Flavor', function(err){
      
      app.models.Flavor.create([{

        name: 'main contact',
        model: 'person',
        description: 'This Person is the main contact for a Group',
        last_modified: {
          'time': 1543893497082,
          'user': 'DJ Forrest'
        }

      }, ], function(err, Flavors) {
        if(err) throw err;

        console.log('Model Flavor created: \n', Flavors);
      });

    });
  
/*** example data for CustomUser and CustomAccessToken 

  app.dataSources.undercrowd_p1.automigrate('CustomUser', function(err){
    
    app.models.CustomUser.create([{
      realm: "the realm",
      username: "ned stark",
      password: 'winteriscoming',
      email: 'kingned@thenorth.com',
      emailVerified: true,
      verificationToken: 'xyz123'
    }, ], function(err, CustomUsers) {
      if(err) throw err;

      console.log('Model CustomUser created: \n', CustomAccessTokens);
    });

  });

  ***
  ***
  END FORREST'S EVENT MANAGER **/


  /** example data for CustomAccessToken
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
