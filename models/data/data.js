exports.commonData =
    {
        title: 'iStudentWorld',
        sitename: 'iStudentWorld',
        menu: [
            {
                title: "Home",
                href: "home",
                active: true,
                subItems: []
            },
            {
                title: "Apps",
                href: "apps",
                active: false,
                subItems: []
            },
            {
                title: "About",
                active: false,
                href: "about",
                subItems: []
            },
            {
                title: "Contact",
                href: "contact",
                active: false,
                subItems: []
            },

        ],



        footer: {
            "copyright": "iStudentWorld.com ©",
            "fburl": "https://www.facebook.com/Top-10-Educational-Apps-for-Students-664293083628426/"
        },



    };


exports.home = {
    title: 'Our Exciting Apps for Students',
    carousel: [
        {
            "title": "Mathematical Formulas",
            "img": "/img/appicons/mathformulas.png",
            "desc": "Over 1500 Mathematical formulas in mobile",
            "height": 220,
            "width": 220,
            "buttonurl": "apps#mathformulas",
            "buttonvalue": "More Info"
        },

        {
            "title": "Physics Notes 1 & 2",
            "img": "/img/appicons/physicsnotes.png",
            "desc": "You fall will in love with Physics after reading this notes",
            "height": 220,
            "width": 220,
            "buttonurl": "apps#physicsnotes",
            "buttonvalue": "More Info"
        }

        ,
        {
            "title": "Periodic Table",
            "img": "/img/appicons/periodictable.png",
            "desc": "Chemistry periodic table presented in mobile with simplicity",
            "height": 220,
            "width": 220,
            "buttonurl": "apps#periodictable",
            "buttonvalue": "More Info"
        }
        ,
        {
            "title": "Physics & Chemistry",
            "img": "/img/appicons/physchem.png",
            "desc": "Around 1000 Abbreviations & 1000 Definitions in Physics and Chemistry for students",
            "height": 220,
            "width": 220,
            "buttonurl": "apps#physchem",
            "buttonvalue": "More Info"
        },
        {
            "title": "Techincal Interview Questions",
            "img": "/img/appicons/techfaqs.png",
            "desc": "Awesome app for preparing techincal interview on the go",
            "height": 220,
            "width": 220,
            "buttonurl": "apps#techfaqs",
            "buttonvalue": "More Info"
        }
    ]
};
  

