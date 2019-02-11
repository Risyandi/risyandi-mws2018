# Firebase hosting
 Firebase hosting memberikan kamu kecepatan, keamanan, dan cara yang dapat diandalkan untuk menghosting apps statik asset (HTML, CSS, Javascript, Media Files, dll) dan juga untuk melayani konten dinamis dan menghosting micro servis. didalam produksi nya hosting didukung oleh global content delivery network (CDN). Hosting melayani konten anda melalui SSL, secara default, dan bisa digunakan dengan custom domain anda sendiria atau di subdomain dari firebaseapp.com.

# Installing Firebase
Untuk memulai dengan firebase hosting, kamu harus menginstall Firebase CLI (Command Line Tool) agar kamu bisa menginisialisasi dan deploy situs kamu. Untuk cara menginstallnya kalian bisa mengikuti langkah-langkahnya sebagai berikut :
* Untuk windows anda bisa menggunakan : `nvm-windows`.
* Lalu install firebase CLI menggunakan npm dengan menggunakan perintah : `$ npm install -g firebase-tools` pada perintah barusan akan diinstall secara global tersedia perintah firebase. dan jika ingin menperbarui dengan versi yang baru, jalani lagi perintah `npm install`.
* Setelah proses instalasi firebase CLI sukses. Sign in / masuk ke firebase menggunakan google akun, dan gunakan perintah berikut : `$ firebase login`
* Setelah firebase anda terhubung dengan google akun. langkah selanjutnya adalah mengetes autentikasi berjalan atau tidak, perintah nya adalah sebagai berikut : `$ firebase list`. hasil perintah tersebut harus menampilkan isi dari project anda.

# inisialisasi situs anda
dari root proyek direktori anda, ketikan perintah berikut : `$ firebase init`

# Deploy situs anda
untuk men deploy situs kamu ke live production, anda bisa menggunakan perintah sebagai berikut : `firebase deploy` jika sukses. konten anda akan ter deploy ke hosting default firebase. example : `your-firebase-project-id.firebaseapp.com`
