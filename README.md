# 14_HealthyU

Mekanisme README untuk dokumentasi pengembangan dibebaskan, tetapi seminimal-minimalnya terdiri dari:
Deskripsi aplikasi: penjelasan singkat tentang aplikasi dan fitur-fitur yang ada.
Teknologi, bahasa, dan framework yang digunakan.
Struktur program.
Cara menjalankan program: mulai dari instalasi requirement hingga langkah-langkah menjalankan aplikasi.
Anggota kelompok beserta role-nya, misal : | Fael | UI/UX |
Referensi belajar bila ada.

Deskripsi: Aplikasi berbasis mobile yang menyediakan informasi mengenai klinik kesehatan atau rumah sakit terdekat dari lokasi kampus ITB yang dipilih oleh pengguna, dimana aplikasi ini juga menyimpan data profil pengguna.

Framework: Next.js + Typescript + Tailwind

Struktur Program:

Untuk sistem frontend, file yang dikerjakan adalah page.tsx di dalam folder route yang sesuai (berikut merupakan contoh):\ 
(mengikuti aturan framework Next.js)

```
├── src
│   ├── app
│   │   ├── login
│   │   │   ├── page.tsx
└── .gitignore
```

Untuk sistem backend, file yang dikerjakan adalah route.tsx di dalam folder api/users sesuai route (berikut merupakan contoh):\
(mengikuti aturan framework Next.js)

```
├── src
│   ├── app
│   │   ├── api
│   │   │   ├── users
│   │   │   │   ├── login
│   │   │   │   │   ├── route.tsx
└── .gitignore
```

Untuk sistem middleware, file yang dikerjakan adalah middleware.ts di dalam folder src (berikut merupakan contoh):\
(mengikuti aturan framework Next.js)

```
├── src
│   ├── middleware.ts
└── .gitignore
```

Command untuk memulai program:\
```npm run dev```

Team:
| Alghan Pridanasuta | Product Manager |
| Muhammad Rafi Ramadhan | Product Manager |
| Muhammad Fithra Rizki | Software Developer |
| Sakti Bimasena | Software Developer |
| Theo Kurniady | Software Developer |
| Hanif Kalyana Aditya | Software Developer |
| Anas Ghazi Al Gifari | Data Scientist |
| Bryan Adi Priasmoro | Data Scientist |
| Muhammad Rafly Fauzan | Data Scientist |
| Nathan Jovial Hartono | Software Developer / Game Developer |
| Ananda Fajrul Zidan | UI/UX Designer |


