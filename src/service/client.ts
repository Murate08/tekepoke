import axios from "axios";

//connection with api
const instace =axios.create({
  baseURL:'https://pokeapi.co/api/v2'
})

export default instace
