# Add List

Fitur ini berfungsi untuk membuat, menghapus atau mereset list.

|                       Info                        |      |
| :-----------------------------------------------: | :--: |
| <div class="label license nitro">Only Nitro</div> |  ✅  |
|                Menggunakan Prefix                 |  ✅  |
|                 Menggunakan limit                 |  ❌  |
|                    Hanya Owner                    |  ❌  |
|                   Hanya Premium                   |  ❌  |
|                    Hanya Group                    |  ✅  |
|                 Hanya Admin Group                 |  ✅  |
|                Hanya Private Chat                 |  ❌  |
|                       Limit                       |  1   |
|                     Cooldown                      | 5000 |
|                       Level                       |  0   |

## Command

### #addlist

Untuk menggunakan fitur ini, pertama-tama siapkan pesan yang ingin ditambahkan. Balas pesan yang ingin ditambahkan dengan caption `#addlist key|deskripsi(optional)`.

- `Key` adalah judul list.
- `Deskripsi` bersifat optional, boleh diisi boleh tidak.

![Addlist](../img/list/addlist.png)

Untuk melihat hasilnya kamu dapat mengirimkan `#list`.

### #dellist

Contoh penggunaan fitur ini adalah dengan mengirimkan `#dellist key`.

- `Key` adalah judul list yang telah dimasukan pada `#addlist`.

![Dellist](../img/list/dellist.png)

### #resetlist

Fitur ini berfungsi untuk menghapus semua list yanng ada di database.

:::caution
Hati-hati saat menggunakan fitur ini, karena akan menghapus list yang ada pada group
:::
