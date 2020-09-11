import axios from "axios";

const axiosWithAuth = axios.create({headers: `Authroization ${localStorage.getItem("token")}`});

module.exports = axiosWithAuth;