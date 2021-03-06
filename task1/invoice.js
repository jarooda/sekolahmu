const dateParser = (rawDate) => {
  const date = new Date(rawDate)
  const indonesianDate = date.toLocaleDateString('id', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})

  return indonesianDate
}

const currencyFormat = (string) => {
  const number = +string
  const currency = Number((number).toFixed(2)).toLocaleString(['ban', 'id'])

  return `Rp. ${currency}`
}

const fetchData = () => {
  $.getJSON("./data.json")
    .done(({ data }) => {
      const invoice_data = data.data

      $("#created_at").text(`Dibuat: ${dateParser(invoice_data.created_at)}`)
      $("#expired_at").text(`Kadaluarsa: ${dateParser(invoice_data.expired_at)}`)
      $("#payment_channel").text(`Pembayaran: ${invoice_data.payment_channel}`)
      $("#full_id").text(`Invoice: ${invoice_data.full_id}`)
      $("#name").text(`${invoice_data.name}`)
      $("#email").text(`${invoice_data.email}`)
      $("#total_amount").text(`${currencyFormat(invoice_data.total_amount)}`)
      $("#amount").text(`${currencyFormat(invoice_data.amount)}`)
      $("#voucher_code").text(`${invoice_data.voucher.voucher_code}`)
      $("#voucher_amount").text(`${currencyFormat(invoice_data.voucher.voucher_amount)}`)

      const programs = invoice_data.items[0].programs
      
      programs.forEach(program => {
        $("#invoice_items").append(`
          <div class="grid-body">
            <p>${program.details.name}</p>
            <p class="text-right">${currencyFormat(program.amount)}</p>
          </div>
        `)
      })

      if (invoice_data.status_desc === 'success') {
        $("#payment_channel").append(` (Lunas)`)
        $("#expired_at").remove()
      }
    })
}

$(document).ready(function(){
  fetchData()
});