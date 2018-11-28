var mongoose =require('mongoose');
 
var users= mongoose.model('Users',{
    email : {
        type : String,
        unique:true
    },
    fname : {
        type : String,
        required: true
    },
    lname : {
        type : String,
        required: true     
    },
    type : {
        type : String,
        required: true
    },
    password : {
        type : String
    },
    username : {
        type : String,
        required: true,
        unique:true
    },
    contact : {
        type : String
    },
    gender : {
        type : String
    },
    birthdate : {
        type : Date
    },
    country : {
        type : String
    },
    city : {
        type : String
    },
    profession : {
        type : String
    },
    interested_in : {
        type : String
    },
    causes : {
        type : Array
    },
    skills : {
        type : Array
    },
    languages : {
        type : String
    }, 
    hear_about_us : {
        type : String
    },

    ////////////////////////////////////////////////////////
    organisation_name : {
        type : String
    },
    contact_person : {
        type : String
    },
    description : {
        type : String
    },
    mission : {
        type : String
    },
    vision : {
        type : String
    },
    qb_id : {
        type : String
    },
        
    opportunities_enrolled : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Opportunity'
        }
    ],
    opportunities_posted : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Opportunity'
        }
    ]
})

// mongoose.model('Users',users);

module.exports = {users};