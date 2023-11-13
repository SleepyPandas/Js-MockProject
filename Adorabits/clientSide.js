const people = [                // This is just a array of Data for testing
  { name: "BTS (방탄소년단)" },
  { name: "EXO (엑소)" },
  { name: "BIGBANG (빅뱅)" },
  { name: "GOT7 (갓세븐)" },
  { name: "NCT (엔시티)" },
  { name: "SEVENTEEN (세븐틴)" },
  { name: "MONSTA X (몬스타엑스)" },
  { name: "SHINee (샤이니)" },
  { name: "Super Junior (슈퍼주니어)" },
  { name: "Stray Kids (스트레이 키즈)" },
  { name: "ATEEZ (에이티즈)" },
  { name: "TXT (투모로우바이투게더)" },
  { name: "iKON (아이콘)" },
  { name: "DAY6 (데이식스)" },
  { name: "SF9 (에스에프나인)" },
  { name: "WINNER (위너)" },
  { name: "Pentagon (펜타곤)" },
  { name: "VIXX (빅스)" },
  { name: "INFINITE (인피니트)" },
  { name: "ASTRO (아스트로)" },
  { name: "BTOB (비투비)" },
  { name: "NU'EST (뉴이스트)" },
  { name: "AB6IX (에이비식스)" },
  { name: "ONEUS (원어스)" },
  { name: "CIX (씨아이엑스)" },
  { name: "ENHYPEN (엔하이픈)" },
  { name: "VERIVERY (베리베리)" },
  { name: "TOMORROW X TOGETHER (투모로우바이투게더)" },
]



function search_bar() {
    const userInput = document.querySelector('.search-box');
    const searchResults = document.getElementById('search-results');
    const searchTerm = userInput.value.toLowerCase();
    
    searchResults.innerHTML = '';

    const results = people.filter(group => group.name.toLowerCase().includes(searchTerm));
    
    results.forEach(result => {
        const resultItem = document.getElementById('search-results');
        resultItem.textContent = result.name;
        searchResults.appendChild(resultItem);
    });
}


function filter() {
  //on click show 
}

function shoppint_cart() {

}

function stock_level() {

}

function check_out() {

}

function payment() {

}

function order_details() {

}

function web_protection() {

}


