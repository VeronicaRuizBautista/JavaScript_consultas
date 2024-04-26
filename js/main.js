import { 
    getAllOficceAndCodeCity, 
    getAllOficceCityAndMovil,
    getCity,
    getAddressOffices
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
    getAllClientqAndSalesRepresentative,
    getAllClientWithPaymentAndSalesRepresentative,
    getAllClientWithoutPaymentAndSalesRepresentative,
    getAllClientWithPaymentAndSalesRepresentativeOfficeCity,
    getAllClientWithoutPaymentAndSalesRepresentativeOfficeCity,
    getClientForCity
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
    getAllpayments,
    getClientsWithPayment
} from "./module/payments.js";
import { getAllproductsOrnamentales100 
} from "./module/product.js";

console.log(await getAddressOffices());
