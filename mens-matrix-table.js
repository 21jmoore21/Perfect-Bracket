function change_year(year){
    document.getElementById("yearofstudy").innerHTML = year;
}

function find_winner(){
    
    let current_year = 2024;
    let study_year = document.getElementById("yearofstudy").innerHTML;
    if (study_year == 2023){
        var team_stats = [{name:"Houston Cougars",Round_of_32:'100.0%',Sweet_Sixteen:'98.87%',Elite_Eight:'87.8%',Final_Four:'85.12%',Championship:'54.45%',Champion:'39.93%'}, 
        {name:"Gonzaga Bulldogs",Round_of_32:'99.7%',Sweet_Sixteen:'98.79%',Elite_Eight:'63.05%',Final_Four:'43.36%',Championship:'32.05%',Champion:'21.94%'}, 
        {name:"Alabama Crimson Tide",Round_of_32:'97.74%',Sweet_Sixteen:'97.74%',Elite_Eight:'84.19%',Final_Four:'55.77%',Championship:'40.63%',Champion:'17.81%'}, 
        {name:"UConn Huskies",Round_of_32:'99.11%',Sweet_Sixteen:'96.71%',Elite_Eight:'96.25%',Final_Four:'39.57%',Championship:'9.09%',Champion:'4.76%'}, 
        {name:"Purdue Boilermakers",Round_of_32:'99.82%',Sweet_Sixteen:'68.57%',Elite_Eight:'37.28%',Final_Four:'37.15%',Championship:'14.53%',Champion:'4.48%'}, 
        {name:"Arizona Wildcats",Round_of_32:'100.0%',Sweet_Sixteen:'98.89%',Elite_Eight:'92.06%',Final_Four:'32.75%',Championship:'21.37%',Champion:'4.13%'}, 
        {name:"Oral Roberts Golden Eagles",Round_of_32:'73.01%',Sweet_Sixteen:'47.25%',Elite_Eight:'29.78%',Final_Four:'29.4%',Championship:'12.71%',Champion:'4.09%'}, 
        {name:"UCLA Bruins",Round_of_32:'95.28%',Sweet_Sixteen:'95.22%',Elite_Eight:'36.37%',Final_Four:'16.82%',Championship:'2.2%',Champion:'1.27%'}, 
        {name:"Charleston Cougars",Round_of_32:'88.59%',Sweet_Sixteen:'84.97%',Elite_Eight:'14.03%',Final_Four:'8.01%',Championship:'1.87%',Champion:'0.55%'}, 
        {name:"Drake Bulldogs",Round_of_32:'53.58%',Sweet_Sixteen:'52.64%',Elite_Eight:'5.24%',Final_Four:'4.25%',Championship:'1.77%',Champion:'0.51%'}, 
        {name:"Tennessee Volunteers",Round_of_32:'92.13%',Sweet_Sixteen:'49.66%',Elite_Eight:'29.06%',Final_Four:'28.85%',Championship:'8.16%',Champion:'0.26%'}, 
        {name:"Creighton Bluejays",Round_of_32:'94.78%',Sweet_Sixteen:'68.64%',Elite_Eight:'6.15%',Final_Four:'2.23%',Championship:'0.32%',Champion:'0.19%'}, 
        {name:"Miami Hurricanes",Round_of_32:'46.42%',Sweet_Sixteen:'45.93%',Elite_Eight:'6.91%',Final_Four:'4.79%',Championship:'0.3%',Champion:'0.04%'}, 
        {name:"Texas A&M-Corpus Christi Islanders",Round_of_32:'2.26%',Sweet_Sixteen:'2.26%',Elite_Eight:'0.67%',Final_Four:'0.32%',Championship:'0.21%',Champion:'0.01%'}, 
        {name:"UNC Asheville Bulldogs",Round_of_32:'4.72%',Sweet_Sixteen:'4.7%',Elite_Eight:'0.55%',Final_Four:'0.21%',Championship:'0.09%',Champion:'0.01%'}, 
        {name:"Texas Longhorns",Round_of_32:'81.92%',Sweet_Sixteen:'77.02%',Elite_Eight:'56.76%',Final_Four:'0.26%',Championship:'0.03%',Champion:'0.01%'}, 
        {name:"Colgate Raiders",Round_of_32:'18.08%',Sweet_Sixteen:'17.81%',Elite_Eight:'9.84%',Final_Four:'1.8%',Championship:'0.01%',Champion:'0.01%'}, 
        {name:"Baylor Bears",Round_of_32:'99.17%',Sweet_Sixteen:'29.63%',Elite_Eight:'0.9%',Final_Four:'0.23%',Championship:'0.07%',Champion:'0.0%'}, 
        {name:"Marquette Golden Eagles",Round_of_32:'98.32%',Sweet_Sixteen:'77.09%',Elite_Eight:'33.77%',Final_Four:'0.65%',Championship:'0.05%',Champion:'0.0%'}, 
        {name:"Utah State Aggies",Round_of_32:'96.78%',Sweet_Sixteen:'1.05%',Elite_Eight:'0.78%',Final_Four:'0.49%',Championship:'0.05%',Champion:'0.0%'}, 
        {name:"Florida Atlantic Owls",Round_of_32:'88.58%',Sweet_Sixteen:'26.08%',Elite_Eight:'2.67%',Final_Four:'2.64%',Championship:'0.03%',Champion:'0.0%'}, 
        {name:"Saint Mary's Gaels",Round_of_32:'91.54%',Sweet_Sixteen:'2.27%',Elite_Eight:'2.23%',Final_Four:'0.04%',Championship:'0.01%',Champion:'0.0%'}, 
        {name:"Xavier Musketeers",Round_of_32:'99.18%',Sweet_Sixteen:'95.3%',Elite_Eight:'29.13%',Final_Four:'3.74%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Memphis Tigers",Round_of_32:'11.42%',Sweet_Sixteen:'5.35%',Elite_Eight:'1.15%',Final_Four:'0.99%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Kansas State Wildcats",Round_of_32:'79.99%',Sweet_Sixteen:'47.93%',Elite_Eight:'28.21%',Final_Four:'0.23%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Virginia Cavaliers",Round_of_32:'31.16%',Sweet_Sixteen:'2.52%',Elite_Eight:'0.45%',Final_Four:'0.12%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"San Diego State Aztecs",Round_of_32:'11.41%',Sweet_Sixteen:'10.26%',Elite_Eight:'0.1%',Final_Four:'0.06%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Louisiana Ragin' Cajuns",Round_of_32:'7.87%',Sweet_Sixteen:'0.4%',Elite_Eight:'0.04%',Final_Four:'0.04%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Montana State Bobcats",Round_of_32:'20.01%',Sweet_Sixteen:'9.1%',Elite_Eight:'6.53%',Final_Four:'0.03%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Iowa Hawkeyes",Round_of_32:'83.74%',Sweet_Sixteen:'1.13%',Elite_Eight:'0.05%',Final_Four:'0.03%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Duke Blue Devils",Round_of_32:'26.99%',Sweet_Sixteen:'2.69%',Elite_Eight:'0.02%',Final_Four:'0.02%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Texas A&M Aggies",Round_of_32:'75.82%',Sweet_Sixteen:'4.94%',Elite_Eight:'4.04%',Final_Four:'0.01%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Furman Paladins",Round_of_32:'68.84%',Sweet_Sixteen:'2.25%',Elite_Eight:'0.56%',Final_Four:'0.01%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Missouri Tigers",Round_of_32:'3.22%',Sweet_Sixteen:'0.06%',Elite_Eight:'0.04%',Final_Four:'0.01%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Kentucky Wildcats",Round_of_32:'59.29%',Sweet_Sixteen:'26.07%',Elite_Eight:'16.27%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Providence Friars",Round_of_32:'40.71%',Sweet_Sixteen:'16.9%',Elite_Eight:'9.34%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Michigan State Spartans",Round_of_32:'87.39%',Sweet_Sixteen:'21.54%',Elite_Eight:'5.75%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Iona Gaels",Round_of_32:'0.89%',Sweet_Sixteen:'0.73%',Elite_Eight:'0.72%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Kansas Jayhawks",Round_of_32:'99.71%',Sweet_Sixteen:'98.83%',Elite_Eight:'0.53%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"VCU Rams",Round_of_32:'8.46%',Sweet_Sixteen:'0.29%',Elite_Eight:'0.27%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Penn State Nittany Lions",Round_of_32:'24.18%',Sweet_Sixteen:'0.23%',Elite_Eight:'0.18%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Vermont Catamounts",Round_of_32:'1.68%',Sweet_Sixteen:'0.44%',Elite_Eight:'0.13%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"NC State Wolfpack",Round_of_32:'5.22%',Sweet_Sixteen:'1.73%',Elite_Eight:'0.07%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Pittsburgh Panthers",Round_of_32:'90.0%',Sweet_Sixteen:'3.26%',Elite_Eight:'0.04%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Grand Canyon Lopes",Round_of_32:'0.3%',Sweet_Sixteen:'0.24%',Elite_Eight:'0.02%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Kennesaw State Owls",Round_of_32:'0.82%',Sweet_Sixteen:'0.57%',Elite_Eight:'0.01%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Boise State Broncos",Round_of_32:'98.59%',Sweet_Sixteen:'0.08%',Elite_Eight:'0.01%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Kent State Golden Flashes",Round_of_32:'61.15%',Sweet_Sixteen:'1.39%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"TCU Horned Frogs",Round_of_32:'100.0%',Sweet_Sixteen:'0.97%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"USC Trojans",Round_of_32:'12.61%',Sweet_Sixteen:'0.93%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Iowa State Cyclones",Round_of_32:'10.0%',Sweet_Sixteen:'0.87%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Arkansas Razorbacks",Round_of_32:'68.82%',Sweet_Sixteen:'0.78%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Howard Bison",Round_of_32:'0.29%',Sweet_Sixteen:'0.29%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Illinois Fighting Illini",Round_of_32:'31.18%',Sweet_Sixteen:'0.1%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Indiana Hoosiers",Round_of_32:'38.85%',Sweet_Sixteen:'0.04%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"West Virginia Mountaineers",Round_of_32:'54.99%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Maryland Terrapins",Round_of_32:'45.01%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Auburn Tigers",Round_of_32:'16.26%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Northwestern Wildcats",Round_of_32:'1.41%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"UC Santa Barbara Gauchos",Round_of_32:'0.83%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Fairleigh Dickinson Knights",Round_of_32:'0.18%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Princeton Tigers",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Northern Kentucky Norse",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Arizona State Sun Devils",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        ];
    }
    else if (study_year == 2022){
        var team_stats = [{name:"Gonzaga Bulldogs",Round_of_32:'100.0%',Sweet_Sixteen:'99.99%',Elite_Eight:'99.95%',Final_Four:'99.84%',Championship:'98.72%',Champion:'96.18%'}, 
        {name:"Arizona Wildcats",Round_of_32:'100.0%',Sweet_Sixteen:'100.0%',Elite_Eight:'89.42%',Final_Four:'87.23%',Championship:'77.49%',Champion:'1.22%'}, 
        {name:"South Dakota State Jackrabbits",Round_of_32:'82.1%',Sweet_Sixteen:'57.68%',Elite_Eight:'36.73%',Final_Four:'35.58%',Championship:'10.52%',Champion:'0.84%'}, 
        {name:"Purdue Boilermakers",Round_of_32:'99.84%',Sweet_Sixteen:'97.08%',Elite_Eight:'22.12%',Final_Four:'21.79%',Championship:'0.58%',Champion:'0.52%'}, 
        {name:"Houston Cougars",Round_of_32:'69.22%',Sweet_Sixteen:'68.52%',Elite_Eight:'9.42%',Final_Four:'9.05%',Championship:'8.59%',Champion:'0.41%'}, 
        {name:"Murray State Racers",Round_of_32:'100.0%',Sweet_Sixteen:'69.15%',Elite_Eight:'54.99%',Final_Four:'48.61%',Championship:'0.37%',Champion:'0.28%'}, 
        {name:"LSU Tigers",Round_of_32:'100.0%',Sweet_Sixteen:'82.14%',Elite_Eight:'21.25%',Final_Four:'9.99%',Championship:'0.87%',Champion:'0.19%'}, 
        {name:"Baylor Bears",Round_of_32:'91.13%',Sweet_Sixteen:'82.04%',Elite_Eight:'69.67%',Final_Four:'8.49%',Championship:'0.18%',Champion:'0.14%'}, 
        {name:"Villanova Wildcats",Round_of_32:'100.0%',Sweet_Sixteen:'69.39%',Elite_Eight:'36.31%',Final_Four:'1.63%',Championship:'1.19%',Champion:'0.1%'}, 
        {name:"Texas Tech Red Raiders",Round_of_32:'91.86%',Sweet_Sixteen:'90.75%',Elite_Eight:'43.48%',Final_Four:'0.12%',Championship:'0.09%',Champion:'0.04%'}, 
        {name:"UAB Blazers",Round_of_32:'30.78%',Sweet_Sixteen:'30.18%',Elite_Eight:'1.16%',Final_Four:'0.9%',Championship:'0.47%',Champion:'0.02%'}, 
        {name:"Kentucky Wildcats",Round_of_32:'99.67%',Sweet_Sixteen:'30.85%',Elite_Eight:'22.89%',Final_Four:'19.75%',Championship:'0.02%',Champion:'0.02%'}, 
        {name:"Longwood Lancers",Round_of_32:'38.89%',Sweet_Sixteen:'37.87%',Elite_Eight:'23.17%',Final_Four:'0.83%',Championship:'0.34%',Champion:'0.01%'}, 
        {name:"Iowa Hawkeyes",Round_of_32:'100.0%',Sweet_Sixteen:'34.88%',Elite_Eight:'6.6%',Final_Four:'5.63%',Championship:'0.33%',Champion:'0.01%'}, 
        {name:"Arkansas Razorbacks",Round_of_32:'59.12%',Sweet_Sixteen:'49.49%',Elite_Eight:'0.05%',Final_Four:'0.02%',Championship:'0.02%',Champion:'0.01%'}, 
        {name:"Montana State Bobcats",Round_of_32:'8.14%',Sweet_Sixteen:'7.37%',Elite_Eight:'1.83%',Final_Four:'0.01%',Championship:'0.01%',Champion:'0.01%'}, 
        {name:"Tennessee Volunteers",Round_of_32:'61.11%',Sweet_Sixteen:'59.96%',Elite_Eight:'33.97%',Final_Four:'0.14%',Championship:'0.09%',Champion:'0.0%'}, 
        {name:"Auburn Tigers",Round_of_32:'98.07%',Sweet_Sixteen:'97.94%',Elite_Eight:'75.09%',Final_Four:'10.47%',Championship:'0.05%',Champion:'0.0%'}, 
        {name:"Kansas Jayhawks",Round_of_32:'100.0%',Sweet_Sixteen:'98.94%',Elite_Eight:'55.77%',Final_Four:'38.12%',Championship:'0.03%',Champion:'0.0%'}, 
        {name:"Loyola Chicago Ramblers",Round_of_32:'96.87%',Sweet_Sixteen:'30.61%',Elite_Eight:'6.51%',Final_Four:'0.21%',Championship:'0.03%',Champion:'0.0%'}, 
        {name:"Duke Blue Devils",Round_of_32:'99.94%',Sweet_Sixteen:'93.54%',Elite_Eight:'52.55%',Final_Four:'0.01%',Championship:'0.01%',Champion:'0.0%'}, 
        {name:"Norfolk State Spartans",Round_of_32:'8.87%',Sweet_Sixteen:'7.23%',Elite_Eight:'6.61%',Final_Four:'0.57%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"UCLA Bruins",Round_of_32:'98.57%',Sweet_Sixteen:'95.04%',Elite_Eight:'15.83%',Final_Four:'0.56%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"San Diego State Aztecs",Round_of_32:'96.32%',Sweet_Sixteen:'1.06%',Elite_Eight:'0.86%',Final_Four:'0.17%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"North Carolina Tar Heels",Round_of_32:'99.37%',Sweet_Sixteen:'10.73%',Elite_Eight:'7.05%',Final_Four:'0.15%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Saint Mary's Gaels",Round_of_32:'95.67%',Sweet_Sixteen:'3.55%',Elite_Eight:'0.74%',Final_Four:'0.08%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Providence Friars",Round_of_32:'17.9%',Sweet_Sixteen:'7.44%',Elite_Eight:'0.04%',Final_Four:'0.04%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Colorado State Rams",Round_of_32:'96.6%',Sweet_Sixteen:'2.17%',Elite_Eight:'0.04%',Final_Four:'0.01%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Colgate Raiders",Round_of_32:'40.3%',Sweet_Sixteen:'9.36%',Elite_Eight:'2.19%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Davidson Wildcats",Round_of_32:'94.74%',Sweet_Sixteen:'6.45%',Elite_Eight:'2.14%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Wisconsin Badgers",Round_of_32:'59.7%',Sweet_Sixteen:'8.5%',Elite_Eight:'0.69%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Jacksonville State Gamecocks",Round_of_32:'1.93%',Sweet_Sixteen:'1.91%',Elite_Eight:'0.68%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Akron Zips",Round_of_32:'1.43%',Sweet_Sixteen:'1.41%',Elite_Eight:'0.1%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"USC Trojans",Round_of_32:'91.2%',Sweet_Sixteen:'0.1%',Elite_Eight:'0.08%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Miami Hurricanes",Round_of_32:'8.8%',Sweet_Sixteen:'0.05%',Elite_Eight:'0.02%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Vermont Catamounts",Round_of_32:'40.88%',Sweet_Sixteen:'35.99%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"UConn Huskies",Round_of_32:'64.7%',Sweet_Sixteen:'10.74%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"New Mexico State Aggies",Round_of_32:'35.3%',Sweet_Sixteen:'3.78%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Texas Longhorns",Round_of_32:'59.26%',Sweet_Sixteen:'2.67%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Notre Dame Fighting Irish",Round_of_32:'61.66%',Sweet_Sixteen:'1.81%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Illinois Fighting Illini",Round_of_32:'65.79%',Sweet_Sixteen:'1.18%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Virginia Tech Hokies",Round_of_32:'40.74%',Sweet_Sixteen:'0.21%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Chattanooga Mocs",Round_of_32:'34.21%',Sweet_Sixteen:'0.12%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Alabama Crimson Tide",Round_of_32:'38.34%',Sweet_Sixteen:'0.07%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Yale Bulldogs",Round_of_32:'0.16%',Sweet_Sixteen:'0.04%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Memphis Tigers",Round_of_32:'55.28%',Sweet_Sixteen:'0.01%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Cal State Fullerton Titans",Round_of_32:'0.06%',Sweet_Sixteen:'0.01%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Seton Hall Pirates",Round_of_32:'96.52%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Boise State Broncos",Round_of_32:'44.72%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Michigan State Spartans",Round_of_32:'5.26%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Indiana Hoosiers",Round_of_32:'4.33%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Creighton Bluejays",Round_of_32:'3.68%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"TCU Horned Frogs",Round_of_32:'3.48%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Michigan Wolverines",Round_of_32:'3.4%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Ohio State Buckeyes",Round_of_32:'3.13%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Marquette Golden Eagles",Round_of_32:'0.63%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Saint Peter's Peacocks",Round_of_32:'0.33%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Georgia State Panthers",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"San Francisco Dons",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Wright State Raiders",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Delaware Blue Hens",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Texas Southern Tigers",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Richmond Spiders",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Iowa State Cyclones",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        ];
    }
    else if (study_year == 2021){
        var team_stats = [{name:"Gonzaga Bulldogs",Round_of_32:'100.0%',Sweet_Sixteen:'100.0%',Elite_Eight:'100.0%',Final_Four:'99.98%',Championship:'99.03%',Champion:'86.55%'}, 
        {name:"Houston Cougars",Round_of_32:'100.0%',Sweet_Sixteen:'99.99%',Elite_Eight:'93.16%',Final_Four:'51.86%',Championship:'28.24%',Champion:'7.7%'}, 
        {name:"Colgate Raiders",Round_of_32:'90.73%',Sweet_Sixteen:'89.62%',Elite_Eight:'89.39%',Final_Four:'56.83%',Championship:'33.02%',Champion:'4.23%'}, 
        {name:"Baylor Bears",Round_of_32:'99.97%',Sweet_Sixteen:'99.75%',Elite_Eight:'91.31%',Final_Four:'39.84%',Championship:'18.06%',Champion:'0.89%'}, 
        {name:"Loyola Chicago Ramblers",Round_of_32:'100.0%',Sweet_Sixteen:'31.25%',Elite_Eight:'25.28%',Final_Four:'12.54%',Championship:'5.59%',Champion:'0.25%'}, 
        {name:"Abilene Christian Wildcats",Round_of_32:'79.38%',Sweet_Sixteen:'58.4%',Elite_Eight:'31.23%',Final_Four:'16.32%',Championship:'0.58%',Champion:'0.19%'}, 
        {name:"Michigan Wolverines",Round_of_32:'99.38%',Sweet_Sixteen:'97.29%',Elite_Eight:'93.57%',Final_Four:'72.6%',Championship:'0.31%',Champion:'0.14%'}, 
        {name:"Illinois Fighting Illini",Round_of_32:'100.0%',Sweet_Sixteen:'68.75%',Elite_Eight:'65.26%',Final_Four:'31.32%',Championship:'14.51%',Champion:'0.02%'}, 
        {name:"Liberty Flames",Round_of_32:'80.88%',Sweet_Sixteen:'70.11%',Elite_Eight:'9.08%',Final_Four:'4.05%',Championship:'0.32%',Champion:'0.02%'}, 
        {name:"Iowa Hawkeyes",Round_of_32:'74.31%',Sweet_Sixteen:'73.17%',Elite_Eight:'67.42%',Final_Four:'0.01%',Championship:'0.01%',Champion:'0.01%'}, 
        {name:"Arkansas Razorbacks",Round_of_32:'9.27%',Sweet_Sixteen:'8.16%',Elite_Eight:'7.92%',Final_Four:'1.84%',Championship:'0.12%',Champion:'0.0%'}, 
        {name:"Winthrop Eagles",Round_of_32:'76.47%',Sweet_Sixteen:'76.19%',Elite_Eight:'8.29%',Final_Four:'0.75%',Championship:'0.09%',Champion:'0.0%'}, 
        {name:"Alabama Crimson Tide",Round_of_32:'99.89%',Sweet_Sixteen:'99.74%',Elite_Eight:'57.67%',Final_Four:'8.76%',Championship:'0.04%',Champion:'0.0%'}, 
        {name:"West Virginia Mountaineers",Round_of_32:'82.96%',Sweet_Sixteen:'12.31%',Elite_Eight:'1.72%',Final_Four:'0.2%',Championship:'0.04%',Champion:'0.0%'}, 
        {name:"Colorado Buffaloes",Round_of_32:'100.0%',Sweet_Sixteen:'83.14%',Elite_Eight:'3.4%',Final_Four:'1.59%',Championship:'0.02%',Champion:'0.0%'}, 
        {name:"Utah State Aggies",Round_of_32:'62.56%',Sweet_Sixteen:'1.12%',Elite_Eight:'1.12%',Final_Four:'0.52%',Championship:'0.01%',Champion:'0.0%'}, 
        {name:"Grand Canyon Lopes",Round_of_32:'25.69%',Sweet_Sixteen:'24.38%',Elite_Eight:'20.43%',Final_Four:'0.01%',Championship:'0.01%',Champion:'0.0%'}, 
        {name:"LSU Tigers",Round_of_32:'72.56%',Sweet_Sixteen:'2.21%',Elite_Eight:'2.04%',Final_Four:'0.69%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Ohio State Buckeyes",Round_of_32:'86.94%',Sweet_Sixteen:'73.43%',Elite_Eight:'0.5%',Final_Four:'0.11%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Texas Tech Red Raiders",Round_of_32:'37.44%',Sweet_Sixteen:'1.1%',Elite_Eight:'1.07%',Final_Four:'0.1%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Florida State Seminoles",Round_of_32:'98.24%',Sweet_Sixteen:'16.76%',Elite_Eight:'0.55%',Final_Four:'0.04%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Syracuse Orange",Round_of_32:'0.73%',Sweet_Sixteen:'0.44%',Elite_Eight:'0.05%',Final_Four:'0.02%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Villanova Wildcats",Round_of_32:'23.53%',Sweet_Sixteen:'23.4%',Elite_Eight:'0.37%',Final_Four:'0.01%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Oklahoma State Cowboys",Round_of_32:'19.12%',Sweet_Sixteen:'8.37%',Elite_Eight:'0.02%',Final_Four:'0.01%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"BYU Cougars",Round_of_32:'98.23%',Sweet_Sixteen:'37.54%',Elite_Eight:'10.87%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"USC Trojans",Round_of_32:'72.31%',Sweet_Sixteen:'61.45%',Elite_Eight:'7.96%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"San Diego State Aztecs",Round_of_32:'99.27%',Sweet_Sixteen:'86.75%',Elite_Eight:'4.94%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"VCU Rams",Round_of_32:'59.38%',Sweet_Sixteen:'2.45%',Elite_Eight:'2.06%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Eastern Washington Eagles",Round_of_32:'51.51%',Sweet_Sixteen:'14.74%',Elite_Eight:'1.06%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Drake Bulldogs",Round_of_32:'27.69%',Sweet_Sixteen:'18.72%',Elite_Eight:'0.72%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Texas Southern Tigers",Round_of_32:'0.62%',Sweet_Sixteen:'0.47%',Elite_Eight:'0.43%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Tennessee Volunteers",Round_of_32:'99.6%',Sweet_Sixteen:'21.51%',Elite_Eight:'0.36%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Kansas Jayhawks",Round_of_32:'48.49%',Sweet_Sixteen:'5.09%',Elite_Eight:'0.35%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"UCLA Bruins",Round_of_32:'1.77%',Sweet_Sixteen:'0.42%',Elite_Eight:'0.15%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Morehead State Eagles",Round_of_32:'17.04%',Sweet_Sixteen:'0.5%',Elite_Eight:'0.13%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Texas Longhorns",Round_of_32:'20.62%',Sweet_Sixteen:'3.64%',Elite_Eight:'0.06%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Wisconsin Badgers",Round_of_32:'48.38%',Sweet_Sixteen:'0.07%',Elite_Eight:'0.02%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Purdue Boilermakers",Round_of_32:'67.2%',Sweet_Sixteen:'0.22%',Elite_Eight:'0.01%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Iona Gaels",Round_of_32:'0.11%',Sweet_Sixteen:'0.11%',Elite_Eight:'0.01%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"UConn Huskies",Round_of_32:'79.2%',Sweet_Sixteen:'0.04%',Elite_Eight:'0.01%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"St. Bonaventure Bonnies",Round_of_32:'27.44%',Sweet_Sixteen:'0.03%',Elite_Eight:'0.01%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"UC Santa Barbara Gauchos",Round_of_32:'98.14%',Sweet_Sixteen:'90.6%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Florida Gators",Round_of_32:'69.4%',Sweet_Sixteen:'14.59%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Oral Roberts Golden Eagles",Round_of_32:'13.06%',Sweet_Sixteen:'9.52%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Virginia Cavaliers",Round_of_32:'81.37%',Sweet_Sixteen:'7.87%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Virginia Tech Hokies",Round_of_32:'30.6%',Sweet_Sixteen:'2.46%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Creighton Bluejays",Round_of_32:'1.86%',Sweet_Sixteen:'1.53%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"North Texas Mean Green",Round_of_32:'32.8%',Sweet_Sixteen:'0.19%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"North Carolina Tar Heels",Round_of_32:'51.62%',Sweet_Sixteen:'0.17%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Maryland Terrapins",Round_of_32:'20.8%',Sweet_Sixteen:'0.11%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"UNC Greensboro Spartans",Round_of_32:'1.76%',Sweet_Sixteen:'0.1%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Clemson Tigers",Round_of_32:'90.95%',Sweet_Sixteen:'0.01%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Oregon State Beavers",Round_of_32:'0.4%',Sweet_Sixteen:'0.01%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Hartford Hawks",Round_of_32:'0.03%',Sweet_Sixteen:'0.01%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Oklahoma Sooners",Round_of_32:'90.31%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Oregon Ducks",Round_of_32:'40.62%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Ohio Bobcats",Round_of_32:'18.63%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Missouri Tigers",Round_of_32:'9.69%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Rutgers Scarlet Knights",Round_of_32:'9.05%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Norfolk State Spartans",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Georgetown Hoyas",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Drexel Dragons",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Georgia Tech Yellow Jackets",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        {name:"Cleveland State Vikings",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
        ];
    }
    else if (study_year == current_year || study_year == "Year"){
      var team_stats = [{name:"Purdue Boilermakers",Round_of_32:'100.0%',Sweet_Sixteen:'99.97%',Elite_Eight:'87.97%',Final_Four:'83.58%',Championship:'76.86%',Champion:'45.49%'}, 
      {name:"Arizona Wildcats",Round_of_32:'100.0%',Sweet_Sixteen:'99.68%',Elite_Eight:'99.44%',Final_Four:'73.6%',Championship:'55.45%',Champion:'24.89%'}, 
      {name:"UConn Huskies",Round_of_32:'100.0%',Sweet_Sixteen:'99.99%',Elite_Eight:'78.79%',Final_Four:'74.77%',Championship:'23.99%',Champion:'8.36%'}, 
      {name:"North Carolina Tar Heels",Round_of_32:'100.0%',Sweet_Sixteen:'100.0%',Elite_Eight:'75.73%',Final_Four:'18.06%',Championship:'9.13%',Champion:'4.28%'}, 
      {name:"McNeese Cowboys",Round_of_32:'52.16%',Sweet_Sixteen:'52.05%',Elite_Eight:'10.66%',Final_Four:'10.38%',Championship:'6.8%',Champion:'4.24%'}, 
      {name:"Auburn Tigers",Round_of_32:'99.57%',Sweet_Sixteen:'99.48%',Elite_Eight:'21.18%',Final_Four:'19.42%',Championship:'7.77%',Champion:'4.02%'}, 
      {name:"Houston Cougars",Round_of_32:'98.27%',Sweet_Sixteen:'90.91%',Elite_Eight:'36.42%',Final_Four:'31.82%',Championship:'7.28%',Champion:'3.84%'}, 
      {name:"Creighton Bluejays",Round_of_32:'98.35%',Sweet_Sixteen:'98.34%',Elite_Eight:'56.49%',Final_Four:'4.3%',Championship:'3.81%',Champion:'1.75%'}, 
      {name:"Saint Mary's Gaels",Round_of_32:'75.72%',Sweet_Sixteen:'58.58%',Elite_Eight:'16.01%',Final_Four:'5.91%',Championship:'2.49%',Champion:'1.26%'}, 
      {name:"Kentucky Wildcats",Round_of_32:'100.0%',Sweet_Sixteen:'98.13%',Elite_Eight:'71.54%',Final_Four:'26.58%',Championship:'2.26%',Champion:'1.1%'}, 
      {name:"James Madison Dukes",Round_of_32:'99.4%',Sweet_Sixteen:'72.67%',Elite_Eight:'46.86%',Final_Four:'30.1%',Championship:'2.36%',Champion:'0.5%'}, 
      {name:"Alabama Crimson Tide",Round_of_32:'97.64%',Sweet_Sixteen:'31.2%',Elite_Eight:'6.2%',Final_Four:'1.72%',Championship:'0.66%',Champion:'0.21%'}, 
      {name:"Gonzaga Bulldogs",Round_of_32:'47.84%',Sweet_Sixteen:'47.78%',Elite_Eight:'1.33%',Final_Four:'0.79%',Championship:'0.53%',Champion:'0.03%'}, 
      {name:"Grand Canyon Lopes",Round_of_32:'24.28%',Sweet_Sixteen:'10.21%',Elite_Eight:'2.06%',Final_Four:'0.46%',Championship:'0.05%',Champion:'0.02%'}, 
      {name:"Morehead State Eagles",Round_of_32:'23.3%',Sweet_Sixteen:'19.87%',Elite_Eight:'10.24%',Final_Four:'0.24%',Championship:'0.02%',Champion:'0.01%'}, 
      {name:"Iowa State Cyclones",Round_of_32:'99.06%',Sweet_Sixteen:'65.44%',Elite_Eight:'34.29%',Final_Four:'2.73%',Championship:'0.4%',Champion:'0.0%'}, 
      {name:"Tennessee Volunteers",Round_of_32:'100.0%',Sweet_Sixteen:'99.93%',Elite_Eight:'43.46%',Final_Four:'0.91%',Championship:'0.09%',Champion:'0.0%'}, 
      {name:"Dayton Flyers",Round_of_32:'63.97%',Sweet_Sixteen:'0.31%',Elite_Eight:'0.31%',Final_Four:'0.21%',Championship:'0.02%',Champion:'0.0%'}, 
      {name:"Colorado Buffaloes",Round_of_32:'85.66%',Sweet_Sixteen:'79.71%',Elite_Eight:'25.65%',Final_Four:'5.8%',Championship:'0.01%',Champion:'0.0%'}, 
      {name:"Drake Bulldogs",Round_of_32:'94.02%',Sweet_Sixteen:'34.53%',Elite_Eight:'10.73%',Final_Four:'1.68%',Championship:'0.01%',Champion:'0.0%'}, 
      {name:"New Mexico Lobos",Round_of_32:'80.41%',Sweet_Sixteen:'45.55%',Elite_Eight:'0.2%',Final_Four:'0.04%',Championship:'0.01%',Champion:'0.0%'}, 
      {name:"Duke Blue Devils",Round_of_32:'97.93%',Sweet_Sixteen:'27.11%',Elite_Eight:'16.5%',Final_Four:'5.51%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Illinois Fighting Illini",Round_of_32:'76.7%',Sweet_Sixteen:'66.46%',Elite_Eight:'41.34%',Final_Four:'1.16%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Vermont Catamounts",Round_of_32:'2.07%',Sweet_Sixteen:'0.22%',Elite_Eight:'0.19%',Final_Four:'0.14%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Florida Gators",Round_of_32:'14.34%',Sweet_Sixteen:'12.01%',Elite_Eight:'1.79%',Final_Four:'0.04%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Utah State Aggies",Round_of_32:'96.44%',Sweet_Sixteen:'0.03%',Elite_Eight:'0.03%',Final_Four:'0.03%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Western Kentucky Hilltoppers",Round_of_32:'40.8%',Sweet_Sixteen:'1.1%',Elite_Eight:'0.59%',Final_Four:'0.01%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Samford Bulldogs",Round_of_32:'63.04%',Sweet_Sixteen:'0.17%',Elite_Eight:'0.01%',Final_Four:'0.01%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"BYU Cougars",Round_of_32:'99.99%',Sweet_Sixteen:'13.67%',Elite_Eight:'3.4%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Marquette Golden Eagles",Round_of_32:'59.2%',Sweet_Sixteen:'7.18%',Elite_Eight:'0.28%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Texas Tech Red Raiders",Round_of_32:'99.69%',Sweet_Sixteen:'1.87%',Elite_Eight:'0.15%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Akron Zips",Round_of_32:'1.65%',Sweet_Sixteen:'1.64%',Elite_Eight:'0.05%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Baylor Bears",Round_of_32:'90.0%',Sweet_Sixteen:'48.73%',Elite_Eight:'0.04%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Nebraska Cornhuskers",Round_of_32:'92.25%',Sweet_Sixteen:'7.81%',Elite_Eight:'0.03%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Yale Bulldogs",Round_of_32:'0.43%',Sweet_Sixteen:'0.43%',Elite_Eight:'0.01%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"San Diego State Aztecs",Round_of_32:'99.69%',Sweet_Sixteen:'0.09%',Elite_Eight:'0.01%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Florida Atlantic Owls",Round_of_32:'99.02%',Sweet_Sixteen:'0.01%',Elite_Eight:'0.01%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Nevada Wolf Pack",Round_of_32:'36.03%',Sweet_Sixteen:'0.01%',Elite_Eight:'0.01%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Clemson Tigers",Round_of_32:'19.59%',Sweet_Sixteen:'4.41%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Colgate Raiders",Round_of_32:'10.0%',Sweet_Sixteen:'1.31%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Longwood Lancers",Round_of_32:'1.73%',Sweet_Sixteen:'1.11%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Texas A&M Aggies",Round_of_32:'7.75%',Sweet_Sixteen:'0.17%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Colorado State Rams",Round_of_32:'81.85%',Sweet_Sixteen:'0.07%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Washington State Cougars",Round_of_32:'5.98%',Sweet_Sixteen:'0.03%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"South Carolina Gamecocks",Round_of_32:'89.66%',Sweet_Sixteen:'0.02%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Charleston Cougars",Round_of_32:'2.36%',Sweet_Sixteen:'0.01%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Mississippi State Bulldogs",Round_of_32:'67.7%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Kansas Jayhawks",Round_of_32:'36.96%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Michigan State Spartans",Round_of_32:'32.3%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Texas Longhorns",Round_of_32:'18.15%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Oregon Ducks",Round_of_32:'10.34%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"TCU Horned Frogs",Round_of_32:'3.56%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Northwestern Wildcats",Round_of_32:'0.98%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"South Dakota State Jackrabbits",Round_of_32:'0.94%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Wisconsin Badgers",Round_of_32:'0.6%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"UAB Blazers",Round_of_32:'0.31%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"NC State Wolfpack",Round_of_32:'0.31%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Duquesne Dukes",Round_of_32:'0.01%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Stetson Hatters",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Wagner Seahawks",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Long Beach State Beach",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Oakland Golden Grizzlies",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Grambling Tigers",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
      {name:"Saint Peter's Peacocks",Round_of_32:'0.0%',Sweet_Sixteen:'0.0%',Elite_Eight:'0.0%',Final_Four:'0.0%',Championship:'0.0%',Champion:'0.0%'}, 
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