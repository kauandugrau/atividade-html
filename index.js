function kmParaMilha(km){
    return km * 0,62;
}

function milhaParaKm(milha) {
    return milha / 0,62;
}

function pesParaMetros(pes){
    return pes * 0,3;
}

function metrosParaPes(metros){
    return metros / 0,3;
}

function polegadaParaCm(polegada){
    return polegada * 2,54;
}

function cmParaPolegada(cm){
    return cm / 2,54;
}

// console.log("10 km em milhas", kmParaMilha(10));
// console.log("6,2 milhas em km", milhaParaKm(6,2));

// console.log("10 pes para metros", pesParaMetros(10));
// console.log("3 metros em pés", metrosParaPes(3));

// console.log("12 polegadas em milhas", polegadaParaCm(12));
// console.log("30 cm em milhas", cmParaPolegada(30));

export default  {
    kmParaMilha,
    milhaParaKm,
    pesParaMetros,
    metrosParaPes,
    polegadaParaCm,
    cmParaPolegada,
};