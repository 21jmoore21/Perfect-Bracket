function change_year(year){
    document.getElementById("yearofstudy").innerHTML = year;
    if (year == "Year") {
        document.getElementById('national_champ').innerHTML = "2024 Men's";
    }
    else if (year == 2023){
        document.getElementById('national_champ').innerHTML = "2023 Men's";
    }
    else if (year == 2022){
        document.getElementById('national_champ').innerHTML = "2022 Men's";
    }
    else if (year == 2021){
        document.getElementById('national_champ').innerHTML = "2021 Men's";
    }
    else if (year == 2024){
        document.getElementById('national_champ').innerHTML = "2024 Men's";
    }
}

function print_year() {
    year = document.getElementById('yearofstudy').innerHTML;
    console.log(year)
    if (year == "Year") {
        document.getElementById('national_champ').innerHTML = "2024 Men's";
    }
    else {
        document.getElementById('national_champ').innerHTML = year + " Men's";
    }
    
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
        {name:"Alabama",per:'97.53%'}, 
        {name:"WVU",per:'55.71%'}, 
        {name:"Charles",per:'88.31%'}, 
        {name:"Furman",per:'67.94%'}, 
        {name:"Creigh",per:'94.47%'}, 
        {name:"Baylor",per:'99.2%'}, 
        {name:"Utah St",per:'96.58%'}, 
        {name:"Arizona",per:'100.0%'}, 
        {name:"Purdue",per:'99.77%'}, 
        {name:"FAU",per:'88.02%'}, 
        {name:"ORU",per:'73.33%'}, 
        {name:"Tenn",per:'92.81%'}, 
        {name:"Kentucky",per:'58.13%'}, 
        {name:"K State",per:'79.62%'}, 
        {name:"Mich St",per:'87.48%'}, 
        {name:"Marq",per:'98.26%'}, 
        {name:"Houston",per:'100.0%'}, 
        {name:"Iowa",per:'84.44%'}, 
        {name:"Drake",per:'53.22%'}, 
        {name:"Kent St",per:'61.14%'}, 
        {name:"Pitt",per:'89.69%'}, 
        {name:"Xavier",per:'99.24%'}, 
        {name:"Texas AM",per:'75.72%'}, 
        {name:"Texas",per:'82.34%'}, 
        {name:"Kansas",per:'99.6%'}, 
        {name:"Ark",per:'69.42%'}, 
        {name:"St Marys",per:'90.45%'}, 
        {name:"UConn",per:'98.89%'}, 
        {name:"TCU",per:'100.0%'}, 
        {name:"Gonzaga",per:'99.77%'}, 
        {name:"Boise St",per:'98.55%'}, 
        {name:"UCLA",per:'94.78%'}, 
        {name:"Alabama",per:'97.53%'}, 
        {name:"Charles",per:'84.69%'}, 
        {name:"Creigh",per:'67.9%'}, 
        {name:"Arizona",per:'98.94%'}, 
        {name:"Purdue",per:'67.65%'}, 
        {name:"Tenn",per:'49.01%'}, 
        {name:"K State",per:'48.13%'}, 
        {name:"Marq",per:'77.6%'}, 
        {name:"Houston",per:'98.93%'}, 
        {name:"Drake",per:'52.3%'}, 
        {name:"Xavier",per:'95.59%'}, 
        {name:"Texas",per:'77.35%'}, 
        {name:"Kansas",per:'98.72%'}, 
        {name:"UConn",per:'96.61%'}, 
        {name:"Gonzaga",per:'98.83%'}, 
        {name:"UCLA",per:'94.7%'}, 
        {name:"Alabama",per:'84.25%'}, 
        {name:"Arizona",per:'92.21%'}, 
        {name:"Purdue",per:'36.88%'}, 
        {name:"Marq",per:'34.54%'}, 
        {name:"Houston",per:'88.09%'}, 
        {name:"Texas",per:'57.57%'}, 
        {name:"UConn",per:'96.12%'}, 
        {name:"Gonzaga",per:'62.97%'}, 
        {name:"Alabama",per:'55.4%'}, 
        {name:"Purdue",per:'36.72%'}, 
        {name:"Houston",per:'85.7%'}, 
        {name:"Gonzaga",per:'44.04%'}, 
        {name:"Alabama",per:'39.93%'}, 
        {name:"Houston",per:'54.07%'}, 
        {name:"Houston",per:'39.13%'}, 
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
        {name:"Memphis",per:'55.78%'}, 
        {name:"UConn",per:'64.79%'}, 
        {name:"Ark",per:'58.52%'}, 
        {name:"N Dame",per:'61.65%'}, 
        {name:"TTU",per:'92.25%'}, 
        {name:"Davids",per:'94.75%'}, 
        {name:"Duke",per:'99.94%'}, 
        {name:"Baylor",per:'91.09%'}, 
        {name:"UNC",per:'99.48%'}, 
        {name:"St Marys",per:'96.07%'}, 
        {name:"UCLA",per:'98.6%'}, 
        {name:"Texas",per:'58.9%'}, 
        {name:"Purdue",per:'99.83%'}, 
        {name:"Murr St",per:'99.99%'}, 
        {name:"Kentucky",per:'99.66%'}, 
        {name:"Arizona",per:'100.0%'}, 
        {name:"Seton H",per:'96.59%'}, 
        {name:"Houston",per:'69.8%'}, 
        {name:"Illinois",per:'65.67%'}, 
        {name:"Col St",per:'96.98%'}, 
        {name:"Tenn",per:'60.94%'}, 
        {name:"Loyola",per:'96.8%'}, 
        {name:"Villa",per:'99.99%'}, 
        {name:"Kansas",per:'100.0%'}, 
        {name:"SDSU",per:'96.4%'}, 
        {name:"Iowa",per:'100.0%'}, 
        {name:"S Dak St",per:'81.68%'}, 
        {name:"LSU",per:'100.0%'}, 
        {name:"Wisc",per:'59.26%'}, 
        {name:"USC",per:'91.6%'}, 
        {name:"Auburn",per:'98.25%'}, 
        {name:"Gonzaga",per:'99.99%'}, 
        {name:"Ark",per:'48.29%'}, 
        {name:"TTU",per:'91.08%'}, 
        {name:"Duke",per:'93.65%'}, 
        {name:"Baylor",per:'81.84%'}, 
        {name:"UCLA",per:'95.2%'}, 
        {name:"Purdue",per:'97.2%'}, 
        {name:"Murr St",per:'69.48%'}, 
        {name:"Arizona",per:'100.0%'}, 
        {name:"Houston",per:'69.14%'}, 
        {name:"Tenn",per:'59.84%'}, 
        {name:"Villa",per:'69.37%'}, 
        {name:"Kansas",per:'98.66%'}, 
        {name:"S Dak St",per:'57.36%'}, 
        {name:"LSU",per:'82.1%'}, 
        {name:"Auburn",per:'98.11%'}, 
        {name:"Gonzaga",per:'99.95%'}, 
        {name:"Duke",per:'52.9%'}, 
        {name:"Baylor",per:'70.56%'}, 
        {name:"Murr St",per:'55.49%'}, 
        {name:"Arizona",per:'89.06%'}, 
        {name:"Villa",per:'36.24%'}, 
        {name:"Kansas",per:'56.13%'}, 
        {name:"Auburn",per:'74.52%'}, 
        {name:"Gonzaga",per:'99.74%'}, 
        {name:"Murr St",per:'49.13%'}, 
        {name:"Arizona",per:'86.83%'}, 
        {name:"Kansas",per:'39.72%'}, 
        {name:"Gonzaga",per:'98.53%'}, 
        {name:"Arizona",per:'77.6%'}, 
        {name:"Gonzaga",per:'95.87%'}, 
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
        {name:"Okla",per:'90.24%'}, 
        {name:"UCSB",per:'98.21%'}, 
        {name:"Virginia",per:'81.46%'}, 
        {name:"USC",per:'72.47%'}, 
        {name:"E Wash",per:'50.81%'}, 
        {name:"VCU",per:'59.56%'}, 
        {name:"Iowa",per:'73.82%'}, 
        {name:"Michigan",per:'99.45%'}, 
        {name:"LSU",per:'72.57%'}, 
        {name:"Colorado",per:'100.0%'}, 
        {name:"Fl St",per:'98.12%'}, 
        {name:"BYU",per:'98.26%'}, 
        {name:"Ab Christ",per:'78.86%'}, 
        {name:"UConn",per:'79.66%'}, 
        {name:"Alabama",per:'99.89%'}, 
        {name:"Baylor",per:'100.0%'}, 
        {name:"UNC",per:'52.91%'}, 
        {name:"Winthrop",per:'77.19%'}, 
        {name:"Purdue",per:'68.77%'}, 
        {name:"Utah St",per:'63.0%'}, 
        {name:"Colgate",per:'90.14%'}, 
        {name:"Florida",per:'69.12%'}, 
        {name:"Ohio St",per:'86.66%'}, 
        {name:"Illinois",per:'99.99%'}, 
        {name:"Loyola",per:'100.0%'}, 
        {name:"Tenn",per:'99.64%'}, 
        {name:"Liberty",per:'80.53%'}, 
        {name:"SDSU",per:'99.18%'}, 
        {name:"WVU",per:'83.65%'}, 
        {name:"Clemson",per:'90.63%'}, 
        {name:"Houston",per:'100.0%'}, 
        {name:"Gonzaga",per:'100.0%'}, 
        {name:"UCSB",per:'90.97%'}, 
        {name:"USC",per:'61.44%'}, 
        {name:"Iowa",per:'72.84%'}, 
        {name:"Michigan",per:'97.01%'}, 
        {name:"Colorado",per:'82.83%'}, 
        {name:"Ab Christ",per:'58.28%'}, 
        {name:"Alabama",per:'99.75%'}, 
        {name:"Baylor",per:'99.66%'}, 
        {name:"Winthrop",per:'76.97%'}, 
        {name:"Colgate",per:'89.01%'}, 
        {name:"Ohio St",per:'73.04%'}, 
        {name:"Illinois",per:'68.85%'}, 
        {name:"Liberty",per:'69.65%'}, 
        {name:"SDSU",per:'85.98%'}, 
        {name:"Houston",per:'99.99%'}, 
        {name:"Gonzaga",per:'100.0%'}, 
        {name:"Iowa",per:'66.37%'}, 
        {name:"Michigan",per:'93.78%'}, 
        {name:"Alabama",per:'56.99%'}, 
        {name:"Baylor",per:'91.1%'}, 
        {name:"Colgate",per:'88.71%'}, 
        {name:"Illinois",per:'65.72%'}, 
        {name:"Houston",per:'92.81%'}, 
        {name:"Gonzaga",per:'99.97%'}, 
        {name:"Michigan",per:'72.49%'}, 
        {name:"Colgate",per:'56.17%'}, 
        {name:"Houston",per:'52.19%'}, 
        {name:"Gonzaga",per:'99.15%'}, 
        {name:"Colgate",per:'32.73%'}, 
        {name:"Gonzaga",per:'86.52%'}, 
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
        if (study_year == "Year"){
            document.getElementById("bracket_score_text").innerHTML = "";
            document.getElementById("bracket_score_text_two").innerHTML = "";
        }
        else if (study_year == current_year){
            document.getElementById("bracket_score_text").innerHTML = "This Bracket Would Have Scored: ";
            document.getElementById("bracket_score_text_two").innerHTML = "Points";            
        }
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
        {name:"Wagner",per:'-'}, 
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
        {name:"Gramb",per:'-'}, 
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
        {name:"FAU",per:'98.98%'}, 
        {name:"SDSU",per:'99.76%'}, 
        {name:"Auburn",per:'99.53%'}, 
        {name:"BYU",per:'99.99%'}, 
        {name:"Illinois",per:'76.4%'}, 
        {name:"Drake",per:'93.64%'}, 
        {name:"Iowa St",per:'99.15%'}, 
        {name:"UNC",per:'100.0%'}, 
        {name:"Miss St",per:'67.74%'}, 
        {name:"St Marys",per:'75.78%'}, 
        {name:"Alabama",per:'97.45%'}, 
        {name:"N Mex",per:'80.8%'}, 
        {name:"Baylor",per:'90.12%'}, 
        {name:"Dayton",per:'62.08%'}, 
        {name:"Arizona",per:'100.0%'}, 
        {name:"Houston",per:'98.46%'}, 
        {name:"Neb",per:'92.02%'}, 
        {name:"JMU",per:'99.4%'}, 
        {name:"Duke",per:'97.6%'}, 
        {name:"TTU",per:'99.76%'}, 
        {name:"Kentucky",per:'100.0%'}, 
        {name:"Colorado",per:'85.44%'}, 
        {name:"Marq",per:'59.0%'}, 
        {name:"Purdue",per:'100.0%'}, 
        {name:"Utah St",per:'96.76%'}, 
        {name:"McN",per:'52.69%'}, 
        {name:"Samford",per:'63.21%'}, 
        {name:"S Car",per:'89.97%'}, 
        {name:"Creigh",per:'98.63%'}, 
        {name:"Col St",per:'82.52%'}, 
        {name:"Tenn",per:'100.0%'}, 
        {name:"UConn",per:'100.0%'}, 
        {name:"Auburn",per:'99.45%'}, 
        {name:"Illinois",per:'66.72%'}, 
        {name:"Iowa St",per:'66.36%'}, 
        {name:"UNC",per:'100.0%'}, 
        {name:"St Marys",per:'59.15%'}, 
        {name:"Baylor",per:'48.5%'}, 
        {name:"Arizona",per:'99.64%'}, 
        {name:"Houston",per:'91.62%'}, 
        {name:"JMU",per:'72.67%'}, 
        {name:"Kentucky",per:'98.34%'}, 
        {name:"Colorado",per:'79.24%'}, 
        {name:"Purdue",per:'99.94%'}, 
        {name:"McN",per:'52.6%'}, 
        {name:"Creigh",per:'98.6%'}, 
        {name:"Tenn",per:'99.98%'}, 
        {name:"UConn",per:'78.64%'}, 
        {name:"Illinois",per:'41.27%'}, 
        {name:"UNC",per:'75.41%'}, 
        {name:"Arizona",per:'99.41%'}, 
        {name:"JMU",per:'45.86%'}, 
        {name:"Kentucky",per:'70.76%'}, 
        {name:"Purdue",per:'86.85%'}, 
        {name:"Creigh",per:'56.03%'}, 
        {name:"UConn",per:'74.94%'}, 
        {name:"Arizona",per:'73.63%'}, 
        {name:"JMU",per:'30.29%'}, 
        {name:"Purdue",per:'82.94%'}, 
        {name:"Arizona",per:'54.84%'}, 
        {name:"Purdue",per:'76.66%'}, 
        {name:"Purdue",per:'45.36%'}, 
        ];
        var round_32 = ["UConn","NWest","SDSU","Yale","Duq","Illinois","Wash St","Iowa St","UNC","Mich St","GCU","Alabama","Clemson","Baylor","Dayton","Arizona","Houston","Texas AM","JMU","Duke","NC St","Oakland","Colorado","Marq","Purdue","Utah St","Gonzaga","Kansas","Oregon","Creigh","Texas","Tenn"];
        var round_16 = ["UConn","SDSU","Illinois","Iowa St","UNC","Alabama","Clemson","Arizona","Houston","Duke","NC St","Marq","Purdue","Gonzaga","Creigh","Tenn"];
        var round_8 = ["UConn","Illinois","Alabama","Clemson","Duke","NC St","Purdue","Tenn"];
        var round_4 = ["UConn","Alabama","NC St","Purdue"];
        var round_2 = ["UConn","Purdue"];
        var round_1 = ["UConn"];
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
            if (study_year == "Year") {
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
            if (study_year == "Year") {
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
            if (study_year == "Year") {
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
            if (study_year == "Year") {
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
            if (study_year == "Year") {
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
            if (study_year == "Year") {
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
            if (study_year == "Year") {
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
            if (study_year == "Year") {
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
            if (study_year == "Year") {
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
            if (study_year == "Year") {
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
            if (study_year == "Year") {
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
    if (study_year != "Year") {
        document.getElementById("bracket_score").innerHTML = bracket_score*10;
    }
    else {
        document.getElementById("bracket_score").innerHTML = "";
    }
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}