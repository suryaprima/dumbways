function tentukanOlahraga(kalori) {
    let olahraga = ""
    let waktu = kalori / 10

    if (kalori > 750) {
        olahraga = "Lari"
        return console.log("Jumlah Kalori : "+ kalori +"\nJenis Olahraga : "+ olahraga + "\nWaktu Olahraga : " +Math.round(waktu))
    } else if (kalori > 500) {
        olahraga = "Badminton"
        return console.log("Jumlah Kalori : "+ kalori +"\nJenis Olahraga : "+ olahraga + "\nWaktu Olahraga : " +Math.round(waktu))
    } else {
        olahraga = "Renang"
        return console.log("Jumlah Kalori : "+ kalori +"\nJenis Olahraga : "+ olahraga + "\nWaktu Olahraga : " +Math.round(waktu))
    }
    
}

tentukanOlahraga(500)