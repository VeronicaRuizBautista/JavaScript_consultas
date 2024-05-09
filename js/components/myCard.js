import { 
    getAllClientsFromSpain, 
    getAllClientFromMadridCodoEMploytesSales11Or30,
    getAllClientqAndSalesRepresentative,
    getAllClientWithPaymentAndSalesRepresentative,
    getAllClientWithoutPaymentAndSalesRepresentative,
} from "../module/clients.js";
import {
    getAllFullNameAndEmailsAndBoss,
    getBossFullNameAndEmail,
    getAllEmployeesWithBoss,
} from "../module/employees.js";
import {
    getAllOficceAndCodeCity,
    getAllOficceCityAndMovil
} from "../module/offices.js";
import {
    getAllStatusRequests,
    getAllCode_requestDate_deliveryLater,
    getAllCode_requestDate_deliveryBefore,
    getAllRequestsRefused2009,
    getAllRequestsDeliveredJanuary,
} from "../module/requests.js";
import {
    getAllCode_clientData_payment2008,
    getAllPayments2008WithPaypal,
    getAllpayments,
} from "../module/payments.js";
import {
    getAllproductsOrnamentales100,
} from "../module/product.js";

export class Mycard extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.innerHTML = /*html*/`
            <link rel="stylesheet" href="../css/myCard.css">  
         `
    }
    async getAllClientsFromSpainDesign(){
        let data = await getAllClientsFromSpain();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.name} # ${val.code}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Id: </b> ${val.id}</p>
                            <p><b>Country: </b>${val.country}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    async getAllClientsFromSpainAndRepresentative11Or30Design(){
        let data = await getAllClientFromMadridCodoEMploytesSales11Or30();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.name} # ${val.code}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Id: </b> ${val.id}</p>
                            <p><b>City: </b>${val.city}</p>
                            <p><b>Code Employee Sales Manager: </b>${val.code_employee_sales_manager}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    async getAllClientqAndSalesRepresentativeDesign(){
        let data = await getAllClientqAndSalesRepresentative();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.name} # ${val.code}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Id: </b> ${val.id}</p>
                            <p><b>Sales Representative: </b>${val.salesRepresentative}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    async getAllFullNameAndEmailsAndBossDesign(){
        let data = await getAllFullNameAndEmailsAndBoss();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.name} # ${val.code}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>full name: </b> ${val.name} ${val.fullLastname}</p>
                            <p><b>Email: </b>${val.email}</p>
                            <p><b>Code Boss: </b>${val.code_boss}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    async getBossFullNameAndEmailDesign(){
        let data = await getBossFullNameAndEmail();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.name} # ${val.code}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>full name: </b> ${val.name} ${val.fullLastname}</p>
                            <p><b>Position: </b>${val.position}</p>
                            <p><b>Email: </b>${val.email}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    async getAllOficceAndCodeCityDesign(){
        let data = await getAllOficceAndCodeCity();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>Code Office:  ${val.code_office}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>City: </b> ${val.city}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    async getAllOficceCityAndMovilDesign(){
        let data = await getAllOficceCityAndMovil();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>Code Office: ${val.code_office}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Country: </b> ${val.country}</p>
                            <p><b>Movil: </b> ${val.movil}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    async getAllStatusRequestsDesign(){
        let data = await getAllStatusRequests();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>Status</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>State: </b> ${val.status}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    async getAllCode_clientData_payment2008Design(){
        let data = await getAllCode_clientData_payment2008();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>Id Transaction ${val.id}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Code Client: </b> ${val.code_client}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    async getAllCode_requestDate_deliveryLaterDesign(){
        let data = await getAllCode_requestDate_deliveryLater();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>Code Requests ${val.code_request}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Code Client: </b> ${val.code_client}</p>
                            <p><b>Data wait: </b> ${val.date_wait}</p>
                            <p><b>Data delivery: </b> ${val.date_delivery}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    async getAllCode_requestDate_deliveryBeforeDesign(){
        let data = await getAllCode_requestDate_deliveryBefore();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>Code Requests ${val.code_request}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Code Client: </b> ${val.code_client}</p>
                            <p><b>Data wait: </b> ${val.date_wait}</p>
                            <p><b>Data delivery: </b> ${val.date_delivery}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    async getAllRequestsRefused2009Design(){
        let data = await getAllRequestsRefused2009();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>Code Requests ${val.code_request}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Id: </b> ${val.id}</p>
                            <p><b>Code Client: </b> ${val.code_client}</p>
                            <p><b>Data wait: </b> ${val.date_wait}</p>
                            <p><b>Data delivery: </b> ${val.date_delivery}</p>
                            <p><b>Status: </b> ${val.status}</p>
                            <p><b>Comment: </b> ${val.comment}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    async getAllRequestsDeliveredJanuaryDesign(){
        let data = await getAllRequestsDeliveredJanuary();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>Code Requests ${val.code_request}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Id: </b> ${val.id}</p>
                            <p><b>Code Client: </b> ${val.code_client}</p>
                            <p><b>Data wait: </b> ${val.date_wait}</p>
                            <p><b>Data delivery: </b> ${val.date_delivery}</p>
                            <p><b>Status: </b> ${val.status}</p>
                            <p><b>Comment: </b> ${val.comment}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    async getAllPayments2008WithPaypalDesign(){
        let data = await getAllPayments2008WithPaypal();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>Id Transaction ${val.id_transaction}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Code Client: </b> ${val.code_client}</p>
                            <p><b>Payment: </b> ${val.payment}</p>
                            <p><b>Date payment: </b> ${val.date_paymnet}</p>
                            <p><b>Total: </b> ${val.total}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    async getAllpaymentsDesign(){
        let data = await getAllpayments();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>Payments</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Payment: </b> ${val.payment}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    async getAllproductsOrnamentales100Design(){
        let data = await getAllproductsOrnamentales100();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.name} # ${val.code_product}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Gama: </b> ${val.gama}</p>
                            <p><b>Stock: </b> ${val.stock}</p>
                            <p><b>Price Sale: </b> ${val.price_sale}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    async getAllClientWithPaymentAndSalesRepresentativeDesign(){
        let data = await getAllClientWithPaymentAndSalesRepresentative();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.name} # ${val.code}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Sales Representative: </b> ${val.salesRepresentative}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    async getAllClientWithoutPaymentAndSalesRepresentativeDesign(){
        let data = await getAllClientWithoutPaymentAndSalesRepresentative();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.name} # ${val.code}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Sales Representative: </b> ${val.salesRepresentative}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    async getAllEmployeesWithBossDesign(){
        let data = await getAllEmployeesWithBoss();
        data.forEach(val => {
            console.log(data)
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.name} # ${val.code}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Name Boss: </b> ${val.name_boss}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    async getAllEmployNotClientsDesign(){
        let data = await getAllEmployNotClients();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.name} ${val.lastname1} ${val.lastname2} # ${val.employee_code}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Id: </b> ${val.id}</p>
                            <p><b>Cargo: </b>${val.position}</p>
                            <p><b>Oficina: </b>${val.code_office}</p>
                            <p><b>Jefe encargado: </b>${val.name_boss}</p>
                            <p><b>Numero de extencion: </b>${val.extension}</p>
                            <p><b>Correo electronico: </b>${val.email}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    static get observedAttributes() {
        return ["logic"];
    }
    attributeChangedCallback(name, old, now) {
        if(name=="logic" && now=="client_6") this.getAllClientsFromSpainDesign()
        if(name=="logic" && now=="client_16") this.getAllClientsFromSpainAndRepresentative11Or30Design()
        if(name=="logic" && now=="client_17") this.getAllClientqAndSalesRepresentativeDesign()
        if(name=="logic" && now=="employ_3") this.getAllFullNameAndEmailsAndBossDesign()
        if(name=="logic" && now=="employ_4") this.getAllFullNameAndEmailsAndBossDesign()
        if(name=="logic" && now=="offices_1") this.getAllOficceAndCodeCityDesign()
        if(name=="logic" && now=="offices_2") this.getAllOficceCityAndMovilDesign()
        if(name=="logic" && now=="requests_7") this.getAllStatusRequestsDesign()
        if(name=="logic" && now=="payments_8") this.getAllCode_clientData_payment2008Design()
        if(name=="logic" && now=="requests_9") this.getAllCode_requestDate_deliveryLaterDesign()
        if(name=="logic" && now=="requests_10") this.getAllCode_requestDate_deliveryBeforeDesign()
        if(name=="logic" && now=="requests_11") this.getAllRequestsRefused2009Design()
        if(name=="logic" && now=="requests_12") this.getAllRequestsDeliveredJanuaryDesign()
        if(name=="logic" && now=="payments_13") this.getAllPayments2008WithPaypalDesign()
        if(name=="logic" && now=="payments_14") this.getAllpaymentsDesign()
        if(name=="logic" && now=="product_15") this.getAllproductsOrnamentales100Design()
        if(name=="logic" && now=="client_18") this.getAllClientWithPaymentAndSalesRepresentativeDesign()
        if(name=="logic" && now=="client_19") this.getAllClientWithoutPaymentAndSalesRepresentativeDesign()
        if(name=="logic" && now=="client_20") this.getAllEmployeesWithBossDesign()

    }
}

// /*html*/`
// <div class="report__card">
// <div class="card__title">
//     <div>${val.name} # ${val.client_code}</div>
// </div>
// <div class="card__body">
//     <div class="body__marck">
//         <p><b>Id: </b> ${val.id}</p>
//         <p><b>Codigo del empleado: </b>${val.code_employee_sales_manager}</p>
//         <p><b>Contacto: </b>${val.phone} - ${val.fax}</p>
//         <p><b>Nombre del representante: </b>${val.contact_name} ${val.contact_lastname}</p>
//         <p><b>Dirrecion: </b>${val.address1} ${(val.address2) ? val.address2 : ""}</p>
//         <p><b>Ubicacion: </b>${val.country} ${val.region} ${val.city} ${val.postal_code}</p>
//     </div>
// </div>
// </div>
// `;