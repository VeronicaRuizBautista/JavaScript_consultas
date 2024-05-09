import "./components/clock.js";
import { updateClock } from "./components/clock.js";
import { Mycard } from "./components/myCard.js";
import { Mydetails } from "./components/myDetails.js";


let btn = document.querySelectorAll("button")
let report__menu = document.querySelectorAll(".report__menu button")
let report__details = document.querySelector(".report__details")
btn.forEach(val =>{
    val.addEventListener("click", (e)=>{
        for(let val of report__menu) val.classList.remove('report__active');
        e.target.classList.add("report__active")
        
        if(e.target.innerHTML=="clients"){
            report__details.innerHTML = /*html*/`
                <my-details logic="client_6" text="6. Devuelve el nombre de los clientes y el nombre de sus representantes junto con la ciudad de la oficina a la que pertenece el representante."></my-details>
                <my-details logic="client_16" text="16. Devuelve un listado con todos los clientes que sean de la ciudad de Madrid y cuyo representante de ventas tenga el código de empleado 11 o 30."></my-details>
                <my-details logic="client_1.4.5.1" text="1.4.5.1 Obtén un listado con el nombre de cada cliente y el nombre y apellido de su representante de ventas."></my-details>
            `
        }
        if(e.target.innerHTML=="employees"){
            report__details.innerHTML = /*html*/`
                <my-details logic="employ_3" text="3. Devuelve un listado con el nombre, apellidos y email de los empleados cuyo jefe tiene un código de jefe igual a 7."></my-details>
                <my-details logic="employ_4" text="4. Devuelve el nombre del puesto, nombre, apellidos y email del jefe de la empresa."></my-details>
            
            `;
        }
        if(e.target.innerHTML=="offices"){
            report__details.innerHTML = /*html*/`
                <my-details logic="offices_1" text="1. Devuelve un listado con el código de oficina y la ciudad donde hay oficinas."></my-details>
                <my-details logic="offices_2" text="2. Devuelve un listado con la ciudad y el teléfono de las oficinas de España."></my-details>
            `;
        }
        if(e.target.innerHTML=="requests"){
            report__details.innerHTML = /*html*/`
                <my-details logic="requests_7" text="7. Devuelve un listado con los distintos estados por los que puede pasar un pedido."></my-details>
                <my-details logic="requests_9" text="9. Devuelve un listado con el código de pedido, código de cliente, fecha esperada y fecha de entrega de los pedidos que no han sido entregados a tiempo."></my-details>
                <my-details logic="requests_10" text="10. Devuelve un listado con el código de pedido, código de cliente, fecha esperada y fecha de entrega de los pedidos cuya fecha de entrega ha sido al menos dos días antes de la fecha esperada."></my-details>
                <my-details logic="requests_11" text="11. Devuelve un listado de todos los pedidos que fueron **rechazados** en 2009."></my-details>
                <my-details logic="requests_12" text="12. Devuelve un listado de todos los pedidos que han sido **entregados** en el mes de enero de cualquier año."></my-details>
            `;
        }
        if(e.target.innerHTML=="payments"){
            report__details.innerHTML = /*html*/`
                <my-details logic="payments_8" text="8. Devuelve un listado con el código de cliente de aquellos clientes que realizaron algún pago en 2008."></my-details>
                <my-details logic="payments_13" text="13. Devuelve un listado con todos los pagos que se realizaron en el año 2008 mediante Paypal. Ordene el resultado de mayor a menor."></my-details>
                <my-details logic="payments_14" text="14. Devuelve un listado con todas las formas de pago que aparecen en la tabla pago. Tenga en cuenta que no deben aparecer formas de pago repetidas."></my-details>            `;
        }

    })
})
let [clients] = report__menu
clients.click();
customElements.define("my-details", Mydetails)
customElements.define("my-card", Mycard)
customElements.define("my-clock", updateClock)