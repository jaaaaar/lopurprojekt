# Menstruaaltsükli Kalender

Lihtne veebirakendus, mis arvutab järgmise menstruatsiooni eeldatava alguse ja kestuse kasutaja sisendi põhjal.

---

## Kirjeldus

**Mida rakendus teeb?**  
Kasutaja sisestab:
- viimase menstruatsiooni alguskuupäeva
- menstruatsiooni kestuse päevades

Rakendus arvutab:
- viimase menstruatsiooni lõpu
- järgmise menstruatsiooni eeldatava alguse (28 päeva pärast viimase lõppu)
- järgmise menstruatsiooni kestuse ja kuupäevavahemiku

**Mis probleemi lahendab?**  
Pakub lihtsat, privaatsust austavat ja lokaalselt käivitatavat lahendust menstruaaltsükli prognoosimiseks ilma kolmandate osapoolte pilveteenusteta.

---

## Kasutatud tööriistad

### 1. Git
**Miks:**  
Versioonihalduseks, muudatuste jälgimiseks ja projekti esitamiseks GitHubis.

---

### 2. CI/CD – GitHub Actions
**Miks:**  
Automaatseks kontrolliks, et kood build'ib ja Docker konteinerid on korrektsed.

**Kuidas integreerib:**  
- Käivitub iga push'i korral
- Kontrollib Docker build'i

---

### 3. Docker
**Miks:**  
Tagab, et rakendus töötab ühtemoodi igas keskkonnas.

**Kuidas integreerib:**  
- Backend ja frontend töötavad eraldi konteinerites
- Käivitatav ühe käsuga `docker-compose up`

---

### 4. Ansible
**Miks:**  
Automatiseerib vajalike tööriistade (Docker, docker-compose) paigaldamise.

**Kuidas integreerib:**  
- Seadistab keskkonna automaatselt
- Vähendab käsitsi konfiguratsiooni

---

## Projekti struktuur

```
menstrual_tracker/
├── backend/
│   ├── app.py
│   └── requirements.txt
├── frontend/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── nginx.conf
├── docker-compose.yml
└── README.md
```

---

## Käivitamine

### Eeldused
- Docker
- docker-compose

### Sammud

```bash
git clone https://github.com/TEIE_KASUTAJANIMI/menstrual-tracker.git
cd menstrual-tracker
sudo docker-compose up --build
```

Rakendus avaneb brauseris:
```
http://localhost:8080
```

---

## Kuidas tööriistad koos töötavad

1. Arendaja teeb muudatused ja commit'ib Git'i
2. GitHub Actions kontrollib projekti automaatselt
3. Docker pakendab backend'i ja frontend'i konteineritesse
4. Nginx suunab API päringud Flask backend'ile
5. Kasutaja kasutab rakendust brauseri kaudu

---

## Demo

Sisend:
- Viimase menstruatsiooni algus: `10.12.2025`
- Menstruatsiooni kestus: `4 päeva`

Väljund:
```
Järgmised päevad: 11.01.2026 – 15.01.2026
```

---

## Autor

Roomet Altmäe

---

## Esitamise kontrollnimekiri

- [x] README täielik
- [x] Git kasutusel
- [x] CI/CD pipeline olemas
- [x] Docker kasutusel
- [x] Ansible kasutusel
- [x] Kood commit'itud
- [x] Demo töötab
