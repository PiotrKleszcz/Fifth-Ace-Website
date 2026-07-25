# Jak wykryć ransomware, zanim będzie za późno: praktyczny przewodnik dla brytyjskich MŚP

Autor: Piotr Kleszcz, Fifth Ace · 6 min czytania · Lipiec 2026

---

Kiedy widzisz żądanie okupu, szkoda jest już zrobiona. Twoje pliki są zaszyfrowane, kopie zapasowe to jedyne, co stoi między Tobą a decyzją o zapłacie, a każda godzina przestoju kosztuje pieniądze.

Prawdziwe pytanie brzmi nie "jak odzyskać dane po zaszyfrowaniu?", tylko "jak wykryć atak *w trakcie jego trwania* — zanim rozprzestrzeni się poza garstkę plików?"

Zbudowaliśmy laboratorium testowe, żeby to sprawdzić, wykorzystując dokładnie te same techniki, na których opierałby się system monitorujący w środowisku produkcyjnym.

> **Ważne:** żadna strategia backupu nie zastąpi wczesnego wykrywania. Kopie zapasowe mówią Ci, jak odzyskać dane. Wykrywanie mówi Ci, *kiedy zatrzymać krwawienie* — często to różnica między utratą folderu a utratą całego serwera plików.

## Dwa sygnały, które wykrywają ransomware wcześnie

Ransomware zachowuje się w przewidywalny sposób, a dwa sygnały pojawiają się na długo przed tym, zanim atakujący skończy robotę:

**1. Zmiany rozszerzeń plików.** Ransomware zmienia nazwy plików w trakcie szyfrowania — `.txt` staje się `.locked`, `.docx` staje się `.encrypted` i tak dalej. Skrypt monitorujący nieoczekiwane zmiany rozszerzeń w systemie plików wychwytuje to w kilka sekund, bez potrzeby specjalistycznego threat intelligence.

**2. Entropia Shannona.** Zaszyfrowane dane wyglądają statystycznie inaczej niż dane normalne — są bardziej "losowe" na poziomie bajtów. Mierzy się to za pomocą entropii Shannona — sposobu oceny, jak nieprzewidywalna jest zawartość pliku. Zwykły tekst i dokumenty biurowe mieszczą się w niskim do umiarkowanego zakresie. Zaszyfrowane pliki skaczą w kierunku maksimum. Detektor liczący entropię plików może wykryć trwające szyfrowanie, nawet zanim pliki zostaną przemianowane.

## Co wykazał nasz test

Bezpiecznie zasymulowaliśmy zachowanie ransomware — bez prawdziwego szyfrowania, jedynie realistyczna zmiana nazw plików — na zestawie przykładowych dokumentów, a następnie uruchomiliśmy skrypt wykrywający na wyniku.

| Sprawdzenie | Wynik |
|---|---|
| Dotknięte pliki | 9 |
| Wykryte podejrzane rozszerzenia | 8 |
| Werdykt | **CRITICAL — wykryto wskaźniki ransomware** |
| Zalecana reakcja | Izolacja systemu, zabezpieczenie obrazu dysku, sprawdzenie backupów, zgłoszenie incydentu |

Detektor oznaczył 8 z 9 dotkniętych plików wyłącznie na podstawie zmian rozszerzeń — jeszcze zanim potrzebna była analiza entropii. W środowisku produkcyjnym to różnica między wykryciem incydentu w pierwszej minucie a dowiedzeniem się o nim następnego dnia z żądania okupu.

## Dlaczego to ma znaczenie dla NIS2

Dwa artykuły dyrektywy NIS2 są tu bezpośrednio istotne:

- **Artykuł 21** wymaga wdrożenia środków zarządzania ryzykiem — a wykrywanie jest środkiem, nie dokumentem polityki. Posiadanie planu na *po* incydencie nie spełnia wymogu, jeśli nie masz sposobu na zauważenie, że incydent w ogóle się dzieje.
- **Artykuł 23** wymaga zgłoszenia istotnego incydentu w ciągu 24 godzin od momentu, w którym się o nim dowiedziałeś. Ten zegar nie zaczyna tykać, gdy zdecydujesz się zbadać sprawę — zaczyna tykać wtedy, gdy wykrycie powinno było zasygnalizować problem. Nie możesz zgłosić czegoś, czego nigdy nie wykryłeś.

## Co to oznacza dla Twojej firmy

Większość MŚP, z którymi rozmawiamy, ma kopie zapasowe. Niewiele z nich ma cokolwiek aktywnie monitorującego wczesne oznaki ransomware — zmiany nazw plików, skoki entropii przypominające szyfrowanie, nietypowe wzorce dostępu. Ta luka to dokładnie to, co ma domykać dobrze przeprowadzony przegląd bezpieczeństwa: nie tylko "czy masz backupy", ale "czy wiedziałbyś w ciągu kilku minut, gdyby coś zaczęło teraz szyfrować Twoje pliki".

Jeśli odpowiedź brzmi nie, to luka warta zamknięcia, zanim stanie się zgłoszeniem incydentu.

---

<div class="cta-box">

### Gotowy sprawdzić, na czym stoisz?

Nasz NIS2 Business Audit daje Ci pełny obraz Twojej gotowości na zgodność — łącznie z gotowością do wykrywania i reagowania na incydenty — wraz z jasnym planem naprawy braków. Stała cena. Bez niespodzianek.

**[Zamów audyt NIS2 — £399 →]**

</div>

<div class="cta-box">

### Pobierz darmową listę kontrolną gotowości NIS2

Nie jesteś jeszcze gotowy na audyt? Wykonaj darmową 5-minutową samoocenę i otrzymaj PDF prosto na skrzynkę.

**[Pobierz darmową listę kontrolną NIS2 →]**

</div>
