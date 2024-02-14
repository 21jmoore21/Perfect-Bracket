function change_year(year){
    document.getElementById("yearofstudy").innerHTML = year;
}

function find_winner(){
    
    let current_year = 2024;
    let study_year = document.getElementById("yearofstudy").innerHTML;
    if (study_year == 2023){
        document.getElementById("region_1").innerHTML = "Green.";
        document.getElementById("region_2").innerHTML = "Seattle";
        document.getElementById("region_3").innerHTML = "Green.";
        document.getElementById("region_4").innerHTML = "Seattle";
        document.getElementById("bracket_score_text").innerHTML = "This Bracket Would Have Scored: ";
        document.getElementById("bracket_score_text_two").innerHTML = "Points";
        var team_stats = [{name:"S Car",per:'-'}, 
        {name:"Norf St",per:'-'}, 
        {name:"USF",per:'-'}, 
        {name:"Marq",per:'-'}, 
        {name:"Okla",per:'-'}, 
        {name:"Portland",per:'-'}, 
        {name:"UCLA",per:'-'}, 
        {name:"Sac St",per:'-'}, 
        {name:"Creigh",per:'-'}, 
        {name:"Miss St",per:'-'}, 
        {name:"N Dame",per:'-'}, 
        {name:"S Utah",per:'-'}, 
        {name:"Arizona",per:'-'}, 
        {name:"WVU",per:'-'}, 
        {name:"MD",per:'-'}, 
        {name:"H Cross",per:'-'}, 
        {name:"Stanford",per:'-'}, 
        {name:"S Heart",per:'-'}, 
        {name:"Ole Miss",per:'-'}, 
        {name:"Gonzaga",per:'-'}, 
        {name:"Louis",per:'-'}, 
        {name:"Drake",per:'-'}, 
        {name:"Texas",per:'-'}, 
        {name:"E Car",per:'-'}, 
        {name:"Colorado",per:'-'}, 
        {name:"Mid Tenn",per:'-'}, 
        {name:"Duke",per:'-'}, 
        {name:"Iona",per:'-'}, 
        {name:"Florida St",per:'-'}, 
        {name:"Georgia",per:'-'}, 
        {name:"Iowa",per:'-'}, 
        {name:"SE LA",per:'-'}, 
        {name:"Indiana",per:'-'}, 
        {name:"Tenn T",per:'-'}, 
        {name:"Okla St",per:'-'}, 
        {name:"Miami",per:'-'}, 
        {name:"Wash St",per:'-'}, 
        {name:"FGCU",per:'-'}, 
        {name:"Villa",per:'-'}, 
        {name:"Cleve St",per:'-'}, 
        {name:"Michigan",per:'-'}, 
        {name:"UNLV",per:'-'}, 
        {name:"LSU",per:'-'}, 
        {name:"Hawaii",per:'-'}, 
        {name:"NC St",per:'-'}, 
        {name:"Prince",per:'-'}, 
        {name:"Utah",per:'-'}, 
        {name:"G Webb",per:'-'}, 
        {name:"VA Tech",per:'-'}, 
        {name:"Chatta",per:'-'}, 
        {name:"USC",per:'-'}, 
        {name:"S Dak St",per:'-'}, 
        {name:"Iowa St",per:'-'}, 
        {name:"Toledo",per:'-'}, 
        {name:"Tenn",per:'-'}, 
        {name:"St Louis",per:'-'}, 
        {name:"UNC",per:'-'}, 
        {name:"St Johns",per:'-'}, 
        {name:"Ohio St",per:'-'}, 
        {name:"JMU",per:'-'}, 
        {name:"Baylor",per:'-'}, 
        {name:"Alabama",per:'-'}, 
        {name:"UConn",per:'-'}, 
        {name:"Vermont",per:'-'}, 
        {name:"S Car",per:'100.0%'}, 
        {name:"USF",per:'88.63%'}, 
        {name:"Okla",per:'96.51%'}, 
        {name:"UCLA",per:'67.38%'}, 
        {name:"Miss St",per:'64.27%'}, 
        {name:"N Dame",per:'100.0%'}, 
        {name:"Arizona",per:'82.23%'}, 
        {name:"MD",per:'97.63%'}, 
        {name:"Stanford",per:'100.0%'}, 
        {name:"Gonzaga",per:'68.09%'}, 
        {name:"Drake",per:'94.5%'}, 
        {name:"Texas",per:'93.33%'}, 
        {name:"Mid Tenn",per:'73.97%'}, 
        {name:"Duke",per:'99.8%'}, 
        {name:"Florida St",per:'99.84%'}, 
        {name:"Iowa",per:'99.99%'}, 
        {name:"Indiana",per:'99.99%'}, 
        {name:"Okla St",per:'84.14%'}, 
        {name:"FGCU",per:'99.67%'}, 
        {name:"Cleve St",per:'98.66%'}, 
        {name:"UNLV",per:'75.96%'}, 
        {name:"LSU",per:'100.0%'}, 
        {name:"NC St",per:'55.12%'}, 
        {name:"Utah",per:'99.98%'}, 
        {name:"VA Tech",per:'100.0%'}, 
        {name:"S Dak St",per:'88.15%'}, 
        {name:"Iowa St",per:'97.52%'}, 
        {name:"Tenn",per:'100.0%'}, 
        {name:"UNC",per:'66.06%'}, 
        {name:"Ohio St",per:'86.3%'}, 
        {name:"Baylor",per:'75.88%'}, 
        {name:"UConn",per:'100.0%'}, 
        {name:"S Car",per:'100.0%'}, 
        {name:"Okla",per:'77.96%'}, 
        {name:"N Dame",per:'97.75%'}, 
        {name:"MD",per:'93.57%'}, 
        {name:"Stanford",per:'92.82%'}, 
        {name:"Drake",per:'74.96%'}, 
        {name:"Duke",per:'65.83%'}, 
        {name:"Iowa",per:'93.99%'}, 
        {name:"Indiana",per:'99.99%'}, 
        {name:"Cleve St",per:'82.64%'}, 
        {name:"LSU",per:'99.97%'}, 
        {name:"Utah",per:'90.76%'}, 
        {name:"VA Tech",per:'65.38%'}, 
        {name:"Iowa St",per:'72.56%'}, 
        {name:"Ohio St",per:'82.73%'}, 
        {name:"UConn",per:'100.0%'}, 
        {name:"S Car",per:'99.97%'}, 
        {name:"N Dame",per:'88.78%'}, 
        {name:"Stanford",per:'88.66%'}, 
        {name:"Iowa",per:'78.32%'}, 
        {name:"Indiana",per:'54.51%'}, 
        {name:"LSU",per:'99.52%'}, 
        {name:"VA Tech",per:'65.06%'}, 
        {name:"UConn",per:'99.15%'}, 
        {name:"S Car",per:'99.84%'}, 
        {name:"Iowa",per:'52.83%'}, 
        {name:"LSU",per:'97.47%'}, 
        {name:"UConn",per:'77.82%'}, 
        {name:"S Car",per:'96.62%'}, 
        {name:"LSU",per:'95.16%'}, 
        {name:"S Car",per:'90.33%'}, 
        ];
        var round_32 = ['S Car', 'USF', 'Okla', 'UCLA', 'Miss St', 'N Dame', 'Arizona', 'MD', 'Stanford', 'Ole Miss', 'Louis', 'Texas', 'Colorado', 'Duke', 'Georgia', 'Iowa', 'Indiana', 'Miami', 'FGCU', 'Villa', 'Michigan', 'LSU', 'Prince', 'Utah', 'VA Tech', 'S Dak St', 'Toledo', 'Tenn', 'UNC', 'Ohio St', 'Baylor', 'UConn'];
        var round_16 = ['S Car', 'UCLA', 'N Dame', 'MD', 'Ole Miss', 'Louis', 'Colorado', 'Iowa', 'Miami', 'Villa', 'LSU', 'Utah', 'VA Tech', 'Tenn', 'Ohio St', 'UConn'];
        var round_8 = ['S Car', 'MD', 'Louis', 'Iowa', 'Miami', 'LSU', 'VA Tech', 'Ohio St'];
        var round_4 = ['S Car', 'Iowa', 'LSU', 'VA Tech'];
        var round_2 = ['Iowa', 'LSU'];
        var round_1 = ['LSU'];
    }
    else if (study_year == 2022){
        document.getElementById("region_1").innerHTML = "Green.";
        document.getElementById("region_2").innerHTML = "Wichita";
        document.getElementById("region_3").innerHTML = "Spokane";
        document.getElementById("region_4").innerHTML = "Bridge.";
        document.getElementById("bracket_score_text").innerHTML = "This Bracket Would Have Scored: ";
        document.getElementById("bracket_score_text_two").innerHTML = "Points";
        var team_stats = [{name:"S Car",per:'-'}, 
        {name:"Howard",per:'-'}, 
        {name:"Miami",per:'-'}, 
        {name:"USF",per:'-'}, 
        {name:"UNC",per:'-'}, 
        {name:"SFA",per:'-'}, 
        {name:"Arizona",per:'-'}, 
        {name:"UNLV",per:'-'}, 
        {name:"Georgia",per:'-'}, 
        {name:"Dayton",per:'-'}, 
        {name:"Iowa St",per:'-'}, 
        {name:"UT Arl",per:'-'}, 
        {name:"Colorado",per:'-'}, 
        {name:"Creigh",per:'-'}, 
        {name:"Iowa",per:'-'}, 
        {name:"Illinois St",per:'-'}, 
        {name:"Louis",per:'-'}, 
        {name:"Albany",per:'-'}, 
        {name:"Neb",per:'-'}, 
        {name:"Gonzaga",per:'-'}, 
        {name:"Oregon",per:'-'}, 
        {name:"Belmont",per:'-'}, 
        {name:"Tenn",per:'-'}, 
        {name:"Buffalo",per:'-'}, 
        {name:"BYU",per:'-'}, 
        {name:"Villa",per:'-'}, 
        {name:"Michigan",per:'-'}, 
        {name:"Amer",per:'-'}, 
        {name:"Ole Miss",per:'-'}, 
        {name:"S Dak",per:'-'}, 
        {name:"Baylor",per:'-'}, 
        {name:"Hawaii",per:'-'}, 
        {name:"Stanford",per:'-'}, 
        {name:"Mont St",per:'-'}, 
        {name:"Kansas",per:'-'}, 
        {name:"GA Tech",per:'-'}, 
        {name:"VA Tech",per:'-'}, 
        {name:"FGCU",per:'-'}, 
        {name:"MD",per:'-'}, 
        {name:"Dela",per:'-'}, 
        {name:"Ohio St",per:'-'}, 
        {name:"Mizz St",per:'-'}, 
        {name:"LSU",per:'-'}, 
        {name:"JSU",per:'-'}, 
        {name:"Utah",per:'-'}, 
        {name:"Ark",per:'-'}, 
        {name:"Texas",per:'-'}, 
        {name:"Fairfield",per:'-'}, 
        {name:"NC St",per:'-'}, 
        {name:"Long",per:'-'}, 
        {name:"Wash St",per:'-'}, 
        {name:"K State",per:'-'}, 
        {name:"N Dame",per:'-'}, 
        {name:"Mass",per:'-'}, 
        {name:"Okla",per:'-'}, 
        {name:"IUPUI",per:'-'}, 
        {name:"Kentucky",per:'-'}, 
        {name:"Prince",per:'-'}, 
        {name:"Indiana",per:'-'}, 
        {name:"Charlotte",per:'-'}, 
        {name:"UCF",per:'-'}, 
        {name:"Florida",per:'-'}, 
        {name:"UConn",per:'-'}, 
        {name:"Mercer",per:'-'}, 
        {name:"S Car",per:'100.0%'}, 
        {name:"USF",per:'99.41%'}, 
        {name:"UNC",per:'97.47%'}, 
        {name:"UNLV",per:'93.09%'}, 
        {name:"Dayton",per:'73.8%'}, 
        {name:"Iowa St",per:'99.96%'}, 
        {name:"Creigh",per:'51.66%'}, 
        {name:"Iowa",per:'100.0%'}, 
        {name:"Louis",per:'99.91%'}, 
        {name:"Gonzaga",per:'64.02%'}, 
        {name:"Oregon",per:'88.55%'}, 
        {name:"Tenn",per:'71.16%'}, 
        {name:"BYU",per:'100.0%'}, 
        {name:"Michigan",per:'100.0%'}, 
        {name:"S Dak",per:'98.83%'}, 
        {name:"Baylor",per:'100.0%'}, 
        {name:"Stanford",per:'100.0%'}, 
        {name:"Kansas",per:'71.45%'}, 
        {name:"VA Tech",per:'54.75%'}, 
        {name:"MD",per:'93.35%'}, 
        {name:"Ohio St",per:'76.94%'}, 
        {name:"JSU",per:'84.34%'}, 
        {name:"Utah",per:'95.01%'}, 
        {name:"Texas",per:'98.28%'}, 
        {name:"NC St",per:'100.0%'}, 
        {name:"K State",per:'99.94%'}, 
        {name:"N Dame",per:'97.08%'}, 
        {name:"IUPUI",per:'88.86%'}, 
        {name:"Prince",per:'99.84%'}, 
        {name:"Indiana",per:'99.53%'}, 
        {name:"UCF",per:'99.64%'}, 
        {name:"UConn",per:'99.96%'}, 
        {name:"S Car",per:'100.0%'}, 
        {name:"UNC",per:'96.24%'}, 
        {name:"Iowa St",per:'96.7%'}, 
        {name:"Iowa",per:'98.86%'}, 
        {name:"Louis",per:'57.32%'}, 
        {name:"Tenn",per:'58.73%'}, 
        {name:"BYU",per:'59.29%'}, 
        {name:"Baylor",per:'91.73%'}, 
        {name:"Stanford",per:'98.09%'}, 
        {name:"MD",per:'33.15%'}, 
        {name:"JSU",per:'66.45%'}, 
        {name:"Texas",per:'92.61%'}, 
        {name:"NC St",per:'100.0%'}, 
        {name:"IUPUI",per:'84.48%'}, 
        {name:"Prince",per:'80.31%'}, 
        {name:"UConn",per:'97.05%'}, 
        {name:"S Car",per:'90.66%'}, 
        {name:"Iowa St",per:'66.1%'}, 
        {name:"Louis",per:'55.7%'}, 
        {name:"Baylor",per:'77.27%'}, 
        {name:"Stanford",per:'62.78%'}, 
        {name:"Texas",per:'45.39%'}, 
        {name:"NC St",per:'99.54%'}, 
        {name:"UConn",per:'69.69%'}, 
        {name:"S Car",per:'77.08%'}, 
        {name:"Baylor",per:'61.88%'}, 
        {name:"Texas",per:'28.5%'}, 
        {name:"NC St",per:'95.12%'}, 
        {name:"S Car",per:'76.63%'}, 
        {name:"NC St",per:'86.44%'}, 
        {name:"S Car",per:'53.23%'}, 
        ];
        var round_32 = ['S Car', 'Miami', 'UNC', 'Arizona', 'Georgia', 'Iowa St', 'Creigh', 'Iowa', 'Louis', 'Gonzaga', 'Belmont', 'Tenn', 'Villa', 'Michigan', 'S Dak', 'Baylor', 'Stanford', 'Kansas', 'FGCU', 'MD', 'Ohio St', 'LSU', 'Utah', 'Texas', 'NC St', 'K State', 'N Dame', 'Okla', 'Prince', 'Indiana', 'UCF', 'UConn'];
        var round_16 = ['S Car', 'UNC', 'Iowa St', 'Creigh', 'Louis', 'Tenn', 'Michigan', 'S Dak', 'Stanford', 'MD', 'Ohio St', 'Texas', 'NC St', 'N Dame', 'Indiana', 'UConn'];
        var round_8 = ['S Car', 'Creigh', 'Louis', 'Michigan', 'Stanford', 'Texas', 'NC St', 'UConn'];
        var round_4 = ['S Car', 'Louis', 'Stanford', 'UConn'];
        var round_2 = ['S Car', 'UConn'];
        var round_1 = ['S Car'];
    }
    else if (study_year == 2021){
        document.getElementById("region_1").innerHTML = "Alamo";
        document.getElementById("region_2").innerHTML = "Hemi.";
        document.getElementById("region_3").innerHTML = "River";
        document.getElementById("region_4").innerHTML = "Merc.";
        document.getElementById("bracket_score_text").innerHTML = "This Bracket Would Have Scored: ";
        document.getElementById("bracket_score_text_two").innerHTML = "Points";
        var team_stats = [{name:"Stanford",per:'-'}, 
        {name:"Ut Vall",per:'-'}, 
        {name:"Okla St",per:'-'}, 
        {name:"Wake F",per:'-'}, 
        {name:"Mizz St",per:'-'}, 
        {name:"Davis",per:'-'}, 
        {name:"Ark",per:'-'}, 
        {name:"Wright St",per:'-'}, 
        {name:"Oregon",per:'-'}, 
        {name:"S Dak",per:'-'}, 
        {name:"Georgia",per:'-'}, 
        {name:"Drexel",per:'-'}, 
        {name:"NWest",per:'-'}, 
        {name:"UCF",per:'-'}, 
        {name:"Louis",per:'-'}, 
        {name:"Marist",per:'-'}, 
        {name:"S Car",per:'-'}, 
        {name:"Mercer",per:'-'}, 
        {name:"Or St",per:'-'}, 
        {name:"Florida St",per:'-'}, 
        {name:"GA Tech",per:'-'}, 
        {name:"SFA",per:'-'}, 
        {name:"WVU",per:'-'}, 
        {name:"Lehigh",per:'-'}, 
        {name:"Texas",per:'-'}, 
        {name:"Bradley",per:'-'}, 
        {name:"UCLA",per:'-'}, 
        {name:"Wyo",per:'-'}, 
        {name:"Alabama",per:'-'}, 
        {name:"UNC",per:'-'}, 
        {name:"MD",per:'-'}, 
        {name:"Mt St M",per:'-'}, 
        {name:"UConn",per:'-'}, 
        {name:"H Point",per:'-'}, 
        {name:"Syracuse",per:'-'}, 
        {name:"S Dak St",per:'-'}, 
        {name:"Iowa",per:'-'}, 
        {name:"C Mich",per:'-'}, 
        {name:"Kentucky",per:'-'}, 
        {name:"Idaho St",per:'-'}, 
        {name:"Michigan",per:'-'}, 
        {name:"FGCU",per:'-'}, 
        {name:"Tenn",per:'-'}, 
        {name:"Mid Tenn",per:'-'}, 
        {name:"VA Tech",per:'-'}, 
        {name:"Marq",per:'-'}, 
        {name:"Baylor",per:'-'}, 
        {name:"JSU",per:'-'}, 
        {name:"NC St",per:'-'}, 
        {name:"NC AT",per:'-'}, 
        {name:"USF",per:'-'}, 
        {name:"Wash St",per:'-'}, 
        {name:"Gonzaga",per:'-'}, 
        {name:"Belmont",per:'-'}, 
        {name:"Indiana",per:'-'}, 
        {name:"VCU",per:'-'}, 
        {name:"Rutgers",per:'-'}, 
        {name:"BYU",per:'-'}, 
        {name:"Arizona",per:'-'}, 
        {name:"S Brook",per:'-'}, 
        {name:"Iowa St",per:'-'}, 
        {name:"Mich St",per:'-'}, 
        {name:"Texas AM",per:'-'}, 
        {name:"Troy",per:'-'}, 
        {name:"Stanford",per:'100.0%'}, 
        {name:"Okla St",per:'95.81%'}, 
        {name:"Mizz St",per:'84.56%'}, 
        {name:"Ark",per:'93.83%'}, 
        {name:"Oregon",per:'61.66%'}, 
        {name:"Georgia",per:'99.99%'}, 
        {name:"UCF",per:'69.85%'}, 
        {name:"Louis",per:'96.4%'}, 
        {name:"S Car",per:'100.0%'}, 
        {name:"Or St",per:'89.6%'}, 
        {name:"SFA",per:'99.65%'}, 
        {name:"WVU",per:'74.74%'}, 
        {name:"Texas",per:'80.54%'}, 
        {name:"UCLA",per:'100.0%'}, 
        {name:"UNC",per:'59.22%'}, 
        {name:"MD",per:'99.99%'}, 
        {name:"UConn",per:'100.0%'}, 
        {name:"S Dak St",per:'99.88%'}, 
        {name:"Iowa",per:'99.75%'}, 
        {name:"Idaho St",per:'80.2%'}, 
        {name:"FGCU",per:'70.36%'}, 
        {name:"Tenn",per:'97.9%'}, 
        {name:"Marq",per:'79.0%'}, 
        {name:"Baylor",per:'100.0%'}, 
        {name:"NC St",per:'90.42%'}, 
        {name:"USF",per:'100.0%'}, 
        {name:"Gonzaga",per:'100.0%'}, 
        {name:"Indiana",per:'99.98%'}, 
        {name:"Rutgers",per:'94.6%'}, 
        {name:"Arizona",per:'99.27%'}, 
        {name:"Iowa St",per:'94.3%'}, 
        {name:"Texas AM",per:'78.79%'}, 
        {name:"Stanford",per:'100.0%'}, 
        {name:"Mizz St",per:'54.99%'}, 
        {name:"Georgia",per:'60.93%'}, 
        {name:"Louis",per:'95.41%'}, 
        {name:"S Car",per:'99.99%'}, 
        {name:"SFA",per:'91.79%'}, 
        {name:"UCLA",per:'99.99%'}, 
        {name:"MD",per:'99.99%'}, 
        {name:"UConn",per:'100.0%'}, 
        {name:"Iowa",per:'53.8%'}, 
        {name:"FGCU",per:'68.84%'}, 
        {name:"Baylor",per:'100.0%'}, 
        {name:"NC St",per:'89.92%'}, 
        {name:"Gonzaga",per:'58.78%'}, 
        {name:"Arizona",per:'52.21%'}, 
        {name:"Texas AM",per:'78.61%'}, 
        {name:"Stanford",per:'96.09%'}, 
        {name:"Louis",per:'91.47%'}, 
        {name:"S Car",per:'74.24%'}, 
        {name:"MD",per:'99.19%'}, 
        {name:"UConn",per:'99.96%'}, 
        {name:"Baylor",per:'99.54%'}, 
        {name:"NC St",per:'83.66%'}, 
        {name:"Texas AM",per:'73.71%'}, 
        {name:"Stanford",per:'95.75%'}, 
        {name:"MD",per:'55.36%'}, 
        {name:"UConn",per:'84.23%'}, 
        {name:"NC St",per:'73.86%'}, 
        {name:"MD",per:'46.21%'}, 
        {name:"UConn",per:'84.23%'}, 
        {name:"UConn",per:'75.4%'}, 
        ];
        var round_32 = ['Stanford', 'Okla St', 'Mizz St', 'Wright St', 'Oregon', 'Georgia', 'NWest', 'Louis', 'S Car', 'Or St', 'GA Tech', 'WVU', 'Texas', 'UCLA', 'Alabama', 'MD', 'UConn', 'Syracuse', 'Iowa', 'Kentucky', 'Michigan', 'Tenn', 'VA Tech', 'Baylor', 'NC St','USF', 'Belmont', 'Indiana', 'BYU', 'Arizona', 'Iowa St', 'Texas AM'];
        var round_16 = ['Stanford', 'Mizz St', 'Oregon', 'Louis', 'S Car', 'GA Tech', 'Texas', 'MD', 'UConn', 'Iowa', 'Michigan', 'Baylor', 'NC St', 'Indiana', 'Arizona', 'Texas AM'];
        var round_8 = ['Stanford', 'Louis', 'S Car', 'Texas', 'UConn', 'Baylor', 'Indiana', 'Arizona'];
        var round_4 = ['Stanford', 'S Car', 'UConn', 'Arizona'];
        var round_2 = ['Stanford', 'Arizona'];
        var round_1 = ['Stanford'];
    }
    else if (study_year == current_year || study_year == "Year"){
        document.getElementById("region_1").innerHTML = "Green.";
        document.getElementById("region_2").innerHTML = "Seattle";
        document.getElementById("region_3").innerHTML = "Green.";
        document.getElementById("region_4").innerHTML = "Seattle";
        document.getElementById("bracket_score_text").innerHTML = ""
        document.getElementById("bracket_score_text_two").innerHTML = ""
        var team_stats = [{name:"S Car",per:'-'}, 
        {name:"L Rock",per:'-'}, 
        {name:"Neb",per:'-'}, 
        {name:"Miami",per:'-'}, 
        {name:"N Dame",per:'-'}, 
        {name:"Drake",per:'-'}, 
        {name:"K State",per:'-'}, 
        {name:"Ball St",per:'-'}, 
        {name:"Creigh",per:'-'}, 
        {name:"Tenn",per:'-'}, 
        {name:"VA Tech",per:'-'}, 
        {name:"Chatta",per:'-'}, 
        {name:"Mich St",per:'-'}, 
        {name:"Alabama",per:'-'}, 
        {name:"Colorado",per:'-'}, 
        {name:"JSU",per:'-'}, 
        {name:"NC St",per:'-'}, 
        {name:"S Heart",per:'-'}, 
        {name:"Miss St",per:'-'}, 
        {name:"Penn St",per:'-'}, 
        {name:"Gonzaga",per:'-'}, 
        {name:"S Dak St",per:'-'}, 
        {name:"Or St",per:'-'}, 
        {name:"Cleve St",per:'-'}, 
        {name:"UNC",per:'-'}, 
        {name:"Michigan",per:'-'}, 
        {name:"UConn",per:'-'}, 
        {name:"N Texas",per:'-'}, 
        {name:"Okla",per:'-'}, 
        {name:"Wash St",per:'-'}, 
        {name:"Iowa",per:'-'}, 
        {name:"H Cross",per:'-'}, 
        {name:"Stanford",per:'-'}, 
        {name:"Hawaii",per:'-'}, 
        {name:"Ole Miss",per:'-'}, 
        {name:"Prince",per:'-'}, 
        {name:"Syracuse",per:'-'}, 
        {name:"FGCU",per:'-'}, 
        {name:"Indiana",per:'-'}, 
        {name:"S Brook",per:'-'}, 
        {name:"WVU",per:'-'}, 
        {name:"Rich",per:'-'}, 
        {name:"USC",per:'-'}, 
        {name:"GCU",per:'-'}, 
        {name:"Florida St",per:'-'}, 
        {name:"Texas AM",per:'-'}, 
        {name:"Texas",per:'-'}, 
        {name:"Albany",per:'-'}, 
        {name:"Ohio St",per:'-'}, 
        {name:"Norf St",per:'-'}, 
        {name:"Duke",per:'-'}, 
        {name:"Marq",per:'-'}, 
        {name:"Utah",per:'-'}, 
        {name:"MD",per:'-'}, 
        {name:"Louis",per:'-'}, 
        {name:"Fairfield",per:'-'}, 
        {name:"Baylor",per:'-'}, 
        {name:"Mid Tenn",per:'-'}, 
        {name:"LSU",per:'-'}, 
        {name:"Marsh",per:'-'}, 
        {name:"UNLV",per:'-'}, 
        {name:"GB",per:'-'}, 
        {name:"UCLA",per:'-'}, 
        {name:"N AZ",per:'-'}, 
        {name:"S Car",per:'100.0%'}, 
        {name:"Neb",per:'99.3%'}, 
        {name:"N Dame",per:'99.89%'}, 
        {name:"K State",per:'99.64%'}, 
        {name:"Creigh",per:'92.0%'}, 
        {name:"VA Tech",per:'97.55%'}, 
        {name:"Mich St",per:'65.93%'}, 
        {name:"Colorado",per:'78.19%'}, 
        {name:"NC St",per:'100.0%'}, 
        {name:"Miss St",per:'61.19%'}, 
        {name:"Gonzaga",per:'99.92%'}, 
        {name:"Or St",per:'77.88%'}, 
        {name:"UNC",per:'74.76%'}, 
        {name:"UConn",per:'97.83%'}, 
        {name:"Okla",per:'80.81%'}, 
        {name:"Iowa",per:'99.91%'}, 
        {name:"Stanford",per:'100.0%'}, 
        {name:"Prince",per:'51.74%'}, 
        {name:"FGCU",per:'70.85%'}, 
        {name:"Indiana",per:'51.87%'}, 
        {name:"WVU",per:'94.73%'}, 
        {name:"USC",per:'97.48%'}, 
        {name:"Florida St",per:'55.49%'}, 
        {name:"Texas",per:'99.88%'}, 
        {name:"Ohio St",per:'99.98%'}, 
        {name:"Marq",per:'93.46%'}, 
        {name:"Utah",per:'99.56%'}, 
        {name:"Louis",per:'70.67%'}, 
        {name:"Baylor",per:'86.48%'}, 
        {name:"LSU",per:'100.0%'}, 
        {name:"UNLV",per:'99.94%'}, 
        {name:"UCLA",per:'99.99%'}, 
        {name:"S Car",per:'100.0%'}, 
        {name:"N Dame",per:'96.51%'}, 
        {name:"VA Tech",per:'96.21%'}, 
        {name:"Mich St",per:'57.1%'}, 
        {name:"NC St",per:'97.95%'}, 
        {name:"Gonzaga",per:'90.21%'}, 
        {name:"UConn",per:'97.83%'}, 
        {name:"Iowa",per:'99.91%'}, 
        {name:"Stanford",per:'100.0%'}, 
        {name:"Indiana",per:'49.98%'}, 
        {name:"WVU",per:'80.1%'}, 
        {name:"Texas",per:'99.76%'}, 
        {name:"Ohio St",per:'93.83%'}, 
        {name:"Utah",per:'88.15%'}, 
        {name:"LSU",per:'99.93%'}, 
        {name:"UNLV",per:'78.96%'}, 
        {name:"S Car",per:'99.8%'}, 
        {name:"VA Tech",per:'64.08%'}, 
        {name:"NC St",per:'55.14%'}, 
        {name:"Iowa",per:'93.31%'}, 
        {name:"Stanford",per:'96.52%'}, 
        {name:"Texas",per:'99.67%'}, 
        {name:"Utah",per:'66.77%'}, 
        {name:"LSU",per:'92.45%'}, 
        {name:"S Car",per:'99.78%'}, 
        {name:"Iowa",per:'56.92%'}, 
        {name:"Texas",per:'55.1%'}, 
        {name:"LSU",per:'90.52%'}, 
        {name:"S Car",per:'97.63%'}, 
        {name:"LSU",per:'62.65%'}, 
        {name:"S Car",per:'84.88%'}, 
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