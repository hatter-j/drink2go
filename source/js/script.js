// page-header toggle

const pageHeader = document.querySelector('.page-header');
const navToggle = document.querySelector('.page-header__toggle');

pageHeader.classList.remove('page-header--nojs');

navToggle.addEventListener('click', function() {
    pageHeader.classList.toggle('page-header--opened');
});

// map

const map = L.map('map')
  .setView({
    lat: 59.96831,
    lng: 30.31748,
  }, 20);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const pinIcon = L.icon({
  iconUrl: './img/icons/icon_map_pin.svg',
  iconSize: [38, 52],
  iconAnchor: [26, 52],
});

const marker = L.marker(
  {
    lat: 59.96831,
    lng: 30.31748,
  },
  {
    icon: pinIcon,
  },
);
marker.addTo(map);

// swiper

