

function yemekTarifiAl() {
    let yemekAdi = prompt("Hangi yemeğin tarifini vereceksiniz?");
    if (!yemekAdi) {
        console.log("Yemek adı verilmedi!");
        return;
    }

    let malzemeler = prompt("Bu yemek için hangi malzemeler gerekiyor? (Virgülle ayırarak yazınız)");
    if (!malzemeler) {
        console.log("Malzeme bilgisi verilmedi!");
        return;
    }

    let tarif = prompt("Yemeğin nasıl yapıldığını kısaca anlatın.");
    if (!tarif) {
        console.log("Tarif verilmedi!");
        return;
    }
    let yemekTarifi = [];
    
    yemekTarifi.push(yemekAdi,malzemeler,tarif);

    console.log(yemekTarifi);

    localStorage.setItem("tarifler", JSON.stringify(tarif));
}

yemekTarifiAl();