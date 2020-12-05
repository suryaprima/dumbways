function perjalananSales(toko='', tempatA='', tempatB='', tempatC='', tempatD=''){
    let toko_To_TempatA = 2
    let tempatA_To_TempatB = 5
    let tempatB_To_TempatC = 1.5
    let tempatC_To_TempatD = 2.5
    let tempatD_To_Toko = tempatC_To_TempatD + tempatB_To_TempatC + tempatA_To_TempatB + toko_To_TempatA
    let one_Liter_to_KM = 2.5
    let price_Bensin = 7000

    return console.log(`
    ${toko} - ${tempatA} = ${toko_To_TempatA} KM | Rp ${(price1=(toko_To_TempatA / one_Liter_to_KM)* price_Bensin)} | ${bensin1=toko_To_TempatA/one_Liter_to_KM} Liter
    ${tempatA} - ${tempatB} = ${tempatA_To_TempatB} KM | Rp ${(price2=(tempatA_To_TempatB / one_Liter_to_KM)* price_Bensin)} | ${bensin2=tempatA_To_TempatB/one_Liter_to_KM} Liter
    ${tempatB} - ${tempatC} = ${tempatB_To_TempatC} KM | Rp ${(price3=(tempatB_To_TempatC / one_Liter_to_KM)* price_Bensin)} | ${bensin3=tempatB_To_TempatC/one_Liter_to_KM} Liter
    ${tempatC} - ${tempatD} = ${tempatC_To_TempatD} KM | Rp ${(price4=(tempatC_To_TempatD / one_Liter_to_KM)* price_Bensin)} | ${bensin4=tempatC_To_TempatD/one_Liter_to_KM} Liter
    ${tempatD} - ${toko} = ${tempatD_To_Toko} KM | Rp ${(price5=(tempatD_To_Toko / one_Liter_to_KM)* price_Bensin)} | ${bensin5=tempatD_To_Toko/one_Liter_to_KM} Liter
    
    Total Jarak = ${tempatD_To_Toko * 2} KM
    Total Harga = Rp ${price1+price2+price3+price4+price5}
    Total Bensin = ${bensin1+bensin2+bensin3+bensin4+bensin5} Liter`)
}

perjalananSales('Medan', 'Tanjung Morawa', 'Pakam', 'Perbaungan', 'Sei Rampah')