# Add Limit

Command ini berfungsi untuk menambahkan [limit](../../category/limit) user.

|                       Info                        |      |
| :-----------------------------------------------: | :--: |
| <div class="label license nitro">Only Nitro</div> |  ❌  |
|                Menggunakan Prefix                 |  ✅  |
|                 Menggunakan limit                 |  ❌  |
|                    Hanya Owner                    |  ✅  |
|                   Hanya Premium                   |  ❌  |
|                    Hanya Group                    |  ❌  |
|                 Hanya Admin Group                 |  ❌  |
|                Hanya Private Chat                 |  ❌  |
|                       Limit                       |  1   |
|                     Cooldown                      | 5000 |
|                       Level                       |  0   |

## Command

### #addlimit

Penggunaan dapat dilakukan dengan cara mengirim `#addlimit nomor jumlah_limit` atau `#addlimit @mention jumlah_limit`.

Contoh penggunaan:

- #addlimit 628xxxxx 1000.
- #addlimit @mentions 1000.

## Failed Command

Beberapa penyebab terjadinya error:

- Format inputan nomor tidak internasional, `628xx` bukan `08xx`.
- Jumlah balance negatif atau nol.
- Nomor tujuan blum terdaftar menjadi user.
- Inputan nomor mengandung karakter selain nomor.
