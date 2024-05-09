import { 
    getAllClientsFromSpain, 
    getAllClientFromMadridCodoEMploytesSales11Or30,
    getAllClientqAndSalesRepresentative,
} from "../module/clients.js";
import {
    getAllFullNameAndEmailsAndBoss,
    getBossFullNameAndEmail,
} from "../module/employees.js";

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
        if(name=="logic" && now=="client_1.4.5.1") this.getAllClientqAndSalesRepresentativeDesign()
        if(name=="logic" && now=="employ_3") this.getAllFullNameAndEmailsAndBossDesign()
        if(name=="logic" && now=="employ_4") this.getAllFullNameAndEmailsAndBossDesign()

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