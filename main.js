                                                        //................................................................................//
                                                        //                                    All logics                                  //
                                                        //.................................................................................//






//........................................................Working with dark mode..............................................................//
//Cheking if website already in dark mode or not.
if(localStorage.getItem("dark_mode")) {
    let get_dark_current_status = localStorage.getItem("dark_mode");

    if(get_dark_current_status === "true") {
        document.querySelector("html").classList.add("dark");
        document.querySelector("#light_mode").classList.remove("hidden");
    }
    else {   
        document.querySelector("html").classList.remove("dark");
        document.querySelector("#dark_mode").classList.remove("hidden");
    }
}
//If user is new then by default light mode will activate.
else {
        document.querySelector("#dark_mode").classList.remove("hidden");
}                                                

//Cheking if dark mode id exist in the current webpage.
if(document.querySelector("#dark_mode")) {
    let dark_mode = document.querySelector("#dark_mode");

    dark_mode.addEventListener("click", ()=>{
        turn_on_dark_mode();
    })
}

//Cheking if light mode id exist in the current webpage.
if(document.querySelector("#light_mode")) {
let light_mode = document.querySelector("#light_mode");

light_mode.addEventListener("click", ()=>{
    turn_on_light_mode();
})
}
//..............................................Working with dark mode part has been ended....................................................//








//..............................................Working with cookies to json converter part started....................................................//
//Checking if 'get_json' btn exist or not
if(document.querySelector("#get_json")) {
    let btn = document.querySelector("#get_json");

    //If user click on 'Get Json' button
    btn.addEventListener("click",()=>{
        let cookies_value = document.querySelector("#cookies_filed").value;
        let output_id = document.querySelector("#json_field");
        //User cookies value length must be more than 1
        if(cookies_value.length > 0) {
            ConvertToJson(cookies_value,output_id);
        }
    })

    //If user click on 'Copy'
    let copy_btn = document.querySelector("#copy_json");
    copy_btn.addEventListener("click",()=>{
        let output_id = document.querySelector("#json_field");
        Copy_code(output_id,copy_btn);
    })
}
//..............................................Working with cookies to json converter part ended....................................................//





                                                    //................................................................................//
                                                    //                                     All functions                              //
                                                    //.................................................................................//


//if user click on dark mode icon
function turn_on_dark_mode() {
localStorage.setItem("dark_mode", "true");

let current_status = localStorage.getItem("dark_mode");
if(current_status === "true") {
    let light_mode = document.querySelector("#light_mode");
    let dark_mode = document.querySelector("#dark_mode");
    document.querySelector("html").classList.add("dark");

    dark_mode.classList.add("hidden");
    light_mode.classList.remove("hidden");
}
}


//If user click on light mode icon
function turn_on_light_mode() {
localStorage.setItem("dark_mode", "false");

let get_current_status = localStorage.getItem("#dark_mode");
if(get_current_status != "true") {
    let get_dark_mode = document.querySelector("#dark_mode");
    let get_light_mode = document.querySelector("#light_mode");
    document.querySelector("html").classList.remove("dark");

    get_dark_mode.classList.remove("hidden");
    get_light_mode.classList.add("hidden");
}
}

//If user click on 'Get Json' btn
function ConvertToJson(cookie_as_string,output_id) {
        let cookieJson = [];
        let cookies = cookie_as_string.split("\n");
        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i].trim().split('\t');
            if(cookie.length>3){
                let obj = {
                    "domain": cookie[0],
                    "path": '/',
                    "name": cookie[5],
                    "value": cookie[6]
                }
                cookieJson.push(obj);
            }
        }
        output_id.innerHTML = JSON.stringify(cookieJson, null, 2);
    }


//If user click on 'Copy'btn
function Copy_code(copying_field,copy_btn) {

  // Select the text copying_field
  copying_field.select();
  copying_field.setSelectionRange(0, 99999); // For mobile devices

  // All content copying from copying_field
  navigator.clipboard.writeText(copying_field.value);

  //Replacing the text 'copy' to 'copied'
  copy_btn.innerHTML = 'Copied!';

  //Replacing the text 'Copy' after 3s
  setTimeout(() => {
    copy_btn.innerHTML = 'Copy';
  }, 3000);
}