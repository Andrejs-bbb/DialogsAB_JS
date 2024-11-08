## Treniņi ar if
### 1. Uzdot divus mainīgos, piemēram, a = 1; b = 10; sakārtot tos un attēlot augošā secībā.

a = 1

b = 10


### 2. Uzdot divus mainīgos, piemēram, a = 1; b = 10; sakārtot tos un attēlot dilstošā secībā.

a = 1

b = 10

temp = b

// a ir 1

// b ir 10

// temp 10

b = a

// a ir 1

// b ir 1

// temp 10

a = temp

// a ir 10

// b ir 1

// temp 10

### 3. Uzdot trīs mainīgos, piemēram, a = 1; b = 10; c = 3; sakārtot tos un attēlot augošā secībā. Atkārtot uzdevumu pie dažādām a, b un c sākuma vērtību kombinācijām.

a = 1

b = 10

c = 3

temp = b

// a ir 1

// b ir 10

// c ir 3

// temp 10

b = c

// a ir 1

// b ir 3

// c ir 3

// temp 10

c = temp

// a ir 1

// b ir 3

// c ir 10

// temp 10

--------------------

a = 10

b = 1

c = 3

temp = a

// a ir 10

// b ir 1

// c ir 3

// temp 10

a = b

// a ir 1

// b ir 1

// c ir 3

// temp 10

b = c

// a ir 1

// b ir 3

// c ir 3

// temp 10

c = temp

// a ir 1

// b ir 3

// c ir 10

// temp 10

### 4. Uzdot trīs mainīgos, piemēram, a = 1; b = 10; c = 3; sakārtot tos un attēlot dilstošā secībā. Atkārtot uzdevumu pie dažādām a, b un c sākuma vērtību kombinācijām.

a = 1

b = 10

c = 3

temp = b

// a ir 1

// b ir 10

// c ir 3

// temp 10

b = a

// a ir 1

// b ir 1

// c ir 3

// temp 10

a = temp

// a ir 10

// b ir 1

// c ir 3

// temp 10

temp = c

// a ir 10

// b ir 1

// c ir 3

// temp 3

c = b

// a ir 10

// b ir 1

// c ir 1

// temp 3

b = temp

// a ir 10

// b ir 3

// c ir 1

// temp 3

--------------------
a = 1

b = 3

c = 10

temp = c

// a ir 1

// b ir 3

// c ir 10

// temp 10

c = a

// a ir 1

// b ir 3

// c ir 1

// temp 10

a = temp

// a ir 10

// b ir 3

// c ir 1

### 5. Uzdot četrus mainīgos, piemēram, a = 1; b = 10; c = 3; d = 7; sakārtot tos un attēlot augošā secībā. Risinot uzdevumu, saprast, ka ar diskrētiem mainīgajiem (a,b,c,d) tas vairs nav tik vienkārši, aizdomāties par masīva (a[0],a[1],a[2],a[3]), ciklu un kādas metodes, piemēram, burbuļu metodi, izmantošanu.

a = 1

b = 10

c = 3

d = 7

temp = b

// a = 1

// b = 10

// c = 3

// d = 7

// temp = 10

b = c

// a = 1

// b = 3

// c = 3

// d = 7

// temp = 10

c = d

// a = 1

// b = 3

// c = 7

// d = 7

// temp = 10

d = temp

// a = 1

// b = 3

// c = 7

// d = 10

// temp = 10

## Treniņi ar while (un if)
1. Attēlot visus veselus skaitļus no 1 līdz 30.
2. Attēlot visus veselus nepāru skaitļus no 1 līdz 30.
3. Attēlot visus veselus pāru skaitļus no 1 līdz 30.
4. Attēlot visus veselus nepāru skaitļus no 1 līdz 30, bet 5 un 11 neattēlot.
5. Attēlot visus veselus pāru skaitļus no 1 līdz 30, bet 12, 14, 16, 18, neattēlot.
