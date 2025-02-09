function change_year(year){
    document.getElementById("yearofstudy").innerHTML = year;
}

function find_winner(){
    
    let current_year = 2024;
    let study_year = document.getElementById("yearofstudy").innerHTML;
    if (study_year == 2023){
      var team_stats = [{name:"Houston Cougars (1)",Round_of_32:'100.0%',Sweet_Sixteen:'98.93%',Elite_Eight:'88.09%',Final_Four:'85.7%',Championship:'54.07%',Champion:'39.13%'}, 
      {name:"Gonzaga Bulldogs (3)",Round_of_32:'99.77%',Sweet_Sixteen:'98.83%',Elite_Eight:'62.97%',Final_Four:'44.04%',Championship:'33.31%',Champion:'22.34%'}, 
      {name:"Alabama Crimson Tide (1)",Round_of_32:'97.53%',Sweet_Sixteen:'97.53%',Elite_Eight:'84.25%',Final_Four:'55.4%',Championship:'39.93%',Champion:'18.06%'}, 
      {name:"Purdue Boilermakers (1)",Round_of_32:'99.77%',Sweet_Sixteen:'67.65%',Elite_Eight:'36.88%',Final_Four:'36.72%',Championship:'14.93%',Champion:'5.2%'}, 
      {name:"Arizona Wildcats (2)",Round_of_32:'100.0%',Sweet_Sixteen:'98.94%',Elite_Eight:'92.21%',Final_Four:'33.66%',Championship:'21.55%',Champion:'4.46%'}, 
      {name:"UConn Huskies (4)",Round_of_32:'98.89%',Sweet_Sixteen:'96.61%',Elite_Eight:'96.12%',Final_Four:'39.03%',Championship:'8.69%',Champion:'4.24%'}, 
      {name:"Oral Roberts Golden Eagles (12)",Round_of_32:'73.33%',Sweet_Sixteen:'47.77%',Elite_Eight:'30.15%',Final_Four:'29.78%',Championship:'12.83%',Champion:'4.14%'}, 
      {name:"UCLA Bruins (2)",Round_of_32:'94.78%',Sweet_Sixteen:'94.7%',Elite_Eight:'36.36%',Final_Four:'16.62%',Championship:'1.77%',Champion:'1.01%'}, 
      {name:"Drake Bulldogs (12)",Round_of_32:'53.22%',Sweet_Sixteen:'52.3%',Elite_Eight:'5.11%',Final_Four:'4.12%',Championship:'1.65%',Champion:'0.53%'}, 
      {name:"Charleston Cougars (12)",Round_of_32:'88.31%',Sweet_Sixteen:'84.69%',Elite_Eight:'13.97%',Final_Four:'7.79%',Championship:'1.98%',Champion:'0.5%'}, 
      {name:"Tennessee Volunteers (4)",Round_of_32:'92.81%',Sweet_Sixteen:'49.01%',Elite_Eight:'28.86%',Final_Four:'28.53%',Championship:'8.06%',Champion:'0.14%'}, 
      {name:"Creighton Bluejays (5)",Round_of_32:'94.47%',Sweet_Sixteen:'67.9%',Elite_Eight:'5.96%',Final_Four:'2.05%',Championship:'0.28%',Champion:'0.13%'}, 
      {name:"Miami Hurricanes (5)",Round_of_32:'46.78%',Sweet_Sixteen:'46.22%',Elite_Eight:'6.75%',Final_Four:'4.7%',Championship:'0.33%',Champion:'0.06%'}, 
      {name:"Texas A&M-Corpus Christi Islanders (16)",Round_of_32:'2.47%',Sweet_Sixteen:'2.47%',Elite_Eight:'0.69%',Final_Four:'0.27%',Championship:'0.16%',Champion:'0.03%'}, 
      {name:"Utah State Aggies (10)",Round_of_32:'96.58%',Sweet_Sixteen:'0.97%',Elite_Eight:'0.66%',Final_Four:'0.4%',Championship:'0.1%',Champion:'0.01%'}, 
      {name:"Texas Longhorns (2)",Round_of_32:'82.34%',Sweet_Sixteen:'77.35%',Elite_Eight:'57.57%',Final_Four:'0.44%',Championship:'0.03%',Champion:'0.01%'}, 
      {name:"Colgate Raiders (14)",Round_of_32:'17.66%',Sweet_Sixteen:'17.38%',Elite_Eight:'9.52%',Final_Four:'1.62%',Championship:'0.01%',Champion:'0.01%'}, 
      {name:"UNC Asheville Bulldogs (14)",Round_of_32:'5.22%',Sweet_Sixteen:'5.2%',Elite_Eight:'0.65%',Final_Four:'0.26%',Championship:'0.12%',Champion:'0.0%'}, 
      {name:"Florida Atlantic Owls (9)",Round_of_32:'88.02%',Sweet_Sixteen:'26.58%',Elite_Eight:'2.94%',Final_Four:'2.89%',Championship:'0.08%',Champion:'0.0%'}, 
      {name:"Baylor Bears (3)",Round_of_32:'99.2%',Sweet_Sixteen:'30.52%',Elite_Eight:'1.05%',Final_Four:'0.32%',Championship:'0.07%',Champion:'0.0%'}, 
      {name:"Marquette Golden Eagles (2)",Round_of_32:'98.26%',Sweet_Sixteen:'77.6%',Elite_Eight:'34.54%',Final_Four:'0.75%',Championship:'0.02%',Champion:'0.0%'}, 
      {name:"Montana State Bobcats (14)",Round_of_32:'20.38%',Sweet_Sixteen:'9.34%',Elite_Eight:'6.99%',Final_Four:'0.06%',Championship:'0.01%',Champion:'0.0%'}, 
      {name:"Texas A&M Aggies (7)",Round_of_32:'75.72%',Sweet_Sixteen:'5.07%',Elite_Eight:'4.14%',Final_Four:'0.05%',Championship:'0.01%',Champion:'0.0%'}, 
      {name:"VCU Rams (12)",Round_of_32:'9.55%',Sweet_Sixteen:'0.26%',Elite_Eight:'0.23%',Final_Four:'0.03%',Championship:'0.01%',Champion:'0.0%'}, 
      {name:"Xavier Musketeers (3)",Round_of_32:'99.24%',Sweet_Sixteen:'95.59%',Elite_Eight:'28.65%',Final_Four:'3.35%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Memphis Tigers (8)",Round_of_32:'11.98%',Sweet_Sixteen:'5.77%',Elite_Eight:'1.13%',Final_Four:'0.9%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Kansas State Wildcats (3)",Round_of_32:'79.62%',Sweet_Sixteen:'48.13%',Elite_Eight:'27.44%',Final_Four:'0.34%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Virginia Cavaliers (4)",Round_of_32:'32.06%',Sweet_Sixteen:'2.33%',Elite_Eight:'0.45%',Final_Four:'0.04%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"San Diego State Aztecs (5)",Round_of_32:'11.69%',Sweet_Sixteen:'10.65%',Elite_Eight:'0.11%',Final_Four:'0.04%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Louisiana Ragin' Cajuns (12)",Round_of_32:'7.19%',Sweet_Sixteen:'0.29%',Elite_Eight:'0.04%',Final_Four:'0.03%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Saint Mary's Gaels (5)",Round_of_32:'90.45%',Sweet_Sixteen:'2.19%',Elite_Eight:'2.14%',Final_Four:'0.02%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Furman Paladins (12)",Round_of_32:'67.94%',Sweet_Sixteen:'2.33%',Elite_Eight:'0.53%',Final_Four:'0.02%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Iowa Hawkeyes (8)",Round_of_32:'84.44%',Sweet_Sixteen:'1.07%',Elite_Eight:'0.05%',Final_Four:'0.02%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Missouri Tigers (7)",Round_of_32:'3.42%',Sweet_Sixteen:'0.09%',Elite_Eight:'0.03%',Final_Four:'0.01%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Kentucky Wildcats (5)",Round_of_32:'58.13%',Sweet_Sixteen:'26.28%',Elite_Eight:'16.28%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Providence Friars (11)",Round_of_32:'41.87%',Sweet_Sixteen:'16.25%',Elite_Eight:'9.25%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Michigan State Spartans (7)",Round_of_32:'87.48%',Sweet_Sixteen:'20.81%',Elite_Eight:'5.34%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Iona Gaels (12)",Round_of_32:'1.11%',Sweet_Sixteen:'0.94%',Elite_Eight:'0.9%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Kansas Jayhawks (1)",Round_of_32:'99.6%',Sweet_Sixteen:'98.72%',Elite_Eight:'0.61%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Vermont Catamounts (14)",Round_of_32:'1.74%',Sweet_Sixteen:'0.49%',Elite_Eight:'0.16%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"NC State Wolfpack (11)",Round_of_32:'5.53%',Sweet_Sixteen:'1.58%',Elite_Eight:'0.09%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Penn State Nittany Lions (10)",Round_of_32:'24.28%',Sweet_Sixteen:'0.2%',Elite_Eight:'0.09%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Pittsburgh Panthers (11)",Round_of_32:'89.69%',Sweet_Sixteen:'3.06%',Elite_Eight:'0.02%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Kennesaw State Owls (14)",Round_of_32:'0.76%',Sweet_Sixteen:'0.57%',Elite_Eight:'0.01%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Grand Canyon Lopes (14)",Round_of_32:'0.23%',Sweet_Sixteen:'0.22%',Elite_Eight:'0.01%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Boise State Broncos (10)",Round_of_32:'98.55%',Sweet_Sixteen:'0.1%',Elite_Eight:'0.01%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Duke Blue Devils (5)",Round_of_32:'26.67%',Sweet_Sixteen:'2.93%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Kent State Golden Flashes (12)",Round_of_32:'61.14%',Sweet_Sixteen:'1.46%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"USC Trojans (10)",Round_of_32:'12.52%',Sweet_Sixteen:'1.1%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"TCU Horned Frogs (5)",Round_of_32:'100.0%',Sweet_Sixteen:'0.95%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Iowa State Cyclones (5)",Round_of_32:'10.31%',Sweet_Sixteen:'0.78%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Arkansas Razorbacks (8)",Round_of_32:'69.42%',Sweet_Sixteen:'0.66%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Howard Bison (16)",Round_of_32:'0.4%',Sweet_Sixteen:'0.4%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Illinois Fighting Illini (9)",Round_of_32:'30.58%',Sweet_Sixteen:'0.22%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Indiana Hoosiers (4)",Round_of_32:'38.86%',Sweet_Sixteen:'0.02%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"West Virginia Mountaineers (9)",Round_of_32:'55.71%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Maryland Terrapins (8)",Round_of_32:'44.29%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Auburn Tigers (9)",Round_of_32:'15.56%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Northwestern Wildcats (7)",Round_of_32:'1.45%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"UC Santa Barbara Gauchos (14)",Round_of_32:'0.8%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Fairleigh Dickinson Knights (16)",Round_of_32:'0.23%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Princeton Tigers (14)",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Northern Kentucky Norse (16)",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Arizona State Sun Devils (11)",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      ];
    }
    else if (study_year == 2022){
      var team_stats = [{name:"Gonzaga Bulldogs (1)",Round_of_32:'100.0%',Sweet_Sixteen:'99.99%',Elite_Eight:'99.95%',Final_Four:'99.74%',Championship:'98.53%',Champion:'95.87%'}, 
      {name:"Arizona Wildcats (1)",Round_of_32:'100.0%',Sweet_Sixteen:'100.0%',Elite_Eight:'89.06%',Final_Four:'86.83%',Championship:'77.6%',Champion:'1.38%'}, 
      {name:"South Dakota State Jackrabbits (13)",Round_of_32:'81.68%',Sweet_Sixteen:'57.36%',Elite_Eight:'36.26%',Final_Four:'35.17%',Championship:'9.98%',Champion:'0.94%'}, 
      {name:"Houston Cougars (5)",Round_of_32:'69.8%',Sweet_Sixteen:'69.14%',Elite_Eight:'9.74%',Final_Four:'9.35%',Championship:'8.88%',Champion:'0.44%'}, 
      {name:"Purdue Boilermakers (3)",Round_of_32:'99.83%',Sweet_Sixteen:'97.2%',Elite_Eight:'22.5%',Final_Four:'22.15%',Championship:'0.53%',Champion:'0.42%'}, 
      {name:"Murray State Racers (7)",Round_of_32:'99.99%',Sweet_Sixteen:'69.48%',Elite_Eight:'55.49%',Final_Four:'49.13%',Championship:'0.51%',Champion:'0.35%'}, 
      {name:"Villanova Wildcats (2)",Round_of_32:'99.99%',Sweet_Sixteen:'69.37%',Elite_Eight:'36.24%',Final_Four:'1.78%',Championship:'1.3%',Champion:'0.17%'}, 
      {name:"LSU Tigers (6)",Round_of_32:'100.0%',Sweet_Sixteen:'82.1%',Elite_Eight:'21.69%',Final_Four:'9.63%',Championship:'0.93%',Champion:'0.17%'}, 
      {name:"Baylor Bears (1)",Round_of_32:'91.09%',Sweet_Sixteen:'81.84%',Elite_Eight:'70.56%',Final_Four:'8.67%',Championship:'0.24%',Champion:'0.13%'}, 
      {name:"Longwood Lancers (14)",Round_of_32:'39.06%',Sweet_Sixteen:'38.03%',Elite_Eight:'23.77%',Final_Four:'1.04%',Championship:'0.49%',Champion:'0.04%'}, 
      {name:"Texas Tech Red Raiders (3)",Round_of_32:'92.25%',Sweet_Sixteen:'91.08%',Elite_Eight:'43.28%',Final_Four:'0.21%',Championship:'0.11%',Champion:'0.04%'}, 
      {name:"Kentucky Wildcats (2)",Round_of_32:'99.66%',Sweet_Sixteen:'30.5%',Elite_Eight:'22.0%',Final_Four:'18.73%',Championship:'0.04%',Champion:'0.03%'}, 
      {name:"UCLA Bruins (4)",Round_of_32:'98.6%',Sweet_Sixteen:'95.2%',Elite_Eight:'15.44%',Final_Four:'0.56%',Championship:'0.01%',Champion:'0.01%'}, 
      {name:"Montana State Bobcats (14)",Round_of_32:'7.75%',Sweet_Sixteen:'6.86%',Elite_Eight:'1.67%',Final_Four:'0.01%',Championship:'0.01%',Champion:'0.01%'}, 
      {name:"UAB Blazers (12)",Round_of_32:'30.2%',Sweet_Sixteen:'29.75%',Elite_Eight:'1.19%',Final_Four:'0.85%',Championship:'0.39%',Champion:'0.0%'}, 
      {name:"Iowa Hawkeyes (5)",Round_of_32:'100.0%',Sweet_Sixteen:'34.75%',Elite_Eight:'6.45%',Final_Four:'5.55%',Championship:'0.25%',Champion:'0.0%'}, 
      {name:"Kansas Jayhawks (1)",Round_of_32:'100.0%',Sweet_Sixteen:'98.66%',Elite_Eight:'56.13%',Final_Four:'39.72%',Championship:'0.06%',Champion:'0.0%'}, 
      {name:"Tennessee Volunteers (3)",Round_of_32:'60.94%',Sweet_Sixteen:'59.84%',Elite_Eight:'33.2%',Final_Four:'0.06%',Championship:'0.06%',Champion:'0.0%'}, 
      {name:"Loyola Chicago Ramblers (10)",Round_of_32:'96.8%',Sweet_Sixteen:'30.62%',Elite_Eight:'6.75%',Final_Four:'0.09%',Championship:'0.04%',Champion:'0.0%'}, 
      {name:"Auburn Tigers (2)",Round_of_32:'98.25%',Sweet_Sixteen:'98.11%',Elite_Eight:'74.52%',Final_Four:'9.69%',Championship:'0.02%',Champion:'0.0%'}, 
      {name:"Arkansas Razorbacks (4)",Round_of_32:'58.52%',Sweet_Sixteen:'48.29%',Elite_Eight:'0.04%',Final_Four:'0.03%',Championship:'0.01%',Champion:'0.0%'}, 
      {name:"Memphis Tigers (9)",Round_of_32:'55.78%',Sweet_Sixteen:'0.01%',Elite_Eight:'0.01%',Final_Four:'0.01%',Championship:'0.01%',Champion:'0.0%'}, 
      {name:"Norfolk State Spartans (16)",Round_of_32:'8.91%',Sweet_Sixteen:'7.24%',Elite_Eight:'6.57%',Final_Four:'0.54%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"San Diego State Aztecs (8)",Round_of_32:'96.4%',Sweet_Sixteen:'1.34%',Elite_Eight:'1.13%',Final_Four:'0.19%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"North Carolina Tar Heels (8)",Round_of_32:'99.48%',Sweet_Sixteen:'10.92%',Elite_Eight:'6.79%',Final_Four:'0.14%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Saint Mary's Gaels (5)",Round_of_32:'96.07%',Sweet_Sixteen:'3.41%',Elite_Eight:'0.57%',Final_Four:'0.08%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Wisconsin Badgers (3)",Round_of_32:'59.26%',Sweet_Sixteen:'8.9%',Elite_Eight:'0.77%',Final_Four:'0.03%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Providence Friars (4)",Round_of_32:'18.32%',Sweet_Sixteen:'7.89%',Elite_Eight:'0.03%',Final_Four:'0.02%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Duke Blue Devils (2)",Round_of_32:'99.94%',Sweet_Sixteen:'93.65%',Elite_Eight:'52.9%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Colgate Raiders (14)",Round_of_32:'40.74%',Sweet_Sixteen:'9.0%',Elite_Eight:'2.35%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Davidson Wildcats (10)",Round_of_32:'94.75%',Sweet_Sixteen:'6.34%',Elite_Eight:'2.15%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Jacksonville State Gamecocks (15)",Round_of_32:'1.75%',Sweet_Sixteen:'1.68%',Elite_Eight:'0.56%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"USC Trojans (7)",Round_of_32:'91.6%',Sweet_Sixteen:'0.14%',Elite_Eight:'0.09%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Akron Zips (13)",Round_of_32:'1.4%',Sweet_Sixteen:'1.38%',Elite_Eight:'0.07%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Colorado State Rams (6)",Round_of_32:'96.98%',Sweet_Sixteen:'2.13%',Elite_Eight:'0.04%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Miami Hurricanes (10)",Round_of_32:'8.4%',Sweet_Sixteen:'0.07%',Elite_Eight:'0.02%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Chattanooga Mocs (13)",Round_of_32:'34.33%',Sweet_Sixteen:'0.1%',Elite_Eight:'0.01%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Saint Peter's Peacocks (15)",Round_of_32:'0.34%',Sweet_Sixteen:'0.01%',Elite_Eight:'0.01%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Vermont Catamounts (13)",Round_of_32:'41.48%',Sweet_Sixteen:'36.46%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"UConn Huskies (5)",Round_of_32:'64.79%',Sweet_Sixteen:'11.06%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"New Mexico State Aggies (12)",Round_of_32:'35.21%',Sweet_Sixteen:'4.19%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Texas Longhorns (6)",Round_of_32:'58.9%',Sweet_Sixteen:'2.53%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Notre Dame Fighting Irish (11)",Round_of_32:'61.65%',Sweet_Sixteen:'1.95%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Illinois Fighting Illini (4)",Round_of_32:'65.67%',Sweet_Sixteen:'1.01%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Virginia Tech Hokies (11)",Round_of_32:'41.1%',Sweet_Sixteen:'0.23%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Alabama Crimson Tide (6)",Round_of_32:'38.35%',Sweet_Sixteen:'0.11%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Yale Bulldogs (14)",Round_of_32:'0.17%',Sweet_Sixteen:'0.04%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Indiana Hoosiers (12)",Round_of_32:'3.93%',Sweet_Sixteen:'0.01%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Ohio State Buckeyes (7)",Round_of_32:'3.2%',Sweet_Sixteen:'0.01%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Cal State Fullerton Titans (15)",Round_of_32:'0.06%',Sweet_Sixteen:'0.01%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"San Francisco Dons (10)",Round_of_32:'0.01%',Sweet_Sixteen:'0.01%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Seton Hall Pirates (8)",Round_of_32:'96.59%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Boise State Broncos (8)",Round_of_32:'44.22%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Michigan State Spartans (7)",Round_of_32:'5.25%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Creighton Bluejays (9)",Round_of_32:'3.6%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"TCU Horned Frogs (9)",Round_of_32:'3.41%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Michigan Wolverines (11)",Round_of_32:'3.02%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Marquette Golden Eagles (9)",Round_of_32:'0.52%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Delaware Blue Hens (15)",Round_of_32:'0.01%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Georgia State Panthers (16)",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Wright State Raiders (16)",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Texas Southern Tigers (16)",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Richmond Spiders (12)",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Iowa State Cyclones (11)",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      ];
    }
    else if (study_year == 2021){
      var team_stats = [{name:"Gonzaga Bulldogs (1)",Round_of_32:'100.0%',Sweet_Sixteen:'100.0%',Elite_Eight:'100.0%',Final_Four:'99.97%',Championship:'99.15%',Champion:'86.52%'}, 
      {name:"Houston Cougars (2)",Round_of_32:'100.0%',Sweet_Sixteen:'99.99%',Elite_Eight:'92.81%',Final_Four:'52.19%',Championship:'28.36%',Champion:'7.31%'}, 
      {name:"Colgate Raiders (14)",Round_of_32:'90.14%',Sweet_Sixteen:'89.01%',Elite_Eight:'88.71%',Final_Four:'56.17%',Championship:'32.73%',Champion:'4.59%'}, 
      {name:"Baylor Bears (1)",Round_of_32:'100.0%',Sweet_Sixteen:'99.66%',Elite_Eight:'91.1%',Final_Four:'40.55%',Championship:'18.45%',Champion:'1.03%'}, 
      {name:"Loyola Chicago Ramblers (8)",Round_of_32:'100.0%',Sweet_Sixteen:'31.15%',Elite_Eight:'25.63%',Final_Four:'12.88%',Championship:'6.07%',Champion:'0.25%'}, 
      {name:"Abilene Christian Wildcats (14)",Round_of_32:'78.86%',Sweet_Sixteen:'58.28%',Elite_Eight:'31.63%',Final_Four:'16.61%',Championship:'0.54%',Champion:'0.17%'}, 
      {name:"Michigan Wolverines (1)",Round_of_32:'99.45%',Sweet_Sixteen:'97.01%',Elite_Eight:'93.78%',Final_Four:'72.49%',Championship:'0.25%',Champion:'0.1%'}, 
      {name:"Liberty Flames (13)",Round_of_32:'80.53%',Sweet_Sixteen:'69.65%',Elite_Eight:'8.37%',Final_Four:'3.54%',Championship:'0.29%',Champion:'0.02%'}, 
      {name:"Illinois Fighting Illini (1)",Round_of_32:'99.99%',Sweet_Sixteen:'68.85%',Elite_Eight:'65.72%',Final_Four:'31.17%',Championship:'13.82%',Champion:'0.01%'}, 
      {name:"Winthrop Eagles (12)",Round_of_32:'77.19%',Sweet_Sixteen:'76.97%',Elite_Eight:'8.53%',Final_Four:'0.64%',Championship:'0.11%',Champion:'0.0%'}, 
      {name:"Arkansas Razorbacks (3)",Round_of_32:'9.86%',Sweet_Sixteen:'8.7%',Elite_Eight:'8.51%',Final_Four:'1.7%',Championship:'0.1%',Champion:'0.0%'}, 
      {name:"West Virginia Mountaineers (3)",Round_of_32:'83.65%',Sweet_Sixteen:'13.14%',Elite_Eight:'1.9%',Final_Four:'0.22%',Championship:'0.05%',Champion:'0.0%'}, 
      {name:"Alabama Crimson Tide (2)",Round_of_32:'99.89%',Sweet_Sixteen:'99.75%',Elite_Eight:'56.99%',Final_Four:'8.78%',Championship:'0.03%',Champion:'0.0%'}, 
      {name:"Grand Canyon Lopes (15)",Round_of_32:'26.18%',Sweet_Sixteen:'24.77%',Elite_Eight:'20.67%',Final_Four:'0.02%',Championship:'0.02%',Champion:'0.0%'}, 
      {name:"Utah State Aggies (11)",Round_of_32:'63.0%',Sweet_Sixteen:'1.29%',Elite_Eight:'1.29%',Final_Four:'0.74%',Championship:'0.01%',Champion:'0.0%'}, 
      {name:"Texas Tech Red Raiders (6)",Round_of_32:'37.0%',Sweet_Sixteen:'1.0%',Elite_Eight:'0.96%',Final_Four:'0.09%',Championship:'0.01%',Champion:'0.0%'}, 
      {name:"Iowa Hawkeyes (2)",Round_of_32:'73.82%',Sweet_Sixteen:'72.84%',Elite_Eight:'66.37%',Final_Four:'0.01%',Championship:'0.01%',Champion:'0.0%'}, 
      {name:"Colorado Buffaloes (5)",Round_of_32:'100.0%',Sweet_Sixteen:'82.83%',Elite_Eight:'2.94%',Final_Four:'1.29%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"LSU Tigers (8)",Round_of_32:'72.57%',Sweet_Sixteen:'2.54%',Elite_Eight:'2.24%',Final_Four:'0.82%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Ohio State Buckeyes (2)",Round_of_32:'86.66%',Sweet_Sixteen:'73.04%',Elite_Eight:'0.53%',Final_Four:'0.1%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Florida State Seminoles (4)",Round_of_32:'98.12%',Sweet_Sixteen:'17.14%',Elite_Eight:'0.65%',Final_Four:'0.01%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Villanova Wildcats (5)",Round_of_32:'22.81%',Sweet_Sixteen:'22.6%',Elite_Eight:'0.31%',Final_Four:'0.01%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"BYU Cougars (6)",Round_of_32:'98.26%',Sweet_Sixteen:'37.24%',Elite_Eight:'11.07%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"USC Trojans (6)",Round_of_32:'72.47%',Sweet_Sixteen:'61.44%',Elite_Eight:'8.32%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"San Diego State Aztecs (6)",Round_of_32:'99.18%',Sweet_Sixteen:'85.98%',Elite_Eight:'5.14%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"VCU Rams (10)",Round_of_32:'59.56%',Sweet_Sixteen:'2.39%',Elite_Eight:'2.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Eastern Washington Eagles (14)",Round_of_32:'50.81%',Sweet_Sixteen:'15.04%',Elite_Eight:'1.55%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Drake Bulldogs (11)",Round_of_32:'27.53%',Sweet_Sixteen:'18.03%',Elite_Eight:'0.79%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Texas Southern Tigers (16)",Round_of_32:'0.55%',Sweet_Sixteen:'0.43%',Elite_Eight:'0.38%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Kansas Jayhawks (3)",Round_of_32:'49.19%',Sweet_Sixteen:'5.49%',Elite_Eight:'0.3%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Tennessee Volunteers (5)",Round_of_32:'99.64%',Sweet_Sixteen:'21.53%',Elite_Eight:'0.28%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"UCLA Bruins (11)",Round_of_32:'1.74%',Sweet_Sixteen:'0.44%',Elite_Eight:'0.2%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Texas Longhorns (3)",Round_of_32:'21.14%',Sweet_Sixteen:'4.04%',Elite_Eight:'0.1%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Morehead State Eagles (14)",Round_of_32:'16.35%',Sweet_Sixteen:'0.47%',Elite_Eight:'0.09%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Syracuse Orange (11)",Round_of_32:'0.82%',Sweet_Sixteen:'0.41%',Elite_Eight:'0.06%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Wisconsin Badgers (9)",Round_of_32:'47.09%',Sweet_Sixteen:'0.13%',Elite_Eight:'0.04%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"North Carolina Tar Heels (8)",Round_of_32:'52.91%',Sweet_Sixteen:'0.21%',Elite_Eight:'0.02%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"UConn Huskies (7)",Round_of_32:'79.66%',Sweet_Sixteen:'0.03%',Elite_Eight:'0.01%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"St. Bonaventure Bonnies (9)",Round_of_32:'27.43%',Sweet_Sixteen:'0.02%',Elite_Eight:'0.01%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"UC Santa Barbara Gauchos (12)",Round_of_32:'98.21%',Sweet_Sixteen:'90.97%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Florida Gators (7)",Round_of_32:'69.12%',Sweet_Sixteen:'14.71%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Oral Roberts Golden Eagles (15)",Round_of_32:'13.34%',Sweet_Sixteen:'9.71%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Oklahoma State Cowboys (4)",Round_of_32:'19.47%',Sweet_Sixteen:'8.81%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Virginia Cavaliers (4)",Round_of_32:'81.46%',Sweet_Sixteen:'7.58%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Virginia Tech Hokies (10)",Round_of_32:'30.88%',Sweet_Sixteen:'2.54%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Creighton Bluejays (5)",Round_of_32:'1.79%',Sweet_Sixteen:'1.45%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"North Texas Mean Green (13)",Round_of_32:'31.23%',Sweet_Sixteen:'0.23%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Purdue Boilermakers (4)",Round_of_32:'68.77%',Sweet_Sixteen:'0.2%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Maryland Terrapins (10)",Round_of_32:'20.34%',Sweet_Sixteen:'0.12%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Iona Gaels (15)",Round_of_32:'0.11%',Sweet_Sixteen:'0.1%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"UNC Greensboro Spartans (13)",Round_of_32:'1.88%',Sweet_Sixteen:'0.03%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Clemson Tigers (7)",Round_of_32:'90.63%',Sweet_Sixteen:'0.01%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Oregon State Beavers (12)",Round_of_32:'0.36%',Sweet_Sixteen:'0.01%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Oklahoma Sooners (8)",Round_of_32:'90.24%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Oregon Ducks (7)",Round_of_32:'40.44%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Ohio Bobcats (13)",Round_of_32:'18.54%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Missouri Tigers (9)",Round_of_32:'9.76%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Rutgers Scarlet Knights (10)",Round_of_32:'9.37%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Drexel Dragons (16)",Round_of_32:'0.01%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Norfolk State Spartans (16)",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Georgetown Hoyas (12)",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Hartford Hawks (16)",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Georgia Tech Yellow Jackets (9)",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Cleveland State Vikings (15)",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      ];
    }
    else if (study_year == current_year || study_year == "Year"){
      var team_stats = [{name:"Purdue Boilermakers (1)",Round_of_32:'100.0%',Sweet_Sixteen:'99.94%',Elite_Eight:'86.85%',Final_Four:'82.94%',Championship:'76.66%',Champion:'45.36%'}, 
      {name:"Arizona Wildcats (2)",Round_of_32:'100.0%',Sweet_Sixteen:'99.64%',Elite_Eight:'99.41%',Final_Four:'73.63%',Championship:'54.84%',Champion:'24.91%'}, 
      {name:"UConn Huskies (1)",Round_of_32:'100.0%',Sweet_Sixteen:'100.0%',Elite_Eight:'78.64%',Final_Four:'74.94%',Championship:'24.14%',Champion:'8.3%'}, 
      {name:"McNeese Cowboys (12)",Round_of_32:'52.69%',Sweet_Sixteen:'52.6%',Elite_Eight:'11.86%',Final_Four:'11.52%',Championship:'7.61%',Champion:'4.63%'}, 
      {name:"Auburn Tigers (4)",Round_of_32:'99.53%',Sweet_Sixteen:'99.45%',Elite_Eight:'21.36%',Final_Four:'19.67%',Championship:'8.45%',Champion:'4.02%'}, 
      {name:"Houston Cougars (1)",Round_of_32:'98.46%',Sweet_Sixteen:'91.62%',Elite_Eight:'37.5%',Final_Four:'32.76%',Championship:'7.62%',Champion:'3.86%'}, 
      {name:"North Carolina Tar Heels (1)",Round_of_32:'100.0%',Sweet_Sixteen:'100.0%',Elite_Eight:'75.41%',Final_Four:'17.71%',Championship:'8.6%',Champion:'3.8%'}, 
      {name:"Creighton Bluejays (3)",Round_of_32:'98.63%',Sweet_Sixteen:'98.6%',Elite_Eight:'56.03%',Final_Four:'4.05%',Championship:'3.53%',Champion:'1.83%'}, 
      {name:"Saint Mary's Gaels (5)",Round_of_32:'75.78%',Sweet_Sixteen:'59.15%',Elite_Eight:'16.61%',Final_Four:'6.6%',Championship:'2.9%',Champion:'1.45%'}, 
      {name:"Kentucky Wildcats (3)",Round_of_32:'100.0%',Sweet_Sixteen:'98.34%',Elite_Eight:'70.76%',Final_Four:'25.76%',Championship:'1.8%',Champion:'0.97%'}, 
      {name:"James Madison Dukes (12)",Round_of_32:'99.4%',Sweet_Sixteen:'72.67%',Elite_Eight:'45.86%',Final_Four:'30.29%',Championship:'2.29%',Champion:'0.61%'}, 
      {name:"Alabama Crimson Tide (4)",Round_of_32:'97.45%',Sweet_Sixteen:'30.41%',Elite_Eight:'5.94%',Final_Four:'1.38%',Championship:'0.51%',Champion:'0.19%'}, 
      {name:"Iowa State Cyclones (2)",Round_of_32:'99.15%',Sweet_Sixteen:'66.36%',Elite_Eight:'34.97%',Final_Four:'2.57%',Championship:'0.48%',Champion:'0.03%'}, 
      {name:"Grand Canyon Lopes (12)",Round_of_32:'24.22%',Sweet_Sixteen:'10.44%',Elite_Eight:'2.04%',Final_Four:'0.43%',Championship:'0.04%',Champion:'0.02%'}, 
      {name:"Gonzaga Bulldogs (5)",Round_of_32:'47.31%',Sweet_Sixteen:'47.23%',Elite_Eight:'1.27%',Final_Four:'0.71%',Championship:'0.38%',Champion:'0.01%'}, 
      {name:"Morehead State Eagles (14)",Round_of_32:'23.6%',Sweet_Sixteen:'20.26%',Elite_Eight:'10.6%',Final_Four:'0.23%',Championship:'0.02%',Champion:'0.01%'}, 
      {name:"Tennessee Volunteers (2)",Round_of_32:'100.0%',Sweet_Sixteen:'99.98%',Elite_Eight:'43.97%',Final_Four:'0.76%',Championship:'0.11%',Champion:'0.0%'}, 
      {name:"Drake Bulldogs (10)",Round_of_32:'93.64%',Sweet_Sixteen:'33.58%',Elite_Eight:'9.91%',Final_Four:'1.41%',Championship:'0.01%',Champion:'0.0%'}, 
      {name:"Dayton Flyers (7)",Round_of_32:'62.08%',Sweet_Sixteen:'0.34%',Elite_Eight:'0.33%',Final_Four:'0.22%',Championship:'0.01%',Champion:'0.0%'}, 
      {name:"Colorado Buffaloes (10)",Round_of_32:'85.44%',Sweet_Sixteen:'79.24%',Elite_Eight:'26.24%',Final_Four:'5.83%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Duke Blue Devils (4)",Round_of_32:'97.6%',Sweet_Sixteen:'27.12%',Elite_Eight:'16.44%',Final_Four:'5.15%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Illinois Fighting Illini (3)",Round_of_32:'76.4%',Sweet_Sixteen:'66.72%',Elite_Eight:'41.27%',Final_Four:'1.17%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Vermont Catamounts (12)",Round_of_32:'2.4%',Sweet_Sixteen:'0.21%',Elite_Eight:'0.15%',Final_Four:'0.13%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Florida Gators (7)",Round_of_32:'14.56%',Sweet_Sixteen:'12.13%',Elite_Eight:'2.05%',Final_Four:'0.05%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"New Mexico Lobos (11)",Round_of_32:'80.8%',Sweet_Sixteen:'45.56%',Elite_Eight:'0.25%',Final_Four:'0.03%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Texas A&M Aggies (9)",Round_of_32:'7.98%',Sweet_Sixteen:'0.3%',Elite_Eight:'0.04%',Final_Four:'0.03%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Samford Bulldogs (12)",Round_of_32:'63.21%',Sweet_Sixteen:'0.17%',Elite_Eight:'0.02%',Final_Four:'0.02%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"BYU Cougars (5)",Round_of_32:'99.99%',Sweet_Sixteen:'13.02%',Elite_Eight:'3.25%',Final_Four:'0.01%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Western Kentucky Hilltoppers (14)",Round_of_32:'41.0%',Sweet_Sixteen:'1.3%',Elite_Eight:'0.63%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Marquette Golden Eagles (2)",Round_of_32:'59.0%',Sweet_Sixteen:'7.33%',Elite_Eight:'0.17%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Texas Tech Red Raiders (5)",Round_of_32:'99.76%',Sweet_Sixteen:'1.66%',Elite_Eight:'0.15%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Nebraska Cornhuskers (8)",Round_of_32:'92.02%',Sweet_Sixteen:'7.11%',Elite_Eight:'0.01%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Nevada Wolf Pack (10)",Round_of_32:'37.92%',Sweet_Sixteen:'0.02%',Elite_Eight:'0.01%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Baylor Bears (3)",Round_of_32:'90.12%',Sweet_Sixteen:'48.5%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Clemson Tigers (5)",Round_of_32:'19.2%',Sweet_Sixteen:'4.47%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Colgate Raiders (14)",Round_of_32:'9.88%',Sweet_Sixteen:'1.47%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Akron Zips (14)",Round_of_32:'1.37%',Sweet_Sixteen:'1.37%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Longwood Lancers (16)",Round_of_32:'1.54%',Sweet_Sixteen:'0.97%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Yale Bulldogs (12)",Round_of_32:'0.47%',Sweet_Sixteen:'0.47%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"San Diego State Aztecs (5)",Round_of_32:'99.76%',Sweet_Sixteen:'0.08%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Utah State Aggies (8)",Round_of_32:'96.76%',Sweet_Sixteen:'0.06%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Washington State Cougars (7)",Round_of_32:'6.36%',Sweet_Sixteen:'0.06%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"South Carolina Gamecocks (5)",Round_of_32:'89.97%',Sweet_Sixteen:'0.03%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Colorado State Rams (10)",Round_of_32:'82.52%',Sweet_Sixteen:'0.02%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Florida Atlantic Owls (8)",Round_of_32:'98.98%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Mississippi State Bulldogs (8)",Round_of_32:'67.74%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Kansas Jayhawks (4)",Round_of_32:'36.79%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Michigan State Spartans (9)",Round_of_32:'32.26%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Texas Longhorns (7)",Round_of_32:'17.48%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Oregon Ducks (11)",Round_of_32:'10.03%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"TCU Horned Frogs (9)",Round_of_32:'3.24%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Charleston Cougars (12)",Round_of_32:'2.55%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Northwestern Wildcats (9)",Round_of_32:'1.02%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"South Dakota State Jackrabbits (14)",Round_of_32:'0.85%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Wisconsin Badgers (5)",Round_of_32:'0.6%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"UAB Blazers (12)",Round_of_32:'0.24%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"NC State Wolfpack (11)",Round_of_32:'0.24%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Duquesne Dukes (11)",Round_of_32:'0.01%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Stetson Hatters (16)",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Wagner Seahawks (16)",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Long Beach State Beach (14)",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Oakland Golden Grizzlies (14)",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
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