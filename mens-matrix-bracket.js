function change_year(year){
    document.getElementById("yearofstudy").innerHTML = year;
}

function find_winner(){
    
    let current_year = 2024;
    let study_year = document.getElementById("yearofstudy").innerHTML;
    if (study_year == 2023){
        document.getElementById("region_1").innerHTML = "South";
        document.getElementById("region_2").innerHTML = "East";
        document.getElementById("region_3").innerHTML = "Midwest";
        document.getElementById("region_4").innerHTML = "West";
        document.getElementById("bracket_score_text").innerHTML = "This Bracket Would Have Scored: ";
        document.getElementById("bracket_score_text_two").innerHTML = "Points";
        var team_stats = [{name:"Alabama",per:'-'}, 
        {name:"T AM CC",per:'-'}, 
        {name:"MD",per:'-'}, 
        {name:"WVU",per:'-'}, 
        {name:"SDSU",per:'-'}, 
        {name:"Charles",per:'-'}, 
        {name:"Virginia",per:'-'}, 
        {name:"Furman",per:'-'}, 
        {name:"Creigh",per:'-'}, 
        {name:"NC St",per:'-'}, 
        {name:"Baylor",per:'-'}, 
        {name:"UCSB",per:'-'}, 
        {name:"Missouri",per:'-'}, 
        {name:"Utah St",per:'-'}, 
        {name:"Arizona",per:'-'}, 
        {name:"Prince",per:'-'}, 
        {name:"Purdue",per:'-'}, 
        {name:"FDU",per:'-'}, 
        {name:"Memphis",per:'-'}, 
        {name:"FAU",per:'-'}, 
        {name:"Duke",per:'-'}, 
        {name:"ORU",per:'-'}, 
        {name:"Tenn",per:'-'}, 
        {name:"U LA",per:'-'}, 
        {name:"Kentucky",per:'-'}, 
        {name:"Prov",per:'-'}, 
        {name:"K State",per:'-'}, 
        {name:"Mont St",per:'-'}, 
        {name:"Mich St",per:'-'}, 
        {name:"USC",per:'-'}, 
        {name:"Marq",per:'-'}, 
        {name:"Vermont",per:'-'}, 
        {name:"Houston",per:'-'}, 
        {name:"N Kent",per:'-'}, 
        {name:"Iowa",per:'-'}, 
        {name:"Auburn",per:'-'}, 
        {name:"Miami",per:'-'}, 
        {name:"Drake",per:'-'}, 
        {name:"Indiana",per:'-'}, 
        {name:"Kent St",per:'-'}, 
        {name:"Iowa St",per:'-'}, 
        {name:"Pitt",per:'-'}, 
        {name:"Xavier",per:'-'}, 
        {name:"Kenn St",per:'-'}, 
        {name:"Texas AM",per:'-'}, 
        {name:"Penn St",per:'-'}, 
        {name:"Texas",per:'-'}, 
        {name:"Colgate",per:'-'}, 
        {name:"Kansas",per:'-'}, 
        {name:"Howard",per:'-'}, 
        {name:"Ark",per:'-'}, 
        {name:"Illinois",per:'-'}, 
        {name:"St Marys",per:'-'}, 
        {name:"VCU",per:'-'}, 
        {name:"UConn",per:'-'}, 
        {name:"Iona",per:'-'}, 
        {name:"TCU",per:'-'}, 
        {name:"AZ St",per:'-'}, 
        {name:"Gonzaga",per:'-'}, 
        {name:"GCU",per:'-'}, 
        {name:"NWest",per:'-'}, 
        {name:"Boise St",per:'-'}, 
        {name:"UCLA",per:'-'}, 
        {name:"UNC A",per:'-'}, 
        {name:"Alabama",per:'97.74%'}, 
        {name:"WVU",per:'54.99%'}, 
        {name:"Charles",per:'88.59%'}, 
        {name:"Furman",per:'68.84%'}, 
        {name:"Creigh",per:'94.78%'}, 
        {name:"Baylor",per:'99.17%'}, 
        {name:"Utah St",per:'96.78%'}, 
        {name:"Arizona",per:'100.0%'}, 
        {name:"Purdue",per:'99.82%'}, 
        {name:"FAU",per:'88.58%'}, 
        {name:"ORU",per:'73.01%'}, 
        {name:"Tenn",per:'92.13%'}, 
        {name:"Kentucky",per:'59.29%'}, 
        {name:"K State",per:'79.99%'}, 
        {name:"Mich St",per:'87.39%'}, 
        {name:"Marq",per:'98.32%'}, 
        {name:"Houston",per:'100.0%'}, 
        {name:"Iowa",per:'83.74%'}, 
        {name:"Drake",per:'53.58%'}, 
        {name:"Kent St",per:'61.15%'}, 
        {name:"Pitt",per:'90.0%'}, 
        {name:"Xavier",per:'99.18%'}, 
        {name:"Texas AM",per:'75.82%'}, 
        {name:"Texas",per:'81.92%'}, 
        {name:"Kansas",per:'99.71%'}, 
        {name:"Ark",per:'68.82%'}, 
        {name:"St Marys",per:'91.54%'}, 
        {name:"UConn",per:'99.11%'}, 
        {name:"TCU",per:'100.0%'}, 
        {name:"Gonzaga",per:'99.7%'}, 
        {name:"Boise St",per:'98.59%'}, 
        {name:"UCLA",per:'95.28%'}, 
        {name:"Alabama",per:'97.74%'}, 
        {name:"Charles",per:'84.97%'}, 
        {name:"Creigh",per:'68.64%'}, 
        {name:"Arizona",per:'98.89%'}, 
        {name:"Purdue",per:'68.57%'}, 
        {name:"Tenn",per:'49.66%'}, 
        {name:"K State",per:'47.93%'}, 
        {name:"Marq",per:'77.09%'}, 
        {name:"Houston",per:'98.87%'}, 
        {name:"Drake",per:'52.64%'}, 
        {name:"Xavier",per:'95.3%'}, 
        {name:"Texas",per:'77.02%'}, 
        {name:"Kansas",per:'98.83%'}, 
        {name:"UConn",per:'96.71%'}, 
        {name:"Gonzaga",per:'98.79%'}, 
        {name:"UCLA",per:'95.22%'}, 
        {name:"Alabama",per:'84.19%'}, 
        {name:"Arizona",per:'92.06%'}, 
        {name:"Purdue",per:'37.28%'}, 
        {name:"Marq",per:'33.77%'}, 
        {name:"Houston",per:'87.8%'}, 
        {name:"Texas",per:'56.76%'}, 
        {name:"UConn",per:'96.25%'}, 
        {name:"Gonzaga",per:'63.05%'}, 
        {name:"Alabama",per:'55.77%'}, 
        {name:"Purdue",per:'37.15%'}, 
        {name:"Houston",per:'85.12%'}, 
        {name:"Gonzaga",per:'43.36%'}, 
        {name:"Alabama",per:'40.63%'}, 
        {name:"Houston",per:'54.45%'}, 
        {name:"Houston",per:'39.93%'}, 
        ];
        var round_32 = ['Alabama', 'MD', 'SDSU', 'Furman', 'Creigh', 'Baylor', 'Missouri', 'Prince', 'FDU', 'FAU', 'Duke', 'Tenn', 'Kentucky', 'K State', 'Mich St', 'Marq','Houston', 'Auburn', 'Miami', 'Indiana', 'Pitt', 'Xavier', 'Penn St', 'Texas', 'Kansas', 'Ark', "St Marys", 'UConn', 'TCU', 'Gonzaga', 'NWest', 'UCLA'];
        var round_16 = ['Alabama', 'SDSU', 'Creigh', 'Prince', 'FAU', 'Tenn', 'K State', 'Mich St', 'Houston', 'Miami', 'Xavier', 'Texas', 'Ark', 'UConn', 'Gonzaga', 'UCLA'];
        var round_8 = ['SDSU', 'Creigh', 'FAU', 'K State', 'Miami', 'Texas', 'UConn', 'Gonzaga'];
        var round_4 = ['SDSU', 'FAU', 'Miami', 'UConn'];
        var round_2 = ['SDSU', 'UConn'];
        var round_1 = ['UConn'];
    }
    else if (study_year == 2022){
        document.getElementById("region_1").innerHTML = "West";
        document.getElementById("region_2").innerHTML = "East";
        document.getElementById("region_3").innerHTML = "South";
        document.getElementById("region_4").innerHTML = "Midwest";
        document.getElementById("bracket_score_text").innerHTML = "This Bracket Would Have Scored: ";
        document.getElementById("bracket_score_text_two").innerHTML = "Points";
        var team_stats = [{name:"Gonzaga",per:'-'}, 
        {name:"GA St",per:'-'}, 
        {name:"Boise St",per:'-'}, 
        {name:"Memphis",per:'-'}, 
        {name:"UConn",per:'-'}, 
        {name:"NM St",per:'-'}, 
        {name:"Ark",per:'-'}, 
        {name:"Vermont",per:'-'}, 
        {name:"Alabama",per:'-'}, 
        {name:"N Dame",per:'-'}, 
        {name:"TTU",per:'-'}, 
        {name:"Mont St",per:'-'}, 
        {name:"Mich St",per:'-'}, 
        {name:"Davids",per:'-'}, 
        {name:"Duke",per:'-'}, 
        {name:"CSUF",per:'-'}, 
        {name:"Baylor",per:'-'}, 
        {name:"Norf St",per:'-'}, 
        {name:"UNC",per:'-'}, 
        {name:"Marq",per:'-'}, 
        {name:"St Marys",per:'-'}, 
        {name:"Indiana",per:'-'}, 
        {name:"UCLA",per:'-'}, 
        {name:"Akron",per:'-'}, 
        {name:"Texas",per:'-'}, 
        {name:"VA Tech",per:'-'}, 
        {name:"Purdue",per:'-'}, 
        {name:"Yale",per:'-'}, 
        {name:"Murr St",per:'-'}, 
        {name:"USF",per:'-'}, 
        {name:"Kentucky",per:'-'}, 
        {name:"Peters",per:'-'}, 
        {name:"Arizona",per:'-'}, 
        {name:"Wright St",per:'-'}, 
        {name:"Seton H",per:'-'}, 
        {name:"TCU",per:'-'}, 
        {name:"Houston",per:'-'}, 
        {name:"UAB",per:'-'}, 
        {name:"Illinois",per:'-'}, 
        {name:"Chatta",per:'-'}, 
        {name:"Col St",per:'-'}, 
        {name:"Michigan",per:'-'}, 
        {name:"Tenn",per:'-'}, 
        {name:"Long",per:'-'}, 
        {name:"Ohio St",per:'-'}, 
        {name:"Loyola",per:'-'}, 
        {name:"Villa",per:'-'}, 
        {name:"Dela",per:'-'}, 
        {name:"Kansas",per:'-'}, 
        {name:"Texas S",per:'-'}, 
        {name:"SDSU",per:'-'}, 
        {name:"Creigh",per:'-'}, 
        {name:"Iowa",per:'-'}, 
        {name:"Rich",per:'-'}, 
        {name:"Prov",per:'-'}, 
        {name:"S Dak St",per:'-'}, 
        {name:"LSU",per:'-'}, 
        {name:"Iowa St",per:'-'}, 
        {name:"Wisc",per:'-'}, 
        {name:"Colgate",per:'-'}, 
        {name:"USC",per:'-'}, 
        {name:"Miami",per:'-'}, 
        {name:"Auburn",per:'-'}, 
        {name:"JVille St",per:'-'}, 
        {name:"Gonzaga",per:'100.0%'}, 
        {name:"Memphis",per:'55.28%'}, 
        {name:"UConn",per:'64.7%'}, 
        {name:"Ark",per:'59.12%'}, 
        {name:"N Dame",per:'61.66%'}, 
        {name:"TTU",per:'91.86%'}, 
        {name:"Davids",per:'94.74%'}, 
        {name:"Duke",per:'99.94%'}, 
        {name:"Baylor",per:'91.13%'}, 
        {name:"UNC",per:'99.37%'}, 
        {name:"St Marys",per:'95.67%'}, 
        {name:"UCLA",per:'98.57%'}, 
        {name:"Texas",per:'59.26%'}, 
        {name:"Purdue",per:'99.84%'}, 
        {name:"Murr St",per:'100.0%'}, 
        {name:"Kentucky",per:'99.67%'}, 
        {name:"Arizona",per:'100.0%'}, 
        {name:"Seton H",per:'96.52%'}, 
        {name:"Houston",per:'69.22%'}, 
        {name:"Illinois",per:'65.79%'}, 
        {name:"Col St",per:'96.6%'}, 
        {name:"Tenn",per:'61.11%'}, 
        {name:"Loyola",per:'96.87%'}, 
        {name:"Villa",per:'100.0%'}, 
        {name:"Kansas",per:'100.0%'}, 
        {name:"SDSU",per:'96.32%'}, 
        {name:"Iowa",per:'100.0%'}, 
        {name:"S Dak St",per:'82.1%'}, 
        {name:"LSU",per:'100.0%'}, 
        {name:"Wisc",per:'59.7%'}, 
        {name:"USC",per:'91.2%'}, 
        {name:"Auburn",per:'98.07%'}, 
        {name:"Gonzaga",per:'99.99%'}, 
        {name:"Ark",per:'49.49%'}, 
        {name:"TTU",per:'90.75%'}, 
        {name:"Duke",per:'93.54%'}, 
        {name:"Baylor",per:'82.04%'}, 
        {name:"UCLA",per:'95.04%'}, 
        {name:"Purdue",per:'97.08%'}, 
        {name:"Murr St",per:'69.15%'}, 
        {name:"Arizona",per:'100.0%'}, 
        {name:"Houston",per:'68.52%'}, 
        {name:"Tenn",per:'59.96%'}, 
        {name:"Villa",per:'69.39%'}, 
        {name:"Kansas",per:'98.94%'}, 
        {name:"S Dak St",per:'57.68%'}, 
        {name:"LSU",per:'82.14%'}, 
        {name:"Auburn",per:'97.94%'}, 
        {name:"Gonzaga",per:'99.95%'}, 
        {name:"Duke",per:'52.55%'}, 
        {name:"Baylor",per:'69.67%'}, 
        {name:"Murr St",per:'54.99%'}, 
        {name:"Arizona",per:'89.42%'}, 
        {name:"Villa",per:'36.31%'}, 
        {name:"Kansas",per:'55.77%'}, 
        {name:"Auburn",per:'75.09%'}, 
        {name:"Gonzaga",per:'99.84%'}, 
        {name:"Murr St",per:'48.61%'}, 
        {name:"Arizona",per:'87.23%'}, 
        {name:"Kansas",per:'38.12%'}, 
        {name:"Gonzaga",per:'98.72%'}, 
        {name:"Arizona",per:'77.49%'}, 
        {name:"Gonzaga",per:'96.18%'}, 
        ];
        var round_32 = ['Gonzaga', 'Memphis', 'NM St', 'Ark', 'N Dame', 'TTU', 'Mich St', 'Duke', 'Baylor', 'UNC', "St Marys", 'UCLA', 'Texas', 'Purdue', 'Murr St', "Peters", 'Arizona', 'TCU', 'Houston', 'Illinois', 'Michigan', 'Tenn', 'Ohio St', 'Villa', 'Kansas', 'Creigh', 'Rich', 'Prov', 'Iowa St', 'Wisc', 'Miami', 'Auburn'];
        var round_16 = ['Gonzaga', 'Ark', 'TTU', 'Duke', 'UNC', 'UCLA', 'Purdue', "Peters", 'Arizona', 'Houston', 'Michigan', 'Villa', 'Kansas', 'Prov', 'Iowa St', 'Miami'];
        var round_8 = ['Ark', 'Duke', 'UNC', "Peters", 'Houston', 'Villa', 'Kansas', 'Miami'];
        var round_4 = ['Duke', 'UNC', 'Villa', 'Kansas'];
        var round_2 = ['UNC', 'Kansas'];
        var round_1 = ['Kansas'];
    }
    else if (study_year == 2021){
        document.getElementById("region_1").innerHTML = "West";
        document.getElementById("region_2").innerHTML = "East";
        document.getElementById("region_3").innerHTML = "South";
        document.getElementById("region_4").innerHTML = "Midwest";
        document.getElementById("bracket_score_text").innerHTML = "This Bracket Would Have Scored: ";
        document.getElementById("bracket_score_text_two").innerHTML = "Points";
        var team_stats = [{name:"Gonzaga",per:'-'}, 
        {name:"Norf St",per:'-'}, 
        {name:"Okla",per:'-'}, 
        {name:"Missouri",per:'-'}, 
        {name:"Creigh",per:'-'}, 
        {name:"UCSB",per:'-'}, 
        {name:"Virginia",per:'-'}, 
        {name:"Ohio",per:'-'}, 
        {name:"USC",per:'-'}, 
        {name:"Drake",per:'-'}, 
        {name:"Kansas",per:'-'}, 
        {name:"E Wash",per:'-'}, 
        {name:"Oregon",per:'-'}, 
        {name:"VCU",per:'-'}, 
        {name:"Iowa",per:'-'}, 
        {name:"GCU",per:'-'}, 
        {name:"Michigan",per:'-'}, 
        {name:"Texas S",per:'-'}, 
        {name:"LSU",per:'-'}, 
        {name:"St Bon",per:'-'}, 
        {name:"Colorado",per:'-'}, 
        {name:"GT",per:'-'}, 
        {name:"Fl St",per:'-'}, 
        {name:"UNC G",per:'-'}, 
        {name:"BYU",per:'-'}, 
        {name:"UCLA",per:'-'}, 
        {name:"Texas",per:'-'}, 
        {name:"Ab Christ",per:'-'}, 
        {name:"UConn",per:'-'}, 
        {name:"MD",per:'-'}, 
        {name:"Alabama",per:'-'}, 
        {name:"Iona",per:'-'}, 
        {name:"Baylor",per:'-'}, 
        {name:"Hartford",per:'-'}, 
        {name:"UNC",per:'-'}, 
        {name:"Wisc",per:'-'}, 
        {name:"Villa",per:'-'}, 
        {name:"Winthrop",per:'-'}, 
        {name:"Purdue",per:'-'}, 
        {name:"N Texas",per:'-'}, 
        {name:"TTU",per:'-'}, 
        {name:"Utah St",per:'-'}, 
        {name:"Ark",per:'-'}, 
        {name:"Colgate",per:'-'}, 
        {name:"Florida",per:'-'}, 
        {name:"VA Tech",per:'-'}, 
        {name:"Ohio St",per:'-'}, 
        {name:"ORU",per:'-'}, 
        {name:"Illinois",per:'-'}, 
        {name:"Drexel",per:'-'}, 
        {name:"Loyola",per:'-'}, 
        {name:"GA Tech",per:'-'}, 
        {name:"Tenn",per:'-'}, 
        {name:"Or St",per:'-'}, 
        {name:"Ok St",per:'-'}, 
        {name:"Liberty",per:'-'}, 
        {name:"SDSU",per:'-'}, 
        {name:"Cuse",per:'-'}, 
        {name:"WVU",per:'-'}, 
        {name:"More St",per:'-'}, 
        {name:"Clemson",per:'-'}, 
        {name:"Rutgers",per:'-'}, 
        {name:"Houston",per:'-'}, 
        {name:"Cleve St",per:'-'}, 
        {name:"Gonzaga",per:'100.0%'}, 
        {name:"Okla",per:'90.31%'}, 
        {name:"UCSB",per:'98.14%'}, 
        {name:"Virginia",per:'81.37%'}, 
        {name:"USC",per:'72.31%'}, 
        {name:"E Wash",per:'51.51%'}, 
        {name:"VCU",per:'59.38%'}, 
        {name:"Iowa",per:'74.31%'}, 
        {name:"Michigan",per:'99.38%'}, 
        {name:"LSU",per:'72.56%'}, 
        {name:"Colorado",per:'100.0%'}, 
        {name:"Fl St",per:'98.24%'}, 
        {name:"BYU",per:'98.23%'}, 
        {name:"Ab Christ",per:'79.38%'}, 
        {name:"UConn",per:'79.2%'}, 
        {name:"Alabama",per:'99.89%'}, 
        {name:"Baylor",per:'99.97%'}, 
        {name:"UNC",per:'51.62%'}, 
        {name:"Winthrop",per:'76.47%'}, 
        {name:"Purdue",per:'67.2%'}, 
        {name:"Utah St",per:'62.56%'}, 
        {name:"Colgate",per:'90.73%'}, 
        {name:"Florida",per:'69.4%'}, 
        {name:"Ohio St",per:'86.94%'}, 
        {name:"Illinois",per:'100.0%'}, 
        {name:"Loyola",per:'100.0%'}, 
        {name:"Tenn",per:'99.6%'}, 
        {name:"Liberty",per:'80.88%'}, 
        {name:"SDSU",per:'99.27%'}, 
        {name:"WVU",per:'82.96%'}, 
        {name:"Clemson",per:'90.95%'}, 
        {name:"Houston",per:'100.0%'}, 
        {name:"Gonzaga",per:'100.0%'}, 
        {name:"UCSB",per:'90.6%'}, 
        {name:"USC",per:'61.45%'}, 
        {name:"Iowa",per:'73.17%'}, 
        {name:"Michigan",per:'97.29%'}, 
        {name:"Colorado",per:'83.14%'}, 
        {name:"Ab Christ",per:'58.4%'}, 
        {name:"Alabama",per:'99.74%'}, 
        {name:"Baylor",per:'99.75%'}, 
        {name:"Winthrop",per:'76.19%'}, 
        {name:"Colgate",per:'89.62%'}, 
        {name:"Ohio St",per:'73.43%'}, 
        {name:"Illinois",per:'68.75%'}, 
        {name:"Liberty",per:'70.11%'}, 
        {name:"SDSU",per:'86.75%'}, 
        {name:"Houston",per:'99.99%'}, 
        {name:"Gonzaga",per:'100.0%'}, 
        {name:"Iowa",per:'67.42%'}, 
        {name:"Michigan",per:'93.57%'}, 
        {name:"Alabama",per:'57.67%'}, 
        {name:"Baylor",per:'91.31%'}, 
        {name:"Colgate",per:'89.39%'}, 
        {name:"Illinois",per:'65.26%'}, 
        {name:"Houston",per:'93.16%'}, 
        {name:"Gonzaga",per:'99.98%'}, 
        {name:"Michigan",per:'72.6%'}, 
        {name:"Colgate",per:'56.83%'}, 
        {name:"Houston",per:'51.86%'}, 
        {name:"Gonzaga",per:'99.03%'}, 
        {name:"Colgate",per:'33.02%'}, 
        {name:"Gonzaga",per:'86.55%'}, 
        ];
        var round_32 = ['Gonzaga', 'Okla', 'Creigh', 'Ohio', 'USC', 'Kansas', 'Oregon', 'Iowa', 'Michigan', 'LSU', 'Colorado', 'Fl St', 'UCLA', 'Ab Christ', 'MD', 'Alabama', 'Baylor', 'Wisc', 'Villa', 'N Texas', 'TTU', 'Ark', 'Florida', 'ORU', 'Illinois', 'Loyola', 'Or St', 'Ok St', 'Cuse', 'WVU', 'Rutgers', 'Houston'];
        var round_16 = ['Gonzaga', 'Creigh', 'USC', 'Oregon', 'Michigan', 'Fl St', 'UCLA', 'Alabama', 'Baylor', 'Villa', 'Ark', 'ORU', 'Loyola', 'Or St', 'Cuse', 'Houston'];
        var round_8 = ['Gonzaga', 'USC', 'Michigan', 'UCLA', 'Baylor', 'Ark', 'Or St', 'Houston'];
        var round_4 = ['Gonzaga', 'UCLA', 'Baylor', 'Houston'];
        var round_2 = ['Gonzaga', 'Baylor'];
        var round_1 = ['Baylor'];
    }
    else if (study_year == current_year || study_year == "Year"){
        document.getElementById("region_1").innerHTML = "East";
        document.getElementById("region_2").innerHTML = "West";
        document.getElementById("region_3").innerHTML = "South";
        document.getElementById("region_4").innerHTML = "Midwest";
        document.getElementById("bracket_score_text").innerHTML = ""
        document.getElementById("bracket_score_text_two").innerHTML = ""
        var team_stats = [{name:"UConn",per:'-'}, 
        {name:"Stets",per:'-'}, 
        {name:"FAU",per:'-'}, 
        {name:"NWest",per:'-'}, 
        {name:"SDSU",per:'-'}, 
        {name:"UAB",per:'-'}, 
        {name:"Auburn",per:'-'}, 
        {name:"Yale",per:'-'}, 
        {name:"BYU",per:'-'}, 
        {name:"Duq",per:'-'}, 
        {name:"Illinois",per:'-'}, 
        {name:"More St",per:'-'}, 
        {name:"Wash St",per:'-'}, 
        {name:"Drake",per:'-'}, 
        {name:"Iowa St",per:'-'}, 
        {name:"S Dak St",per:'-'}, 
        {name:"UNC",per:'-'}, 
        {name:"Howard",per:'-'}, 
        {name:"Miss St",per:'-'}, 
        {name:"Mich St",per:'-'}, 
        {name:"St Marys",per:'-'}, 
        {name:"GCU",per:'-'}, 
        {name:"Alabama",per:'-'}, 
        {name:"Charles",per:'-'}, 
        {name:"Clemson",per:'-'}, 
        {name:"N Mex",per:'-'}, 
        {name:"Baylor",per:'-'}, 
        {name:"Colgate",per:'-'}, 
        {name:"Dayton",per:'-'}, 
        {name:"Nevada",per:'-'}, 
        {name:"Arizona",per:'-'}, 
        {name:"LB St",per:'-'}, 
        {name:"Houston",per:'-'}, 
        {name:"Long",per:'-'}, 
        {name:"Neb",per:'-'}, 
        {name:"Texas AM",per:'-'}, 
        {name:"Wisc",per:'-'}, 
        {name:"JMU",per:'-'}, 
        {name:"Duke",per:'-'}, 
        {name:"Vermont",per:'-'}, 
        {name:"TTU",per:'-'}, 
        {name:"NC St",per:'-'}, 
        {name:"Kentucky",per:'-'}, 
        {name:"Oakland",per:'-'}, 
        {name:"Florida",per:'-'}, 
        {name:"Colorado",per:'-'}, 
        {name:"Marq",per:'-'}, 
        {name:"W Kent",per:'-'}, 
        {name:"Purdue",per:'-'}, 
        {name:"Mont St",per:'-'}, 
        {name:"Utah St",per:'-'}, 
        {name:"TCU",per:'-'}, 
        {name:"Gonzaga",per:'-'}, 
        {name:"McN",per:'-'}, 
        {name:"Kansas",per:'-'}, 
        {name:"Samford",per:'-'}, 
        {name:"S Car",per:'-'}, 
        {name:"Oregon",per:'-'}, 
        {name:"Creigh",per:'-'}, 
        {name:"Akron",per:'-'}, 
        {name:"Texas",per:'-'}, 
        {name:"Col St",per:'-'}, 
        {name:"Tenn",per:'-'}, 
        {name:"Peters",per:'-'}, 
        {name:"UConn",per:'100.0%'}, 
        {name:"FAU",per:'99.28%'}, 
        {name:"SDSU",per:'99.78%'}, 
        {name:"Auburn",per:'99.47%'}, 
        {name:"BYU",per:'100.0%'}, 
        {name:"Illinois",per:'75.04%'}, 
        {name:"Drake",per:'94.66%'}, 
        {name:"Iowa St",per:'99.0%'}, 
        {name:"UNC",per:'100.0%'}, 
        {name:"Miss St",per:'74.38%'}, 
        {name:"St Marys",per:'70.6%'}, 
        {name:"Alabama",per:'97.83%'}, 
        {name:"N Mex",per:'77.24%'}, 
        {name:"Baylor",per:'89.95%'}, 
        {name:"Dayton",per:'65.73%'}, 
        {name:"Arizona",per:'100.0%'}, 
        {name:"Houston",per:'97.71%'}, 
        {name:"Neb",per:'95.61%'}, 
        {name:"JMU",per:'99.24%'}, 
        {name:"Duke",per:'97.39%'}, 
        {name:"TTU",per:'99.93%'}, 
        {name:"Kentucky",per:'99.99%'}, 
        {name:"Colorado",per:'87.26%'}, 
        {name:"Marq",per:'53.91%'}, 
        {name:"Purdue",per:'100.0%'}, 
        {name:"Utah St",per:'96.99%'}, 
        {name:"McN",per:'52.8%'}, 
        {name:"Samford",per:'63.31%'}, 
        {name:"S Car",per:'88.67%'}, 
        {name:"Creigh",per:'98.44%'}, 
        {name:"Col St",per:'82.34%'}, 
        {name:"Tenn",per:'100.0%'}, 
        {name:"UConn",per:'100.0%'}, 
        {name:"Auburn",per:'99.33%'}, 
        {name:"Illinois",per:'66.27%'}, 
        {name:"Iowa St",per:'64.81%'}, 
        {name:"UNC",per:'100.0%'}, 
        {name:"St Marys",per:'54.5%'}, 
        {name:"Baylor",per:'54.27%'}, 
        {name:"Arizona",per:'99.64%'}, 
        {name:"Houston",per:'88.17%'}, 
        {name:"JMU",per:'72.96%'}, 
        {name:"Kentucky",per:'97.79%'}, 
        {name:"Colorado",per:'82.43%'}, 
        {name:"Purdue",per:'99.92%'}, 
        {name:"McN",per:'52.55%'}, 
        {name:"Creigh",per:'98.43%'}, 
        {name:"Tenn",per:'99.89%'}, 
        {name:"UConn",per:'79.84%'}, 
        {name:"Illinois",per:'39.57%'}, 
        {name:"UNC",per:'75.02%'}, 
        {name:"Arizona",per:'99.46%'}, 
        {name:"JMU",per:'49.9%'}, 
        {name:"Kentucky",per:'66.27%'}, 
        {name:"Purdue",per:'89.29%'}, 
        {name:"Creigh",per:'60.23%'}, 
        {name:"UConn",per:'74.62%'}, 
        {name:"Arizona",per:'77.43%'}, 
        {name:"JMU",per:'31.78%'}, 
        {name:"Purdue",per:'84.74%'}, 
        {name:"Arizona",per:'59.92%'}, 
        {name:"Purdue",per:'78.73%'}, 
        {name:"Purdue",per:'47.3%'}, 
        ];
        var round_32 = [];
        var round_16 = [];
        var round_8 = [];
        var round_4 = [];
        var round_2 = [];
        var round_1 = [];
    }
    let team_data = [];
    let orig_team_id = "team_";
    let bracket_score = 0;
    for (let j = 0, len = team_stats.length; j < len; j++) {
        orig_team_id = "team_" + j;
        if (j < 64){
            document.getElementById(orig_team_id).innerHTML = team_stats[j].name;
        }


        else if (63 < j && j < 80){ //round of 32
            document.getElementById(orig_team_id).innerHTML = team_stats[j].name + " (" + team_stats[j].per + ")";
            if (study_year == current_year || study_year == "Year") {
                document.getElementById(orig_team_id).style.color = "black";
            }
            else if (round_32.includes(team_stats[j].name)){
                document.getElementById(orig_team_id).style.color = "rgb(0, 187, 90)";
                ++bracket_score;
            }
            else {
                document.getElementById(orig_team_id).style.color = "red";
            }
        }
        else if (79 < j && j < 96){ //round of 32
            document.getElementById(orig_team_id).innerHTML = "(" + team_stats[j].per + ") " + team_stats[j].name;
            if (study_year == current_year || study_year == "Year") {
                document.getElementById(orig_team_id).style.color = "black";
            }
            else if (round_32.includes(team_stats[j].name)){
                document.getElementById(orig_team_id).style.color = "rgb(0, 187, 90)";
                ++bracket_score;
            }
            else {
                document.getElementById(orig_team_id).style.color = "red";
            }
        }


        else if (95 < j && j < 104){ //sweet sixteen
            document.getElementById(orig_team_id).innerHTML = team_stats[j].name + " (" + team_stats[j].per + ")";
            if (study_year == current_year || study_year == "Year") {
                document.getElementById(orig_team_id).style.color = "black";
            }
            else if (round_16.includes(team_stats[j].name)){
                document.getElementById(orig_team_id).style.color = "rgb(0, 187, 90)";
                bracket_score = bracket_score + 2;
            }
            else {
                document.getElementById(orig_team_id).style.color = "red";
            }
        }
        else if (103 < j && j < 112){ //sweet sixteen
            document.getElementById(orig_team_id).innerHTML = "(" + team_stats[j].per + ") " + team_stats[j].name;
            if (study_year == current_year || study_year == "Year") {
                document.getElementById(orig_team_id).style.color = "black";
            }
            else if (round_16.includes(team_stats[j].name)){
                document.getElementById(orig_team_id).style.color = "rgb(0, 187, 90)";
                bracket_score = bracket_score + 2;
            }
            else {
                document.getElementById(orig_team_id).style.color = "red";
            }
        }


        else if (111 < j && j < 116){ //elite eight
            document.getElementById(orig_team_id).innerHTML = team_stats[j].name + " (" + team_stats[j].per + ")";
            if (study_year == current_year || study_year == "Year") {
                document.getElementById(orig_team_id).style.color = "black";
            }
            else if (round_8.includes(team_stats[j].name)){
                document.getElementById(orig_team_id).style.color = "rgb(0, 187, 90)";
                bracket_score = bracket_score + 4;
            }
            else {
                document.getElementById(orig_team_id).style.color = "red";
            }
        }
        else if (115 < j && j < 120){ //elite eight
            document.getElementById(orig_team_id).innerHTML = "(" + team_stats[j].per + ") " + team_stats[j].name;
            if (study_year == current_year || study_year == "Year") {
                document.getElementById(orig_team_id).style.color = "black";
            }
            else if (round_8.includes(team_stats[j].name)){
                document.getElementById(orig_team_id).style.color = "rgb(0, 187, 90)";
                bracket_score = bracket_score + 4;
            }
            else {
                document.getElementById(orig_team_id).style.color = "red";
            }
        }

        
        else if (119 < j && j < 122){ //final four
            document.getElementById(orig_team_id).innerHTML = team_stats[j].name + " (" + team_stats[j].per + ")";
            if (study_year == current_year || study_year == "Year") {
                document.getElementById(orig_team_id).style.color = "black";
            }
            else if (round_4.includes(team_stats[j].name)){
                document.getElementById(orig_team_id).style.color = "rgb(0, 187, 90)";
                bracket_score = bracket_score + 8;
            }
            else {
                document.getElementById(orig_team_id).style.color = "red";
            }
        }
        else if (121 < j && j < 124){ //final four
            document.getElementById(orig_team_id).innerHTML = "(" + team_stats[j].per + ") " + team_stats[j].name;
            if (study_year == current_year || study_year == "Year") {
                document.getElementById(orig_team_id).style.color = "black";
            }
            else if (round_4.includes(team_stats[j].name)){
                document.getElementById(orig_team_id).style.color = "rgb(0, 187, 90)";
                bracket_score = bracket_score + 8;
            }
            else {
                document.getElementById(orig_team_id).style.color = "red";
            }
        }


        else if (j == 124){ //championship
            document.getElementById(orig_team_id).innerHTML = team_stats[j].name + " (" + team_stats[j].per + ")";
            if (study_year == current_year || study_year == "Year") {
                document.getElementById(orig_team_id).style.color = "black";
            }
            else if (round_2.includes(team_stats[j].name)){
                document.getElementById(orig_team_id).style.color = "rgb(0, 187, 90)";
                bracket_score = bracket_score + 16;
            }
            else {
                document.getElementById(orig_team_id).style.color = "red";
            }
        }
        else if (j == 125){ //championship
            document.getElementById(orig_team_id).innerHTML = "(" + team_stats[j].per + ") " + team_stats[j].name;
            if (study_year == current_year || study_year == "Year") {
                document.getElementById(orig_team_id).style.color = "black";
            }
            else if (round_2.includes(team_stats[j].name)){
                document.getElementById(orig_team_id).style.color = "rgb(0, 187, 90)";
                bracket_score = bracket_score + 16;
            }
            else {
                document.getElementById(orig_team_id).style.color = "red";
            }
        }


        else if (j == 126){ //champion
            document.getElementById(orig_team_id).innerHTML = team_stats[j].name + " (" + team_stats[j].per + ")";
            if (study_year == current_year || study_year == "Year") {
                document.getElementById(orig_team_id).style.color = "black";
            }
            else if (round_1.includes(team_stats[j].name)){
                document.getElementById(orig_team_id).style.color = "rgb(0, 187, 90)";
                bracket_score = bracket_score + 32;
            }
            else {
                document.getElementById(orig_team_id).style.color = "red";
            }
        }
    }
    if (study_year != current_year && study_year != "Year") {
        document.getElementById("bracket_score").innerHTML = bracket_score*10;
    }
    else {
        document.getElementById("bracket_score").innerHTML = "";
    }
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}