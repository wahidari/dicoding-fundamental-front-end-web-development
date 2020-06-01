// Karena kita sudah menggunakan webpack untuk membundel module. 
// Kita dapat menggunakan perintah import pada src -> index.js dalam menggunakan package npm.
import "./style/style.css";
import $ from "jquery";
import moment from "moment";

const displayTime = () => {
    moment.locale("id");
    $(".time").text(moment().format("LTS"));
    $(".date").text(moment().format("LL"));
};
 
const updateTime = () => {
    displayTime();
    setTimeout(updateTime, 1000)
};
 
updateTime();