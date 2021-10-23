import '../partials/select_kelas'
import '../partials/select_mapel'
import '../partials/select_rombel'
import '../partials/select_paket_soal'

const table = $('#table').DataTable()

const addWaktuMulai = $('#addWaktu').daterangepicker({
    singleDatePicker: true,
    timePicker: true,
    timePicker24Hour: true,
    startDate: moment(),
    locale: {
      format: 'D-M-Y hh:mm'
    }
})

$('#tes').daterangepicker()

// form tambah
const formTambah = $('#formTambah')
formTambah.on('submit', function (e) {
    e.preventDefault();

    const form = new FormData(this)

    $.post({
        url: URL_ADMIN + '/ujian',
        processData: false,
        contentType: false,
        data: form,
        success: function(res) {
            console.log(res)
        }
    })
})