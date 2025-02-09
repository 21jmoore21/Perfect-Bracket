function change_year(year){
    document.getElementById("yearofstudy").innerHTML = year;
}

function find_winner(){
    
    let current_year = 2024;
    let study_year = document.getElementById("yearofstudy").innerHTML;
    if (study_year == 2023){
      var team_stats = [{name:"South Carolina Gamecocks (1)",Round_of_32:'100.0%',Sweet_Sixteen:'100.0%',Elite_Eight:'100.0%',Final_Four:'99.85%',Championship:'96.34%',Champion:'90.4%'}, 
      {name:"LSU Tigers (3)",Round_of_32:'100.0%',Sweet_Sixteen:'100.0%',Elite_Eight:'99.59%',Final_Four:'97.32%',Championship:'95.33%',Champion:'6.64%'}, 
      {name:"Iowa Hawkeyes (2)",Round_of_32:'99.96%',Sweet_Sixteen:'94.01%',Elite_Eight:'78.32%',Final_Four:'53.32%',Championship:'3.63%',Champion:'2.61%'}, 
      {name:"Indiana Hoosiers (1)",Round_of_32:'100.0%',Sweet_Sixteen:'100.0%',Elite_Eight:'54.43%',Final_Four:'2.22%',Championship:'1.88%',Champion:'0.2%'}, 
      {name:"Cleveland State Vikings (12)",Round_of_32:'98.86%',Sweet_Sixteen:'83.1%',Elite_Eight:'42.63%',Final_Four:'0.35%',Championship:'0.35%',Champion:'0.09%'}, 
      {name:"UConn Huskies (2)",Round_of_32:'100.0%',Sweet_Sixteen:'100.0%',Elite_Eight:'98.96%',Final_Four:'77.31%',Championship:'2.24%',Champion:'0.04%'}, 
      {name:"Florida Gulf Coast Eagles (12)",Round_of_32:'99.72%',Sweet_Sixteen:'16.45%',Elite_Eight:'2.94%',Final_Four:'0.07%',Championship:'0.06%',Champion:'0.02%'}, 
      {name:"Virginia Tech Hokies (1)",Round_of_32:'100.0%',Sweet_Sixteen:'65.11%',Elite_Eight:'64.8%',Final_Four:'8.33%',Championship:'0.08%',Champion:'0.0%'}, 
      {name:"Utah Utes (2)",Round_of_32:'99.97%',Sweet_Sixteen:'90.36%',Elite_Eight:'0.41%',Final_Four:'0.04%',Championship:'0.04%',Champion:'0.0%'}, 
      {name:"Maryland Terrapins (2)",Round_of_32:'97.64%',Sweet_Sixteen:'93.64%',Elite_Eight:'9.48%',Final_Four:'0.15%',Championship:'0.03%',Champion:'0.0%'}, 
      {name:"South Dakota State Jackrabbits (9)",Round_of_32:'87.85%',Sweet_Sixteen:'32.2%',Elite_Eight:'32.0%',Final_Four:'13.25%',Championship:'0.02%',Champion:'0.0%'}, 
      {name:"Stanford Cardinal (1)",Round_of_32:'100.0%',Sweet_Sixteen:'92.58%',Elite_Eight:'88.28%',Final_Four:'35.88%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Duke Blue Devils (3)",Round_of_32:'99.8%',Sweet_Sixteen:'66.69%',Elite_Eight:'18.03%',Final_Four:'7.64%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Florida State Seminoles (7)",Round_of_32:'99.82%',Sweet_Sixteen:'5.94%',Elite_Eight:'1.92%',Final_Four:'0.77%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Ole Miss Rebels (8)",Round_of_32:'33.33%',Sweet_Sixteen:'2.78%',Elite_Eight:'2.45%',Final_Four:'0.75%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Gonzaga Bulldogs (9)",Round_of_32:'66.67%',Sweet_Sixteen:'4.64%',Elite_Eight:'4.17%',Final_Four:'0.65%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Middle Tennessee Blue Raiders (11)",Round_of_32:'72.7%',Sweet_Sixteen:'31.74%',Elite_Eight:'1.73%',Final_Four:'0.64%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"USC Trojans (8)",Round_of_32:'12.15%',Sweet_Sixteen:'2.69%',Elite_Eight:'2.69%',Final_Four:'0.51%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Ohio State Buckeyes (3)",Round_of_32:'86.9%',Sweet_Sixteen:'83.63%',Elite_Eight:'1.01%',Final_Four:'0.48%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Drake Bulldogs (12)",Round_of_32:'94.72%',Sweet_Sixteen:'73.9%',Elite_Eight:'4.2%',Final_Four:'0.14%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Texas Longhorns (4)",Round_of_32:'93.36%',Sweet_Sixteen:'23.17%',Elite_Eight:'0.71%',Final_Four:'0.13%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Iowa State Cyclones (5)",Round_of_32:'97.62%',Sweet_Sixteen:'72.98%',Elite_Eight:'0.46%',Final_Four:'0.12%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"East Carolina Pirates (12)",Round_of_32:'6.64%',Sweet_Sixteen:'2.33%',Elite_Eight:'0.19%',Final_Four:'0.08%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Notre Dame Fighting Irish (3)",Round_of_32:'100.0%',Sweet_Sixteen:'97.79%',Elite_Eight:'89.02%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Creighton Bluejays (5)",Round_of_32:'34.41%',Sweet_Sixteen:'1.81%',Elite_Eight:'1.15%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Mississippi State Bulldogs (11)",Round_of_32:'65.59%',Sweet_Sixteen:'0.4%',Elite_Eight:'0.35%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Tennessee Lady Volunteers (4)",Round_of_32:'100.0%',Sweet_Sixteen:'25.18%',Elite_Eight:'0.05%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"James Madison Dukes (14)",Round_of_32:'13.1%',Sweet_Sixteen:'11.61%',Elite_Eight:'0.03%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Oklahoma Sooners (5)",Round_of_32:'97.14%',Sweet_Sixteen:'78.3%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"UCLA Bruins (4)",Round_of_32:'68.37%',Sweet_Sixteen:'13.28%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Sacramento State Hornets (12)",Round_of_32:'31.63%',Sweet_Sixteen:'7.06%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Princeton Tigers (10)",Round_of_32:'45.61%',Sweet_Sixteen:'6.98%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"St. John's Red Storm (11)",Round_of_32:'33.38%',Sweet_Sixteen:'3.56%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Arizona Wildcats (7)",Round_of_32:'82.4%',Sweet_Sixteen:'2.71%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"NC State Wolfpack (7)",Round_of_32:'54.39%',Sweet_Sixteen:'2.66%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"West Virginia Mountaineers (10)",Round_of_32:'17.6%',Sweet_Sixteen:'2.07%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Toledo Rockets (12)",Round_of_32:'2.38%',Sweet_Sixteen:'1.84%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Holy Cross Crusaders (14)",Round_of_32:'2.36%',Sweet_Sixteen:'1.58%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Colorado Buffaloes (5)",Round_of_32:'27.3%',Sweet_Sixteen:'1.45%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Portland Pilots (12)",Round_of_32:'2.86%',Sweet_Sixteen:'1.36%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"North Carolina Tar Heels (5)",Round_of_32:'66.62%',Sweet_Sixteen:'1.2%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Louisville Cardinals (5)",Round_of_32:'5.28%',Sweet_Sixteen:'0.6%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Villanova Wildcats (4)",Round_of_32:'1.14%',Sweet_Sixteen:'0.45%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Iona Gaels (14)",Round_of_32:'0.2%',Sweet_Sixteen:'0.12%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Georgia Lady Bulldogs (10)",Round_of_32:'0.18%',Sweet_Sixteen:'0.05%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"South Florida Bulls (8)",Round_of_32:'88.74%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Oklahoma State Cowgirls (8)",Round_of_32:'84.36%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Baylor Bears (7)",Round_of_32:'76.86%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"UNLV Lady Rebels (11)",Round_of_32:'75.07%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Michigan Wolverines (5)",Round_of_32:'24.93%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Alabama Crimson Tide (10)",Round_of_32:'23.14%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Miami Hurricanes (9)",Round_of_32:'15.64%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Marquette Golden Eagles (9)",Round_of_32:'11.26%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Washington State Cougars (5)",Round_of_32:'0.28%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"SE Louisiana Lady Lions (14)",Round_of_32:'0.04%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Gardner-Webb Runnin' Bulldogs (14)",Round_of_32:'0.03%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Norfolk State Spartans (16)",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Southern Utah Thunderbirds (14)",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Sacred Heart Pioneers (16)",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Tennessee Tech Golden Eagles (16)",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Hawai'i Rainbow Wahine (14)",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Chattanooga Mocs (16)",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Saint Louis Billikens (12)",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Vermont Catamounts (14)",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      ];
    }
    else if (study_year == 2022){
      var team_stats = [{name:"South Carolina Gamecocks (1)",Round_of_32:'100.0%',Sweet_Sixteen:'100.0%',Elite_Eight:'90.73%',Final_Four:'76.7%',Championship:'76.34%',Champion:'53.93%'}, 
      {name:"NC State Wolfpack (1)",Round_of_32:'100.0%',Sweet_Sixteen:'100.0%',Elite_Eight:'99.67%',Final_Four:'95.14%',Championship:'86.48%',Champion:'36.8%'}, 
      {name:"Iowa Hawkeyes (2)",Round_of_32:'100.0%',Sweet_Sixteen:'98.66%',Elite_Eight:'30.46%',Final_Four:'8.57%',Championship:'8.34%',Champion:'3.28%'}, 
      {name:"North Carolina Tar Heels (5)",Round_of_32:'97.61%',Sweet_Sixteen:'96.42%',Elite_Eight:'7.76%',Final_Four:'4.51%',Championship:'4.4%',Champion:'1.75%'}, 
      {name:"Texas Longhorns (2)",Round_of_32:'98.52%',Sweet_Sixteen:'92.58%',Elite_Eight:'45.32%',Final_Four:'28.34%',Championship:'5.07%',Champion:'1.53%'}, 
      {name:"Iowa State Cyclones (3)",Round_of_32:'100.0%',Sweet_Sixteen:'97.07%',Elite_Eight:'66.94%',Final_Four:'9.37%',Championship:'9.27%',Champion:'0.85%'}, 
      {name:"Jackson State Lady Tigers (14)",Round_of_32:'84.13%',Sweet_Sixteen:'66.72%',Elite_Eight:'42.17%',Final_Four:'29.52%',Championship:'5.61%',Champion:'0.69%'}, 
      {name:"Princeton Tigers (11)",Round_of_32:'99.86%',Sweet_Sixteen:'79.67%',Elite_Eight:'27.66%',Final_Four:'4.14%',Championship:'2.22%',Champion:'0.51%'}, 
      {name:"Stephen F. Austin Ladyjacks (12)",Round_of_32:'2.39%',Sweet_Sixteen:'2.35%',Elite_Eight:'1.21%',Final_Four:'0.85%',Championship:'0.78%',Champion:'0.43%'}, 
      {name:"Florida Gulf Coast Eagles (12)",Round_of_32:'45.54%',Sweet_Sixteen:'33.65%',Elite_Eight:'16.24%',Final_Four:'6.65%',Championship:'0.14%',Champion:'0.11%'}, 
      {name:"Maryland Terrapins (4)",Round_of_32:'93.56%',Sweet_Sixteen:'33.81%',Elite_Eight:'14.81%',Final_Four:'7.09%',Championship:'0.09%',Champion:'0.05%'}, 
      {name:"UConn Huskies (2)",Round_of_32:'99.96%',Sweet_Sixteen:'97.11%',Elite_Eight:'69.85%',Final_Four:'0.21%',Championship:'0.17%',Champion:'0.02%'}, 
      {name:"IUPUI Jaguars (12)",Round_of_32:'88.98%',Sweet_Sixteen:'84.68%',Elite_Eight:'0.21%',Final_Four:'0.12%',Championship:'0.07%',Champion:'0.02%'}, 
      {name:"Baylor Bears (2)",Round_of_32:'100.0%',Sweet_Sixteen:'91.95%',Elite_Eight:'78.11%',Final_Four:'62.97%',Championship:'0.14%',Champion:'0.01%'}, 
      {name:"BYU Cougars (5)",Round_of_32:'100.0%',Sweet_Sixteen:'58.44%',Elite_Eight:'9.93%',Final_Four:'3.95%',Championship:'0.12%',Champion:'0.01%'}, 
      {name:"Gonzaga Bulldogs (9)",Round_of_32:'63.09%',Sweet_Sixteen:'29.5%',Elite_Eight:'27.62%',Final_Four:'7.4%',Championship:'0.01%',Champion:'0.01%'}, 
      {name:"Louisville Cardinals (1)",Round_of_32:'99.91%',Sweet_Sixteen:'56.99%',Elite_Eight:'55.33%',Final_Four:'16.62%',Championship:'0.58%',Champion:'0.0%'}, 
      {name:"UCF Knights (7)",Round_of_32:'99.56%',Sweet_Sixteen:'2.87%',Elite_Eight:'0.55%',Final_Four:'0.27%',Championship:'0.1%',Champion:'0.0%'}, 
      {name:"Oklahoma Sooners (4)",Round_of_32:'11.02%',Sweet_Sixteen:'9.82%',Elite_Eight:'0.12%',Final_Four:'0.12%',Championship:'0.03%',Champion:'0.0%'}, 
      {name:"South Dakota Coyotes (10)",Round_of_32:'98.58%',Sweet_Sixteen:'8.05%',Elite_Eight:'6.04%',Final_Four:'3.97%',Championship:'0.02%',Champion:'0.0%'}, 
      {name:"Stanford Cardinal (1)",Round_of_32:'100.0%',Sweet_Sixteen:'97.79%',Elite_Eight:'62.04%',Final_Four:'23.37%',Championship:'0.01%',Champion:'0.0%'}, 
      {name:"LSU Tigers (3)",Round_of_32:'15.87%',Sweet_Sixteen:'6.88%',Elite_Eight:'2.95%',Final_Four:'0.22%',Championship:'0.01%',Champion:'0.0%'}, 
      {name:"Michigan Wolverines (3)",Round_of_32:'100.0%',Sweet_Sixteen:'41.56%',Elite_Eight:'5.92%',Final_Four:'3.92%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Virginia Tech Hokies (5)",Round_of_32:'54.46%',Sweet_Sixteen:'31.83%',Elite_Eight:'6.18%',Final_Four:'3.54%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Ohio State Buckeyes (5)",Round_of_32:'76.96%',Sweet_Sixteen:'24.78%',Elite_Eight:'8.58%',Final_Four:'1.07%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Tennessee Lady Volunteers (4)",Round_of_32:'70.43%',Sweet_Sixteen:'57.82%',Elite_Eight:'4.24%',Final_Four:'0.82%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Nebraska Cornhuskers (8)",Round_of_32:'36.91%',Sweet_Sixteen:'13.5%',Elite_Eight:'12.65%',Final_Four:'0.35%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Missouri State Lady Bears (11)",Round_of_32:'23.04%',Sweet_Sixteen:'1.62%',Elite_Eight:'0.19%',Final_Four:'0.13%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Kansas Jayhawks (8)",Round_of_32:'72.19%',Sweet_Sixteen:'2.15%',Elite_Eight:'0.58%',Final_Four:'0.04%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Utah Utes (7)",Round_of_32:'95.38%',Sweet_Sixteen:'6.5%',Elite_Eight:'0.76%',Final_Four:'0.03%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Dayton Flyers (11)",Round_of_32:'74.8%',Sweet_Sixteen:'2.47%',Elite_Eight:'2.3%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Indiana Hoosiers (3)",Round_of_32:'99.55%',Sweet_Sixteen:'20.33%',Elite_Eight:'1.94%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"UNLV Lady Rebels (12)",Round_of_32:'93.28%',Sweet_Sixteen:'1.23%',Elite_Eight:'0.3%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Georgia Lady Bulldogs (5)",Round_of_32:'25.2%',Sweet_Sixteen:'0.46%',Elite_Eight:'0.26%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Buffalo Bulls (12)",Round_of_32:'29.57%',Sweet_Sixteen:'18.91%',Elite_Eight:'0.15%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Delaware Blue Hens (12)",Round_of_32:'6.44%',Sweet_Sixteen:'0.71%',Elite_Eight:'0.11%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Colorado Buffaloes (7)",Round_of_32:'49.07%',Sweet_Sixteen:'1.29%',Elite_Eight:'0.04%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Georgia Tech Yellow Jackets (9)",Round_of_32:'27.81%',Sweet_Sixteen:'0.06%',Elite_Eight:'0.04%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Fairfield Stags (14)",Round_of_32:'1.48%',Sweet_Sixteen:'0.91%',Elite_Eight:'0.03%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"UAlbany Great Danes (16)",Round_of_32:'0.09%',Sweet_Sixteen:'0.01%',Elite_Eight:'0.01%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Oregon Ducks (5)",Round_of_32:'88.68%',Sweet_Sixteen:'20.64%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Notre Dame Fighting Irish (5)",Round_of_32:'97.01%',Sweet_Sixteen:'5.46%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Belmont Bruins (12)",Round_of_32:'11.32%',Sweet_Sixteen:'2.63%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Creighton Bluejays (10)",Round_of_32:'50.93%',Sweet_Sixteen:'0.05%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Massachusetts Minutewomen (12)",Round_of_32:'2.99%',Sweet_Sixteen:'0.04%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Mercer Bears (14)",Round_of_32:'0.04%',Sweet_Sixteen:'0.02%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Arkansas Razorbacks (10)",Round_of_32:'4.62%',Sweet_Sixteen:'0.01%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Kansas State Wildcats (9)",Round_of_32:'99.97%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"South Florida Bulls (9)",Round_of_32:'99.55%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Arizona Wildcats (4)",Round_of_32:'6.72%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Ole Miss Rebels (7)",Round_of_32:'1.42%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Miami Hurricanes (8)",Round_of_32:'0.45%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Charlotte 49ers (14)",Round_of_32:'0.45%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Florida Gators (10)",Round_of_32:'0.44%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Kentucky Wildcats (5)",Round_of_32:'0.14%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Washington State Cougars (8)",Round_of_32:'0.03%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Howard Bison (16)",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"UT Arlington Mavericks (14)",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Illinois State Redbirds (14)",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Villanova Wildcats (11)",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"American University Eagles (14)",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Hawai'i Rainbow Wahine (14)",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Montana State Bobcats (16)",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Longwood Lancers (16)",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      ];
    }
    else if (study_year == 2021){
      var team_stats = [{name:"UConn Huskies (1)",Round_of_32:'100.0%',Sweet_Sixteen:'100.0%',Elite_Eight:'99.96%',Final_Four:'84.13%',Championship:'84.12%',Champion:'75.66%'}, 
      {name:"Baylor Bears (2)",Round_of_32:'100.0%',Sweet_Sixteen:'100.0%',Elite_Eight:'99.43%',Final_Four:'15.84%',Championship:'15.81%',Champion:'13.71%'}, 
      {name:"Maryland Terrapins (2)",Round_of_32:'100.0%',Sweet_Sixteen:'100.0%',Elite_Eight:'99.35%',Final_Four:'56.25%',Championship:'46.33%',Champion:'9.71%'}, 
      {name:"Stephen F. Austin Ladyjacks (12)",Round_of_32:'99.65%',Sweet_Sixteen:'91.61%',Elite_Eight:'26.36%',Final_Four:'13.16%',Championship:'9.88%',Champion:'0.75%'}, 
      {name:"South Carolina Gamecocks (1)",Round_of_32:'100.0%',Sweet_Sixteen:'99.99%',Elite_Eight:'73.54%',Final_Four:'30.59%',Championship:'21.24%',Champion:'0.13%'}, 
      {name:"Stanford Cardinal (1)",Round_of_32:'100.0%',Sweet_Sixteen:'100.0%',Elite_Eight:'96.15%',Final_Four:'95.74%',Championship:'22.5%',Champion:'0.02%'}, 
      {name:"Troy Trojans (14)",Round_of_32:'21.99%',Sweet_Sixteen:'21.9%',Elite_Eight:'20.9%',Final_Four:'5.63%',Championship:'0.03%',Champion:'0.01%'}, 
      {name:"Florida Gulf Coast Eagles (11)",Round_of_32:'71.07%',Sweet_Sixteen:'69.45%',Elite_Eight:'0.57%',Final_Four:'0.01%',Championship:'0.01%',Champion:'0.01%'}, 
      {name:"Louisville Cardinals (2)",Round_of_32:'96.56%',Sweet_Sixteen:'95.79%',Elite_Eight:'91.6%',Final_Four:'0.4%',Championship:'0.04%',Champion:'0.0%'}, 
      {name:"Iowa Hawkeyes (5)",Round_of_32:'99.84%',Sweet_Sixteen:'53.18%',Elite_Eight:'0.04%',Final_Four:'0.02%',Championship:'0.02%',Champion:'0.0%'}, 
      {name:"NC State Wolfpack (1)",Round_of_32:'90.25%',Sweet_Sixteen:'89.61%',Elite_Eight:'83.22%',Final_Four:'73.75%',Championship:'0.01%',Champion:'0.0%'}, 
      {name:"UC Davis Aggies (12)",Round_of_32:'15.9%',Sweet_Sixteen:'10.43%',Elite_Eight:'0.03%',Final_Four:'0.03%',Championship:'0.01%',Champion:'0.0%'}, 
      {name:"North Carolina A&T Aggies (16)",Round_of_32:'9.75%',Sweet_Sixteen:'9.38%',Elite_Eight:'8.58%',Final_Four:'6.68%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Texas A&M Aggies (2)",Round_of_32:'78.01%',Sweet_Sixteen:'77.86%',Elite_Eight:'72.94%',Final_Four:'6.58%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Gonzaga Bulldogs (5)",Round_of_32:'99.99%',Sweet_Sixteen:'59.65%',Elite_Eight:'5.72%',Final_Four:'4.64%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Arkansas Razorbacks (4)",Round_of_32:'93.7%',Sweet_Sixteen:'35.26%',Elite_Eight:'3.35%',Final_Four:'3.3%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Indiana Hoosiers (4)",Round_of_32:'100.0%',Sweet_Sixteen:'40.35%',Elite_Eight:'1.61%',Final_Four:'1.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Rutgers Scarlet Knights (5)",Round_of_32:'94.41%',Sweet_Sixteen:'47.87%',Elite_Eight:'4.84%',Final_Four:'0.96%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"South Florida Bulls (8)",Round_of_32:'100.0%',Sweet_Sixteen:'1.01%',Elite_Eight:'0.87%',Final_Four:'0.75%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Missouri State Lady Bears (5)",Round_of_32:'84.1%',Sweet_Sixteen:'54.3%',Elite_Eight:'0.47%',Final_Four:'0.44%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Georgia Lady Bulldogs (3)",Round_of_32:'99.99%',Sweet_Sixteen:'60.01%',Elite_Eight:'2.82%',Final_Four:'0.03%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Marist Red Foxes (14)",Round_of_32:'3.44%',Sweet_Sixteen:'2.79%',Elite_Eight:'2.56%',Final_Four:'0.02%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"South Dakota Coyotes (11)",Round_of_32:'38.74%',Sweet_Sixteen:'19.05%',Elite_Eight:'2.05%',Final_Four:'0.02%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"UCF Knights (10)",Round_of_32:'70.09%',Sweet_Sixteen:'1.37%',Elite_Eight:'0.93%',Final_Four:'0.02%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Arizona Wildcats (3)",Round_of_32:'99.42%',Sweet_Sixteen:'51.52%',Elite_Eight:'1.09%',Final_Four:'0.01%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"UCLA Bruins (3)",Round_of_32:'100.0%',Sweet_Sixteen:'100.0%',Elite_Eight:'0.65%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Iowa State Cyclones (7)",Round_of_32:'94.52%',Sweet_Sixteen:'0.24%',Elite_Eight:'0.22%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Lehigh Mountain Hawks (12)",Round_of_32:'25.99%',Sweet_Sixteen:'3.64%',Elite_Eight:'0.1%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Northwestern Wildcats (7)",Round_of_32:'29.91%',Sweet_Sixteen:'0.05%',Elite_Eight:'0.03%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Oregon Ducks (5)",Round_of_32:'61.26%',Sweet_Sixteen:'20.94%',Elite_Eight:'0.01%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Stony Brook Seawolves (14)",Round_of_32:'0.58%',Sweet_Sixteen:'0.36%',Elite_Eight:'0.01%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Idaho State Bengals (12)",Round_of_32:'80.18%',Sweet_Sixteen:'44.44%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Michigan Wolverines (5)",Round_of_32:'28.93%',Sweet_Sixteen:'24.26%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Tennessee Lady Volunteers (3)",Round_of_32:'97.84%',Sweet_Sixteen:'6.29%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"West Virginia Mountaineers (4)",Round_of_32:'74.01%',Sweet_Sixteen:'4.75%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Kentucky Wildcats (4)",Round_of_32:'19.82%',Sweet_Sixteen:'2.38%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"BYU Cougars (11)",Round_of_32:'5.59%',Sweet_Sixteen:'0.25%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Oregon State Beavers (8)",Round_of_32:'89.76%',Sweet_Sixteen:'0.01%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Wright State Raiders (12)",Round_of_32:'6.3%',Sweet_Sixteen:'0.01%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"South Dakota State Jackrabbits (9)",Round_of_32:'99.87%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Oklahoma State Cowgirls (8)",Round_of_32:'95.71%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Texas Longhorns (5)",Round_of_32:'80.11%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Marquette Golden Eagles (10)",Round_of_32:'79.33%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"North Carolina Tar Heels (10)",Round_of_32:'59.24%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Alabama Crimson Tide (7)",Round_of_32:'40.76%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Virginia Tech Hokies (7)",Round_of_32:'20.67%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Bradley Braves (11)",Round_of_32:'19.89%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Florida State Seminoles (9)",Round_of_32:'10.24%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Michigan State Spartans (10)",Round_of_32:'5.48%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Wake Forest Demon Deacons (9)",Round_of_32:'4.29%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Middle Tennessee Blue Raiders (14)",Round_of_32:'2.16%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Georgia Tech Yellow Jackets (5)",Round_of_32:'0.35%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Central Michigan Chippewas (12)",Round_of_32:'0.16%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Syracuse Orange (8)",Round_of_32:'0.13%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Drexel Dragons (14)",Round_of_32:'0.01%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Belmont Bruins (12)",Round_of_32:'0.01%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Utah Valley Wolverines (16)",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Mercer Bears (16)",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Wyoming Cowgirls (14)",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Mount St. Mary's Mountaineers (14)",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"High Point Panthers (16)",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Jackson State Lady Tigers (14)",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Washington State Cougars (9)",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"VCU Rams (12)",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      ];
    }
    else if (study_year == current_year || study_year == "Year"){
      var team_stats = [{name:"South Carolina Gamecocks (1)",Round_of_32:'100.0%',Sweet_Sixteen:'99.99%',Elite_Eight:'99.98%',Final_Four:'99.71%',Championship:'93.36%',Champion:'80.0%'}, 
      {name:"LSU Tigers (3)",Round_of_32:'100.0%',Sweet_Sixteen:'99.21%',Elite_Eight:'78.58%',Final_Four:'63.07%',Championship:'52.82%',Champion:'10.15%'}, 
      {name:"Iowa Hawkeyes (1)",Round_of_32:'99.98%',Sweet_Sixteen:'98.59%',Elite_Eight:'97.06%',Final_Four:'23.38%',Championship:'17.78%',Champion:'5.01%'}, 
      {name:"Gonzaga Bulldogs (4)",Round_of_32:'100.0%',Sweet_Sixteen:'99.66%',Elite_Eight:'59.5%',Final_Four:'50.25%',Championship:'5.79%',Champion:'3.11%'}, 
      {name:"UNLV Lady Rebels (10)",Round_of_32:'100.0%',Sweet_Sixteen:'92.38%',Elite_Eight:'21.42%',Final_Four:'13.55%',Championship:'7.12%',Champion:'1.26%'}, 
      {name:"UConn Huskies (3)",Round_of_32:'99.03%',Sweet_Sixteen:'99.03%',Elite_Eight:'99.0%',Final_Four:'98.98%',Championship:'22.28%',Champion:'0.3%'}, 
      {name:"Texas Longhorns (1)",Round_of_32:'100.0%',Sweet_Sixteen:'99.66%',Elite_Eight:'40.44%',Final_Four:'37.07%',Championship:'0.57%',Champion:'0.09%'}, 
      {name:"Stanford Cardinal (2)",Round_of_32:'98.97%',Sweet_Sixteen:'98.93%',Elite_Eight:'89.62%',Final_Four:'10.33%',Championship:'0.16%',Champion:'0.08%'}, 
      {name:"Notre Dame Fighting Irish (2)",Round_of_32:'100.0%',Sweet_Sixteen:'100.0%',Elite_Eight:'98.9%',Final_Four:'0.27%',Championship:'0.11%',Champion:'0.0%'}, 
      {name:"NC State Wolfpack (3)",Round_of_32:'97.5%',Sweet_Sixteen:'82.6%',Elite_Eight:'8.74%',Final_Four:'2.33%',Championship:'0.01%',Champion:'0.0%'}, 
      {name:"Jackson State Lady Tigers (14)",Round_of_32:'0.97%',Sweet_Sixteen:'0.97%',Elite_Eight:'0.97%',Final_Four:'0.95%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Baylor Bears (5)",Round_of_32:'100.0%',Sweet_Sixteen:'78.9%',Elite_Eight:'55.13%',Final_Four:'0.02%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"South Dakota State Jackrabbits (12)",Round_of_32:'42.25%',Sweet_Sixteen:'0.34%',Elite_Eight:'0.05%',Final_Four:'0.02%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Ohio State Buckeyes (2)",Round_of_32:'99.36%',Sweet_Sixteen:'72.83%',Elite_Eight:'0.02%',Final_Four:'0.02%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"USC Trojans (1)",Round_of_32:'94.18%',Sweet_Sixteen:'94.18%',Elite_Eight:'34.64%',Final_Four:'0.01%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Marshall Thundering Herd (12)",Round_of_32:'13.62%',Sweet_Sixteen:'1.77%',Elite_Eight:'1.03%',Final_Four:'0.01%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Indiana Hoosiers (4)",Round_of_32:'84.17%',Sweet_Sixteen:'62.92%',Elite_Eight:'0.01%',Final_Four:'0.01%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Florida Gulf Coast Eagles (12)",Round_of_32:'95.7%',Sweet_Sixteen:'31.56%',Elite_Eight:'0.01%',Final_Four:'0.01%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Richmond Spiders (10)",Round_of_32:'91.54%',Sweet_Sixteen:'26.62%',Elite_Eight:'0.01%',Final_Four:'0.01%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Virginia Tech Hokies (4)",Round_of_32:'86.38%',Sweet_Sixteen:'19.33%',Elite_Eight:'8.13%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Kansas State Wildcats (4)",Round_of_32:'99.99%',Sweet_Sixteen:'65.8%',Elite_Eight:'2.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Oregon State Beavers (3)",Round_of_32:'84.94%',Sweet_Sixteen:'76.76%',Elite_Eight:'1.1%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Texas A&M-Corpus Christi Islanders (16)",Round_of_32:'5.82%',Sweet_Sixteen:'5.82%',Elite_Eight:'1.07%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"West Virginia Mountaineers (8)",Round_of_32:'92.72%',Sweet_Sixteen:'1.39%',Elite_Eight:'0.94%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Norfolk State Spartans (14)",Round_of_32:'1.03%',Sweet_Sixteen:'1.02%',Elite_Eight:'0.78%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Green Bay Phoenix (11)",Round_of_32:'93.86%',Sweet_Sixteen:'16.47%',Elite_Eight:'0.63%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Chattanooga Mocs (14)",Round_of_32:'2.5%',Sweet_Sixteen:'0.93%',Elite_Eight:'0.19%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Maryland Terrapins (10)",Round_of_32:'44.68%',Sweet_Sixteen:'0.04%',Elite_Eight:'0.03%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Florida State Seminoles (9)",Round_of_32:'39.67%',Sweet_Sixteen:'0.34%',Elite_Eight:'0.01%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Iowa State Cyclones (7)",Round_of_32:'55.32%',Sweet_Sixteen:'0.01%',Elite_Eight:'0.01%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Drake Bulldogs (12)",Round_of_32:'63.33%',Sweet_Sixteen:'29.31%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Eastern Washington Eagles (14)",Round_of_32:'15.06%',Sweet_Sixteen:'13.1%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Nebraska Cornhuskers (5)",Round_of_32:'96.92%',Sweet_Sixteen:'10.08%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"UCLA Bruins (2)",Round_of_32:'95.23%',Sweet_Sixteen:'7.6%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Fairfield Stags (12)",Round_of_32:'15.83%',Sweet_Sixteen:'5.23%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Colorado Buffaloes (5)",Round_of_32:'36.67%',Sweet_Sixteen:'4.89%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Middle Tennessee Blue Raiders (11)",Round_of_32:'91.3%',Sweet_Sixteen:'0.79%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Duke Blue Devils (7)",Round_of_32:'8.46%',Sweet_Sixteen:'0.41%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Oklahoma Sooners (5)",Round_of_32:'4.3%',Sweet_Sixteen:'0.29%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Maine Black Bears (14)",Round_of_32:'0.64%',Sweet_Sixteen:'0.14%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Texas A&M Aggies (11)",Round_of_32:'3.08%',Sweet_Sixteen:'0.06%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"California Baptist Lancers (14)",Round_of_32:'4.77%',Sweet_Sixteen:'0.02%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Michigan State Spartans (9)",Round_of_32:'99.21%',Sweet_Sixteen:'0.01%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Princeton Tigers (9)",Round_of_32:'7.28%',Sweet_Sixteen:'0.01%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Holy Cross Crusaders (16)",Round_of_32:'0.02%',Sweet_Sixteen:'0.01%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Syracuse Orange (5)",Round_of_32:'99.99%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Marquette Golden Eagles (10)",Round_of_32:'73.95%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Michigan Wolverines (9)",Round_of_32:'69.3%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Alabama Crimson Tide (8)",Round_of_32:'60.33%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Utah Utes (5)",Round_of_32:'57.75%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Kansas Jayhawks (8)",Round_of_32:'30.7%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Ole Miss Rebels (7)",Round_of_32:'26.05%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Louisville Cardinals (5)",Round_of_32:'8.7%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Tennessee Lady Volunteers (5)",Round_of_32:'6.14%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"North Carolina Tar Heels (8)",Round_of_32:'0.79%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Portland Pilots (12)",Round_of_32:'0.01%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Arizona Wildcats (11)",Round_of_32:'0.01%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Presbyterian Blue Hose (16)",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Kent State Golden Flashes (14)",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Drexel Dragons (16)",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"UC Irvine Anteaters (12)",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Rice Owls (14)",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Creighton Bluejays (7)",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Vanderbilt Commodores (12)",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
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
      var round_32 = ['South Carolina Gamecocks','North Carolina Tar Heels','Oklahoma Sooners','Indiana Hoosiers','Nebraska Cornhuskers','Oregon State Beavers','Ole Miss Rebels','Notre Dame Fighting Irish','Texas Longhorns','Alabama Crimson Tide','Utah Utes','Gonzaga Bulldogs','Tennessee Lady Volunteers','NC State Wolfpack','Iowa State Cyclones','Stanford Cardinal','Iowa Hawkeyes','West Virginia Mountaineers','Colorado Buffaloes','Kansas State Wildcats','Middle Tennessee Blue Raiders','LSU Tigers','Creighton Bluejays','UCLA Bruins','USC Trojans','Kansas Jayhawks','Baylor Bears','Virginia Tech Hokies','Syracuse Orange','UConn Huskies','Duke Blue Devils','Ohio State Buckeyes'];
      var round_16 = ['South Carolina Gamecocks','Indiana Hoosiers','Oregon State Beavers','Notre Dame Fighting Irish','Texas Longhorns','Gonzaga Bulldogs','NC State Wolfpack','Stanford Cardinal','Iowa Hawkeyes','Colorado Buffaloes','LSU Tigers','UCLA Bruins','USC Trojans','Baylor Bears','UConn Huskies','Duke Blue Devils'];
      var round_8 = ['South Carolina Gamecocks','Oregon State Beavers','Texas Longhorns','NC State Wolfpack','Iowa Hawkeyes','LSU Tigers','USC Trojans','UConn Huskies'];
      var round_4 = ['South Carolina Gamecocks','NC State Wolfpack','Iowa Hawkeyes','UConn Huskies'];
      var round_2 = ['South Carolina Gamecocks','Iowa Hawkeyes'];
      var round_1 = ['South Carolina Gamecocks'];
    }
    for (i = 1; i < (rows.length); i++) {
      var bold_weight = "700";
      var font_color = "#00be9f";
      var font_black = 'black';
      var team_name = rows[i].getElementsByTagName("TD")[0].innerHTML.split(" (")[0];
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