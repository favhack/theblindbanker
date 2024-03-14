# The Blind Banker

## Popis aplikace

Aplikace je postavena na technologiích React Native a Expo. Aplikace je tvořena s orientací na accessibility pro nevidomé.

## Instalace a spuštění

1. Instalace Node.js a npm - https://nodejs.org/en/download/ verze LTS
2. Instalace závislostí - `yarn install`
3. Instalace aplikace Expo Go v telefonu
4. Spuštění aplikace - `yarn start`

Tento postup funguje pro platformy Android i iOS.

V případě tohoto projektu bude pravděpodobně do budoucna potřeba udělat development build. V takovém případě je potřeba spustit `expo build:android` nebo `expo build:ios`. Pro android se stáhne maven, pro iOS se stáhne Xcode. Pro vývoj na iOS je potřeba mít Mac.

Aplikace vypadají jinak na iOS a jinak na Androidu. Doporučuji se vždy před vydáním aplikace podívat na obě platformy.

## Aplikace nejde spustit?

Je možné, že apliakce nepůjde spustit kvůli nespecifikovanému erroru, který se zobrazí po instalaci aplikace. Jedním z důvodů může být existence české diakritiky v cestě složky, kde se projekt nachází. Přesuňte nebo přejmenuje složku a zkuste to znovu.

Expo špatně funguje na veřejných adresách. Jednou z možností je vytvořit si proto na svém počítači hotspot a připojit se k němu. Další možností je využít VPN, nebo použít `yarn start --tunnel`.

Také je možné, že nebudete mít nainstalovanou `expo-cli`. V takovém případě je potřeba nainstalovat si ji pomocí `npm install -g expo-cli`.

## Návrhy na vylepšení

- [ ] Dokončit integraci s bankovními API. Existuje veřejná sandbox, kterou lze využít. Pro další integraci je potřeba s bankami nejspíše komunikovat. Pro ověření totožnosti při přihlašování do banky se standardně využívá OIDC, na to jsou vždy specifické postupy podle vydavatele bankovního API.
- [ ] Doplnit projekt o speech-to-text. Aplikace by mohla využívat zpracování hlasu k ovládání hlasem. Může být využita jak k přesunu mezi obrazovkami, tak k zadávání příkazů ala "Odeslat peníze na účet 1234567890, částka 1000 Kč".
- [ ] Doplnit projekt o OCR. Aplikace by mohla využívat OCR k načítání QR kódů, nebo k načítání číselných kódů z faktur.
- [ ] Doplnit projekt o podporu pro další jazyky. Aplikace by mohla být dostupná i v angličtině, nebo dalších jazycích.
- [ ] Opravit další prvky accessibility. Ne všechny prvky aplikace musí být perfektně dotažené pro nevidomé.

## V případě nejasností

1. Podívat se na dokumentaci Expo - https://docs.expo.dev/
2. Podívat se na dokumentaci React Native - https://reactnative.dev/
3. Vyhledat mentora React native
4. Kontaktovat mě - Josef Bozděch - @josifekja na FAV Discordu
5. Good luck!

Readme změněno 14. 3. 2024 Josef Bozděch
Všechna práva vyhlazena...
