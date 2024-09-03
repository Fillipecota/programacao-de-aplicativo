import Cachorro from "./Cachorro";
import Dono from "./Dono";

var d1 = new Dono("Fillipe", "(00) 0000-0000");
var c1 = new Cachorro("whiskylate", "alcool", "branquinha-amarelado", "meio copo", d1);
c1.exibirCachorro();
c1.exibirDono();

//Modo de fazer sem o contrutor//
//var c1 = new Cachorro();
//c1.nome = "whiskylate"
//c1.raca = "alcool"
//c1.cor = "branquinha-amarelado"
//c1.tamanho = "meio copo"
//var d1 = new Dono();
//d1.nome = "Fillipe"
//d1.telefone = "(00) 0000-0000"
//c1.dono = d1
//c1.exibirCachorro();
//c1.exibirDono();

var d2 = new Dono("SALSICHA", "(11) 0000-0000")
var c2 = new Cachorro("ScoobyDoo", "Pastor Alemão", "Marron", " grande", d2);
c2.exibirCachorro();
c2.exibirDono();

//Modo de fazer sem o contrutor//
//var c2 = new Cachorro();
//c2.nome = "ScoobyDoo";
//c2.raca = "Pastor Alemão";
//c2.cor = "Marron";
//c2.tamanho = " grande";
//var d2 = new Dono();
//d2.nome = "Salsicha";
//d2.telefone = "(11) 0000-0000";
//c2.dono = d2
//c2.exibirCachorro();
//c2.exibirDono();

