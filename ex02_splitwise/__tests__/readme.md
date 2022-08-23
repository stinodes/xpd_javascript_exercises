Splitwise is een applicatie waarmee je in een vriendengroep de gezamenlijke rekening kan bijhouden.

Een bepaalde rekening wordt steeds betaald door 1 persoon. Alle andere personen krijgen dan een gelijk deel van dat
bedrag als schuld.

De bedoeling is dat je kan zien wat er moet gebeuren om de rekening te vereffenen.

**Bijvoorbeeld:**

* de vrienden Jan, Jos, Mieke, Tamara gaan samen op vakantie en ze willen de kosten zo eerlijk mogelijk verdelen.
* Ze drinken samen een koffie en Jan betaalt dit, het totale bedrag is 40 Euro.
    * dan heeft Jan nu een positief bedrag, namelijk 30 Euro
    * Jos, Mieke en Tamara hebben elk een negatief bedrag, namelijk -10 Euro
    * Dit wil zeggen: om de rekening te vereffenen moet Jan 30 Eur krijgen en Jos, Mieke en Tamara moeten elk 10 Eur
      betalen.
* DAARNA koopt Mieke een zakje koekjes om samen op te eten, dit kost 10 Euro.
    * dan heeft nog steeds alleen Jan een positief bedrag: 27.5 Eur.
    * Mieke heeft -2.5 Euro, en Jos en Tamara hebben elk -12.5 Euro
    * Dit wil zeggen: om de rekening te vereffenen moet Jan 27.5 krijgen, Mieke moet 2.5 Eur betalen en Jos en Tamara
      moeten elk 12.5 Eur betalen.

---
Maak hiervoor een class **SplitWise**.

Je maakt een object van deze class met een array van strings, dat zijn de namen van de vrienden in de groep.

Om te kunnen zien wat de status is voor een persoon maak je eerst een functie **billFor**. Deze functie heeft 1
parameter: de naam van de persoon die je wil zien. In de initiële situatie is het resultaat voor iedereen 0. Het
resultaat van billFor is het bedrag (positief of negatief) van die persoon.

**Bijvoorbeeld:**
Na het bovenstaande scenario:

* splitWise.billFor("Jan") --> resultaat is 27.5
* splitWise.billFor("Mieke") --> resultaat is -2.5

---
Maak dan in de class SplitWise een functie **pay**. Deze heeft als parameters:

* naam van de persoon die betaalt (een String)
    * als deze naam niet in de vriendengroep zit dan wordt deze toegevoegd
* het betaalde bedrag (een geheel getal)
* een array met namen (_optioneel_)
    * dit zijn de namen van de personen in de vriendengroep die mee consumeren voor het betaalde bedrag
    * als deze parameter niet gegeven is (of leeg is) dan consumeren alle personen in de groep mee voor het betaalde
      bedrag
    * als deze array een naam bevat die niet in de vriendengroep zit dan wordt deze toegevoegd

**Bijvoorbeeld:**
Na het bovenstaande scenario, gaan Jan en Jos samen iets drinken zonder de andere 2 vrienden. Jan betaalt hiervoor 12
Eur. Deze betaling heeft dus geen effect op Mieke en Tamara.

* Jan heeft een positief bedrag: 33.5 Eur.
* Jos heeft een negatief bedrag: -18.5 Eur.
* Voor Mieke en Tamara is er niets veranderd: Mieke heeft -2.5 Euro, en Tamara heeft -12.5 Euro

Daarna komen Jan en Jos toevallig Pieter tegen, en Pieter betaalt een rondje (18 Eur). Vanaf nu is Pieter ook in deze
groep. Dus Pieter doet mee met alle betalingen voor de ganse groep.

* Jan heeft een positief bedrag: 27.5 Eur.
* Jos heeft een negatief bedrag: -24.5 Eur.
* Pieter heeft een positief bedrag: 12 Eur.
* Voor Mieke en Tamara is er niets veranderd: Mieke heeft -2.5 Euro, en Tamara heeft -12.5 Euro

---

**Let op:**
Als voor pay een negatief bedrag meegegeven wordt dan gebeurt er niks.  
De code moet goed blijven werken als er foute input gegeven wordt - er mogen in geen enkel geval exceptions gegooid
worden. 
