const button_2 = document.getElementById("third_cr");
const button_3 = document.getElementById("third_stair");
const button_4 = document.getElementById("room304");
const button_5 = document.getElementById("room303");
const button_6 = document.getElementById("comlab");
const button_7 = document.getElementById("room301");
const button_8 = document.getElementById("fireexit");
const button_9 = document.getElementById("second_cr");
const button_10 = document.getElementById("second_stair");
const button_11 = document.getElementById("clinic");
const button_12 = document.getElementById("faculty");
const button_13 = document.getElementById("library");
const button_14 = document.getElementById("admin");
const button_15 = document.getElementById("first_cr");
const button_16 = document.getElementById("first_stair");
const button_17 = document.getElementById("room103");
const button_18 = document.getElementById("schoolgate");
const button_19 = document.getElementById("room102");
const button_20 = document.getElementById("room101");
const button_21 = document.getElementById("schoolfield"); 
const button_22 = document.getElementById("tent");
const button_23 = document.getElementById("greenhouse");
const button_24 = document.getElementById("court");
const button_25 = document.getElementById("backdoor");
var image_map_source; 
//NULL IMG
var null_img = document.getElementById("null-img"); 

//IMG MAP
var map_img = document.getElementById("map_image");
var map_container = document.getElementById("true-img"); 

//DETAILS
var name_map = document.getElementById("target_name");
var detail_map = document.getElementById("target_detail");  
var detail_box = document.getElementById("true_detail"); 

function displayBlock(){
   map_container.style.display = "block"; 
   detail_box.style.display = "block";
}
function displayNone(){
   null_img.style.display = "none";
}

button_2.addEventListener('click', function(){ // third comfort room
    name_map.innerHTML = "Third Floor Comfort Room"; 
    detail_box.classList.add("popup-animate");
    null_img.classList.add("popdown-animate");
    map_img.src = "map/3floor_cr.png";
    image_map_source = "map/3floor_cr.png";
    map_container.classList.add("popup-animate");
    detail_map.innerHTML = "Locates in QCU Bldg. 3rd Floor left side. This comfort room used by the students and staffs nearby 3rd floor."; 
    setTimeout(displayBlock(),2000); 
    setTimeout(displayNone(),2000);
});

button_3.addEventListener('click', function(){ // third stair
    name_map.innerHTML = "Third Floor Stairs"; 
    detail_box.classList.add("popup-animate");
    null_img.classList.add("popdown-animate");
    map_container.classList.add("popup-animate");
    detail_map.innerHTML = "Locates in QCU Bldg. 3rd Floor left side. A wide stair used by students, staffs and professors."; 
    map_img.src = "map/3floor_stair.png";
    image_map_source = "map/3floor_stair.png";
    setTimeout(displayBlock(),2000); 
    setTimeout(displayNone(),2000);
});

button_4.addEventListener('click', function(){ // room304
    name_map.innerHTML = "ROOM 304"; 
    detail_box.classList.add("popup-animate");
    null_img.classList.add("popdown-animate");
    map_container.classList.add("popup-animate");
    detail_map.innerHTML = "Locates in QCU Bldg. 3rd Floor left side. The room was used by BS Entrepreneurship students as of academic year 2023-2024."; 
    map_img.src = "map/3floor_304.png";
    image_map_source = "map/3floor_304.png";
    setTimeout(displayBlock(),2000); 
    setTimeout(displayNone(),2000);
});

button_5.addEventListener('click', function(){ // room303
    name_map.innerHTML = "ROOM 303"; 
    detail_box.classList.add("popup-animate");
    null_img.classList.add("popdown-animate");
    map_container.classList.add("popup-animate");
    detail_map.innerHTML = "Locates in QCU Bldg. 3rd Floor at the middle. Another room that used by BS Entrepreneurship students as of academic year 2023-2024."; 
    map_img.src = "map/3floor_303.png";
    image_map_source = "map/3floor_303.png";
    setTimeout(displayBlock(),2000); 
    setTimeout(displayNone(),2000);
});
button_6.addEventListener('click', function(){ // comlab
    name_map.innerHTML = "Computer Laboratory"; 
    detail_box.classList.add("popup-animate");
    null_img.classList.add("popdown-animate");
    map_container.classList.add("popup-animate");
    detail_map.innerHTML = "Locates in QCU Bldg. 3rd Floor right side. The laboratory was used by BS Information Technology Student for computing activities as of academic year 2023-2024."; 
    map_img.src = "map/3floor_comlab.png";
    image_map_source = "map/3floor_comlab.png";
    setTimeout(displayBlock(),2000); 
    setTimeout(displayNone(),2000);
});
button_7.addEventListener('click', function(){ // room301
    name_map.innerHTML = "ROOM 301"; 
    detail_box.classList.add("popup-animate");
    null_img.classList.add("popdown-animate");
    map_container.classList.add("popup-animate");
    detail_map.innerHTML = "Locates in QCU Bldg. 3rd Floor right side. The room was used by BS Information Technology students as of academic year 2023-2024."; 
    map_img.src = "map/3floor_301.png";
    image_map_source = "map/3floor_301.png";
    setTimeout(displayBlock(),2000); 
    setTimeout(displayNone(),2000);
});

