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
import {
    getAllStatusRequests,
    getAllCode_requestDate_deliveryLater,
    getAllCode_requestDate_deliveryBefore,
    getAllRequestsRefused2009,
    getAllRequestsDeliveredJanuary
} from "./module/requests.js";
import{
    getAllCode_clientData_payment2008,
    getAllPayments2008WithPaypal
} from "./module/payments.js";
import { getAllproductsOrnamentales100 
} from "./module/product.js";

console.log(await getAllPayments2008WithPaypal());
