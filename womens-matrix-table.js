function change_year(year){
    document.getElementById("yearofstudy").innerHTML = year;
}

function find_winner(){
    
    let current_year = 2024;
    let study_year = document.getElementById("yearofstudy").innerHTML;
    if (study_year == 2023){
        var team_stats = [{name:"South Carolina Gamecocks",Round_of_32:'100.0%',Sweet_Sixteen:'100.0%',Elite_Eight:'99.97%',Final_Four:'99.84%',Championship:'96.62%',Champion:'90.33%'}, 
        {name:"LSU Tigers",Round_of_32:'100.0%',Sweet_Sixteen:'99.97%',Elite_Eight:'99.52%',Final_Four:'97.47%',Championship:'95.16%',Champion:'6.62%'}, 
        {name:"Iowa Hawkeyes",Round_of_32:'99.99%',Sweet_Sixteen:'93.99%',Elite_Eight:'78.32%',Final_Four:'52.83%',Championship:'3.37%',Champion:'2.58%'}, 
        {name:"Indiana Hoosiers",Round_of_32:'99.99%',Sweet_Sixteen:'99.99%',Elite_Eight:'54.51%',Final_Four:'2.09%',Championship:'1.63%',Champion:'0.25%'}, 
        {name:"UConn Huskies",Round_of_32:'100.0%',Sweet_Sixteen:'100.0%',Elite_Eight:'99.15%',Final_Four:'77.82%',Championship:'2.77%',Champion:'0.15%'}, 
        {name:"Cleveland State Vikings",Round_of_32:'98.66%',Sweet_Sixteen:'82.64%',Elite_Eight:'42.17%',Final_Four:'0.29%',Championship:'0.23%',Champion:'0.04%'}, 
        {name:"Florida Gulf Coast Eagles",Round_of_32:'99.67%',Sweet_Sixteen:'16.83%',Elite_Eight:'3.32%',Final_Four:'0.06%',Championship:'0.05%',Champion:'0.02%'}, 
        {name:"Maryland Terrapins",Round_of_32:'97.63%',Sweet_Sixteen:'93.57%',Elite_Eight:'9.83%',Final_Four:'0.14%',Championship:'0.01%',Champion:'0.01%'}, 
        {name:"Utah Utes",Round_of_32:'99.98%',Sweet_Sixteen:'90.76%',Elite_Eight:'0.46%',Final_Four:'0.09%',Championship:'0.08%',Champion:'0.0%'}, 
        {name:"Virginia Tech Hokies",Round_of_32:'100.0%',Sweet_Sixteen:'65.38%',Elite_Eight:'65.06%',Final_Four:'8.23%',Championship:'0.06%',Champion:'0.0%'}, 
        {name:"Iowa State Cyclones",Round_of_32:'97.52%',Sweet_Sixteen:'72.56%',Elite_Eight:'0.46%',Final_Four:'0.21%',Championship:'0.02%',Champion:'0.0%'}, 
        {name:"Stanford Cardinal",Round_of_32:'100.0%',Sweet_Sixteen:'92.82%',Elite_Eight:'88.66%',Final_Four:'36.59%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"South Dakota State Jackrabbits",Round_of_32:'88.15%',Sweet_Sixteen:'32.13%',Elite_Eight:'31.94%',Final_Four:'12.91%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Duke Blue Devils",Round_of_32:'99.8%',Sweet_Sixteen:'65.83%',Elite_Eight:'18.02%',Final_Four:'7.31%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Middle Tennessee Blue Raiders",Round_of_32:'73.97%',Sweet_Sixteen:'32.72%',Elite_Eight:'1.83%',Final_Four:'0.83%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Ole Miss Rebels",Round_of_32:'31.91%',Sweet_Sixteen:'2.7%',Elite_Eight:'2.33%',Final_Four:'0.75%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Gonzaga Bulldogs",Round_of_32:'68.09%',Sweet_Sixteen:'4.48%',Elite_Eight:'3.92%',Final_Four:'0.62%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Florida State Seminoles",Round_of_32:'99.84%',Sweet_Sixteen:'5.97%',Elite_Eight:'1.83%',Final_Four:'0.6%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"USC Trojans",Round_of_32:'11.85%',Sweet_Sixteen:'2.49%',Elite_Eight:'2.49%',Final_Four:'0.44%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Ohio State Buckeyes",Round_of_32:'86.3%',Sweet_Sixteen:'82.73%',Elite_Eight:'0.85%',Final_Four:'0.39%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Texas Longhorns",Round_of_32:'93.33%',Sweet_Sixteen:'21.85%',Elite_Eight:'0.71%',Final_Four:'0.23%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Drake Bulldogs",Round_of_32:'94.5%',Sweet_Sixteen:'74.96%',Elite_Eight:'4.14%',Final_Four:'0.16%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"East Carolina Pirates",Round_of_32:'6.67%',Sweet_Sixteen:'2.43%',Elite_Eight:'0.24%',Final_Four:'0.08%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Oklahoma Sooners",Round_of_32:'96.51%',Sweet_Sixteen:'77.96%',Elite_Eight:'0.03%',Final_Four:'0.02%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Notre Dame Fighting Irish",Round_of_32:'100.0%',Sweet_Sixteen:'97.75%',Elite_Eight:'88.78%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Creighton Bluejays",Round_of_32:'35.73%',Sweet_Sixteen:'1.9%',Elite_Eight:'1.06%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Mississippi State Bulldogs",Round_of_32:'64.27%',Sweet_Sixteen:'0.35%',Elite_Eight:'0.33%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Tennessee Lady Volunteers",Round_of_32:'100.0%',Sweet_Sixteen:'25.53%',Elite_Eight:'0.05%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"UNLV Lady Rebels",Round_of_32:'75.96%',Sweet_Sixteen:'0.03%',Elite_Eight:'0.02%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"UCLA Bruins",Round_of_32:'67.38%',Sweet_Sixteen:'13.32%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"James Madison Dukes",Round_of_32:'13.7%',Sweet_Sixteen:'12.29%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Sacramento State Hornets",Round_of_32:'32.62%',Sweet_Sixteen:'7.05%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Princeton Tigers",Round_of_32:'44.88%',Sweet_Sixteen:'6.97%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"St. John's Red Storm",Round_of_32:'33.94%',Sweet_Sixteen:'4.07%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Arizona Wildcats",Round_of_32:'82.23%',Sweet_Sixteen:'2.71%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"NC State Wolfpack",Round_of_32:'55.12%',Sweet_Sixteen:'2.27%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"West Virginia Mountaineers",Round_of_32:'17.77%',Sweet_Sixteen:'1.95%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Toledo Rockets",Round_of_32:'2.48%',Sweet_Sixteen:'1.91%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Holy Cross Crusaders",Round_of_32:'2.37%',Sweet_Sixteen:'1.77%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Portland Pilots",Round_of_32:'3.49%',Sweet_Sixteen:'1.67%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Colorado Buffaloes",Round_of_32:'26.03%',Sweet_Sixteen:'1.35%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"North Carolina Tar Heels",Round_of_32:'66.06%',Sweet_Sixteen:'0.91%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Louisville Cardinals",Round_of_32:'5.5%',Sweet_Sixteen:'0.76%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Villanova Wildcats",Round_of_32:'1.34%',Sweet_Sixteen:'0.53%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Iona Gaels",Round_of_32:'0.2%',Sweet_Sixteen:'0.1%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Georgia Lady Bulldogs",Round_of_32:'0.16%',Sweet_Sixteen:'0.03%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"SE Louisiana Lady Lions",Round_of_32:'0.01%',Sweet_Sixteen:'0.01%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Tennessee Tech Golden Eagles",Round_of_32:'0.01%',Sweet_Sixteen:'0.01%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"South Florida Bulls",Round_of_32:'88.63%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Oklahoma State Cowgirls",Round_of_32:'84.14%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Baylor Bears",Round_of_32:'75.88%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Alabama Crimson Tide",Round_of_32:'24.12%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Michigan Wolverines",Round_of_32:'24.04%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Miami Hurricanes",Round_of_32:'15.86%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Marquette Golden Eagles",Round_of_32:'11.37%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Washington State Cougars",Round_of_32:'0.33%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Gardner-Webb Runnin' Bulldogs",Round_of_32:'0.02%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Norfolk State Spartans",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Southern Utah Thunderbirds",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Sacred Heart Pioneers",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Hawai'i Rainbow Wahine",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Chattanooga Mocs",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Saint Louis Billikens",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Vermont Catamounts",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        ];
    }
    else if (study_year == 2022){
        var team_stats = [{name:"South Carolina Gamecocks",Round_of_32:'100.0%',Sweet_Sixteen:'100.0%',Elite_Eight:'90.66%',Final_Four:'77.08%',Championship:'76.63%',Champion:'53.23%'}, 
        {name:"NC State Wolfpack",Round_of_32:'100.0%',Sweet_Sixteen:'100.0%',Elite_Eight:'99.54%',Final_Four:'95.12%',Championship:'86.44%',Champion:'37.61%'}, 
        {name:"Iowa Hawkeyes",Round_of_32:'100.0%',Sweet_Sixteen:'98.86%',Elite_Eight:'31.0%',Final_Four:'8.39%',Championship:'8.11%',Champion:'2.8%'}, 
        {name:"Texas Longhorns",Round_of_32:'98.28%',Sweet_Sixteen:'92.61%',Elite_Eight:'45.39%',Final_Four:'28.5%',Championship:'5.09%',Champion:'1.87%'}, 
        {name:"North Carolina Tar Heels",Round_of_32:'97.47%',Sweet_Sixteen:'96.24%',Elite_Eight:'7.66%',Final_Four:'4.66%',Championship:'4.45%',Champion:'1.77%'}, 
        {name:"Iowa State Cyclones",Round_of_32:'99.96%',Sweet_Sixteen:'96.7%',Elite_Eight:'66.1%',Final_Four:'8.93%',Championship:'8.84%',Champion:'0.88%'}, 
        {name:"Jackson State Lady Tigers",Round_of_32:'84.34%',Sweet_Sixteen:'66.45%',Elite_Eight:'41.74%',Final_Four:'28.39%',Championship:'5.43%',Champion:'0.57%'}, 
        {name:"Princeton Tigers",Round_of_32:'99.84%',Sweet_Sixteen:'80.31%',Elite_Eight:'27.76%',Final_Four:'4.14%',Championship:'2.32%',Champion:'0.52%'}, 
        {name:"Stephen F. Austin Ladyjacks",Round_of_32:'2.53%',Sweet_Sixteen:'2.51%',Elite_Eight:'1.41%',Final_Four:'0.94%',Championship:'0.89%',Champion:'0.52%'}, 
        {name:"Florida Gulf Coast Eagles",Round_of_32:'45.25%',Sweet_Sixteen:'34.32%',Elite_Eight:'16.48%',Final_Four:'6.93%',Championship:'0.22%',Champion:'0.13%'}, 
        {name:"IUPUI Jaguars",Round_of_32:'88.86%',Sweet_Sixteen:'84.48%',Elite_Eight:'0.36%',Final_Four:'0.21%',Championship:'0.17%',Champion:'0.06%'}, 
        {name:"Maryland Terrapins",Round_of_32:'93.35%',Sweet_Sixteen:'33.15%',Elite_Eight:'13.85%',Final_Four:'6.89%',Championship:'0.07%',Champion:'0.04%'}, 
        {name:"Louisville Cardinals",Round_of_32:'99.91%',Sweet_Sixteen:'57.32%',Elite_Eight:'55.7%',Final_Four:'17.39%',Championship:'0.67%',Champion:'0.0%'}, 
        {name:"Baylor Bears",Round_of_32:'100.0%',Sweet_Sixteen:'91.73%',Elite_Eight:'77.27%',Final_Four:'61.88%',Championship:'0.27%',Champion:'0.0%'}, 
        {name:"UConn Huskies",Round_of_32:'99.96%',Sweet_Sixteen:'97.05%',Elite_Eight:'69.69%',Final_Four:'0.21%',Championship:'0.13%',Champion:'0.0%'}, 
        {name:"UCF Knights",Round_of_32:'99.64%',Sweet_Sixteen:'2.91%',Elite_Eight:'0.59%',Final_Four:'0.22%',Championship:'0.1%',Champion:'0.0%'}, 
        {name:"BYU Cougars",Round_of_32:'100.0%',Sweet_Sixteen:'59.29%',Elite_Eight:'10.38%',Final_Four:'4.2%',Championship:'0.07%',Champion:'0.0%'}, 
        {name:"South Dakota Coyotes",Round_of_32:'98.83%',Sweet_Sixteen:'8.26%',Elite_Eight:'6.1%',Final_Four:'4.07%',Championship:'0.07%',Champion:'0.0%'}, 
        {name:"Oklahoma Sooners",Round_of_32:'11.14%',Sweet_Sixteen:'9.98%',Elite_Eight:'0.1%',Final_Four:'0.1%',Championship:'0.03%',Champion:'0.0%'}, 
        {name:"Stanford Cardinal",Round_of_32:'100.0%',Sweet_Sixteen:'98.09%',Elite_Eight:'62.78%',Final_Four:'24.31%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Gonzaga Bulldogs",Round_of_32:'64.02%',Sweet_Sixteen:'30.4%',Elite_Eight:'28.4%',Final_Four:'7.64%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Michigan Wolverines",Round_of_32:'100.0%',Sweet_Sixteen:'40.71%',Elite_Eight:'6.25%',Final_Four:'3.88%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Virginia Tech Hokies",Round_of_32:'54.75%',Sweet_Sixteen:'31.9%',Elite_Eight:'6.25%',Final_Four:'3.44%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Ohio State Buckeyes",Round_of_32:'76.94%',Sweet_Sixteen:'24.59%',Elite_Eight:'8.46%',Final_Four:'0.99%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Tennessee Lady Volunteers",Round_of_32:'71.16%',Sweet_Sixteen:'58.73%',Elite_Eight:'4.16%',Final_Four:'0.73%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Missouri State Lady Bears",Round_of_32:'23.06%',Sweet_Sixteen:'1.74%',Elite_Eight:'0.34%',Final_Four:'0.24%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"LSU Tigers",Round_of_32:'15.66%',Sweet_Sixteen:'7.22%',Elite_Eight:'3.29%',Final_Four:'0.23%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Nebraska Cornhuskers",Round_of_32:'35.98%',Sweet_Sixteen:'12.27%',Elite_Eight:'11.66%',Final_Four:'0.21%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Utah Utes",Round_of_32:'95.01%',Sweet_Sixteen:'6.34%',Elite_Eight:'0.72%',Final_Four:'0.05%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Kansas Jayhawks",Round_of_32:'71.45%',Sweet_Sixteen:'1.87%',Elite_Eight:'0.54%',Final_Four:'0.02%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Georgia Tech Yellow Jackets",Round_of_32:'28.55%',Sweet_Sixteen:'0.04%',Elite_Eight:'0.01%',Final_Four:'0.01%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Dayton Flyers",Round_of_32:'73.8%',Sweet_Sixteen:'2.68%',Elite_Eight:'2.42%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Indiana Hoosiers",Round_of_32:'99.53%',Sweet_Sixteen:'19.68%',Elite_Eight:'1.96%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Georgia Lady Bulldogs",Round_of_32:'26.2%',Sweet_Sixteen:'0.62%',Elite_Eight:'0.39%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"UNLV Lady Rebels",Round_of_32:'93.09%',Sweet_Sixteen:'1.25%',Elite_Eight:'0.27%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Colorado Buffaloes",Round_of_32:'48.34%',Sweet_Sixteen:'1.12%',Elite_Eight:'0.09%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Delaware Blue Hens",Round_of_32:'6.65%',Sweet_Sixteen:'0.63%',Elite_Eight:'0.09%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Buffalo Bulls",Round_of_32:'28.84%',Sweet_Sixteen:'17.96%',Elite_Eight:'0.07%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Fairfield Stags",Round_of_32:'1.72%',Sweet_Sixteen:'1.02%',Elite_Eight:'0.06%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"UAlbany Great Danes",Round_of_32:'0.09%',Sweet_Sixteen:'0.01%',Elite_Eight:'0.01%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Oregon Ducks",Round_of_32:'88.55%',Sweet_Sixteen:'20.73%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Notre Dame Fighting Irish",Round_of_32:'97.08%',Sweet_Sixteen:'5.51%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Belmont Bruins",Round_of_32:'11.45%',Sweet_Sixteen:'2.58%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Mercer Bears",Round_of_32:'0.04%',Sweet_Sixteen:'0.04%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Arkansas Razorbacks",Round_of_32:'4.99%',Sweet_Sixteen:'0.03%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Massachusetts Minutewomen",Round_of_32:'2.92%',Sweet_Sixteen:'0.03%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Creighton Bluejays",Round_of_32:'51.66%',Sweet_Sixteen:'0.02%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Ole Miss Rebels",Round_of_32:'1.17%',Sweet_Sixteen:'0.01%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Kentucky Wildcats",Round_of_32:'0.16%',Sweet_Sixteen:'0.01%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Kansas State Wildcats",Round_of_32:'99.94%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"South Florida Bulls",Round_of_32:'99.41%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Arizona Wildcats",Round_of_32:'6.91%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Miami Hurricanes",Round_of_32:'0.59%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Charlotte 49ers",Round_of_32:'0.47%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Florida Gators",Round_of_32:'0.36%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Washington State Cougars",Round_of_32:'0.06%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"UT Arlington Mavericks",Round_of_32:'0.04%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Howard Bison",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Illinois State Redbirds",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Villanova Wildcats",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"American University Eagles",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Hawai'i Rainbow Wahine",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Montana State Bobcats",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Longwood Lancers",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        ];
    }
    else if (study_year == 2021){
        var team_stats = [{name:"UConn Huskies",Round_of_32:'100.0%',Sweet_Sixteen:'100.0%',Elite_Eight:'99.96%',Final_Four:'84.23%',Championship:'84.23%',Champion:'75.4%'}, 
        {name:"Baylor Bears",Round_of_32:'100.0%',Sweet_Sixteen:'100.0%',Elite_Eight:'99.54%',Final_Four:'15.73%',Championship:'15.72%',Champion:'13.69%'}, 
        {name:"Maryland Terrapins",Round_of_32:'99.99%',Sweet_Sixteen:'99.99%',Elite_Eight:'99.19%',Final_Four:'55.36%',Championship:'46.21%',Champion:'9.99%'}, 
        {name:"Stephen F. Austin Ladyjacks",Round_of_32:'99.65%',Sweet_Sixteen:'91.79%',Elite_Eight:'25.71%',Final_Four:'12.88%',Championship:'9.86%',Champion:'0.68%'}, 
        {name:"South Carolina Gamecocks",Round_of_32:'100.0%',Sweet_Sixteen:'99.99%',Elite_Eight:'74.24%',Final_Four:'31.74%',Championship:'22.0%',Champion:'0.16%'}, 
        {name:"Stanford Cardinal",Round_of_32:'100.0%',Sweet_Sixteen:'100.0%',Elite_Eight:'96.09%',Final_Four:'95.75%',Championship:'21.9%',Champion:'0.06%'}, 
        {name:"Troy Trojans",Round_of_32:'21.21%',Sweet_Sixteen:'21.17%',Elite_Eight:'20.02%',Final_Four:'5.48%',Championship:'0.01%',Champion:'0.01%'}, 
        {name:"Arkansas Razorbacks",Round_of_32:'93.83%',Sweet_Sixteen:'35.44%',Elite_Eight:'3.29%',Final_Four:'3.27%',Championship:'0.01%',Champion:'0.01%'}, 
        {name:"Iowa Hawkeyes",Round_of_32:'99.75%',Sweet_Sixteen:'53.8%',Elite_Eight:'0.04%',Final_Four:'0.04%',Championship:'0.04%',Champion:'0.0%'}, 
        {name:"Louisville Cardinals",Round_of_32:'96.4%',Sweet_Sixteen:'95.41%',Elite_Eight:'91.47%',Final_Four:'0.29%',Championship:'0.01%',Champion:'0.0%'}, 
        {name:"Lehigh Mountain Hawks",Round_of_32:'25.26%',Sweet_Sixteen:'3.78%',Elite_Eight:'0.05%',Final_Four:'0.01%',Championship:'0.01%',Champion:'0.0%'}, 
        {name:"NC State Wolfpack",Round_of_32:'90.42%',Sweet_Sixteen:'89.92%',Elite_Eight:'83.66%',Final_Four:'73.86%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Texas A&M Aggies",Round_of_32:'78.79%',Sweet_Sixteen:'78.61%',Elite_Eight:'73.71%',Final_Four:'6.87%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"North Carolina A&T Aggies",Round_of_32:'9.58%',Sweet_Sixteen:'9.26%',Elite_Eight:'8.42%',Final_Four:'6.54%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Gonzaga Bulldogs",Round_of_32:'100.0%',Sweet_Sixteen:'58.78%',Elite_Eight:'5.74%',Final_Four:'4.61%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Rutgers Scarlet Knights",Round_of_32:'94.6%',Sweet_Sixteen:'47.23%',Elite_Eight:'4.92%',Final_Four:'1.03%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Indiana Hoosiers",Round_of_32:'99.98%',Sweet_Sixteen:'41.22%',Elite_Eight:'1.5%',Final_Four:'1.02%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"South Florida Bulls",Round_of_32:'100.0%',Sweet_Sixteen:'0.82%',Elite_Eight:'0.68%',Final_Four:'0.58%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Missouri State Lady Bears",Round_of_32:'84.56%',Sweet_Sixteen:'54.99%',Elite_Eight:'0.58%',Final_Four:'0.57%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"UCF Knights",Round_of_32:'69.85%',Sweet_Sixteen:'1.55%',Elite_Eight:'0.99%',Final_Four:'0.04%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"UC Davis Aggies",Round_of_32:'15.44%',Sweet_Sixteen:'9.56%',Elite_Eight:'0.04%',Final_Four:'0.04%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Georgia Lady Bulldogs",Round_of_32:'99.99%',Sweet_Sixteen:'60.93%',Elite_Eight:'2.87%',Final_Four:'0.03%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Marist Red Foxes",Round_of_32:'3.6%',Sweet_Sixteen:'2.93%',Elite_Eight:'2.71%',Final_Four:'0.01%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Arizona Wildcats",Round_of_32:'99.27%',Sweet_Sixteen:'52.21%',Elite_Eight:'1.15%',Final_Four:'0.01%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"UCLA Bruins",Round_of_32:'100.0%',Sweet_Sixteen:'99.99%',Elite_Eight:'0.81%',Final_Four:'0.01%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"South Dakota Coyotes",Round_of_32:'38.34%',Sweet_Sixteen:'18.82%',Elite_Eight:'1.91%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Florida Gulf Coast Eagles",Round_of_32:'70.36%',Sweet_Sixteen:'68.84%',Elite_Eight:'0.46%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Iowa State Cyclones",Round_of_32:'94.3%',Sweet_Sixteen:'0.22%',Elite_Eight:'0.19%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Northwestern Wildcats",Round_of_32:'30.15%',Sweet_Sixteen:'0.11%',Elite_Eight:'0.05%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Stony Brook Seawolves",Round_of_32:'0.73%',Sweet_Sixteen:'0.38%',Elite_Eight:'0.01%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Idaho State Bengals",Round_of_32:'80.2%',Sweet_Sixteen:'43.66%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Michigan Wolverines",Round_of_32:'29.64%',Sweet_Sixteen:'24.78%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Oregon Ducks",Round_of_32:'61.66%',Sweet_Sixteen:'20.25%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Tennessee Lady Volunteers",Round_of_32:'97.9%',Sweet_Sixteen:'6.38%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"West Virginia Mountaineers",Round_of_32:'74.74%',Sweet_Sixteen:'4.43%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Kentucky Wildcats",Round_of_32:'19.8%',Sweet_Sixteen:'2.54%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"BYU Cougars",Round_of_32:'5.4%',Sweet_Sixteen:'0.18%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Oregon State Beavers",Round_of_32:'89.6%',Sweet_Sixteen:'0.01%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Bradley Braves",Round_of_32:'19.46%',Sweet_Sixteen:'0.01%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Wright State Raiders",Round_of_32:'6.17%',Sweet_Sixteen:'0.01%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Mount St. Mary's Mountaineers",Round_of_32:'0.01%',Sweet_Sixteen:'0.01%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"South Dakota State Jackrabbits",Round_of_32:'99.88%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Oklahoma State Cowgirls",Round_of_32:'95.81%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Texas Longhorns",Round_of_32:'80.54%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Marquette Golden Eagles",Round_of_32:'79.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"North Carolina Tar Heels",Round_of_32:'59.22%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Alabama Crimson Tide",Round_of_32:'40.78%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Virginia Tech Hokies",Round_of_32:'21.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Florida State Seminoles",Round_of_32:'10.4%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Michigan State Spartans",Round_of_32:'5.7%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Wake Forest Demon Deacons",Round_of_32:'4.19%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Middle Tennessee Blue Raiders",Round_of_32:'2.1%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Georgia Tech Yellow Jackets",Round_of_32:'0.35%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Central Michigan Chippewas",Round_of_32:'0.25%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Syracuse Orange",Round_of_32:'0.12%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"VCU Rams",Round_of_32:'0.02%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Drexel Dragons",Round_of_32:'0.01%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Utah Valley Wolverines",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Mercer Bears",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Wyoming Cowgirls",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"High Point Panthers",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Jackson State Lady Tigers",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Washington State Cougars",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Belmont Bruins",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        ];
    }
    else if (study_year == current_year || study_year == "Year"){
      var team_stats = [{name:"South Carolina Gamecocks",Round_of_32:'100.0%',Sweet_Sixteen:'99.98%',Elite_Eight:'99.98%',Final_Four:'99.83%',Championship:'93.93%',Champion:'80.45%'}, 
      {name:"LSU Tigers",Round_of_32:'100.0%',Sweet_Sixteen:'99.46%',Elite_Eight:'79.59%',Final_Four:'64.64%',Championship:'54.24%',Champion:'10.62%'}, 
      {name:"Iowa Hawkeyes",Round_of_32:'99.94%',Sweet_Sixteen:'98.66%',Elite_Eight:'96.95%',Final_Four:'21.9%',Championship:'16.61%',Champion:'4.77%'}, 
      {name:"Gonzaga Bulldogs",Round_of_32:'100.0%',Sweet_Sixteen:'99.63%',Elite_Eight:'59.16%',Final_Four:'51.0%',Championship:'5.3%',Champion:'2.61%'}, 
      {name:"UNLV Lady Rebels",Round_of_32:'100.0%',Sweet_Sixteen:'92.06%',Elite_Eight:'20.41%',Final_Four:'13.46%',Championship:'7.1%',Champion:'1.17%'}, 
      {name:"UConn Huskies",Round_of_32:'98.87%',Sweet_Sixteen:'98.87%',Elite_Eight:'98.83%',Final_Four:'98.77%',Championship:'22.05%',Champion:'0.28%'}, 
      {name:"Stanford Cardinal",Round_of_32:'98.78%',Sweet_Sixteen:'98.74%',Elite_Eight:'90.12%',Final_Four:'9.57%',Championship:'0.09%',Champion:'0.05%'}, 
      {name:"Texas Longhorns",Round_of_32:'100.0%',Sweet_Sixteen:'99.7%',Elite_Eight:'40.76%',Final_Four:'37.32%',Championship:'0.57%',Champion:'0.04%'}, 
      {name:"Notre Dame Fighting Irish",Round_of_32:'100.0%',Sweet_Sixteen:'100.0%',Elite_Eight:'99.14%',Final_Four:'0.16%',Championship:'0.1%',Champion:'0.01%'}, 
      {name:"NC State Wolfpack",Round_of_32:'97.48%',Sweet_Sixteen:'82.97%',Elite_Eight:'8.01%',Final_Four:'2.06%',Championship:'0.01%',Champion:'0.0%'}, 
      {name:"Jackson State Lady Tigers",Round_of_32:'1.13%',Sweet_Sixteen:'1.13%',Elite_Eight:'1.13%',Final_Four:'1.12%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Marshall Thundering Herd",Round_of_32:'14.62%',Sweet_Sixteen:'1.84%',Elite_Eight:'1.16%',Final_Four:'0.04%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Ohio State Buckeyes",Round_of_32:'99.43%',Sweet_Sixteen:'74.47%',Elite_Eight:'0.04%',Final_Four:'0.04%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Baylor Bears",Round_of_32:'100.0%',Sweet_Sixteen:'78.08%',Elite_Eight:'54.43%',Final_Four:'0.03%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"South Dakota State Jackrabbits",Round_of_32:'43.5%',Sweet_Sixteen:'0.37%',Elite_Eight:'0.07%',Final_Four:'0.03%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Norfolk State Spartans",Round_of_32:'1.22%',Sweet_Sixteen:'1.2%',Elite_Eight:'0.91%',Final_Four:'0.02%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Michigan State Spartans",Round_of_32:'99.26%',Sweet_Sixteen:'0.02%',Elite_Eight:'0.02%',Final_Four:'0.01%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"USC Trojans",Round_of_32:'93.49%',Sweet_Sixteen:'93.49%',Elite_Eight:'35.25%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Virginia Tech Hokies",Round_of_32:'85.38%',Sweet_Sixteen:'20.08%',Elite_Eight:'8.08%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Kansas State Wildcats",Round_of_32:'99.99%',Sweet_Sixteen:'67.2%',Elite_Eight:'2.18%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Texas A&M-Corpus Christi Islanders",Round_of_32:'6.51%',Sweet_Sixteen:'6.51%',Elite_Eight:'1.08%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"West Virginia Mountaineers",Round_of_32:'93.47%',Sweet_Sixteen:'1.31%',Elite_Eight:'0.87%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Oregon State Beavers",Round_of_32:'83.42%',Sweet_Sixteen:'75.76%',Elite_Eight:'0.86%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Green Bay Phoenix",Round_of_32:'94.49%',Sweet_Sixteen:'16.14%',Elite_Eight:'0.72%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Chattanooga Mocs",Round_of_32:'2.52%',Sweet_Sixteen:'0.89%',Elite_Eight:'0.19%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Maryland Terrapins",Round_of_32:'45.53%',Sweet_Sixteen:'0.06%',Elite_Eight:'0.05%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Florida State Seminoles",Round_of_32:'37.99%',Sweet_Sixteen:'0.3%',Elite_Eight:'0.01%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Indiana Hoosiers",Round_of_32:'83.1%',Sweet_Sixteen:'62.28%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Florida Gulf Coast Eagles",Round_of_32:'95.91%',Sweet_Sixteen:'31.24%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Drake Bulldogs",Round_of_32:'62.47%',Sweet_Sixteen:'28.16%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Richmond Spiders",Round_of_32:'91.11%',Sweet_Sixteen:'24.89%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Eastern Washington Eagles",Round_of_32:'16.58%',Sweet_Sixteen:'14.35%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Nebraska Cornhuskers",Round_of_32:'96.52%',Sweet_Sixteen:'9.82%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"UCLA Bruins",Round_of_32:'95.09%',Sweet_Sixteen:'7.93%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Fairfield Stags",Round_of_32:'16.9%',Sweet_Sixteen:'6.14%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Colorado Buffaloes",Round_of_32:'37.53%',Sweet_Sixteen:'4.64%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Middle Tennessee Blue Raiders",Round_of_32:'91.2%',Sweet_Sixteen:'0.54%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Duke Blue Devils",Round_of_32:'8.89%',Sweet_Sixteen:'0.51%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Oklahoma Sooners",Round_of_32:'4.09%',Sweet_Sixteen:'0.34%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Maine Black Bears",Round_of_32:'0.57%',Sweet_Sixteen:'0.13%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Texas A&M Aggies",Round_of_32:'3.48%',Sweet_Sixteen:'0.07%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Holy Cross Crusaders",Round_of_32:'0.06%',Sweet_Sixteen:'0.03%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"California Baptist Lancers",Round_of_32:'4.91%',Sweet_Sixteen:'0.01%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Syracuse Orange",Round_of_32:'89.12%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Marquette Golden Eagles",Round_of_32:'73.43%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Michigan Wolverines",Round_of_32:'70.23%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Alabama Crimson Tide",Round_of_32:'62.01%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Utah Utes",Round_of_32:'56.5%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Iowa State Cyclones",Round_of_32:'54.47%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Kansas Jayhawks",Round_of_32:'29.77%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Ole Miss Rebels",Round_of_32:'26.57%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Auburn Tigers",Round_of_32:'10.88%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Louisville Cardinals",Round_of_32:'8.8%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Princeton Tigers",Round_of_32:'6.53%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Tennessee Lady Volunteers",Round_of_32:'5.51%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"North Carolina Tar Heels",Round_of_32:'0.74%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Portland Pilots",Round_of_32:'0.01%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Presbyterian Blue Hose",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Kent State Golden Flashes",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Drexel Dragons",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"UC Irvine Anteaters",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Rice Owls",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Creighton Bluejays",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Vanderbilt Commodores",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      ];
    }
    let team_id = "team_";
    let rd_32_team_id = "team_";
    let rd_16_team_id = "team_";
    let rd_8_team_id = "team_";
    let rd_4_team_id = "team_";
    let rd_2_team_id = "team_";
    let rd_1_team_id = "team_";
    for (let j = 0, len = team_stats.length; j < len; j++) {
        team_id = "team" + j;
        rd_32_team_id = "team" + j + "_r32";
        rd_16_team_id = "team" + j + "_r16";
        rd_8_team_id = "team" + j + "_r8";
        rd_4_team_id = "team" + j + "_r4";
        rd_2_team_id = "team" + j + "_r2";
        rd_1_team_id = "team" + j + "_r1";

        document.getElementById(team_id).innerHTML = team_stats[j].name;
        document.getElementById(rd_32_team_id).innerHTML = team_stats[j].Round_of_32;
        document.getElementById(rd_16_team_id).innerHTML = team_stats[j].Sweet_Sixteen;
        document.getElementById(rd_8_team_id).innerHTML = team_stats[j].Elite_Eight;
        document.getElementById(rd_4_team_id).innerHTML = team_stats[j].Final_Four;
        document.getElementById(rd_2_team_id).innerHTML = team_stats[j].Championship;
        document.getElementById(rd_1_team_id).innerHTML = team_stats[j].Champion;
    }
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function sortTable(n,reverse="Yes") {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("winner_matrix");
    switching = true;
    // Set the sorting direction to ascending:
    dir = "desc";
    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {
      // Start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /* Loop through all table rows (except the
      first, which contains table headers): */
      for (i = 1; i < (rows.length - 1); i++) {
        // Start by saying there should be no switching:
        shouldSwitch = false;
        /* Get the two elements you want to compare,
        one from current row and one from the next: */
        x = rows[i].getElementsByTagName("TD")[n];
        x = x.innerHTML;
        x = x.slice(0, -1);
        y = rows[i + 1].getElementsByTagName("TD")[n];
        y = y.innerHTML;
        y = y.slice(0, -1);
        /* Check if the two rows should switch place,
        based on the direction, asc or desc: */
        if (dir == "asc") {
          if (Number(x) > Number(y)) {
            // If so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        } else if (dir == "desc") {
          if (Number(x) < Number(y)) {
            // If so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        /* If a switch has been marked, make the switch
        and mark that a switch has been done: */
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        // Each time a switch is done, increase this count by 1:
        switchcount ++;
      } else {
        /* If no switching has been done AND the direction is "asc",
        set the direction to "desc" and run the while loop again. */
        if (switchcount == 0 && dir == "desc" && reverse=="Yes") {
          dir = "asc";
          switching = true;
        }
      }
    }
}
function sortTable_name(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("winner_matrix");
    switching = true;
    // Set the sorting direction to ascending:
    dir = "asc";
    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {
      // Start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /* Loop through all table rows (except the
      first, which contains table headers): */
      for (i = 1; i < (rows.length - 1); i++) {
        // Start by saying there should be no switching:
        shouldSwitch = false;
        /* Get the two elements you want to compare,
        one from current row and one from the next: */
        x = rows[i].getElementsByTagName("TD")[n];
        y = rows[i + 1].getElementsByTagName("TD")[n];
        /* Check if the two rows should switch place,
        based on the direction, asc or desc: */
        if (dir == "asc") {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            // If so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        } else if (dir == "desc") {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            // If so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        /* If a switch has been marked, make the switch
        and mark that a switch has been done: */
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        // Each time a switch is done, increase this count by 1:
        switchcount ++;
      } else {
        /* If no switching has been done AND the direction is "asc",
        set the direction to "desc" and run the while loop again. */
        if (switchcount == 0 && dir == "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
  }

  function show_results() {
    var table, rows = 0;
    table = document.getElementById("winner_matrix");
    rows = table.rows;
    let current_year = 2024;
    var study_year = document.getElementById("yearofstudy").innerHTML;
    if (study_year == 2023){
      var round_32 = ['South Carolina Gamecocks', 'South Florida Bulls', 'Oklahoma Sooners', 'UCLA Bruins', 'Mississippi State Bulldogs', 'Notre Dame Fighting Irish', 'Arizona Wildcats', 'Maryland Terrapins', 'Stanford Cardinal', 'Ole Miss Rebels', 'Louisville Cardinals', 'Texas Longhorns', 'Colorado Buffaloes', 'Duke Blue Devils', 'Georgia Lady Bulldogs', 'Iowa Hawkeyes', 'Indiana Hoosiers', 'Miami Hurricanes', 'Florida Gulf Coast Eagles', 'Villanova Wildcats', 'Michigan Wolverines', 'LSU Tigers', 'Princeton Tigers', 'Utah Utes', 'Virginia Tech Hokies', 'South Dakota State Jackrabbits', 'Toledo Rockets', 'Tennessee Lady Volunteers', 'North Carolina Tar Heels', 'Ohio State Buckeyes', 'Baylor Bears', 'UConn Huskies'];
      var round_16 = ['South Carolina Gamecocks', 'UCLA Bruins', 'Notre Dame Fighting Irish', 'Maryland Terrapins', 'Ole Miss Rebels', 'Louisville Cardinals', 'Colorado Buffaloes', 'Iowa Hawkeyes', 'Miami Hurricanes', 'Villanova Wildcats', 'LSU Tigers', 'Utah Utes', 'Virginia Tech Hokies', 'Tennessee Lady Volunteers', 'Ohio State Buckeyes', 'UConn Huskies'];
      var round_8 = ['South Carolina Gamecocks', 'Maryland Terrapins', 'Louisville Cardinals', 'Iowa Hawkeyes', 'Miami Hurricanes', 'LSU Tigers', 'Virginia Tech Hokies', 'Ohio State Buckeyes'];
      var round_4 = ['South Carolina Gamecocks', 'Iowa Hawkeyes', 'LSU Tigers', 'Virginia Tech Hokies'];
      var round_2 = ['Iowa Hawkeyes', 'LSU Tigers'];
      var round_1 = ['LSU Tigers'];
    }
    else if (study_year == 2022){
      var round_32 = ['South Carolina Gamecocks', 'Miami Hurricanes', 'North Carolina Tar Heels', 'Arizona Wildcats', 'Georgia Lady Bulldogs', 'Iowa State Cyclones', 'Creighton Bluejays', 'Iowa Hawkeyes', 'Louisville Cardinals', 'Gonzaga Bulldogs', 'Belmont Bruins', 'Tennessee Lady Volunteers', 'Villanova Wildcats', 'Michigan Wolverines', 'South Dakota Coyotes', 'Baylor Bears', 'Stanford Cardinal', 'Kansas Jayhawks', 'Florida Gulf Coast Eagles', 'Maryland Terrapins', 'Ohio State Buckeyes', 'LSU Tigers', 'Utah Utes', 'Texas Longhorns', 'NC State Wolfpack', 'Kansas State Wildcats', 'Notre Dame Fighting Irish', 'Oklahoma Sooners', 'Princeton Tigers', 'Indiana Hoosiers', 'UCF Knights', 'UConn Huskies'];
      var round_16 = ['South Carolina Gamecocks', 'North Carolina Tar Heels', 'Iowa State Cyclones', 'Creighton Bluejays', 'Louisville Cardinals', 'Tennessee Lady Volunteers', 'Michigan Wolverines', 'South Dakota Coyotes', 'Stanford Cardinal', 'Maryland Terrapins', 'Ohio State Buckeyes', 'Texas Longhorns', 'NC State Wolfpack', 'Notre Dame Fighting Irish', 'Indiana Hoosiers', 'UConn Huskies'];
      var round_8 = ['South Carolina Gamecocks', 'Creighton Bluejays', 'Louisville Cardinals', 'Michigan Wolverines', 'Stanford Cardinal', 'Texas Longhorns', 'NC State Wolfpack', 'UConn Huskies'];
      var round_4 = ['South Carolina Gamecocks', 'Louisville Cardinals', 'Stanford Cardinal', 'UConn Huskies'];
      var round_2 = ['South Carolina Gamecocks', 'UConn Huskies'];
      var round_1 = ['South Carolina Gamecocks'];
    }
    else if (study_year == 2021){
      var round_32 = ['Stanford Cardinal', 'Oklahoma State Cowgirls', 'Missouri State Lady Bears', 'Wright State Raiders', 'Oregon Ducks', 'Georgia Lady Bulldogs', 'Northwestern Wildcats', 'Louisville Cardinals', 'South Carolina Gamecocks', 'Oregon State Beavers', 'Georgia Tech Yellow Jackets', 'West Virginia Mountaineers', 'Texas Longhorns', 'UCLA Bruins', 'Alabama Crimson Tide', 'Maryland Terrapins', 'UConn Huskies', 'Syracuse Orange', 'Iowa Hawkeyes', 'Kentucky Wildcats', 'Michigan Wolverines', 'Tennessee Lady Volunteers', 'Virginia Tech Hokies', 'Baylor Bears', 'NC State Wolfpack','South Florida Bulls', 'Belmont Bruins', 'Indiana Hoosiers', 'BYU Cougars', 'Arizona Wildcats', 'Iowa State Cyclones', 'Texas A&M Aggies'];
      var round_16 = ['Stanford Cardinal', 'Missouri State Lady Bears', 'Oregon Ducks', 'Louisville Cardinals', 'South Carolina Gamecocks', 'Georgia Tech Yellow Jackets', 'Texas Longhorns', 'Maryland Terrapins', 'UConn Huskies', 'Iowa Hawkeyes', 'Michigan Wolverines', 'Baylor Bears', 'NC State Wolfpack', 'Indiana Hoosiers', 'Arizona Wildcats', 'Texas A&M Aggies'];
      var round_8 = ['Stanford Cardinal', 'Louisville Cardinals', 'South Carolina Gamecocks', 'Texas Longhorns', 'UConn Huskies', 'Baylor Bears', 'Indiana Hoosiers', 'Arizona Wildcats'];
      var round_4 = ['Stanford Cardinal', 'South Carolina Gamecocks', 'UConn Huskies', 'Arizona Wildcats'];
      var round_2 = ['Stanford Cardinal', 'Arizona Wildcats'];
      var round_1 = ['Stanford Cardinal'];
    }
    else if (study_year == current_year || study_year == "Year"){
      var round_32 = [];
      var round_16 = [];
      var round_8 = [];
      var round_4 = [];
      var round_2 = [];
      var round_1 = [];
    }
    for (i = 1; i < (rows.length); i++) {
      var bold_weight = "700";
      var font_color = "#00be9f";
      var font_black = 'black';
      var team_name = rows[i].getElementsByTagName("TD")[0].innerHTML;
      var col_r32 = rows[i].getElementsByTagName("TD")[1];
      col_r32.style.color = font_black;
      var col_r16 = rows[i].getElementsByTagName("TD")[2];
      col_r16.style.color = font_black;
      var col_r8 = rows[i].getElementsByTagName("TD")[3];
      col_r8.style.color = font_black;
      var col_r4 = rows[i].getElementsByTagName("TD")[4];
      col_r4.style.color = font_black;
      var col_r2 = rows[i].getElementsByTagName("TD")[5];
      col_r2.style.color = font_black;
      var col_r1 = rows[i].getElementsByTagName("TD")[6];
      col_r1.style.color = font_black;
  
      if (round_32.includes(team_name)) {
        col_r32.style.color = font_color;
      }
      if (round_16.includes(team_name)) {
        col_r16.style.color = font_color;
      }
      if (round_8.includes(team_name)) {
        col_r8.style.color = font_color;
      }
      if (round_4.includes(team_name)) {
        col_r4.style.color = font_color;
      }
      if (round_2.includes(team_name)) {
        col_r2.style.color = font_color;
      }
      if (round_1.includes(team_name)) {
        col_r1.style.color = font_color;
      }
  
      rows[i].getElementsByTagName("TD")[0].style.fontWeight = bold_weight;
      col_r32.style.fontWeight = bold_weight;
      col_r16.style.fontWeight = bold_weight;
      col_r8.style.fontWeight = bold_weight;
      col_r4.style.fontWeight = bold_weight;
      col_r2.style.fontWeight = bold_weight;
      col_r1.style.fontWeight = bold_weight;
    }
  }