button_8.addEventListener('click', function(){ // fire exit
    name_map.innerHTML = "FIRE EXIT"; 
    detail_box.classList.add("popup-animate");
    null_img.classList.add("popdown-animate");
    map_container.classList.add("popup-animate");
    detail_map.innerHTML = "Locates in QCU Bldg. 3rd Floor right side. In case of emergency this fire exit helps them to escape during and after disaster."; 
    map_img.src = "map/3floor_firexit.png";
    image_map_source = "map/3floor_firexit.png";
    setTimeout(displayBlock(),2000); 
    setTimeout(displayNone(),2000);
});

button_9.addEventListener('click', function(){ // 2nd floor cr
    name_map.innerHTML = "Second Floor Comfort Room (For Admin only)"; 
    detail_box.classList.add("popup-animate");
    null_img.classList.add("popdown-animate");
    map_container.classList.add("popup-animate");
    detail_map.innerHTML = "Locates in QCU Bldg. 2nd Floor left side. This comfort room are only used for admin and staff."; 
    map_img.src = "map/2floor_cr.png";
    image_map_source = "map/2floor_cr.png";
    setTimeout(displayBlock(),2000); 
    setTimeout(displayNone(),2000);
});

button_10.addEventListener('click', function(){ // 2nd floor stair
    name_map.innerHTML = "Second Floor Stairs"; 
    detail_box.classList.add("popup-animate");
    null_img.classList.add("popdown-animate");
    map_container.classList.add("popup-animate");
    map_img.src = "map/2floor_stair.png";
    image_map_source = "map/2floor_stair.png";
    detail_map.innerHTML = "Locates in QCU Bldg. 2nd Floor left side. A wide stair used by students, staffs and professors."; 
    setTimeout(displayBlock(),2000); 
    setTimeout(displayNone(),2000);
});

