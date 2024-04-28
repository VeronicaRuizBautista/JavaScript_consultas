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
    getEmployeeByCode,
    getAllEmployeesWithBoss,
    getAllEmployeesWithBossAndHisBoss
} from "./module/employees.js";
import {
    getAllEmployeesSpanishPeople,
    getAllClientFromMadridCodoEMploytesSales11Or30,
    getAllClientqAndSalesRepresentative,
    getAllClientWithPaymentAndSalesRepresentative,
    getAllClientWithoutPaymentAndSalesRepresentative,
    getAllClientWithPaymentAndSalesRepresentativeOfficeCity,
    getAllClientWithoutPaymentAndSalesRepresentativeOfficeCity,
    getClientForCity,
    getAllClientWithSalesRepresentativeAndCityOffice,
    getClientBycode,
    getAllProductByClient
} from "./module/clients.js";
import {
    getAllStatusRequests,
    getAllCode_requestDate_deliveryLater,
    getAllCode_requestDate_deliveryBefore,
    getAllRequestsRefused2009,
    getAllRequestsDeliveredJanuary,
    getAllClientRequestNoTime,
    getAllRequestsByClientCode
} from "./module/requests.js";
import{
    getAllCode_clientData_payment2008,
    getAllPayments2008WithPaypal,
    getAllpayments,
    getClientsWithPayment
} from "./module/payments.js";
import { 
    getAllproductsOrnamentales100,
    getProductByCodeProduct 
} from "./module/product.js";
import {
    getCodeProductByCodeRequest
} from "./module/request_details.js"

console.log(await getAllProductByClient());
