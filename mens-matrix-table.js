function change_year(year){
    document.getElementById("yearofstudy").innerHTML = year;
}

function find_winner(){
    
    let current_year = 2024;
    let study_year = document.getElementById("yearofstudy").innerHTML;
    if (study_year == 2023){
      var team_stats = [{name:"Houston Cougars (1)",Round_of_32:'100.0%',Sweet_Sixteen:'98.94%',Elite_Eight:'87.07%',Final_Four:'84.67%',Championship:'53.88%',Champion:'39.09%'}, 
      {name:"Gonzaga Bulldogs (3)",Round_of_32:'99.77%',Sweet_Sixteen:'98.97%',Elite_Eight:'63.04%',Final_Four:'43.94%',Championship:'32.69%',Champion:'21.87%'}, 
      {name:"Alabama Crimson Tide (1)",Round_of_32:'97.64%',Sweet_Sixteen:'97.64%',Elite_Eight:'84.42%',Final_Four:'56.34%',Championship:'41.5%',Champion:'18.72%'}, 
      {name:"Purdue Boilermakers (1)",Round_of_32:'99.83%',Sweet_Sixteen:'67.33%',Elite_Eight:'36.66%',Final_Four:'36.5%',Championship:'14.64%',Champion:'4.86%'}, 
      {name:"UConn Huskies (4)",Round_of_32:'99.16%',Sweet_Sixteen:'96.96%',Elite_Eight:'96.47%',Final_Four:'39.71%',Championship:'8.99%',Champion:'4.48%'}, 
      {name:"Arizona Wildcats (2)",Round_of_32:'100.0%',Sweet_Sixteen:'99.02%',Elite_Eight:'92.1%',Final_Four:'32.74%',Championship:'20.58%',Champion:'4.29%'}, 
      {name:"Oral Roberts Golden Eagles (12)",Round_of_32:'72.83%',Sweet_Sixteen:'47.99%',Elite_Eight:'30.57%',Final_Four:'30.13%',Championship:'12.88%',Champion:'4.12%'}, 
      {name:"UCLA Bruins (2)",Round_of_32:'94.84%',Sweet_Sixteen:'94.81%',Elite_Eight:'36.43%',Final_Four:'16.02%',Championship:'1.95%',Champion:'1.12%'}, 
      {name:"Drake Bulldogs (12)",Round_of_32:'53.63%',Sweet_Sixteen:'52.53%',Elite_Eight:'5.79%',Final_Four:'4.92%',Championship:'1.96%',Champion:'0.57%'}, 
      {name:"Charleston Cougars (12)",Round_of_32:'88.82%',Sweet_Sixteen:'85.0%',Elite_Eight:'13.67%',Final_Four:'7.5%',Championship:'1.68%',Champion:'0.44%'}, 
      {name:"Tennessee Volunteers (4)",Round_of_32:'92.02%',Sweet_Sixteen:'48.59%',Elite_Eight:'28.86%',Final_Four:'28.65%',Championship:'8.15%',Champion:'0.23%'}, 
      {name:"Creighton Bluejays (5)",Round_of_32:'94.34%',Sweet_Sixteen:'68.21%',Elite_Eight:'6.38%',Final_Four:'2.45%',Championship:'0.2%',Champion:'0.12%'}, 
      {name:"Miami Hurricanes (5)",Round_of_32:'46.37%',Sweet_Sixteen:'46.01%',Elite_Eight:'7.1%',Final_Four:'5.22%',Championship:'0.35%',Champion:'0.05%'}, 
      {name:"Texas A&M-Corpus Christi Islanders (16)",Round_of_32:'2.36%',Sweet_Sixteen:'2.36%',Elite_Eight:'0.71%',Final_Four:'0.31%',Championship:'0.15%',Champion:'0.02%'}, 
      {name:"Utah State Aggies (10)",Round_of_32:'96.44%',Sweet_Sixteen:'0.95%',Elite_Eight:'0.54%',Final_Four:'0.33%',Championship:'0.07%',Champion:'0.01%'}, 
      {name:"Colgate Raiders (14)",Round_of_32:'17.9%',Sweet_Sixteen:'17.47%',Elite_Eight:'9.36%',Final_Four:'1.69%',Championship:'0.02%',Champion:'0.01%'}, 
      {name:"UNC Asheville Bulldogs (14)",Round_of_32:'5.16%',Sweet_Sixteen:'5.1%',Elite_Eight:'0.52%',Final_Four:'0.24%',Championship:'0.15%',Champion:'0.0%'}, 
      {name:"Baylor Bears (3)",Round_of_32:'99.21%',Sweet_Sixteen:'30.11%',Elite_Eight:'0.92%',Final_Four:'0.23%',Championship:'0.06%',Champion:'0.0%'}, 
      {name:"Marquette Golden Eagles (2)",Round_of_32:'98.13%',Sweet_Sixteen:'77.66%',Elite_Eight:'33.5%',Final_Four:'0.68%',Championship:'0.05%',Champion:'0.0%'}, 
      {name:"Florida Atlantic Owls (9)",Round_of_32:'87.28%',Sweet_Sixteen:'26.5%',Elite_Eight:'2.59%',Final_Four:'2.54%',Championship:'0.03%',Champion:'0.0%'}, 
      {name:"Virginia Cavaliers (4)",Round_of_32:'30.51%',Sweet_Sixteen:'2.53%',Elite_Eight:'0.48%',Final_Four:'0.08%',Championship:'0.01%',Champion:'0.0%'}, 
      {name:"Saint Mary's Gaels (5)",Round_of_32:'91.32%',Sweet_Sixteen:'1.98%',Elite_Eight:'1.92%',Final_Four:'0.06%',Championship:'0.01%',Champion:'0.0%'}, 
      {name:"Xavier Musketeers (3)",Round_of_32:'99.14%',Sweet_Sixteen:'95.43%',Elite_Eight:'29.02%',Final_Four:'3.18%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Memphis Tigers (8)",Round_of_32:'12.72%',Sweet_Sixteen:'6.17%',Elite_Eight:'1.23%',Final_Four:'1.01%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Kansas State Wildcats (3)",Round_of_32:'79.67%',Sweet_Sixteen:'48.87%',Elite_Eight:'28.68%',Final_Four:'0.31%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Texas Longhorns (2)",Round_of_32:'82.1%',Sweet_Sixteen:'76.98%',Elite_Eight:'57.13%',Final_Four:'0.29%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Montana State Bobcats (14)",Round_of_32:'20.33%',Sweet_Sixteen:'9.41%',Elite_Eight:'6.89%',Final_Four:'0.1%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Louisiana Ragin' Cajuns (12)",Round_of_32:'7.98%',Sweet_Sixteen:'0.46%',Elite_Eight:'0.08%',Final_Four:'0.07%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"VCU Rams (12)",Round_of_32:'8.68%',Sweet_Sixteen:'0.3%',Elite_Eight:'0.3%',Final_Four:'0.03%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Texas A&M Aggies (7)",Round_of_32:'75.79%',Sweet_Sixteen:'5.21%',Elite_Eight:'4.23%',Final_Four:'0.02%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"San Diego State Aztecs (5)",Round_of_32:'11.18%',Sweet_Sixteen:'10.01%',Elite_Eight:'0.1%',Final_Four:'0.02%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Iowa Hawkeyes (8)",Round_of_32:'83.63%',Sweet_Sixteen:'1.06%',Elite_Eight:'0.04%',Final_Four:'0.01%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Duke Blue Devils (5)",Round_of_32:'27.17%',Sweet_Sixteen:'2.96%',Elite_Eight:'0.01%',Final_Four:'0.01%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Kentucky Wildcats (5)",Round_of_32:'57.66%',Sweet_Sixteen:'24.93%',Elite_Eight:'15.87%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Providence Friars (11)",Round_of_32:'42.34%',Sweet_Sixteen:'16.79%',Elite_Eight:'9.54%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Michigan State Spartans (7)",Round_of_32:'87.22%',Sweet_Sixteen:'20.68%',Elite_Eight:'5.33%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Iona Gaels (12)",Round_of_32:'0.84%',Sweet_Sixteen:'0.76%',Elite_Eight:'0.74%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Furman Paladins (12)",Round_of_32:'69.49%',Sweet_Sixteen:'2.46%',Elite_Eight:'0.62%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Kansas Jayhawks (1)",Round_of_32:'99.64%',Sweet_Sixteen:'98.72%',Elite_Eight:'0.57%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Penn State Nittany Lions (10)",Round_of_32:'24.21%',Sweet_Sixteen:'0.34%',Elite_Eight:'0.22%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Vermont Catamounts (14)",Round_of_32:'1.87%',Sweet_Sixteen:'0.6%',Elite_Eight:'0.19%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"NC State Wolfpack (11)",Round_of_32:'5.66%',Sweet_Sixteen:'1.68%',Elite_Eight:'0.06%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Pittsburgh Panthers (11)",Round_of_32:'89.78%',Sweet_Sixteen:'3.06%',Elite_Eight:'0.03%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Iowa State Cyclones (5)",Round_of_32:'10.22%',Sweet_Sixteen:'0.87%',Elite_Eight:'0.01%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Boise State Broncos (10)",Round_of_32:'98.25%',Sweet_Sixteen:'0.09%',Elite_Eight:'0.01%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Kent State Golden Flashes (12)",Round_of_32:'61.83%',Sweet_Sixteen:'1.44%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"USC Trojans (10)",Round_of_32:'12.78%',Sweet_Sixteen:'1.06%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Arkansas Razorbacks (8)",Round_of_32:'69.7%',Sweet_Sixteen:'0.84%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"TCU Horned Frogs (5)",Round_of_32:'100.0%',Sweet_Sixteen:'0.81%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Kennesaw State Owls (14)",Round_of_32:'0.86%',Sweet_Sixteen:'0.64%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Howard Bison (16)",Round_of_32:'0.36%',Sweet_Sixteen:'0.35%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Grand Canyon Lopes (14)",Round_of_32:'0.23%',Sweet_Sixteen:'0.22%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Illinois Fighting Illini (9)",Round_of_32:'30.3%',Sweet_Sixteen:'0.09%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Missouri Tigers (7)",Round_of_32:'3.56%',Sweet_Sixteen:'0.03%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Indiana Hoosiers (4)",Round_of_32:'38.17%',Sweet_Sixteen:'0.02%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"West Virginia Mountaineers (9)",Round_of_32:'56.21%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Maryland Terrapins (8)",Round_of_32:'43.79%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Auburn Tigers (9)",Round_of_32:'16.37%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Northwestern Wildcats (7)",Round_of_32:'1.75%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"UC Santa Barbara Gauchos (14)",Round_of_32:'0.79%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Fairleigh Dickinson Knights (16)",Round_of_32:'0.17%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Princeton Tigers (14)",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Northern Kentucky Norse (16)",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Arizona State Sun Devils (11)",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      ];
    }
    else if (study_year == 2022){
      var team_stats = [{name:"Gonzaga Bulldogs (1)",Round_of_32:'100.0%',Sweet_Sixteen:'99.97%',Elite_Eight:'99.93%',Final_Four:'99.77%',Championship:'98.55%',Champion:'96.0%'}, 
      {name:"Arizona Wildcats (1)",Round_of_32:'100.0%',Sweet_Sixteen:'100.0%',Elite_Eight:'89.08%',Final_Four:'86.73%',Championship:'77.11%',Champion:'1.41%'}, 
      {name:"South Dakota State Jackrabbits (13)",Round_of_32:'81.57%',Sweet_Sixteen:'57.79%',Elite_Eight:'36.58%',Final_Four:'35.62%',Championship:'10.43%',Champion:'0.84%'}, 
      {name:"Purdue Boilermakers (3)",Round_of_32:'99.86%',Sweet_Sixteen:'97.13%',Elite_Eight:'22.68%',Final_Four:'22.4%',Championship:'0.59%',Champion:'0.5%'}, 
      {name:"Houston Cougars (5)",Round_of_32:'69.16%',Sweet_Sixteen:'68.45%',Elite_Eight:'9.67%',Final_Four:'9.29%',Championship:'8.81%',Champion:'0.41%'}, 
      {name:"Murray State Racers (7)",Round_of_32:'100.0%',Sweet_Sixteen:'69.24%',Elite_Eight:'55.22%',Final_Four:'48.86%',Championship:'0.47%',Champion:'0.36%'}, 
      {name:"LSU Tigers (6)",Round_of_32:'100.0%',Sweet_Sixteen:'82.03%',Elite_Eight:'21.74%',Final_Four:'10.16%',Championship:'0.88%',Champion:'0.16%'}, 
      {name:"Baylor Bears (1)",Round_of_32:'91.02%',Sweet_Sixteen:'81.37%',Elite_Eight:'69.46%',Final_Four:'8.62%',Championship:'0.18%',Champion:'0.1%'}, 
      {name:"Villanova Wildcats (2)",Round_of_32:'100.0%',Sweet_Sixteen:'69.43%',Elite_Eight:'36.69%',Final_Four:'1.83%',Championship:'1.32%',Champion:'0.09%'}, 
      {name:"Texas Tech Red Raiders (3)",Round_of_32:'91.93%',Sweet_Sixteen:'90.65%',Elite_Eight:'43.31%',Final_Four:'0.18%',Championship:'0.13%',Champion:'0.06%'}, 
      {name:"Longwood Lancers (14)",Round_of_32:'40.14%',Sweet_Sixteen:'39.22%',Elite_Eight:'24.45%',Final_Four:'0.94%',Championship:'0.48%',Champion:'0.03%'}, 
      {name:"Iowa Hawkeyes (5)",Round_of_32:'100.0%',Sweet_Sixteen:'34.59%',Elite_Eight:'6.85%',Final_Four:'5.72%',Championship:'0.34%',Champion:'0.01%'}, 
      {name:"Kentucky Wildcats (2)",Round_of_32:'99.68%',Sweet_Sixteen:'30.76%',Elite_Eight:'22.1%',Final_Four:'18.86%',Championship:'0.03%',Champion:'0.01%'}, 
      {name:"UCLA Bruins (4)",Round_of_32:'98.61%',Sweet_Sixteen:'95.5%',Elite_Eight:'15.58%',Final_Four:'0.5%',Championship:'0.02%',Champion:'0.01%'}, 
      {name:"Arkansas Razorbacks (4)",Round_of_32:'58.59%',Sweet_Sixteen:'48.61%',Elite_Eight:'0.03%',Final_Four:'0.03%',Championship:'0.02%',Champion:'0.01%'}, 
      {name:"UAB Blazers (12)",Round_of_32:'30.84%',Sweet_Sixteen:'30.27%',Elite_Eight:'1.24%',Final_Four:'0.93%',Championship:'0.39%',Champion:'0.0%'}, 
      {name:"Tennessee Volunteers (3)",Round_of_32:'59.86%',Sweet_Sixteen:'58.75%',Elite_Eight:'32.85%',Final_Four:'0.14%',Championship:'0.08%',Champion:'0.0%'}, 
      {name:"Kansas Jayhawks (1)",Round_of_32:'100.0%',Sweet_Sixteen:'98.87%',Elite_Eight:'55.52%',Final_Four:'38.88%',Championship:'0.06%',Champion:'0.0%'}, 
      {name:"Loyola Chicago Ramblers (10)",Round_of_32:'96.77%',Sweet_Sixteen:'30.57%',Elite_Eight:'5.95%',Final_Four:'0.14%',Championship:'0.06%',Champion:'0.0%'}, 
      {name:"Auburn Tigers (2)",Round_of_32:'97.87%',Sweet_Sixteen:'97.77%',Elite_Eight:'74.22%',Final_Four:'9.43%',Championship:'0.03%',Champion:'0.0%'}, 
      {name:"San Diego State Aztecs (8)",Round_of_32:'96.66%',Sweet_Sixteen:'1.13%',Elite_Eight:'1.03%',Final_Four:'0.15%',Championship:'0.01%',Champion:'0.0%'}, 
      {name:"Vermont Catamounts (13)",Round_of_32:'41.41%',Sweet_Sixteen:'36.09%',Elite_Eight:'0.01%',Final_Four:'0.01%',Championship:'0.01%',Champion:'0.0%'}, 
      {name:"Norfolk State Spartans (16)",Round_of_32:'8.98%',Sweet_Sixteen:'7.48%',Elite_Eight:'6.86%',Final_Four:'0.55%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"North Carolina Tar Heels (8)",Round_of_32:'99.42%',Sweet_Sixteen:'11.15%',Elite_Eight:'7.51%',Final_Four:'0.17%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Saint Mary's Gaels (5)",Round_of_32:'95.86%',Sweet_Sixteen:'3.12%',Elite_Eight:'0.55%',Final_Four:'0.04%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Wisconsin Badgers (3)",Round_of_32:'59.11%',Sweet_Sixteen:'8.56%',Elite_Eight:'0.71%',Final_Four:'0.02%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Providence Friars (4)",Round_of_32:'18.43%',Sweet_Sixteen:'7.62%',Elite_Eight:'0.02%',Final_Four:'0.02%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Memphis Tigers (9)",Round_of_32:'55.71%',Sweet_Sixteen:'0.03%',Elite_Eight:'0.03%',Final_Four:'0.01%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Duke Blue Devils (2)",Round_of_32:'99.94%',Sweet_Sixteen:'94.04%',Elite_Eight:'53.13%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Colgate Raiders (14)",Round_of_32:'40.89%',Sweet_Sixteen:'9.41%',Elite_Eight:'2.52%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Davidson Wildcats (10)",Round_of_32:'94.33%',Sweet_Sixteen:'5.94%',Elite_Eight:'2.01%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Montana State Bobcats (14)",Round_of_32:'8.07%',Sweet_Sixteen:'7.17%',Elite_Eight:'1.55%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Jacksonville State Gamecocks (15)",Round_of_32:'2.13%',Sweet_Sixteen:'2.07%',Elite_Eight:'0.73%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"USC Trojans (7)",Round_of_32:'91.44%',Sweet_Sixteen:'0.1%',Elite_Eight:'0.07%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Colorado State Rams (6)",Round_of_32:'96.47%',Sweet_Sixteen:'2.03%',Elite_Eight:'0.06%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Akron Zips (13)",Round_of_32:'1.39%',Sweet_Sixteen:'1.38%',Elite_Eight:'0.04%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Chattanooga Mocs (13)",Round_of_32:'35.15%',Sweet_Sixteen:'0.08%',Elite_Eight:'0.01%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Miami Hurricanes (10)",Round_of_32:'8.56%',Sweet_Sixteen:'0.06%',Elite_Eight:'0.01%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"UConn Huskies (5)",Round_of_32:'64.71%',Sweet_Sixteen:'11.15%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"New Mexico State Aggies (12)",Round_of_32:'35.29%',Sweet_Sixteen:'4.15%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Texas Longhorns (6)",Round_of_32:'58.36%',Sweet_Sixteen:'2.65%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Notre Dame Fighting Irish (11)",Round_of_32:'62.32%',Sweet_Sixteen:'2.13%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Illinois Fighting Illini (4)",Round_of_32:'64.85%',Sweet_Sixteen:'1.2%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Virginia Tech Hokies (11)",Round_of_32:'41.64%',Sweet_Sixteen:'0.17%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Alabama Crimson Tide (6)",Round_of_32:'37.68%',Sweet_Sixteen:'0.05%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Yale Bulldogs (14)",Round_of_32:'0.14%',Sweet_Sixteen:'0.05%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Cal State Fullerton Titans (15)",Round_of_32:'0.06%',Sweet_Sixteen:'0.02%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Seton Hall Pirates (8)",Round_of_32:'96.54%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Boise State Broncos (8)",Round_of_32:'44.29%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Michigan State Spartans (7)",Round_of_32:'5.67%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Indiana Hoosiers (12)",Round_of_32:'4.14%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Michigan Wolverines (11)",Round_of_32:'3.53%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"TCU Horned Frogs (9)",Round_of_32:'3.46%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Creighton Bluejays (9)",Round_of_32:'3.34%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Ohio State Buckeyes (7)",Round_of_32:'3.23%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Marquette Golden Eagles (9)",Round_of_32:'0.58%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Saint Peter's Peacocks (15)",Round_of_32:'0.32%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Georgia State Panthers (16)",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"San Francisco Dons (10)",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Wright State Raiders (16)",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Delaware Blue Hens (15)",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Texas Southern Tigers (16)",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Richmond Spiders (12)",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Iowa State Cyclones (11)",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      ];
    }
    else if (study_year == 2021){
      var team_stats = [{name:"Gonzaga Bulldogs (1)",Round_of_32:'100.0%',Sweet_Sixteen:'100.0%',Elite_Eight:'99.99%',Final_Four:'99.96%',Championship:'99.09%',Champion:'85.97%'}, 
      {name:"Houston Cougars (2)",Round_of_32:'100.0%',Sweet_Sixteen:'100.0%',Elite_Eight:'92.99%',Final_Four:'52.36%',Championship:'28.53%',Champion:'7.99%'}, 
      {name:"Colgate Raiders (14)",Round_of_32:'90.38%',Sweet_Sixteen:'89.2%',Elite_Eight:'88.85%',Final_Four:'56.06%',Championship:'33.65%',Champion:'4.65%'}, 
      {name:"Baylor Bears (1)",Round_of_32:'99.98%',Sweet_Sixteen:'99.51%',Elite_Eight:'91.45%',Final_Four:'40.52%',Championship:'17.64%',Champion:'0.85%'}, 
      {name:"Loyola Chicago Ramblers (8)",Round_of_32:'100.0%',Sweet_Sixteen:'31.45%',Elite_Eight:'25.5%',Final_Four:'13.02%',Championship:'5.93%',Champion:'0.29%'}, 
      {name:"Abilene Christian Wildcats (14)",Round_of_32:'79.95%',Sweet_Sixteen:'58.72%',Elite_Eight:'31.07%',Final_Four:'16.33%',Championship:'0.54%',Champion:'0.12%'}, 
      {name:"Michigan Wolverines (1)",Round_of_32:'99.5%',Sweet_Sixteen:'97.33%',Elite_Eight:'93.49%',Final_Four:'71.7%',Championship:'0.31%',Champion:'0.09%'}, 
      {name:"Liberty Flames (13)",Round_of_32:'80.9%',Sweet_Sixteen:'70.69%',Elite_Eight:'9.02%',Final_Four:'3.99%',Championship:'0.22%',Champion:'0.02%'}, 
      {name:"Iowa Hawkeyes (2)",Round_of_32:'73.9%',Sweet_Sixteen:'73.06%',Elite_Eight:'66.46%',Final_Four:'0.02%',Championship:'0.02%',Champion:'0.02%'}, 
      {name:"Illinois Fighting Illini (1)",Round_of_32:'100.0%',Sweet_Sixteen:'68.55%',Elite_Eight:'65.23%',Final_Four:'30.46%',Championship:'13.73%',Champion:'0.0%'}, 
      {name:"Arkansas Razorbacks (3)",Round_of_32:'9.62%',Sweet_Sixteen:'8.45%',Elite_Eight:'8.2%',Final_Four:'1.84%',Championship:'0.15%',Champion:'0.0%'}, 
      {name:"Winthrop Eagles (12)",Round_of_32:'76.7%',Sweet_Sixteen:'76.39%',Elite_Eight:'8.03%',Final_Four:'0.65%',Championship:'0.12%',Champion:'0.0%'}, 
      {name:"Alabama Crimson Tide (2)",Round_of_32:'99.86%',Sweet_Sixteen:'99.76%',Elite_Eight:'58.29%',Final_Four:'9.42%',Championship:'0.03%',Champion:'0.0%'}, 
      {name:"Utah State Aggies (11)",Round_of_32:'62.56%',Sweet_Sixteen:'1.32%',Elite_Eight:'1.32%',Final_Four:'0.64%',Championship:'0.02%',Champion:'0.0%'}, 
      {name:"West Virginia Mountaineers (3)",Round_of_32:'82.74%',Sweet_Sixteen:'12.16%',Elite_Eight:'1.77%',Final_Four:'0.16%',Championship:'0.01%',Champion:'0.0%'}, 
      {name:"Grand Canyon Lopes (15)",Round_of_32:'26.1%',Sweet_Sixteen:'24.81%',Elite_Eight:'20.82%',Final_Four:'0.02%',Championship:'0.01%',Champion:'0.0%'}, 
      {name:"Colorado Buffaloes (5)",Round_of_32:'100.0%',Sweet_Sixteen:'82.88%',Elite_Eight:'3.41%',Final_Four:'1.6%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"LSU Tigers (8)",Round_of_32:'72.11%',Sweet_Sixteen:'2.26%',Elite_Eight:'2.12%',Final_Four:'0.91%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Ohio State Buckeyes (2)",Round_of_32:'86.16%',Sweet_Sixteen:'72.8%',Elite_Eight:'0.66%',Final_Four:'0.17%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Texas Tech Red Raiders (6)",Round_of_32:'37.44%',Sweet_Sixteen:'1.03%',Elite_Eight:'0.97%',Final_Four:'0.11%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Florida State Seminoles (4)",Round_of_32:'98.29%',Sweet_Sixteen:'17.03%',Elite_Eight:'0.62%',Final_Four:'0.04%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Villanova Wildcats (5)",Round_of_32:'23.3%',Sweet_Sixteen:'23.12%',Elite_Eight:'0.44%',Final_Four:'0.01%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Tennessee Volunteers (5)",Round_of_32:'99.59%',Sweet_Sixteen:'20.86%',Elite_Eight:'0.24%',Final_Four:'0.01%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"BYU Cougars (6)",Round_of_32:'98.14%',Sweet_Sixteen:'37.02%',Elite_Eight:'10.37%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"USC Trojans (6)",Round_of_32:'71.39%',Sweet_Sixteen:'60.36%',Elite_Eight:'8.46%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"San Diego State Aztecs (6)",Round_of_32:'99.12%',Sweet_Sixteen:'86.93%',Elite_Eight:'5.05%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"VCU Rams (10)",Round_of_32:'59.62%',Sweet_Sixteen:'2.13%',Elite_Eight:'1.83%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Eastern Washington Eagles (14)",Round_of_32:'51.75%',Sweet_Sixteen:'15.67%',Elite_Eight:'1.46%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Drake Bulldogs (11)",Round_of_32:'28.61%',Sweet_Sixteen:'18.72%',Elite_Eight:'0.8%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Texas Southern Tigers (16)",Round_of_32:'0.5%',Sweet_Sixteen:'0.37%',Elite_Eight:'0.33%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"UCLA Bruins (11)",Round_of_32:'1.86%',Sweet_Sixteen:'0.43%',Elite_Eight:'0.22%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Kansas Jayhawks (3)",Round_of_32:'48.25%',Sweet_Sixteen:'5.25%',Elite_Eight:'0.17%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Morehead State Eagles (14)",Round_of_32:'17.26%',Sweet_Sixteen:'0.47%',Elite_Eight:'0.15%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Wisconsin Badgers (9)",Round_of_32:'47.85%',Sweet_Sixteen:'0.19%',Elite_Eight:'0.07%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Texas Longhorns (3)",Round_of_32:'20.05%',Sweet_Sixteen:'3.83%',Elite_Eight:'0.04%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Syracuse Orange (11)",Round_of_32:'0.88%',Sweet_Sixteen:'0.44%',Elite_Eight:'0.04%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"St. Bonaventure Bonnies (9)",Round_of_32:'27.89%',Sweet_Sixteen:'0.04%',Elite_Eight:'0.03%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Oklahoma State Cowboys (4)",Round_of_32:'19.1%',Sweet_Sixteen:'8.44%',Elite_Eight:'0.01%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Virginia Cavaliers (4)",Round_of_32:'81.37%',Sweet_Sixteen:'7.96%',Elite_Eight:'0.01%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"North Carolina Tar Heels (8)",Round_of_32:'52.15%',Sweet_Sixteen:'0.29%',Elite_Eight:'0.01%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"UConn Huskies (7)",Round_of_32:'79.13%',Sweet_Sixteen:'0.02%',Elite_Eight:'0.01%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"UC Santa Barbara Gauchos (12)",Round_of_32:'97.93%',Sweet_Sixteen:'90.24%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Florida Gators (7)",Round_of_32:'69.69%',Sweet_Sixteen:'14.34%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Oral Roberts Golden Eagles (15)",Round_of_32:'13.84%',Sweet_Sixteen:'10.4%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Virginia Tech Hokies (10)",Round_of_32:'30.31%',Sweet_Sixteen:'2.46%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Creighton Bluejays (5)",Round_of_32:'2.07%',Sweet_Sixteen:'1.8%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"North Texas Mean Green (13)",Round_of_32:'32.44%',Sweet_Sixteen:'0.27%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Purdue Boilermakers (4)",Round_of_32:'67.56%',Sweet_Sixteen:'0.22%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Iona Gaels (15)",Round_of_32:'0.14%',Sweet_Sixteen:'0.14%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"UNC Greensboro Spartans (13)",Round_of_32:'1.71%',Sweet_Sixteen:'0.09%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Maryland Terrapins (10)",Round_of_32:'20.87%',Sweet_Sixteen:'0.08%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Oregon State Beavers (12)",Round_of_32:'0.41%',Sweet_Sixteen:'0.01%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Hartford Hawks (16)",Round_of_32:'0.02%',Sweet_Sixteen:'0.01%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Clemson Tigers (7)",Round_of_32:'90.89%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Oklahoma Sooners (8)",Round_of_32:'90.27%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Oregon Ducks (7)",Round_of_32:'40.38%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Ohio Bobcats (13)",Round_of_32:'18.63%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Missouri Tigers (9)",Round_of_32:'9.73%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Rutgers Scarlet Knights (10)",Round_of_32:'9.11%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Norfolk State Spartans (16)",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Georgetown Hoyas (12)",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Drexel Dragons (16)",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Georgia Tech Yellow Jackets (9)",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Cleveland State Vikings (15)",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      ];
    }
    else if (study_year == current_year || study_year == "Year"){
      var team_stats = [{name:"Purdue Boilermakers (1)",Round_of_32:'100.0%',Sweet_Sixteen:'99.97%',Elite_Eight:'87.17%',Final_Four:'83.32%',Championship:'76.85%',Champion:'45.39%'}, 
      {name:"Arizona Wildcats (2)",Round_of_32:'100.0%',Sweet_Sixteen:'99.63%',Elite_Eight:'99.34%',Final_Four:'73.33%',Championship:'55.16%',Champion:'24.94%'}, 
      {name:"UConn Huskies (1)",Round_of_32:'100.0%',Sweet_Sixteen:'100.0%',Elite_Eight:'78.54%',Final_Four:'74.03%',Championship:'23.97%',Champion:'8.7%'}, 
      {name:"Auburn Tigers (4)",Round_of_32:'99.5%',Sweet_Sixteen:'99.4%',Elite_Eight:'21.46%',Final_Four:'19.75%',Championship:'8.38%',Champion:'4.5%'}, 
      {name:"McNeese Cowboys (12)",Round_of_32:'53.45%',Sweet_Sixteen:'53.36%',Elite_Eight:'11.46%',Final_Four:'11.05%',Championship:'7.06%',Champion:'4.15%'}, 
      {name:"North Carolina Tar Heels (1)",Round_of_32:'100.0%',Sweet_Sixteen:'100.0%',Elite_Eight:'75.17%',Final_Four:'18.38%',Championship:'8.91%',Champion:'4.13%'}, 
      {name:"Houston Cougars (1)",Round_of_32:'98.3%',Sweet_Sixteen:'91.41%',Elite_Eight:'36.75%',Final_Four:'32.43%',Championship:'7.58%',Champion:'3.94%'}, 
      {name:"Creighton Bluejays (3)",Round_of_32:'98.15%',Sweet_Sixteen:'98.13%',Elite_Eight:'55.4%',Final_Four:'3.95%',Championship:'3.56%',Champion:'1.51%'}, 
      {name:"Saint Mary's Gaels (5)",Round_of_32:'74.89%',Sweet_Sixteen:'57.71%',Elite_Eight:'16.34%',Final_Four:'5.99%',Championship:'2.58%',Champion:'1.1%'}, 
      {name:"Kentucky Wildcats (3)",Round_of_32:'99.99%',Sweet_Sixteen:'97.89%',Elite_Eight:'71.11%',Final_Four:'26.37%',Championship:'2.04%',Champion:'0.92%'}, 
      {name:"James Madison Dukes (12)",Round_of_32:'99.39%',Sweet_Sixteen:'72.85%',Elite_Eight:'46.49%',Final_Four:'30.28%',Championship:'2.34%',Champion:'0.5%'}, 
      {name:"Alabama Crimson Tide (4)",Round_of_32:'97.24%',Sweet_Sixteen:'31.48%',Elite_Eight:'6.51%',Final_Four:'1.54%',Championship:'0.52%',Champion:'0.16%'}, 
      {name:"Gonzaga Bulldogs (5)",Round_of_32:'46.55%',Sweet_Sixteen:'46.51%',Elite_Eight:'1.35%',Final_Four:'0.73%',Championship:'0.48%',Champion:'0.04%'}, 
      {name:"Iowa State Cyclones (2)",Round_of_32:'99.19%',Sweet_Sixteen:'65.86%',Elite_Eight:'34.55%',Final_Four:'2.95%',Championship:'0.41%',Champion:'0.01%'}, 
      {name:"Grand Canyon Lopes (12)",Round_of_32:'25.11%',Sweet_Sixteen:'10.79%',Elite_Eight:'1.98%',Final_Four:'0.58%',Championship:'0.03%',Champion:'0.01%'}, 
      {name:"Tennessee Volunteers (2)",Round_of_32:'100.0%',Sweet_Sixteen:'99.89%',Elite_Eight:'44.56%',Final_Four:'0.94%',Championship:'0.08%',Champion:'0.0%'}, 
      {name:"Dayton Flyers (7)",Round_of_32:'62.79%',Sweet_Sixteen:'0.32%',Elite_Eight:'0.31%',Final_Four:'0.12%',Championship:'0.03%',Champion:'0.0%'}, 
      {name:"Colorado Buffaloes (10)",Round_of_32:'85.39%',Sweet_Sixteen:'79.61%',Elite_Eight:'26.07%',Final_Four:'5.75%',Championship:'0.01%',Champion:'0.0%'}, 
      {name:"New Mexico Lobos (11)",Round_of_32:'80.88%',Sweet_Sixteen:'45.38%',Elite_Eight:'0.29%',Final_Four:'0.05%',Championship:'0.01%',Champion:'0.0%'}, 
      {name:"Duke Blue Devils (4)",Round_of_32:'97.75%',Sweet_Sixteen:'27.0%',Elite_Eight:'16.63%',Final_Four:'5.01%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Drake Bulldogs (10)",Round_of_32:'93.57%',Sweet_Sixteen:'34.11%',Elite_Eight:'10.89%',Final_Four:'1.77%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Illinois Fighting Illini (3)",Round_of_32:'76.77%',Sweet_Sixteen:'67.24%',Elite_Eight:'41.34%',Final_Four:'1.29%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Morehead State Eagles (14)",Round_of_32:'23.23%',Sweet_Sixteen:'19.63%',Elite_Eight:'10.06%',Final_Four:'0.21%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Vermont Catamounts (12)",Round_of_32:'2.25%',Sweet_Sixteen:'0.15%',Elite_Eight:'0.11%',Final_Four:'0.1%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Florida Gators (7)",Round_of_32:'14.61%',Sweet_Sixteen:'12.36%',Elite_Eight:'1.8%',Final_Four:'0.03%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Texas Tech Red Raiders (5)",Round_of_32:'99.78%',Sweet_Sixteen:'2.11%',Elite_Eight:'0.17%',Final_Four:'0.02%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Nevada Wolf Pack (10)",Round_of_32:'37.21%',Sweet_Sixteen:'0.05%',Elite_Eight:'0.05%',Final_Four:'0.01%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Texas A&M Aggies (9)",Round_of_32:'8.04%',Sweet_Sixteen:'0.29%',Elite_Eight:'0.01%',Final_Four:'0.01%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Samford Bulldogs (12)",Round_of_32:'63.78%',Sweet_Sixteen:'0.13%',Elite_Eight:'0.01%',Final_Four:'0.01%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"BYU Cougars (5)",Round_of_32:'100.0%',Sweet_Sixteen:'13.13%',Elite_Eight:'3.16%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Western Kentucky Hilltoppers (14)",Round_of_32:'40.75%',Sweet_Sixteen:'1.2%',Elite_Eight:'0.61%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Marquette Golden Eagles (2)",Round_of_32:'59.25%',Sweet_Sixteen:'6.83%',Elite_Eight:'0.24%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Akron Zips (14)",Round_of_32:'1.85%',Sweet_Sixteen:'1.85%',Elite_Eight:'0.04%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Baylor Bears (3)",Round_of_32:'90.18%',Sweet_Sixteen:'48.85%',Elite_Eight:'0.01%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Nebraska Cornhuskers (8)",Round_of_32:'91.96%',Sweet_Sixteen:'7.35%',Elite_Eight:'0.01%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Utah State Aggies (8)",Round_of_32:'96.5%',Sweet_Sixteen:'0.03%',Elite_Eight:'0.01%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Clemson Tigers (5)",Round_of_32:'19.12%',Sweet_Sixteen:'4.25%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Colgate Raiders (14)",Round_of_32:'9.82%',Sweet_Sixteen:'1.52%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Longwood Lancers (16)",Round_of_32:'1.7%',Sweet_Sixteen:'0.95%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Yale Bulldogs (12)",Round_of_32:'0.5%',Sweet_Sixteen:'0.49%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"San Diego State Aztecs (5)",Round_of_32:'99.72%',Sweet_Sixteen:'0.11%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Colorado State Rams (10)",Round_of_32:'81.49%',Sweet_Sixteen:'0.11%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Washington State Cougars (7)",Round_of_32:'6.43%',Sweet_Sixteen:'0.03%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"South Carolina Gamecocks (5)",Round_of_32:'89.38%',Sweet_Sixteen:'0.02%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Charleston Cougars (12)",Round_of_32:'2.76%',Sweet_Sixteen:'0.02%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Florida Atlantic Owls (8)",Round_of_32:'98.87%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Mississippi State Bulldogs (8)",Round_of_32:'67.98%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Kansas Jayhawks (4)",Round_of_32:'36.22%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Michigan State Spartans (9)",Round_of_32:'32.02%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Texas Longhorns (7)",Round_of_32:'18.51%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Oregon Ducks (11)",Round_of_32:'10.62%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"TCU Horned Frogs (9)",Round_of_32:'3.5%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Northwestern Wildcats (9)",Round_of_32:'1.13%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"South Dakota State Jackrabbits (14)",Round_of_32:'0.81%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Wisconsin Badgers (5)",Round_of_32:'0.61%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"UAB Blazers (12)",Round_of_32:'0.28%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"NC State Wolfpack (11)",Round_of_32:'0.22%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Oakland Golden Grizzlies (14)",Round_of_32:'0.01%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Stetson Hatters (16)",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Duquesne Dukes (11)",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Wagner Seahawks (16)",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Long Beach State Beach (14)",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Grambling Tigers (16)",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Saint Peter's Peacocks (14)",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
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
    var round_32 = ['Alabama Crimson Tide', 'Maryland Terrapins', 'San Diego State Aztecs', 'Furman Paladins', 'Creighton Bluejays', 'Baylor Bears', 'Missouri Tigers', 'Princeton Tigers', 'Fairleigh Dickinson Knights', 'Florida Atlantic Owls', 'Duke Blue Devils', 'Tennessee Volunteers', 'Kentucky Wildcats', 'Kansas State Wildcats', 'Michigan State Spartans', 'Marquette Golden Eagles','Houston Cougars', 'Auburn Tigers', 'Miami Hurricanes', 'Indiana Hoosiers', 'Pittsburgh Panthers', 'Xavier Musketeers', 'Penn State Nittany Lions', 'Texas Longhorns', 'Kansas Jayhawks', 'Arkansas Razorbacks', "Saint Mary's Gaels", 'UConn Huskies', 'TCU Horned Frogs', 'Gonzaga Bulldogs', 'Northwestern Wildcats', 'UCLA Bruins'];
    var round_16 = ['Alabama Crimson Tide', 'San Diego State Aztecs', 'Creighton Bluejays', 'Princeton Tigers', 'Florida Atlantic Owls', 'Tennessee Volunteers', 'Kansas State Wildcats', 'Michigan State Spartans', 'Houston Cougars', 'Miami Hurricanes', 'Xavier Musketeers', 'Texas Longhorns', 'Arkansas Razorbacks', 'UConn Huskies', 'Gonzaga Bulldogs', 'UCLA Bruins'];
    var round_8 = ['San Diego State Aztecs', 'Creighton Bluejays', 'Florida Atlantic Owls', 'Kansas State Wildcats', 'Miami Hurricanes', 'Texas Longhorns', 'UConn Huskies', 'Gonzaga Bulldogs'];
    var round_4 = ['San Diego State Aztecs', 'Florida Atlantic Owls', 'Miami Hurricanes', 'UConn Huskies'];
    var round_2 = ['San Diego State Aztecs', 'UConn Huskies'];
    var round_1 = ['UConn Huskies'];
  }
  else if (study_year == 2022){
    var round_32 = ['Gonzaga Bulldogs', 'Memphis Tigers', 'New Mexico State Aggies', 'Arkansas Razorbacks', 'Notre Dame Fighting Irish', 'Texas Tech Red Raiders', 'Michigan State Spartans', 'Duke Blue Devils', 'Baylor Bears', 'North Carolina Tar Heels', "Saint Mary's Gaels", 'UCLA Bruins', 'Texas Longhorns', 'Purdue Boilermakers', 'Murray State Racers', "Saint Peter's Peacocks", 'Arizona Wildcats', 'TCU Horned Frogs', 'Houston Cougars', 'Illinois Fighting Illini', 'Michigan Wolverines', 'Tennessee Volunteers', 'Ohio State Buckeyes', 'Villanova Wildcats', 'Kansas Jayhawks', 'Creighton Bluejays', 'Richmond Spiders', 'Providence Friars', 'Iowa State Cyclones', 'Wisconsin Badgers', 'Miami Hurricanes', 'Auburn Tigers'];
    var round_16 = ['Gonzaga Bulldogs', 'Arkansas Razorbacks', 'Texas Tech Red Raiders', 'Duke Blue Devils', 'North Carolina Tar Heels', 'UCLA Bruins', 'Purdue Boilermakers', "Saint Peter's Peacocks", 'Arizona Wildcats', 'Houston Cougars', 'Michigan Wolverines', 'Villanova Wildcats', 'Kansas Jayhawks', 'Providence Friars', 'Iowa State Cyclones', 'Miami Hurricanes'];
    var round_8 = ['Arkansas Razorbacks', 'Duke Blue Devils', 'North Carolina Tar Heels', "Saint Peter's Peacocks", 'Houston Cougars', 'Villanova Wildcats', 'Kansas Jayhawks', 'Miami Hurricanes'];
    var round_4 = ['Duke Blue Devils', 'North Carolina Tar Heels', 'Villanova Wildcats', 'Kansas Jayhawks'];
    var round_2 = ['North Carolina Tar Heels', 'Kansas Jayhawks'];
    var round_1 = ['Kansas Jayhawks'];
  }
  else if (study_year == 2021){
    var round_32 = ['Gonzaga Bulldogs', 'Oklahoma Sooners', 'Creighton Bluejays', 'Ohio Bobcats', 'USC Trojans', 'Kansas Jayhawks', 'Oregon Ducks', 'Iowa Hawkeyes', 'Michigan Wolverines', 'LSU Tigers', 'Colorado Buffaloes', 'Florida State Seminoles', 'UCLA Bruins', 'Abilene Christian Wildcats', 'Maryland Terrapins', 'Alabama Crimson Tide', 'Baylor Bears', 'Wisconsin Badgers', 'Villanova Wildcats', 'North Texas Mean Green', 'Texas Tech Red Raiders', 'Arkansas Razorbacks', 'Florida Gators', 'Oral Roberts Golden Eagles', 'Illinois Fighting Illini', 'Loyola Chicago Ramblers', 'Oregon State Beavers', 'Oklahoma State Cowboys', 'Syracuse Orange', 'West Virginia Mountaineers', 'Rutgers Scarlet Knights', 'Houston Cougars'];
    var round_16 = ['Gonzaga Bulldogs', 'Creighton Bluejays', 'USC Trojans', 'Oregon Ducks', 'Michigan Wolverines', 'Florida State Seminoles', 'UCLA Bruins', 'Alabama Crimson Tide', 'Baylor Bears', 'Villanova Wildcats', 'Arkansas Razorbacks', 'Oral Roberts Golden Eagles', 'Loyola Chicago Ramblers', 'Oregon State Beavers', 'Syracuse Orange', 'Houston Cougars'];
    var round_8 = ['Gonzaga Bulldogs', 'USC Trojans', 'Michigan Wolverines', 'UCLA Bruins', 'Baylor Bears', 'Arkansas Razorbacks', 'Oregon State Beavers', 'Houston Cougars'];
    var round_4 = ['Gonzaga Bulldogs', 'UCLA Bruins', 'Baylor Bears', 'Houston Cougars'];
    var round_2 = ['Gonzaga Bulldogs', 'Baylor Bears'];
    var round_1 = ['Baylor Bears'];
  }
  else if (study_year == current_year || study_year == "Year"){
    var round_32 = ['UConn Huskies','Northwestern Wildcats','San Diego State Aztecs','Yale Bulldogs','Duquesne Dukes','Illinois Fighting Illini','Washington State Cougars','Iowa State Cyclones','North Carolina Tar Heels','Michigan State Spartans','Grand Canyon Lopes','Alabama Crimson Tide','Clemson Tigers','Baylor Bears','Dayton Flyers','Arizona Wildcats','Houston Cougars','Texas A&M Aggies','James Madison Dukes','Duke Blue Devils','NC State Wolfpack','Oakland Golden Grizzlies','Colorado Buffaloes','Marquette Golden Eagles','Purdue Boilermakers','Utah State Aggies','Gonzaga Bulldogs','Kansas Jayhawks','Oregon Ducks','Creighton Bluejays','Texas Longhorns','Tennessee Volunteers'];
    var round_16 = ['UConn Huskies','San Diego State Aztecs','Illinois Fighting Illini','Iowa State Cyclones','North Carolina Tar Heels','Alabama Crimson Tide','Clemson Tigers','Arizona Wildcats','Houston Cougars','Duke Blue Devils','NC State Wolfpack','Marquette Golden Eagles','Purdue Boilermakers','Gonzaga Bulldogs','Creighton Bluejays','Tennessee Volunteers'];
    var round_8 = ['UConn Huskies','Illinois Fighting Illini','Alabama Crimson Tide','Clemson Tigers','Duke Blue Devils','NC State Wolfpack','Purdue Boilermakers','Tennessee Volunteers'];
    var round_4 = ['UConn Huskies','Alabama Crimson Tide','NC State Wolfpack','Purdue Boilermakers'];
    var round_2 = ['UConn Huskies','Purdue Boilermakers'];
    var round_1 = ['UConn Huskies'];
  }
  for (i = 1; i < (rows.length); i++) {
    var bold_weight = "700";
    var font_color = "#00aebe";
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