button_11.addEventListener('click', function(){ 
    name_map.innerHTML = "Clinic"; 
    detail_box.classList.add("popup-animate");
    null_img.classList.add("popdown-animate");
    map_container.classList.add("popup-animate");
    detail_map.innerHTML = "Locates in QCU Bldg. 2nd Floor left side. The clinic provides medical care, diagnosis, treatment, and preventive services to individuals in QCU SF branch."; 
    map_img.src = "map/2floor_clinic.png";
    image_map_source = "map/2floor_clinic.png";
    setTimeout(displayBlock(),2000); 
    setTimeout(displayNone(),2000);
});
button_12.addEventListener('click', function(){ 
    name_map.innerHTML = "Faculty"; 
    detail_box.classList.add("popup-animate");
    null_img.classList.add("popdown-animate");
    map_container.classList.add("popup-animate");
    detail_map.innerHTML = "Locates in QCU Bldg. 2nd Floor at the middle. The faculty facilitate the delivery of academic programs, "+
    "conduct research, and contribute expertise to support the learning and development of students."; 
    map_img.src = "map/2floor_faculty.png";
    image_map_source = "map/2floor_faculty.png";
    setTimeout(displayBlock(),2000); 
    setTimeout(displayNone(),2000);
});
button_13.addEventListener('click', function(){ 
    name_map.innerHTML = "Library"; 
    detail_box.classList.add("popup-animate");
    null_img.classList.add("popdown-animate");
    map_container.classList.add("popup-animate");
    map_img.src = "map/2floor_library.png";
    image_map_source = "map/2floor_library.png";
    detail_map.innerHTML = "Locates in QCU Bldg. 2nd Floor left side. The library provides access to a diverse collection of informational resources,"+
     "promote learning, support research, and foster a conducive environment for reading and intellectual exploration."; 
    setTimeout(displayBlock(),2000); 
    setTimeout(displayNone(),2000);
});
button_14.addEventListener('click', function(){ 
    name_map.innerHTML = "Admin Office"; 
    detail_box.classList.add("popup-animate");
    null_img.classList.add("popdown-animate");
    map_container.classList.add("popup-animate");
    map_img.src = "map/2floor_admin.png";
    image_map_source = "map/2floor_admin.png";
    detail_map.innerHTML = "Locates in QCU Bldg. 2nd Floor left side. The admin manage and coordinate administrative "+
    "functions specific to the San Francisco campus of Quezon City University, overseeing areas such as campus operations,"+
    "student services, and local administrative affairs to support the effective functioning of the institution in that location."; 
    setTimeout(displayBlock(),2000); 
    setTimeout(displayNone(),2000);
});
button_15.addEventListener('click', function(){ // 1st comfort room
    name_map.innerHTML = "First Floor Comfort Room"; 
    detail_box.classList.add("popup-animate");
    null_img.classList.add("popdown-animate");
    map_container.classList.add("popup-animate");
    map_img.src = "map/1floor_cr.png";
    image_map_source = "map/1floor_cr.png";
    detail_map.innerHTML = "Locates in QCU Bldg. 1st Floor left side. This comfort room used by the students and staffs nearby 1st floor and open ground."; 
    setTimeout(displayBlock(),2000); 
    setTimeout(displayNone(),2000);
});
button_16.addEventListener('click', function(){ // 2nd floor stair
    name_map.innerHTML = "First Floor Stairs"; 
    detail_box.classList.add("popup-animate");
    null_img.classList.add("popdown-animate");
    map_container.classList.add("popup-animate");
    map_img.src = "map/1floor_stair.png";
    image_map_source = "map/1floor_stair.png";
    detail_map.innerHTML = "Locates in QCU Bldg. 1st Floor left side. A wide stair used by students, staffs and professors."; 
    setTimeout(displayBlock(),2000); 
    setTimeout(displayNone(),2000);
});
button_17.addEventListener('click', function(){ 
    name_map.innerHTML = "ROOM 103"; 
    detail_box.classList.add("popup-animate");
    null_img.classList.add("popdown-animate");
    map_container.classList.add("popup-animate");
    map_img.src = "map/1floor_103.png";
    image_map_source = "map/1floor_103.png";
    detail_map.innerHTML = "Locates in QCU Bldg. 1st Floor left side. The room was used by BS Entrepreneurship students as of academic year 2023-2024."; 
    setTimeout(displayBlock(),2000); 
    setTimeout(displayNone(),2000);
});
button_18.addEventListener('click', function(){ 
    name_map.innerHTML = "QCU SF MAIN GATE"; 
    detail_box.classList.add("popup-animate");
    null_img.classList.add("popdown-animate");
    map_container.classList.add("popup-animate");
    map_img.src = "map/1floor_gate.png";
    image_map_source = "map/1floor_gate.png";
    detail_map.innerHTML = "Locates in QCU Bldg. 1st Floor at the middle. The main gate serves as the primary entrance and exit point for the campus,"+
    " controlling access and ensuring security, while also providing a welcoming entry point for students, staff, and visitors. It has also a lobby for staying"; 
    setTimeout(displayBlock(),2000); 
    setTimeout(displayNone(),2000);
});
button_19.addEventListener('click', function(){ 
    name_map.innerHTML = "ROOM 102"; 
    detail_box.classList.add("popup-animate");
    null_img.classList.add("popdown-animate");
    map_container.classList.add("popup-animate");
    map_img.src = "map/1floor_102.png";
    image_map_source = "map/1floor_102.png";
    detail_map.innerHTML = "Locates in QCU Bldg. 1st Floor right. The room was used by BS Entrepreneurship students as of academic year 2023-2024."+
    " However in social gathering, Room 102 and Room 101 are the social hall of QCU SF Campus by removing the wall between the two rooms. " ; 
    setTimeout(displayBlock(),2000); 
    setTimeout(displayNone(),2000);
});
button_20.addEventListener('click', function(){ 
    name_map.innerHTML = "ROOM 101"; 
    detail_box.classList.add("popup-animate");
    null_img.classList.add("popdown-animate");
    map_container.classList.add("popup-animate");
    map_img.src = "map/1floor_101.png";
    image_map_source = "map/1floor_101.png";
    detail_map.innerHTML = "Locates in QCU Bldg. 1st Floor right. The room was used by BS Entrepreneurship students as of academic year 2023-2024."+
    " However in social gathering, Room 102 and Room 101 are the social hall of QCU SF Campus by removing the wall between the two rooms. " ; 
    setTimeout(displayBlock(),2000); 
    setTimeout(displayNone(),2000);
});

