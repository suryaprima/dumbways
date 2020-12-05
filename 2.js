function cariKata(kata=""){
     let arr = ["Pagi itu sangatlah cerah, mentari pagi muncul memancarkan sinar cerah dengan semangat 67 eh semangat 45 maksudnya", "Sama denganku, hari ini adalah hari ulang tahun orang yang sangat aku kagumi bahkan kucintai","Semua sudah aku persiapkan termasuk kue ultah serta kadonya", "Aku masuk ke kelas dengan hati gembira dan bibir tersenyum-senyum sendiri", "Kakiku melangkah tepat di depan pintu masuk kelas dan disambut ceria oleh sahabat sahabatku Syarif dan Renata.","Yaps! Aku hampir lupa, aku Sherly kepanjangan dari Sherlyna rantika putri", "Cewek manis berkumis tipis yang kini sedang dilanda asmara cinta."]
    var result = 0
    for (let i = 0; i<arr.length; i++){
        let kal = arr[i].split(' ')
        var temp = 0
        for(let j=0; j<kal.length; j++){
            let chg = kal[j].toLowerCase()
            let chgKata = kata.toLowerCase()            
            if (chg == chgKata){
                temp = temp+1                
            }            
        }
                
        if (temp > 0){
            result = result + 1
            console.log(`Result ${result} : kalimat "${kata}" muncul ${temp} kali pada index ${i}`)
        }
    }
}

cariKata("aku")