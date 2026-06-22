app.js
Aciklama: Musteri JavaScript - Form dogrulama, takvim, adim gecisleri
Boyut: 16344 karakter | Satir: 458
// Global Variables
let currentStep = 1;
let selectedType = null;
let selectedDate = null;
let selectedTime = null;
let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();
const formData = {
 plaka: '',
 ruhsatSeri: '',
 sehir: '',
 istasyon: '',
 muayeneTuru: '',
 tarih: '',
 saat: '',
 ad: '',
 soyad: '',
 tcNo: '',
 telefon: '',
 email: '',
 aracTuru: '',
 ucret: ''
};
const stations = {
 istanbul: [
 { value: 'pendik', name: 'Pendik Istasyonu', address: 'Sanayi Mah. Tersaneler Bulvari No:12, Pendik/Istanbul' },
 { value: 'kadikoy', name: 'Kadikoy Istasyonu', address: 'Hasanpasa Mah. Albay Saim Bey Cad. No:5, Kadikoy/Istanbul' },
 { value: 'bagcilar', name: 'Bagcilar Istasyonu', address: 'Mahmutbey Mah. Inonu Cad. No:89, Bagcilar/Istanbul' }
 ],
 ankara: [
 { value: 'cankaya', name: 'Cankaya Istasyonu', address: 'Kizilay Mah. Ataturk Bulvari No:15, Cankaya/Ankara' },
 { value: 'yenimahalle', name: 'Yenimahalle Istasyonu', address: 'Bati Sitesi Mah. Ankara Cad. No:42, Yenimahalle/Ankara' }
 ],
 izmir: [
 { value: 'konak', name: 'Konak Istasyonu', address: 'Alsancak Mah. Kibris Sehitleri Cad. No:78, Konak/Izmir' },
 { value: 'bornova', name: 'Bornova Istasyonu', address: 'Kazimdirik Mah. Ankara Cad. No:156, Bornova/Izmir' }
 ],
 bursa: [
 { value: 'nilufer', name: 'Nilufer Istasyonu', address: 'Odunluk Mah. Izmir Yolu Cad. No:25, Nilufer/Bursa' }
 ],
 antalya: [
 { value: 'muratpasa', name: 'Muratpasa Istasyonu', address: 'Caglayan Mah. Fener Cad. No:112, Muratpasa/Antalya' }
 ],
 adana: [
 { value: 'seyhan', name: 'Seyhan Istasyonu', address: 'Resatbey Mah. Ziyapasa Bulvari No:45, Seyhan/Adana' }
 ],
 konya: [
 { value: 'selcuklu', name: 'Selcuklu Istasyonu', address: 'Feritpasa Mah. Ankara Cad. No:88, Selcuklu/Konya' }
 ],
 gaziantep: [
 { value: 'sahinbey', name: 'Sahinbey Istasyonu', address: 'Karatas Mah. Ipekyolu Cad. No:67, Sahinbey/Gaziantep' }
 ]
};
const typePrices = {
 periyodik: '1.872,42 TL',
 tespit: '1.872,42 TL',
 yenileme: '936,21 TL',
 tadilat: '1.404,32 TL'
};
const typeNames = {
 periyodik: 'Periyodik Muayene',
 tespit: 'Tespit Muayenesi',
 yenileme: 'Muayene Tekrari',
 tadilat: 'Tadilat Muayenesi'
};
// City &amp; Station Selection
document.getElementById('sehir').addEventListener('change', function() {
 const sehir = this.value;
 const istasyonSelect = document.getElementById('istasyon');
 if (sehir &amp;&amp; stations[sehir]) {
 istasyonSelect.innerHTML = '&lt;option value=""&gt;Istasyon Seciniz&lt;/option&gt;';
 stations[sehir].forEach(station =&gt; {
 istasyonSelect.innerHTML += '&lt;option value="' + station.value + '"&gt;' + station.name + '&lt;/option&gt;';
 });
 istasyonSelect.disabled = false;
 } else {
 istasyonSelect.innerHTML = '&lt;option value=""&gt;Once Sehir Seciniz&lt;/option&gt;';
 istasyonSelect.disabled = true;
 }
});
// Step Navigation
function updateProgress(step) {
 const progress = ((step - 1) / 4) * 100;
 document.getElementById('progressLine').style.width = progress + '%';
 for (let i = 1; i &lt;= 5; i++) {
 const indicator = document.getElementById('step' + i + 'Indicator');
 indicator.classList.remove('active', 'completed');
 if (i &lt; step) {
 indicator.classList.add('completed');
 indicator.querySelector('.step-circle').innerHTML = '&lt;i class="fas fa-check"&gt;&lt;/i&gt;';
 } else if (i === step) {
 indicator.classList.add('active');
 indicator.querySelector('.step-circle').innerHTML = i;
 } else {
 indicator.querySelector('.step-circle').innerHTML = i;
 }
 }
}
function showStep(step) {
 for (let i = 1; i &lt;= 5; i++) {
 document.getElementById('step' + i).classList.add('hidden');
 }
 document.getElementById('successPage').style.display = 'none';
 if (step &lt;= 5) {
 document.getElementById('step' + step).classList.remove('hidden');
 }
 currentStep = step;
 updateProgress(step);
}
function nextStep(step) {
 if (validateStep(step)) {
 if (step === 3) {
 const sehir = document.getElementById('sehir').value;
 const istasyonVal = document.getElementById('istasyon').value;
 if (sehir &amp;&amp; istasyonVal &amp;&amp; stations[sehir]) {
 const station = stations[sehir].find(s =&gt; s.value === istasyonVal);
 if (station) {
 document.getElementById('stationName').textContent = 'TUVTRK ' + station.name;
 document.getElementById('stationAddress').textContent = station.address;
 }
 }
 generateCalendar();
 }
 if (step === 4) {
 updateSummary();
 }
 showStep(step + 1);
 }
}
function prevStep(step) {
 showStep(step - 1);
}
// Validation
function validateStep(step) {
 let isValid = true;
 if (step === 1) {
 const plaka = document.getElementById('plaka').value.trim();
 const ruhsat = document.getElementById('ruhsatSeri').value.trim();
 const sehir = document.getElementById('sehir').value;
 const istasyon = document.getElementById('istasyon').value;
 if (!plaka) {
 showAlert('Lutfen plaka numarasi giriniz.', 'error');
 isValid = false;
 } else if (!ruhsat) {
 showAlert('Lutfen ruhsat seri numarasi giriniz.', 'error');
 isValid = false;
 } else if (!sehir) {
 showAlert('Lutfen sehir seciniz.', 'error');
 isValid = false;
 } else if (!istasyon) {
 showAlert('Lutfen istasyon seciniz.', 'error');
 isValid = false;
 }
 if (isValid) {
 formData.plaka = plaka.toUpperCase();
 formData.ruhsatSeri = ruhsat.toUpperCase();
 formData.sehir = sehir;
 formData.istasyon = istasyon;
 }
 }
 if (step === 2) {
 if (!selectedType) {
 showAlert('Lutfen muayene turu seciniz.', 'error');
 isValid = false;
 } else {
 formData.muayeneTuru = selectedType;
 formData.ucret = typePrices[selectedType];
 }
 }
 if (step === 3) {
 if (!selectedDate) {
 showAlert('Lutfen tarih seciniz.', 'error');
 isValid = false;
 } else if (!selectedTime) {
 showAlert('Lutfen saat seciniz.', 'error');
 isValid = false;
 } else {
 formData.tarih = selectedDate;
 formData.saat = selectedTime;
 }
 }
 if (step === 4) {
 const ad = document.getElementById('ad').value.trim();
 const soyad = document.getElementById('soyad').value.trim();
 const tcNo = document.getElementById('tcNo').value.trim();
 const telefon = document.getElementById('telefon').value.trim();
 const email = document.getElementById('email').value.trim();
 const kvkk = document.getElementById('kvkk').checked;
 if (!ad) {
 showAlert('Lutfen adinizi giriniz.', 'error');
 isValid = false;
 } else if (!soyad) {
 showAlert('Lutfen soyadinizi giriniz.', 'error');
 isValid = false;
 } else if (!tcNo || tcNo.length !== 11) {
 showAlert('Lutfen gecerli T.C. Kimlik numarasi giriniz.', 'error');
 isValid = false;
 } else if (!telefon || telefon.length &lt; 10) {
 showAlert('Lutfen gecerli telefon numarasi giriniz.', 'error');
 isValid = false;
 } else if (!email || !email.includes('@')) {
 showAlert('Lutfen gecerli e-posta adresi giriniz.', 'error');
 isValid = false;
 } else if (!kvkk) {
 showAlert('Devam etmek icin KVKK aydinlatma metnini onaylamaniz gerekmektedir.', 'error');
 isValid = false;
 }
 if (isValid) {
 formData.ad = ad;
 formData.soyad = soyad;
 formData.tcNo = tcNo;
 formData.telefon = telefon;
 formData.email = email;
 formData.aracTuru = document.getElementById('aracTuru').value;
 }
 }
 return isValid;
}
function showAlert(message, type) {
 const existing = document.querySelector('.alert');
 if (existing) existing.remove();
 const alert = document.createElement('div');
 alert.className = 'alert alert-' + type + ' fade-in';
 alert.innerHTML = '&lt;i class="fas fa-' + (type === 'error' ? 'exclamation-circle' : 'check-circle') + '"&gt;&lt;/i&gt; ' + message;
 const container = document.getElementById('step' + currentStep);
 container.insertBefore(alert, container.querySelector('.form-header').nextSibling);
 setTimeout(() =&gt; alert.remove(), 5000);
}
// Type Selection
function selectType(element, type) {
 document.querySelectorAll('.type-card').forEach(card =&gt; card.classList.remove('selected'));
 element.classList.add('selected');
 selectedType = type;
}
// Calendar
function generateCalendar() {
 const monthNames = ['Ocak', 'Subat', 'Mart', 'Nisan', 'Mayis', 'Haziran', 'Temmuz', 'Agustos', 'Eylul', 'Ekim', 'Kasim', 'Aralik'];
 const dayNames = ['Pz', 'Pt', 'Sa', 'Ca', 'Pe', 'Cu', 'Ct'];
 document.getElementById('currentMonth').textContent = monthNames[currentMonth] + ' ' + currentYear;
 const firstDay = new Date(currentYear, currentMonth, 1).getDay();
 const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
 const today = new Date();
 let html = '';
 dayNames.forEach(day =&gt; {
 html += '&lt;div class="calendar-day-header"&gt;' + day + '&lt;/div&gt;';
 });
 for (let i = 0; i &lt; firstDay; i++) {
 html += '&lt;div class="calendar-day disabled"&gt;&lt;/div&gt;';
 }
 for (let day = 1; day &lt;= daysInMonth; day++) {
 const date = new Date(currentYear, currentMonth, day);
 const isToday = date.toDateString() === today.toDateString();
 const isPast = date &lt; today &amp;&amp; !isToday;
 const isWeekend = date.getDay() === 0 || date.getDay() === 6;
 const isDisabled = isPast || isWeekend;
 let classes = 'calendar-day';
 if (isDisabled) classes += ' disabled';
 if (isToday) classes += ' today';
 const dateStr = day + '.' + (currentMonth + 1) + '.' + currentYear;
 if (selectedDate === dateStr) classes += ' selected';
 if (isDisabled) {
 html += '&lt;div class="' + classes + '"&gt;' + day + '&lt;/div&gt;';
 } else {
 html += '&lt;div class="' + classes + '" onclick="selectDate('' + dateStr + '', this)"&gt;' + day + '&lt;/div&gt;';
 }
 }
 document.getElementById('calendarGrid').innerHTML = html;
}
function changeMonth(delta) {
 currentMonth += delta;
 if (currentMonth &gt; 11) {
 currentMonth = 0;
 currentYear++;
 } else if (currentMonth &lt; 0) {
 currentMonth = 11;
 currentYear--;
 }
 generateCalendar();
}
function selectDate(dateStr, element) {
 document.querySelectorAll('.calendar-day').forEach(el =&gt; el.classList.remove('selected'));
 element.classList.add('selected');
 selectedDate = dateStr;
 selectedTime = null;
 document.getElementById('selectedDateText').textContent = 'Secilen Tarih: ' + dateStr;
 generateTimeSlots();
}
function generateTimeSlots() {
 const slots = ['08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30'];
 const disabledSlots = ['09:00', '10:30', '14:00', '16:00'];
 let html = '';
 slots.forEach(time =&gt; {
 const isDisabled = disabledSlots.includes(time);
 let classes = 'time-slot';
 if (isDisabled) classes += ' disabled';
 if (selectedTime === time) classes += ' selected';
 if (isDisabled) {
 html += '&lt;div class="' + classes + '"&gt;' + time + '&lt;/div&gt;';
 } else {
 html += '&lt;div class="' + classes + '" onclick="selectTime('' + time + '', this)"&gt;' + time + '&lt;/div&gt;';
 }
 });
 document.getElementById('timeSlots').innerHTML = html;
}
function selectTime(time, element) {
 document.querySelectorAll('.time-slot').forEach(el =&gt; el.classList.remove('selected'));
 element.classList.add('selected');
 selectedTime = time;
}
// Summary
function updateSummary() {
 document.getElementById('summaryPlaka').textContent = formData.plaka;
 document.getElementById('summaryType').textContent = typeNames[formData.muayeneTuru] || '-';
 document.getElementById('summaryDate').textContent = formData.tarih || '-';
 document.getElementById('summaryTime').textContent = formData.saat || '-';
 const sehir = document.getElementById('sehir').value;
 const istasyonVal = document.getElementById('istasyon').value;
 let stationName = '-';
 if (sehir &amp;&amp; istasyonVal &amp;&amp; stations[sehir]) {
 const station = stations[sehir].find(s =&gt; s.value === istasyonVal);
 if (station) stationName = station.name;
 }
 document.getElementById('summaryStation').textContent = stationName;
 document.getElementById('summaryName').textContent = (formData.ad + ' ' + formData.soyad) || '-';
 document.getElementById('summaryPhone').textContent = formData.telefon || '-';
 document.getElementById('summaryPrice').textContent = formData.ucret || '-';
}
// Confirm Appointment
function confirmAppointment() {
 const onay = document.getElementById('onay').checked;
 if (!onay) {
 showAlert('Devam etmek icin bilgilerin dogrulugunu onaylamaniz gerekmektedir.', 'error');
 return;
 }
 document.getElementById('loadingOverlay').classList.add('active');
 setTimeout(() =&gt; {
 document.getElementById('loadingOverlay').classList.remove('active');
 const randomNum = Math.floor(Math.random() * 900000) + 100000;
 document.getElementById('appointmentNo').textContent = 'R-2026-' + randomNum;
 document.getElementById('successPlaka').textContent = formData.plaka;
 document.getElementById('successDateTime').textContent = formData.tarih + ' / ' + formData.saat;
 const sehir = document.getElementById('sehir').value;
 const istasyonVal = document.getElementById('istasyon').value;
 let stationName = '-';
 if (sehir &amp;&amp; istasyonVal &amp;&amp; stations[sehir]) {
 const station = stations[sehir].find(s =&gt; s.value === istasyonVal);
 if (station) stationName = station.name;
 }
 document.getElementById('successStation').textContent = stationName;
 for (let i = 1; i &lt;= 5; i++) {
 document.getElementById('step' + i).classList.add('hidden');
 }
 document.getElementById('successPage').style.display = 'block';
 document.getElementById('successPage').classList.remove('hidden');
 document.getElementById('progressLine').style.width = '100%';
 for (let i = 1; i &lt;= 5; i++) {
 const indicator = document.getElementById('step' + i + 'Indicator');
 indicator.classList.remove('active');
 indicator.classList.add('completed');
 indicator.querySelector('.step-circle').innerHTML = '&lt;i class="fas fa-check"&gt;&lt;/i&gt;';
 }
 }, 2000);
}
// Download functions
function downloadPDF() {
 alert('PDF indiriliyor...');
}
function sendEmail() {
 alert('Randevu bilgileri e-posta adresinize gonderildi.');
}
function sendSMS() {
 alert('Randevu bilgileri SMS olarak gonderildi.');
}
// Initialize
document.addEventListener('DOMContentLoaded', function() {
 document.getElementById('plaka').addEventListener('input', function() {
 this.value = this.value.toUpperCase().replace(/[^A-Z0-9\s]/g, '');
 });
 document.getElementById('ruhsatSeri').addEventListener('input', function() {
 this.value = this.value.toUpperCase().replace(/[^A-Z0-9]/g, '');
 });
 document.getElementById('tcNo').addEventListener('input', function() {
 this.value = this.value.replace(/\D/g, '').slice(0, 11);
 });
 document.getElementById('telefon').addEventListener('input', function() {
 this.value = this.value.replace(/\D/g, '').slice(0, 11);
 });
});