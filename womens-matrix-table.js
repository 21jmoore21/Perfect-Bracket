function change_year(year){
    document.getElementById("yearofstudy").innerHTML = year;
}

function find_winner(){
    
    let current_year = 2024;
    let study_year = document.getElementById("yearofstudy").innerHTML;
    if (study_year == 2023){
      var team_stats = [{name:"South Carolina Gamecocks (1)",Round_of_32:'100.0%',Sweet_Sixteen:'100.0%',Elite_Eight:'99.98%',Final_Four:'99.78%',Championship:'96.73%',Champion:'91.07%'}, 
      {name:"LSU Tigers (3)",Round_of_32:'100.0%',Sweet_Sixteen:'100.0%',Elite_Eight:'99.49%',Final_Four:'97.61%',Championship:'95.52%',Champion:'6.18%'}, 
      {name:"Iowa Hawkeyes (2)",Round_of_32:'99.96%',Sweet_Sixteen:'93.57%',Elite_Eight:'77.52%',Final_Four:'52.46%',Championship:'3.22%',Champion:'2.36%'}, 
      {name:"Indiana Hoosiers (1)",Round_of_32:'99.99%',Sweet_Sixteen:'99.99%',Elite_Eight:'52.5%',Final_Four:'1.9%',Championship:'1.62%',Champion:'0.17%'}, 
      {name:"Cleveland State Vikings (12)",Round_of_32:'98.91%',Sweet_Sixteen:'83.26%',Elite_Eight:'44.1%',Final_Four:'0.27%',Championship:'0.24%',Champion:'0.1%'}, 
      {name:"UConn Huskies (2)",Round_of_32:'100.0%',Sweet_Sixteen:'100.0%',Elite_Eight:'98.95%',Final_Four:'77.96%',Championship:'2.36%',Champion:'0.09%'}, 
      {name:"Maryland Terrapins (2)",Round_of_32:'97.35%',Sweet_Sixteen:'93.27%',Elite_Eight:'9.28%',Final_Four:'0.21%',Championship:'0.05%',Champion:'0.03%'}, 
      {name:"Utah Utes (2)",Round_of_32:'99.95%',Sweet_Sixteen:'89.96%',Elite_Eight:'0.51%',Final_Four:'0.1%',Championship:'0.1%',Champion:'0.0%'}, 
      {name:"Florida Gulf Coast Eagles (12)",Round_of_32:'99.71%',Sweet_Sixteen:'16.25%',Elite_Eight:'3.4%',Final_Four:'0.12%',Championship:'0.09%',Champion:'0.0%'}, 
      {name:"South Dakota State Jackrabbits (9)",Round_of_32:'87.88%',Sweet_Sixteen:'31.24%',Elite_Eight:'31.05%',Final_Four:'12.7%',Championship:'0.04%',Champion:'0.0%'}, 
      {name:"Virginia Tech Hokies (1)",Round_of_32:'100.0%',Sweet_Sixteen:'66.02%',Elite_Eight:'65.76%',Final_Four:'8.3%',Championship:'0.03%',Champion:'0.0%'}, 
      {name:"Stanford Cardinal (1)",Round_of_32:'100.0%',Sweet_Sixteen:'92.61%',Elite_Eight:'88.33%',Final_Four:'36.26%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Duke Blue Devils (3)",Round_of_32:'99.8%',Sweet_Sixteen:'66.93%',Elite_Eight:'18.47%',Final_Four:'7.87%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Middle Tennessee Blue Raiders (11)",Round_of_32:'73.54%',Sweet_Sixteen:'31.48%',Elite_Eight:'1.88%',Final_Four:'0.8%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Ole Miss Rebels (8)",Round_of_32:'32.94%',Sweet_Sixteen:'2.95%',Elite_Eight:'2.65%',Final_Four:'0.75%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Florida State Seminoles (7)",Round_of_32:'99.78%',Sweet_Sixteen:'6.37%',Elite_Eight:'2.12%',Final_Four:'0.71%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Gonzaga Bulldogs (9)",Round_of_32:'67.06%',Sweet_Sixteen:'4.44%',Elite_Eight:'3.91%',Final_Four:'0.66%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Ohio State Buckeyes (3)",Round_of_32:'86.14%',Sweet_Sixteen:'82.49%',Elite_Eight:'1.05%',Final_Four:'0.46%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"USC Trojans (8)",Round_of_32:'12.12%',Sweet_Sixteen:'2.74%',Elite_Eight:'2.73%',Final_Four:'0.44%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Texas Longhorns (4)",Round_of_32:'92.81%',Sweet_Sixteen:'22.45%',Elite_Eight:'0.87%',Final_Four:'0.25%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Drake Bulldogs (12)",Round_of_32:'94.43%',Sweet_Sixteen:'74.42%',Elite_Eight:'4.03%',Final_Four:'0.17%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Iowa State Cyclones (5)",Round_of_32:'97.46%',Sweet_Sixteen:'72.19%',Elite_Eight:'0.41%',Final_Four:'0.14%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"East Carolina Pirates (12)",Round_of_32:'7.19%',Sweet_Sixteen:'2.56%',Elite_Eight:'0.21%',Final_Four:'0.06%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Oklahoma Sooners (5)",Round_of_32:'96.77%',Sweet_Sixteen:'77.72%',Elite_Eight:'0.02%',Final_Four:'0.01%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Iona Gaels (14)",Round_of_32:'0.2%',Sweet_Sixteen:'0.13%',Elite_Eight:'0.01%',Final_Four:'0.01%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Notre Dame Fighting Irish (3)",Round_of_32:'100.0%',Sweet_Sixteen:'97.9%',Elite_Eight:'89.34%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Creighton Bluejays (5)",Round_of_32:'34.3%',Sweet_Sixteen:'1.7%',Elite_Eight:'1.01%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Mississippi State Bulldogs (11)",Round_of_32:'65.7%',Sweet_Sixteen:'0.4%',Elite_Eight:'0.37%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Tennessee Lady Volunteers (4)",Round_of_32:'100.0%',Sweet_Sixteen:'25.82%',Elite_Eight:'0.05%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"UCLA Bruins (4)",Round_of_32:'67.12%',Sweet_Sixteen:'13.74%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"James Madison Dukes (14)",Round_of_32:'13.86%',Sweet_Sixteen:'12.3%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Princeton Tigers (10)",Round_of_32:'45.57%',Sweet_Sixteen:'7.54%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Sacramento State Hornets (12)",Round_of_32:'32.88%',Sweet_Sixteen:'6.91%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"St. John's Red Storm (11)",Round_of_32:'34.16%',Sweet_Sixteen:'4.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Arizona Wildcats (7)",Round_of_32:'81.77%',Sweet_Sixteen:'2.51%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"NC State Wolfpack (7)",Round_of_32:'54.43%',Sweet_Sixteen:'2.47%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"West Virginia Mountaineers (10)",Round_of_32:'18.23%',Sweet_Sixteen:'2.44%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Toledo Rockets (12)",Round_of_32:'2.54%',Sweet_Sixteen:'1.99%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Holy Cross Crusaders (14)",Round_of_32:'2.65%',Sweet_Sixteen:'1.78%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Portland Pilots (12)",Round_of_32:'3.23%',Sweet_Sixteen:'1.63%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Colorado Buffaloes (5)",Round_of_32:'26.46%',Sweet_Sixteen:'1.46%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"North Carolina Tar Heels (5)",Round_of_32:'65.84%',Sweet_Sixteen:'1.21%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Louisville Cardinals (5)",Round_of_32:'5.57%',Sweet_Sixteen:'0.57%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Villanova Wildcats (4)",Round_of_32:'1.09%',Sweet_Sixteen:'0.49%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Georgia Lady Bulldogs (10)",Round_of_32:'0.22%',Sweet_Sixteen:'0.06%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Gardner-Webb Runnin' Bulldogs (14)",Round_of_32:'0.05%',Sweet_Sixteen:'0.03%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Tennessee Tech Golden Eagles (16)",Round_of_32:'0.01%',Sweet_Sixteen:'0.01%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"South Florida Bulls (8)",Round_of_32:'88.42%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Oklahoma State Cowgirls (8)",Round_of_32:'84.33%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Baylor Bears (7)",Round_of_32:'77.02%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"UNLV Lady Rebels (11)",Round_of_32:'75.83%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Michigan Wolverines (5)",Round_of_32:'24.17%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Alabama Crimson Tide (10)",Round_of_32:'22.98%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Miami Hurricanes (9)",Round_of_32:'15.67%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Marquette Golden Eagles (9)",Round_of_32:'11.58%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Washington State Cougars (5)",Round_of_32:'0.29%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"SE Louisiana Lady Lions (14)",Round_of_32:'0.04%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Norfolk State Spartans (16)",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Southern Utah Thunderbirds (14)",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Sacred Heart Pioneers (16)",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Hawai'i Rainbow Wahine (14)",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Chattanooga Mocs (16)",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Saint Louis Billikens (12)",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Vermont Catamounts (14)",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      ];
    }
    else if (study_year == 2022){
      var team_stats = [{name:"South Carolina Gamecocks (1)",Round_of_32:'100.0%',Sweet_Sixteen:'100.0%',Elite_Eight:'90.4%',Final_Four:'77.3%',Championship:'76.87%',Champion:'54.4%'}, 
      {name:"NC State Wolfpack (1)",Round_of_32:'100.0%',Sweet_Sixteen:'100.0%',Elite_Eight:'99.58%',Final_Four:'94.87%',Championship:'85.89%',Champion:'36.32%'}, 
      {name:"Iowa Hawkeyes (2)",Round_of_32:'100.0%',Sweet_Sixteen:'98.87%',Elite_Eight:'30.69%',Final_Four:'8.46%',Championship:'8.27%',Champion:'2.9%'}, 
      {name:"Texas Longhorns (2)",Round_of_32:'98.47%',Sweet_Sixteen:'92.8%',Elite_Eight:'45.79%',Final_Four:'28.63%',Championship:'5.5%',Champion:'2.04%'}, 
      {name:"North Carolina Tar Heels (5)",Round_of_32:'97.39%',Sweet_Sixteen:'96.39%',Elite_Eight:'7.98%',Final_Four:'4.67%',Championship:'4.44%',Champion:'1.76%'}, 
      {name:"Iowa State Cyclones (3)",Round_of_32:'99.94%',Sweet_Sixteen:'97.01%',Elite_Eight:'66.63%',Final_Four:'8.69%',Championship:'8.6%',Champion:'0.82%'}, 
      {name:"Jackson State Lady Tigers (14)",Round_of_32:'84.03%',Sweet_Sixteen:'66.14%',Elite_Eight:'41.81%',Final_Four:'28.39%',Championship:'5.62%',Champion:'0.57%'}, 
      {name:"Princeton Tigers (11)",Round_of_32:'99.81%',Sweet_Sixteen:'79.94%',Elite_Eight:'27.78%',Final_Four:'4.34%',Championship:'2.29%',Champion:'0.56%'}, 
      {name:"Stephen F. Austin Ladyjacks (12)",Round_of_32:'2.61%',Sweet_Sixteen:'2.58%',Elite_Eight:'1.42%',Final_Four:'0.88%',Championship:'0.75%',Champion:'0.42%'}, 
      {name:"Florida Gulf Coast Eagles (12)",Round_of_32:'44.31%',Sweet_Sixteen:'33.25%',Elite_Eight:'15.95%',Final_Four:'6.06%',Championship:'0.11%',Champion:'0.07%'}, 
      {name:"Maryland Terrapins (4)",Round_of_32:'93.27%',Sweet_Sixteen:'34.43%',Elite_Eight:'15.04%',Final_Four:'7.78%',Championship:'0.1%',Champion:'0.06%'}, 
      {name:"IUPUI Jaguars (12)",Round_of_32:'88.42%',Sweet_Sixteen:'84.01%',Elite_Eight:'0.38%',Final_Four:'0.22%',Championship:'0.15%',Champion:'0.05%'}, 
      {name:"Louisville Cardinals (1)",Round_of_32:'99.9%',Sweet_Sixteen:'58.1%',Elite_Eight:'56.46%',Final_Four:'16.93%',Championship:'0.67%',Champion:'0.01%'}, 
      {name:"Baylor Bears (2)",Round_of_32:'100.0%',Sweet_Sixteen:'91.7%',Elite_Eight:'76.74%',Final_Four:'61.4%',Championship:'0.17%',Champion:'0.01%'}, 
      {name:"UConn Huskies (2)",Round_of_32:'99.93%',Sweet_Sixteen:'96.96%',Elite_Eight:'69.77%',Final_Four:'0.22%',Championship:'0.13%',Champion:'0.01%'}, 
      {name:"UCF Knights (7)",Round_of_32:'99.63%',Sweet_Sixteen:'2.99%',Elite_Eight:'0.68%',Final_Four:'0.31%',Championship:'0.18%',Champion:'0.0%'}, 
      {name:"BYU Cougars (5)",Round_of_32:'100.0%',Sweet_Sixteen:'59.04%',Elite_Eight:'10.78%',Final_Four:'4.33%',Championship:'0.17%',Champion:'0.0%'}, 
      {name:"South Dakota Coyotes (10)",Round_of_32:'98.43%',Sweet_Sixteen:'8.24%',Elite_Eight:'5.82%',Final_Four:'3.82%',Championship:'0.06%',Champion:'0.0%'}, 
      {name:"Stanford Cardinal (1)",Round_of_32:'100.0%',Sweet_Sixteen:'98.07%',Elite_Eight:'62.57%',Final_Four:'24.4%',Championship:'0.01%',Champion:'0.0%'}, 
      {name:"Oklahoma Sooners (4)",Round_of_32:'11.58%',Sweet_Sixteen:'10.2%',Elite_Eight:'0.04%',Final_Four:'0.04%',Championship:'0.01%',Champion:'0.0%'}, 
      {name:"Kansas Jayhawks (8)",Round_of_32:'71.83%',Sweet_Sixteen:'1.9%',Elite_Eight:'0.6%',Final_Four:'0.01%',Championship:'0.01%',Champion:'0.0%'}, 
      {name:"Gonzaga Bulldogs (9)",Round_of_32:'63.69%',Sweet_Sixteen:'29.6%',Elite_Eight:'27.68%',Final_Four:'7.69%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Michigan Wolverines (3)",Round_of_32:'99.97%',Sweet_Sixteen:'40.95%',Elite_Eight:'6.63%',Final_Four:'4.53%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Virginia Tech Hokies (5)",Round_of_32:'55.69%',Sweet_Sixteen:'31.59%',Elite_Eight:'5.72%',Final_Four:'3.29%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Ohio State Buckeyes (5)",Round_of_32:'76.54%',Sweet_Sixteen:'25.1%',Elite_Eight:'8.52%',Final_Four:'1.03%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Tennessee Lady Volunteers (4)",Round_of_32:'71.16%',Sweet_Sixteen:'59.37%',Elite_Eight:'4.17%',Final_Four:'0.88%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Nebraska Cornhuskers (8)",Round_of_32:'36.31%',Sweet_Sixteen:'12.3%',Elite_Eight:'11.59%',Final_Four:'0.42%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"LSU Tigers (3)",Round_of_32:'15.97%',Sweet_Sixteen:'7.01%',Elite_Eight:'2.97%',Final_Four:'0.21%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Missouri State Lady Bears (11)",Round_of_32:'23.46%',Sweet_Sixteen:'1.75%',Elite_Eight:'0.26%',Final_Four:'0.17%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Utah Utes (7)",Round_of_32:'95.26%',Sweet_Sixteen:'6.3%',Elite_Eight:'0.59%',Final_Four:'0.03%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Dayton Flyers (11)",Round_of_32:'73.61%',Sweet_Sixteen:'2.47%',Elite_Eight:'2.28%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Indiana Hoosiers (3)",Round_of_32:'99.44%',Sweet_Sixteen:'20.06%',Elite_Eight:'1.77%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Georgia Lady Bulldogs (5)",Round_of_32:'26.39%',Sweet_Sixteen:'0.51%',Elite_Eight:'0.34%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"UNLV Lady Rebels (12)",Round_of_32:'92.77%',Sweet_Sixteen:'1.03%',Elite_Eight:'0.2%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Delaware Blue Hens (12)",Round_of_32:'6.73%',Sweet_Sixteen:'0.73%',Elite_Eight:'0.11%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Buffalo Bulls (12)",Round_of_32:'28.84%',Sweet_Sixteen:'18.19%',Elite_Eight:'0.1%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Colorado Buffaloes (7)",Round_of_32:'49.08%',Sweet_Sixteen:'1.11%',Elite_Eight:'0.06%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Fairfield Stags (14)",Round_of_32:'1.53%',Sweet_Sixteen:'0.89%',Elite_Eight:'0.06%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Ole Miss Rebels (7)",Round_of_32:'1.57%',Sweet_Sixteen:'0.06%',Elite_Eight:'0.03%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Georgia Tech Yellow Jackets (9)",Round_of_32:'28.17%',Sweet_Sixteen:'0.03%',Elite_Eight:'0.01%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Oregon Ducks (5)",Round_of_32:'89.55%',Sweet_Sixteen:'19.99%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Notre Dame Fighting Irish (5)",Round_of_32:'97.39%',Sweet_Sixteen:'5.79%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Belmont Bruins (12)",Round_of_32:'10.45%',Sweet_Sixteen:'2.45%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Mercer Bears (14)",Round_of_32:'0.07%',Sweet_Sixteen:'0.05%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Creighton Bluejays (10)",Round_of_32:'50.92%',Sweet_Sixteen:'0.02%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Arkansas Razorbacks (10)",Round_of_32:'4.74%',Sweet_Sixteen:'0.01%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"UT Arlington Mavericks (14)",Round_of_32:'0.06%',Sweet_Sixteen:'0.01%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"American University Eagles (14)",Round_of_32:'0.03%',Sweet_Sixteen:'0.01%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Kansas State Wildcats (9)",Round_of_32:'99.96%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"South Florida Bulls (9)",Round_of_32:'99.45%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Arizona Wildcats (4)",Round_of_32:'7.23%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Massachusetts Minutewomen (12)",Round_of_32:'2.61%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Charlotte 49ers (14)",Round_of_32:'0.56%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Miami Hurricanes (8)",Round_of_32:'0.55%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Florida Gators (10)",Round_of_32:'0.37%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Kentucky Wildcats (5)",Round_of_32:'0.19%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"UAlbany Great Danes (16)",Round_of_32:'0.1%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Washington State Cougars (8)",Round_of_32:'0.04%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Howard Bison (16)",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Illinois State Redbirds (14)",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Villanova Wildcats (11)",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Hawai'i Rainbow Wahine (14)",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Montana State Bobcats (16)",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Longwood Lancers (16)",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      ];
    }
    else if (study_year == 2021){
      var team_stats = [{name:"UConn Huskies (1)",Round_of_32:'100.0%',Sweet_Sixteen:'100.0%',Elite_Eight:'99.96%',Final_Four:'84.1%',Championship:'84.09%',Champion:'75.89%'}, 
      {name:"Baylor Bears (2)",Round_of_32:'100.0%',Sweet_Sixteen:'100.0%',Elite_Eight:'99.52%',Final_Four:'15.86%',Championship:'15.84%',Champion:'13.63%'}, 
      {name:"Maryland Terrapins (2)",Round_of_32:'99.99%',Sweet_Sixteen:'99.99%',Elite_Eight:'99.27%',Final_Four:'54.8%',Championship:'45.72%',Champion:'9.67%'}, 
      {name:"Stephen F. Austin Ladyjacks (12)",Round_of_32:'99.69%',Sweet_Sixteen:'92.2%',Elite_Eight:'26.21%',Final_Four:'13.17%',Championship:'9.64%',Champion:'0.66%'}, 
      {name:"South Carolina Gamecocks (1)",Round_of_32:'100.0%',Sweet_Sixteen:'100.0%',Elite_Eight:'73.71%',Final_Four:'32.03%',Championship:'22.73%',Champion:'0.15%'}, 
      {name:"Stanford Cardinal (1)",Round_of_32:'99.99%',Sweet_Sixteen:'99.99%',Elite_Eight:'96.58%',Final_Four:'96.31%',Championship:'21.9%',Champion:'0.0%'}, 
      {name:"Iowa Hawkeyes (5)",Round_of_32:'99.83%',Sweet_Sixteen:'53.04%',Elite_Eight:'0.04%',Final_Four:'0.03%',Championship:'0.03%',Champion:'0.0%'}, 
      {name:"Troy Trojans (14)",Round_of_32:'21.04%',Sweet_Sixteen:'20.98%',Elite_Eight:'19.88%',Final_Four:'5.53%',Championship:'0.02%',Champion:'0.0%'}, 
      {name:"Texas A&M Aggies (2)",Round_of_32:'78.96%',Sweet_Sixteen:'78.68%',Elite_Eight:'73.48%',Final_Four:'6.52%',Championship:'0.01%',Champion:'0.0%'}, 
      {name:"Louisville Cardinals (2)",Round_of_32:'96.47%',Sweet_Sixteen:'95.82%',Elite_Eight:'91.73%',Final_Four:'0.28%',Championship:'0.01%',Champion:'0.0%'}, 
      {name:"Florida Gulf Coast Eagles (11)",Round_of_32:'70.53%',Sweet_Sixteen:'68.89%',Elite_Eight:'0.48%',Final_Four:'0.01%',Championship:'0.01%',Champion:'0.0%'}, 
      {name:"NC State Wolfpack (1)",Round_of_32:'90.06%',Sweet_Sixteen:'89.58%',Elite_Eight:'83.23%',Final_Four:'73.86%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"North Carolina A&T Aggies (16)",Round_of_32:'9.94%',Sweet_Sixteen:'9.64%',Elite_Eight:'8.65%',Final_Four:'6.64%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Gonzaga Bulldogs (5)",Round_of_32:'100.0%',Sweet_Sixteen:'58.71%',Elite_Eight:'5.97%',Final_Four:'4.75%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Arkansas Razorbacks (4)",Round_of_32:'94.07%',Sweet_Sixteen:'35.09%',Elite_Eight:'2.92%',Final_Four:'2.88%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Rutgers Scarlet Knights (5)",Round_of_32:'94.68%',Sweet_Sixteen:'46.94%',Elite_Eight:'5.04%',Final_Four:'1.16%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Indiana Hoosiers (4)",Round_of_32:'100.0%',Sweet_Sixteen:'41.29%',Elite_Eight:'1.53%',Final_Four:'0.97%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"South Florida Bulls (8)",Round_of_32:'100.0%',Sweet_Sixteen:'0.78%',Elite_Eight:'0.62%',Final_Four:'0.56%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Missouri State Lady Bears (5)",Round_of_32:'83.64%',Sweet_Sixteen:'54.32%',Elite_Eight:'0.44%',Final_Four:'0.41%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"UC Davis Aggies (12)",Round_of_32:'16.36%',Sweet_Sixteen:'10.58%',Elite_Eight:'0.06%',Final_Four:'0.06%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"South Dakota Coyotes (11)",Round_of_32:'37.86%',Sweet_Sixteen:'18.02%',Elite_Eight:'1.82%',Final_Four:'0.02%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"UCF Knights (10)",Round_of_32:'70.77%',Sweet_Sixteen:'1.27%',Elite_Eight:'0.89%',Final_Four:'0.02%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Marist Red Foxes (14)",Round_of_32:'3.53%',Sweet_Sixteen:'2.88%',Elite_Eight:'2.61%',Final_Four:'0.01%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Arizona Wildcats (3)",Round_of_32:'99.34%',Sweet_Sixteen:'52.46%',Elite_Eight:'1.3%',Final_Four:'0.01%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Northwestern Wildcats (7)",Round_of_32:'29.23%',Sweet_Sixteen:'0.03%',Elite_Eight:'0.02%',Final_Four:'0.01%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Georgia Lady Bulldogs (3)",Round_of_32:'99.98%',Sweet_Sixteen:'61.79%',Elite_Eight:'2.93%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"UCLA Bruins (3)",Round_of_32:'100.0%',Sweet_Sixteen:'100.0%',Elite_Eight:'0.73%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Iowa State Cyclones (7)",Round_of_32:'94.43%',Sweet_Sixteen:'0.34%',Elite_Eight:'0.3%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Lehigh Mountain Hawks (12)",Round_of_32:'26.23%',Sweet_Sixteen:'3.85%',Elite_Eight:'0.08%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Idaho State Bengals (12)",Round_of_32:'81.21%',Sweet_Sixteen:'44.74%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Michigan Wolverines (5)",Round_of_32:'29.47%',Sweet_Sixteen:'24.72%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Oregon Ducks (5)",Round_of_32:'62.14%',Sweet_Sixteen:'20.19%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Tennessee Lady Volunteers (3)",Round_of_32:'97.77%',Sweet_Sixteen:'6.39%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"West Virginia Mountaineers (4)",Round_of_32:'73.77%',Sweet_Sixteen:'3.95%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Kentucky Wildcats (4)",Round_of_32:'18.79%',Sweet_Sixteen:'2.22%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Stony Brook Seawolves (14)",Round_of_32:'0.66%',Sweet_Sixteen:'0.42%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"BYU Cougars (11)",Round_of_32:'5.32%',Sweet_Sixteen:'0.18%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Wright State Raiders (12)",Round_of_32:'5.93%',Sweet_Sixteen:'0.01%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Utah Valley Wolverines (16)",Round_of_32:'0.01%',Sweet_Sixteen:'0.01%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Mount St. Mary's Mountaineers (14)",Round_of_32:'0.01%',Sweet_Sixteen:'0.01%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"South Dakota State Jackrabbits (9)",Round_of_32:'99.95%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Oklahoma State Cowgirls (8)",Round_of_32:'95.89%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Oregon State Beavers (8)",Round_of_32:'89.73%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Texas Longhorns (5)",Round_of_32:'80.44%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Marquette Golden Eagles (10)",Round_of_32:'79.06%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"North Carolina Tar Heels (10)",Round_of_32:'59.83%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Alabama Crimson Tide (7)",Round_of_32:'40.17%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Virginia Tech Hokies (7)",Round_of_32:'20.94%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Bradley Braves (11)",Round_of_32:'19.56%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Florida State Seminoles (9)",Round_of_32:'10.27%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Michigan State Spartans (10)",Round_of_32:'5.57%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Wake Forest Demon Deacons (9)",Round_of_32:'4.11%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Middle Tennessee Blue Raiders (14)",Round_of_32:'2.23%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Georgia Tech Yellow Jackets (5)",Round_of_32:'0.31%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Central Michigan Chippewas (12)",Round_of_32:'0.17%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Syracuse Orange (8)",Round_of_32:'0.05%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Drexel Dragons (14)",Round_of_32:'0.02%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Mercer Bears (16)",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Wyoming Cowgirls (14)",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"High Point Panthers (16)",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Jackson State Lady Tigers (14)",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Washington State Cougars (9)",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Belmont Bruins (12)",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"VCU Rams (12)",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      ];
    }
    else if (study_year == current_year || study_year == "Year"){
      var team_stats = [{name:"South Carolina Gamecocks (1)",Round_of_32:'100.0%',Sweet_Sixteen:'99.97%',Elite_Eight:'99.94%',Final_Four:'99.76%',Championship:'93.39%',Champion:'80.35%'}, 
      {name:"LSU Tigers (3)",Round_of_32:'100.0%',Sweet_Sixteen:'99.4%',Elite_Eight:'77.69%',Final_Four:'62.32%',Championship:'51.99%',Champion:'10.1%'}, 
      {name:"Iowa Hawkeyes (1)",Round_of_32:'99.95%',Sweet_Sixteen:'98.89%',Elite_Eight:'97.32%',Final_Four:'23.5%',Championship:'17.95%',Champion:'4.97%'}, 
      {name:"Gonzaga Bulldogs (4)",Round_of_32:'100.0%',Sweet_Sixteen:'99.51%',Elite_Eight:'59.91%',Final_Four:'50.73%',Championship:'5.5%',Champion:'2.86%'}, 
      {name:"UNLV Lady Rebels (10)",Round_of_32:'100.0%',Sweet_Sixteen:'92.51%',Elite_Eight:'22.31%',Final_Four:'14.18%',Championship:'7.62%',Champion:'1.33%'}, 
      {name:"UConn Huskies (3)",Round_of_32:'98.93%',Sweet_Sixteen:'98.93%',Elite_Eight:'98.89%',Final_Four:'98.87%',Championship:'22.44%',Champion:'0.25%'}, 
      {name:"Texas Longhorns (1)",Round_of_32:'100.0%',Sweet_Sixteen:'99.69%',Elite_Eight:'39.9%',Final_Four:'36.28%',Championship:'0.81%',Champion:'0.06%'}, 
      {name:"Stanford Cardinal (2)",Round_of_32:'99.06%',Sweet_Sixteen:'99.02%',Elite_Eight:'89.78%',Final_Four:'10.6%',Championship:'0.18%',Champion:'0.06%'}, 
      {name:"Notre Dame Fighting Irish (2)",Round_of_32:'100.0%',Sweet_Sixteen:'100.0%',Elite_Eight:'98.9%',Final_Four:'0.2%',Championship:'0.12%',Champion:'0.02%'}, 
      {name:"NC State Wolfpack (3)",Round_of_32:'97.71%',Sweet_Sixteen:'83.35%',Elite_Eight:'8.62%',Final_Four:'2.29%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Jackson State Lady Tigers (14)",Round_of_32:'1.07%',Sweet_Sixteen:'1.07%',Elite_Eight:'1.07%',Final_Four:'1.07%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"South Dakota State Jackrabbits (12)",Round_of_32:'42.24%',Sweet_Sixteen:'0.49%',Elite_Eight:'0.15%',Final_Four:'0.09%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Marshall Thundering Herd (12)",Round_of_32:'13.69%',Sweet_Sixteen:'1.87%',Elite_Eight:'1.07%',Final_Four:'0.02%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Ohio State Buckeyes (2)",Round_of_32:'99.48%',Sweet_Sixteen:'73.16%',Elite_Eight:'0.03%',Final_Four:'0.02%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Michigan State Spartans (9)",Round_of_32:'99.24%',Sweet_Sixteen:'0.03%',Elite_Eight:'0.03%',Final_Four:'0.02%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Baylor Bears (5)",Round_of_32:'100.0%',Sweet_Sixteen:'78.15%',Elite_Eight:'55.16%',Final_Four:'0.01%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Florida State Seminoles (9)",Round_of_32:'39.98%',Sweet_Sixteen:'0.31%',Elite_Eight:'0.04%',Final_Four:'0.01%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Florida Gulf Coast Eagles (12)",Round_of_32:'95.69%',Sweet_Sixteen:'30.96%',Elite_Eight:'0.02%',Final_Four:'0.01%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Indiana Hoosiers (4)",Round_of_32:'83.97%',Sweet_Sixteen:'63.44%',Elite_Eight:'0.01%',Final_Four:'0.01%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Richmond Spiders (10)",Round_of_32:'92.08%',Sweet_Sixteen:'26.3%',Elite_Eight:'0.01%',Final_Four:'0.01%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"USC Trojans (1)",Round_of_32:'93.82%',Sweet_Sixteen:'93.82%',Elite_Eight:'34.29%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Virginia Tech Hokies (4)",Round_of_32:'86.31%',Sweet_Sixteen:'19.98%',Elite_Eight:'8.27%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Kansas State Wildcats (4)",Round_of_32:'100.0%',Sweet_Sixteen:'65.33%',Elite_Eight:'1.97%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Texas A&M-Corpus Christi Islanders (16)",Round_of_32:'6.18%',Sweet_Sixteen:'6.18%',Elite_Eight:'1.21%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Oregon State Beavers (3)",Round_of_32:'85.01%',Sweet_Sixteen:'77.28%',Elite_Eight:'1.1%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Green Bay Phoenix (11)",Round_of_32:'94.63%',Sweet_Sixteen:'15.88%',Elite_Eight:'0.79%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"West Virginia Mountaineers (8)",Round_of_32:'92.55%',Sweet_Sixteen:'1.1%',Elite_Eight:'0.71%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Norfolk State Spartans (14)",Round_of_32:'0.94%',Sweet_Sixteen:'0.93%',Elite_Eight:'0.59%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Chattanooga Mocs (14)",Round_of_32:'2.29%',Sweet_Sixteen:'0.77%',Elite_Eight:'0.18%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Maryland Terrapins (10)",Round_of_32:'43.44%',Sweet_Sixteen:'0.03%',Elite_Eight:'0.02%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Iowa State Cyclones (7)",Round_of_32:'56.56%',Sweet_Sixteen:'0.02%',Elite_Eight:'0.02%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Drake Bulldogs (12)",Round_of_32:'63.85%',Sweet_Sixteen:'29.81%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Eastern Washington Eagles (14)",Round_of_32:'14.99%',Sweet_Sixteen:'13.23%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Nebraska Cornhuskers (5)",Round_of_32:'97.0%',Sweet_Sixteen:'9.42%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"UCLA Bruins (2)",Round_of_32:'94.43%',Sweet_Sixteen:'7.47%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Fairfield Stags (12)",Round_of_32:'16.03%',Sweet_Sixteen:'5.37%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Colorado Buffaloes (5)",Round_of_32:'36.15%',Sweet_Sixteen:'4.86%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Middle Tennessee Blue Raiders (11)",Round_of_32:'91.74%',Sweet_Sixteen:'0.6%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Duke Blue Devils (7)",Round_of_32:'7.92%',Sweet_Sixteen:'0.44%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Oklahoma Sooners (5)",Round_of_32:'4.31%',Sweet_Sixteen:'0.23%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Maine Black Bears (14)",Round_of_32:'0.52%',Sweet_Sixteen:'0.1%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Texas A&M Aggies (11)",Round_of_32:'3.0%',Sweet_Sixteen:'0.07%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"California Baptist Lancers (14)",Round_of_32:'5.57%',Sweet_Sixteen:'0.02%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Holy Cross Crusaders (16)",Round_of_32:'0.05%',Sweet_Sixteen:'0.01%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Syracuse Orange (5)",Round_of_32:'100.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Marquette Golden Eagles (10)",Round_of_32:'74.2%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Michigan Wolverines (9)",Round_of_32:'69.26%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Alabama Crimson Tide (8)",Round_of_32:'60.02%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Utah Utes (5)",Round_of_32:'57.76%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Kansas Jayhawks (8)",Round_of_32:'30.74%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Ole Miss Rebels (7)",Round_of_32:'25.8%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Louisville Cardinals (5)",Round_of_32:'8.26%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Princeton Tigers (9)",Round_of_32:'7.45%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Tennessee Lady Volunteers (5)",Round_of_32:'5.37%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"North Carolina Tar Heels (8)",Round_of_32:'0.76%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Presbyterian Blue Hose (16)",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Kent State Golden Flashes (14)",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Drexel Dragons (16)",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"UC Irvine Anteaters (12)",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Portland Pilots (12)",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Rice Owls (14)",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Creighton Bluejays (7)",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Vanderbilt Commodores (12)",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Arizona Wildcats (11)",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
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