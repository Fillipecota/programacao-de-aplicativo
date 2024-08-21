import leia from "readline-sync"

type categoria = {
    roupas: string,
    camas: string,
    mesas: string,
    banhos: string
}

type Produto = {
    pdRoupas: string,
    pdCama: string,
    pdMesa: string,
    pdBanho: string
}

var pdRoupas = leia.question("PRODUTO DE ROUPA: ")
var pdCama = leia.question("PRODUTO DE CAMA: ")
var pdMesa = leia.question(" PRODUTO DE MESA: ")
var pdBanho = leia.question("PRODUTO DE BANHO: ")

const loja = {
    roupas:pdRoupas,
    camas: pdCama,
    mesas: pdMesa,
    banhos: pdBanho

}

console.table()