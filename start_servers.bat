@echo off
start cmd /k json-server js/db/gama.json -p 5503
start cmd /k json-server js/db/offices.json -p 5504
start cmd /k json-server js/db/request_details.json -p 5507
start cmd /k json-server js/db/requests.json -p 5508
start cmd /k json-server js/db/payments.json -p 5505
start cmd /k json-server js/db/product.json -p 5506