button_21.addEventListener('click', function(){ 
    name_map.innerHTML = "QCU Open Ground"; 
    detail_box.classList.add("popup-animate");
    null_img.classList.add("popdown-animate");
    map_container.classList.add("popup-animate");
    map_img.src = "img/gallery_data_20.JPG";
    image_map_source = "img/gallery_data_20.JPG";
    detail_map.innerHTML = "Locates outside QCU Bldg. The place was used for flag ceremony, social gathering, and outdoor activities especially" +
    "in Physical Education and NSTP subject" ; 
    setTimeout(displayBlock(),2000); 
    setTimeout(displayNone(),2000);
});

button_22.addEventListener('click', function(){ 
    name_map.innerHTML = "QCU Open Ground Tent"; 
    detail_box.classList.add("popup-animate");
    null_img.classList.add("popdown-animate");
    map_container.classList.add("popup-animate");
    map_img.src = "map/og_tent.png";
    image_map_source = "map/og_tent.png";
    detail_map.innerHTML = "Locates outside QCU Bldg. near at the campus field. This place was used for students hangouts and somtimes"+
    "it's used for class sessions" ; 
    setTimeout(displayBlock(),2000); 
    setTimeout(displayNone(),2000);
});
button_23.addEventListener('click', function(){ 
    name_map.innerHTML = "QCU Green House "; 
    detail_box.classList.add("popup-animate");
    null_img.classList.add("popdown-animate");
    map_container.classList.add("popup-animate");
    map_img.src = "img/gallery_data_5.JPG";
    image_map_source = "img/gallery_data_5.JPG";
    detail_map.innerHTML = "Locates outside the QCU Bldg. near at the garden and back gate. "+
    "The greenhouse is used for growing fruits, vegetables, and herbs, conducting research on "+
    "sustainable practices, and providing educational opportunities." ; 
    setTimeout(displayBlock(),2000); 
    setTimeout(displayNone(),2000);
});
button_24.addEventListener('click', function(){ 
    name_map.innerHTML = "QCU Old Court"; 
    detail_box.classList.add("popup-animate");
    null_img.classList.add("popdown-animate");
    map_container.classList.add("popup-animate");
    map_img.src = "map/og_court.png";
    image_map_source = "map/og_court.png";
    detail_map.innerHTML = "Locates outside the QCU Bldg. near at the greenhouse. The basketball court of SF Campus is old. "+
    "That's why it is only used in PE Class Sessions"; 
    setTimeout(displayBlock(),2000); 
    setTimeout(displayNone(),2000);
});
button_25.addEventListener('click', function(){ 
    name_map.innerHTML = "QCU Back Gate"; 
    detail_box.classList.add("popup-animate");
    null_img.classList.add("popdown-animate");
    map_container.classList.add("popup-animate");
    map_img.src = "map/og_gate.png";
    image_map_source = "map/og_gate.png";
    detail_map.innerHTML = "Locates at the back of QCU SF Campus. It is used for alternative gate for staff and professor"+
    "It is also used for emergency exit if something happens in the campus"; 
    setTimeout(displayBlock(),2000); 
    setTimeout(displayNone(),2000);
});

const return_page = document.getElementById("back-btn");
return_page.addEventListener('click',function(){
    window.location.href = "QCU_SfCampus.html#map_b";
}); 


const go_openground = document.getElementById("switch");
const go_building = document.getElementById("switchback");
const map_background = document.getElementById("source_map"); 
const btn_group = document.querySelectorAll('.thisbtn'); 
const og_btn_group = document.querySelectorAll('.ogbtn');
const maxImage = document.getElementById("map_image"); 

go_openground.addEventListener('click',function(){
    go_openground.style.background = "green";
    go_building.style.background = "gray";
    map_background.src = "map/QCU-SF MAP OPEN GROUND.jpg";
    btn_group.forEach(function (button) {
    button.style.display = "none";
    });
    og_btn_group.forEach(function (button) {
        button.style.display = "block";
    });

});
go_building.addEventListener('click',function(){
    go_openground.style.background = "gray";
    go_building.style.background = "green";
    map_background.src = "map/QCU-SF MAP BUILDING.png";
    btn_group.forEach(function (button) {
        button.style.display = "block";
    });
    og_btn_group.forEach(function (button) {
        button.style.display = "none";
    });
});
  
maxImage.addEventListener('click', maximize_image);
function maximize_image(){
    window.location.href = image_map_source;
}