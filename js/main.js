import { 
    getAllOficceAndCodeCity, 
    getAllOficceCityAndMovil 
} from "./module/offices.js";
import { 
    getAllFullNameAndEmailsAndBoss,
    getBossFullNameAndEmail,
    getAllEmployeesNotSalesRepresentatives
} from "./module/employees.js";
import {
    getAllEmployeesSpanishPeople
} from "./module/clients.js";

console.log(await getAllEmployeesSpanishPeople());
