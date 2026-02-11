import { Service, Doctor, Review, PricingCategory } from './types';
import React from 'react';

export const SERVICES: Service[] = [
  {
    id: 'zachowawcza',
    title: 'Stomatologia Zachowawcza',
    shortDescription: 'Leczenie próchnicy i estetyczna odbudowa.',
    fullDescription: 'Stomatologia zachowawcza to fundament zdrowego uśmiechu. Skupiamy się na profilaktyce oraz leczeniu próchnicy w jej wczesnych i zaawansowanych stadiach. Naszym celem jest zachowanie jak największej ilości naturalnej tkanki zęba, przy użyciu nowoczesnych materiałów kompozytowych, które idealnie imitują szkliwo.',
    imageUrl: '/assets/stomatologia-zachowawcza.jpg',
    icon: ''
  },
  {
    id: 'protetyka',
    title: 'Protetyka Cyfrowa',
    shortDescription: 'Korony, mosty i licówki w technologii CAD/CAM.',
    fullDescription: 'Protetyka to sztuka odtwarzania warunków zgryzowych i estetyki po utracie zębów naturalnych. Oferujemy pełen zakres rozwiązań: od licówek porcelanowych, przez korony i mosty cyfrowe, aż po protezy szkieletowe. Współpracujemy z najlepszymi pracowniami technicznymi w Polsce.',
    imageUrl: '/assets/protetyka-cyfrowa.webp',
    icon: ''
  },
  {
    id: 'endodoncja',
    title: 'Endodoncja Mikroskopowa',
    shortDescription: 'Precyzyjne leczenie kanałowe.',
    fullDescription: 'Nowoczesna endodoncja to leczenie zębów, które dawniej skazane były na usunięcie. Dzięki pracy pod mikroskopem operacyjnym jesteśmy w stanie odnaleźć i wyleczyć nawet najbardziej zakrzywione kanały zębowe, eliminując ból i stan zapalny.',
    imageUrl: '/assets/endodoncja.jpg',
    icon: ''
  },
  {
    id: 'chirurgia',
    title: 'Chirurgia Stomatologiczna',
    shortDescription: 'Ekstrakcje i regeneracja kości.',
    fullDescription: 'Chirurgia stomatologiczna w naszej klinice to nie tylko ekstrakcje zębów. Wykonujemy skomplikowane zabiegi regeneracji kości, podniesienia dna zatoki szczękowej czy resekcji wierzchołków korzeni. Wszystko w znieczuleniu, z pełnym poszanowaniem komfortu pacjenta.',
    imageUrl: '/assets/chirurgia.jpg',
    icon: ''
  },
  {
    id: 'implantologia',
    title: 'Implantologia',
    shortDescription: 'Trwałe uzupełnienie braków zębowych.',
    fullDescription: 'Implanty to najdoskonalsza metoda zastępowania utraconych zębów. Wszczepiamy implanty tytanowe i cyrkonowe, na których odbudowujemy korony. To rozwiązanie, które funkcjonalnie i estetycznie nie różni się od naturalnych zębów.',
    imageUrl: '/assets/implantologia.jpg',
    icon: ''
  },
  {
    id: 'profilaktyka',
    title: 'Higienizacja i Profilaktyka',
    shortDescription: 'Profesjonalne czyszczenie i edukacja.',
    fullDescription: 'Profesjonalna higienizacja to podstawa. Skaling, piaskowanie i fluoryzacja wykonywane przez nasze dyplomowane higienistki to klucz do utrzymania zdrowia jamy ustnej na długie lata.',
    imageUrl: '/assets/profilaktyka.jpg',
    icon: ''
  },
    {
    id: 'dziecieca',
    title: 'Stomatologia Dziecięca',
    shortDescription: 'Opieka adaptacyjna dla najmłodszych.',
    fullDescription: 'Wizyty adaptacyjne i leczenie w atmosferze zabawy. Rozumiemy psychikę małego pacjenta. Oferujemy lakowanie, lakierowanie oraz leczenie zębów mlecznych, budując pozytywne skojarzenia z dentystą od najmłodszych lat.',
    imageUrl: '/assets/stomatologia-dziecieca.jpg',
    icon: ''
  },
    {
    id: 'periodontologia',
    title: 'Periodontologia',
    shortDescription: 'Leczenie chorób dziąseł.',
    fullDescription: 'Zdrowe zęby to także zdrowe dziąsła. Zajmujemy się leczeniem chorób przyzębia (paradontozy), korektą uśmiechu dziąsłowego oraz zabiegami pokrywania recesji dziąsłowych.',
    imageUrl: '/assets/periodontologia.jpg',
    icon: ''
  },
    {
    id: 'radiologia',
    title: 'Radiologia 3D (CBCT)',
    shortDescription: 'Precyzyjna diagnostyka na miejscu.',
    fullDescription: 'Dysponujemy własną pracownią RTG i tomografii komputerowej (CBCT). Cyfrowa diagnostyka pozwala nam na precyzyjne planowanie leczenia implantologicznego, endodontycznego i chirurgicznego na miejscu.',
    imageUrl: '/assets/radiologia.jpg',
    icon: ''
  }
];