exports.labels={
    questionLbl:"Question",
    answerTypeLbl:"Answer Type",
    correctLbl:"Correct",
    correctAnswerLbl:"Correct Answer",
    answersChoiceLbl:"Answers Choice",
    questionImagesLbl:"Question Images",
    answerImagesLbl:"Answer Images",
    previewLbl:"Preview",
    answersLbl:"Answers",
    answerHere:"Enter Answer Here",
    questionHere:"Enter Question Here",
    IMGPATH: "Images Path"
    
    
}
 



     exports.appslist={

     listOfApps:[
         {
             appname:"Math Formulas",
             appicon:"/img/appicons/mathformulas.png",
             iconwidth:100,
             iconheight:100,
             appdesc:"Mathematical Formulas aggregated in most useful way.The app is best free educational app US, UK, Japan, India, China, Mexico, Germany, Italy, Singapore and Hongkong. The App covers topics like 1)Basics, 2)Numbers, 3)Algebra, 4)Trigonometry, 5)Calculus, 6)Sets, 7)Matrix, 8 Geometry, 9)Statistics, 10)Boolean Algebra The app is continuously updated with latest details and added with new topics ",
             markets:[
                 {icon:'/img/store/appstore.png', url:'https://itunes.apple.com/app/math-formulas-free/id542202431?mt=8',widht:100,height:30},
                 {icon:'/img/store/googleplay.png', url:'https://play.google.com/store/apps/details?id=com.whitesof.mathformulas',widht:100,height:30},
                 {icon:'/img/store/blackberry.png', url:'http://appworld.blackberry.com/webstore/content/28842905/',widht:100,height:30}
             ]
         },
        {
             appname:"Periodic Table",
             appicon:"/img/appicons/periodictable.png",
             iconwidth:100,
             iconheight:100,
             appdesc:"The periodic table is a tabular display of the chemical elements, organized on the basis of their properties. Elements are presented in increasing atomic number. The main body of the table is a 18 × 7 grid, with gaps included in to keep elements with similar properties together, such as the halogens and the noble gases. These gaps form four distinct rectangular areas or blocks. The f-block is not included in the main table, but rather is usually floated below, as an inline f-block would make the table impractically wide. The periodic table accurately predicts the properties of various elements and the relations between properties. As a result, it provides a useful framework for analyzing chemical behavior, and is widely used in chemistry and other sciences.",
             markets:[
                {icon:'/img/store/appstore.png', url:'http://itunes.apple.com/app/periodic-table-!/id536810204?mt=8',widht:100,height:30},
                 {icon:'/img/store/googleplay.png', url:'https://play.google.com/store/apps/details?id=com.whitesof.periodictable',widht:100,height:30}
             ]
         },
         {
             appname:"Physics Notes1",
             appicon:"/img/appicons/physicsnotes.png",
             iconwidth:100,
             iconheight:100,
             appdesc:"The Physics Notes app is like a physics running notes for students. The app will be aggregation of definitions and formulas for students in most systematically The app covers: 1) Basics of Physics 2) Units, dimensions and physical constants. 3) Motion in one, two three dimensions. 4) Laws of motion, Circular, Relative and projectile motion. 5) Friction, dynamics of rigid bodies. 6) Gravitation 7) Work, Energy and Power. 8) Conservation laws of energy 9) Momentum and Impulse 10) Collisions. 11) Properties of matter 12) Surface Energy and Surface tension 13) Kinetic theory of gases 14) Thermodynamics 15) Oscillations and Simple harmonic motion 15) Waves, and more topics to come.",
             markets:[
                 {icon:'/img/store/appstore.png', url:'https://itunes.apple.com/app/physics-notes/id659578410?mt=8',widht:100,height:30},
                 {icon:'/img/store/googleplay.png', url:'https://play.google.com/store/apps/details?id=com.whitesof.physicsnotes',widht:100,height:30},
                 {icon:'/img/store/blackberry.png', url:'http://appworld.blackberry.com/webstore/content/29287892/',widht:100,height:30}
             ]
         },
         {
             appname:"Physics Notes2",
             appicon:"/img/appicons/physicsnotes2.png",
             iconwidth:100,
             iconheight:100,
             appdesc:"The Physics Notes 2 app is just physics running notes for students.(extension of Physics notes 1 app) The app will be aggregation of definitions and formulas for students in most systematically The app covers: 1) Electric charge & electric field 2) Electrostatic field and capacitance 3) Current electricity 4) Moving charges and Magnetism 5) Magnetism and Matter 6) Electromagnetic induction 7) Alternating Current 8) Electromagnetic waves",
             markets:[
                  {icon:'/img/store/appstore.png', url:'https://itunes.apple.com/app/physics-notes-2/id741292791?ls=1&mt=8',widht:100,height:30},
                 {icon:'/img/store/googleplay.png', url:'https://play.google.com/store/apps/details?id=com.whitesof.physicsnotes2',widht:100,height:30},
                 {icon:'/img/store/blackberry.png', url:'http://appworld.blackberry.com/webstore/content/41113889/',widht:100,height:30}
             ]
         },
         {
             appname:"Physics & Chemistry Abbrs & Defs",
             appicon:"/img/appicons/physchem.png",
             iconwidth:100,
             iconheight:100,
             appdesc:'Around 1000 Abbreviations & 1000 Definitions in Physics and Chemistry for students. Unique collection of "Physics" and "Chemistry" Abbreviations and Definitions for students who want to keep a reference in mobile. The app covers most of the Scientific definitions used in physics and chemistry.',
             markets:[
                  {icon:'/img/store/appstore.png', url:'https://itunes.apple.com/app/physics-chemistry-abbr-defs/id813704386?ls=8',widht:100,height:30},
                 {icon:'/img/store/googleplay.png', url:'https://play.google.com/store/apps/details?id=com.whitesof.physicschemistry',widht:100,height:30},
                 {icon:'/img/store/blackberry.png', url:'http://appworld.blackberry.com/webstore/content/29704889/',widht:100,height:30}
             ]
         },
         {
             appname:"Tech Faqs",
             appicon:"/img/appicons/techfaqs.png",
             iconwidth:100,
             iconheight:100,
             appdesc:"The best app with all technical interview FAQs at one place.The app is having currently the following topics,and much more to come. 1) Database Questions 2) Hibernate Questions 3) Java & OOPS Questions 4) JDBC Questions 5) JEE Questions 6) Servlets Questions 7) JSP Questions 8) Java server faces (JSF) Questions 9) Javascript Questions 10) Portal Technologies Questions 11) Struts Framework Questions 12) Springs Framework Questions 13) Webservices Questions 14) TIBCO Questions 15) XML Questions",
             markets:[
                  {icon:'/img/store/appstore.png', url:'https://itunes.apple.com/app/interview-faqs/id652964569?mt=8',widht:100,height:30},
                 {icon:'/img/store/googleplay.png', url:'https://play.google.com/store/apps/details?id=com.whitesof.interviewfaqs',widht:100,height:30},
                 {icon:'/img/store/blackberry.png', url:'http://appworld.blackberry.com/webstore/content/29704889/',widht:100,height:30}
             ]
         },

          {
             appname:"Soccer fun",
             appicon:"/img/appicons/soccerfun.png",
             iconwidth:100,
             iconheight:100,
             appdesc:"Soccer fun is an awesome mobile game , which is a real refreshment for busy life. The game is very simple and easy to play,easy to understand, no brain teasing, no blood shed, no hidden clues, its just simple fun and entertainment game targetted for all ages of audience. Everyone likes soccer, how is it if you are playing soccer in different way , a completely different platform where you have more than one soccer ball and only one player i.e you. Soccer fun is the mobile modified version of the Soccer game. You just need to tilt or rotate your device to move all soccer balls to center of middle circle. The game having very good user interface which is good fit for iPhone, iPad and iPod applications.",
             markets:[
                  {icon:'/img/store/appstore.png', url:'http://itunes.apple.com/app/soccer-fun-free/id496518359?mt=8',widht:100,height:30},
                 {icon:'/img/store/googleplay.png', url:'https://play.google.com/store/apps/details?id=com.whitesof.soccerfunfree',widht:100,height:30}
             ]
         },
         {
             appname:"Memorize Icon",
             appicon:"/img/appicons/memorizeicon.png",
             iconwidth:100,
             iconheight:30,
             appdesc:"You will love it :-) Memorize Icon is a famous memory test game, where player has to remember icons which are placed randomly on board. The memorize icons game is very good for memory and speed test of the player and it improves the same in kids . The game is suitable for all ages of people, and is a real entertainment and puzzle game for all. The game uses animal icons which are very good look and feel and you can find a difference in playing the game.",
             markets:[
                  {icon:'/img/store/appstore.png', url:'http://itunes.apple.com/app/memorize-icon/id530849575?mt=8',widht:100,height:30},
                 {icon:'/img/store/googleplay.png', url:'https://play.google.com/store/apps/details?id=com.whitesof.memorizeicon',widht:100,height:30}
             ]
         }

     ]
 };


exports.about= [
       'iStudentWorld is a Education website offering free services to students around the world. Our aim is to provide students a unique platform for easy learing in developing their skills',
       'This content is copyright of iStudentWorld © {year}. All rights reserved.',
        'Any redistribution or reproduction of part or all of the contents in any form is prohibited other than the following:',
        'you may print or download to a local hard disk extracts for your personal and non-commercial use only you may copy the content to individual third parties for their personal use, but only if you acknowledge the website as the source of the material',
        'You may not, except with our express written permission, distribute or commercially exploit the content. Nor may you transmit it or store it in any other website or other form of electronic retrieval system.'
     ];


   exports.contact={
            title:"Contact Us",
            name:"Enter Your Name",nameph:"Enter Your Name",
            email:"Your e-mail address", emailph:"Enter Your Email",
            subject:"Subject",  subjectph:"Enter Subject",
            message:"Message",  messageph:"Enter Your Message",
            submittitle:"Send Message" ,messagerows:"5",
            successMessage:"Email sent successfully",
            failMessage:"Email sent failed, Please try again!"
   }
