# Apraksts - stāts par darbu ar izvēlēto Vanilla JS pojektu.

## 1. No "Vanilla JS projekti izmēģināšanai no visas pasaules" sadaļas izvēlējos projektu "movie-seat-booking".
## 2. Palaidu no savas lokālās mašīnas
## 3. Projekta JS koda "audits":
### 3.1. uzskaitīt un raksturot mainīgos, to vajadzību un pielietošanas robežas (scope)

a) container

Norāda uz elementu ar klasi .container. Tiek izmantots, lai klausītos klikšķus.

b) seats

Satur elementus ar klasi .seat, kas nav aizņemti. Tiek izmantots, lai pārbaudītu sēdvietu stāvokli.

c) count un total

Atsaucas uz elementiem, kas parāda izvēlēto sēdvietu skaitu un kopējo cenu.

d) movieSelect

Norāda uz filmas izvēles sarakstu.

e) ticketPrice

Satur biļetes cenu. Tiek mainīts, kad lietotājs izvēlas citu filmu.

### 3.2. uzskaitīt un raksturot nosacījuma operatorus

a) if un else

Pārbauda, vai izvēlētās sēdvietas pastāv.

b) && un ! 

Tiek izmantoti, lai pārbaudītu vai sēdvieta nav aizņemta.

### 3.3. uzskaitīt un raksturot cikla operatorus

a) forEach

Iterē cauri visām sēdvietām un piešķir klasi selected.

b) map

Pārveido izvēlētās sēdvietas uz indeksiem sarakstā.

### 3.4. uzskaitīt un raksturot funkcijas

a) setMovieData

Saglabā izvēlētās filmas indeksu un cenu.

b) updateSelectedCount

Aprēķina izvēlēto sēdvietu skaitu un kopējo cenu.

### 3.5. uzskaitīt un raksturot objektus

a) localStorage

Tiek izmantots, lai saglabātu lietotāja izvēletas sēdvietas.

### 3.6. uzskaitīt un raksturot klases

...

### 3.7. uzskaitīt un raksturot saskarni ar BOM un DOM

a) BOM

localStorage tiek izmantots datu saglabāšanai un atjaunošanai.

b) DOM

document.querySelector tiek izmantots, lai piekļūtu HTML elementiem.

### 3.8. raksturot darbību secību

a) Lietotājs izvēlas filmu un sēdvietas.

b) Tiek aprēķināts sēdvietu skaits un kopējā cena.

c) Dati tiek saglabāti.

## 4. Izmaiņas projektā: Mainīt sēdvietas krāsu, kad tās izvēlas

Pirms:

![Bez nosaukuma](https://github.com/user-attachments/assets/062a02b2-6a47-4b2c-8a12-dc833d34d8bd)

Pēc:

![Bez nosaukuma_2](https://github.com/user-attachments/assets/32e247c4-b605-4663-9841-321b38b7facb)
