export const NAV_ITEMS = [
  { label: 'Usługi', href: '#services' },
  { label: 'Zespół', href: '#team' },
  { label: 'Cennik', href: '#pricing' },
  { label: 'Opinie', href: '#reviews' },
  { label: 'Kontakt', href: '#contact' },
];

export const DOCTORS: Doctor[] = [
  {
    id: 'dr-anna',
    name: 'dr n. med. Anna Szumowska',
    role: 'Główny Lekarz / Ortodonta',
    imageUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400&h=400',
    bio: 'Absolwentka Uniwersytetu Medycznego w Poznaniu. Specjalizuje się w zaawansowanej ortodoncji nakładkowej i cyfrowym planowaniu uśmiechu.',
    specialties: ['Ortodoncja', 'Invisalign', 'Estetyka']
  },
  {
    id: 'dr-tomasz',
    name: 'lek. dent. Tomasz Szumowski',
    role: 'Chirurg Szczękowy / Implantolog',
    imageUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400&h=400',
    bio: 'Doświadczony chirurg z ponad 15-letnim stażem. Uczestnik licznych kursów w Szwajcarii i USA. Pasjonat regeneracji kości i implantacji natychmiastowych.',
    specialties: ['Implantologia', 'Chirurgia', 'Protetyka']
  },
  {
    id: 'dr-karolina',
    name: 'lek. dent. Karolina Nowak',
    role: 'Endodonta',
    imageUrl: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400&h=400',
    bio: 'Ekspertka pracy pod mikroskopem. Ratowanie zębów "niemożliwych do uratowania" to jej codzienna praca i pasja.',
    specialties: ['Endodoncja', 'Stomatologia zachowawcza']
  }
];

export const REVIEWS: Review[] = [
  {
    id: '1',
    name: 'Marek Kowalski',
    date: '2 tygodnie temu',
    rating: 5,
    text: 'Pełen profesjonalizm. Leczenie kanałowe pod mikroskopem przebiegło całkowicie bezboleśnie. Dr Karolina wszystko dokładnie wytłumaczyła. Polecam!',
    imageUrl: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    id: '2',
    name: 'Katarzyna Wiśniewska',
    date: '1 miesiąc temu',
    rating: 5,
    text: 'Klinika na najwyższym poziomie. Jestem po zabiegu wszczepienia implantu u doktora Tomasza - rewelacja. Czułam się zaopiekowana od wejścia do wyjścia.',
    imageUrl: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    id: '3',
    name: 'Piotr Zieliński',
    date: '3 miesiące temu',
    rating: 5,
    text: 'Bardzo nowoczesne miejsce, ale bez zadęcia. Ceny transparentne, wiadomo za co się płaci. Higienizacja wykonana bardzo dokładnie.',
    imageUrl: 'https://randomuser.me/api/portraits/men/85.jpg'
  }
];

export const PRICING: PricingCategory[] = [
  {
    category: "Konsultacje i Diagnostyka",
    items: [
      { service: "Konsultacja wstępna (Przegląd)", price: "150 PLN" },
      { service: "Konsultacja specjalistyczna + Plan Leczenia", price: "250 PLN" },
      { service: "Zdjęcie punktowe RTG", price: "50 PLN" },
      { service: "Tomografia komputerowa (CBCT) łuk", price: "350 PLN" },
    ]
  },
  {
    category: "Profilaktyka",
    items: [
      { service: "Pakiet Higienizacyjny (Skaling + Piaskowanie + Fluor)", price: "350 PLN" },
      { service: "Wybielanie nakładkowe (szyny + żel)", price: "1200 PLN" },
      { service: "Wybielanie gabinetowe (Lampa Beyond)", price: "1500 PLN" },
    ]
  },
  {
    category: "Stomatologia Zachowawcza",
    items: [
      { service: "Wypełnienie kompozytowe (małe)", price: "od 300 PLN" },
      { service: "Wypełnienie kompozytowe (duże/odbudowa)", price: "od 450 PLN" },
      { service: "Znieczulenie komputerowe", price: "50 PLN" },
    ]
  },
  {
    category: "Chirurgia i Implanty",
    items: [
      { service: "Ekstrakcja zęba stałego", price: "od 350 PLN" },
      { service: "Ekstrakcja ósemki (chirurgiczna)", price: "od 800 PLN" },
      { service: "Wszczepienie implantu (część chirurgiczna)", price: "3500 PLN" },
    ]
  }
];