import { 
    getAllOficceAndCodeCity, 
    getAllOficceCityAndMovil 
} from "./module/offices.js";
import { 
    getAllFullNameAndEmailsAndBoss,
    getBossFullNameAndEmail,
    getAllEmployeesNotSalesRepresentatives,
    getEmployeeByCode
} from "./module/employees.js";
import {
    getAllEmployeesSpanishPeople,
    getAllClientFromMadridCodoEMploytesSales11Or30,
    getAllClientqAndSalesRepresentative
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
    getAllPayments2008WithPaypal,
    getAllpayments
} from "./module/payments.js";
import { getAllproductsOrnamentales100 
} from "./module/product.js";

console.log(await getAllClientqAndSalesRepresentative());
