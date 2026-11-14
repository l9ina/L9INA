
const $ = id => document.getElementById(id);

const translations = {
  en: {
    home:"Home", explore:"Explore", how:"How it works",
    report:"+ Report an item", tagline:"A LITTLE HELP CAN MEAN A LOT",
    headline:"Lost something?", subtitle:"Connect with people around you and help lost belongings find their way home.",
    exploreBtn:"Explore items →", reportFound:"Report something",
    itemsListed:"Items listed", languages:"Languages", available:"Always available",
    community:"OUR COMMUNITY", recent:"Recent reports", live:"Live board",
    search:"Search an item, city...", allCities:"All cities",
    searchBtn:"Search", all:"All items", lost:"Lost", found:"Found",
    noResults:"No items found", tryAgain:"Try another search.",
    simple:"SIMPLE & EASY", howTitle:"How does it work?",
    step1:"1. Report", step1desc:"Post a lost or found item.",
    step2:"2. Search", step2desc:"Explore reports near you.",
    step3:"3. Reunite", step3desc:"Help an item find its owner.",
    ctaTitle:"Found something? Be someone's hero.",
    ctaDesc:"A simple report could make someone's day.",
    reportNow:"Report now +", footer:"Made to bring things and people together. 💚",
    newReport:"NEW REPORT", formTitle:"Tell us what happened",
    typeLabel:"Report type", itemName:"Item name", cityLabel:"City",
    dateLabel:"Date", descriptionLabel:"Description",
    imageLabel:"Photo (optional)", publish:"Publish report",
    contact:"View details", success:"Your report was added!",
    demo:"Demo version: messaging will be available when the app has a secure server.",
    required:"Please complete all required fields.",
    today:"Today"
  },
  ar: {
    home:"الرئيسية", explore:"اكتشف", how:"كيف يعمل",
    report:"+ أضف إعلاناً", tagline:"مساعدة صغيرة قد تعني الكثير",
    headline:"هل أضعت شيئاً؟", subtitle:"تواصل مع الأشخاص من حولك وساعد الأشياء الضائعة على العودة إلى أصحابها.",
    exploreBtn:"اكتشف الإعلانات ←", reportFound:"أضف إعلاناً",
    itemsListed:"إعلانات منشورة", languages:"لغات", available:"متاح دائماً",
    community:"مجتمعنا", recent:"أحدث الإعلانات", live:"مباشر",
    search:"ابحث عن غرض أو مدينة...", allCities:"كل المدن",
    searchBtn:"بحث", all:"الكل", lost:"ضائع", found:"موجود",
    noResults:"لم يتم العثور على نتائج", tryAgain:"جرب بحثاً آخر.",
    simple:"بسيط وسهل", howTitle:"كيف يعمل التطبيق؟",
    step1:"1. أضف إعلاناً", step1desc:"انشر غرضاً ضائعاً أو تم العثور عليه.",
    step2:"2. ابحث", step2desc:"اكتشف الإعلانات القريبة منك.",
    step3:"3. أعد الغرض", step3desc:"ساعد الغرض على العودة لصاحبه.",
    ctaTitle:"وجدت شيئاً؟ كن سبباً في إسعاد شخص.",
    ctaDesc:"إعلان بسيط قد يغير يوم شخص ما.",
    reportNow:"أضف إعلاناً الآن +", footer:"صنعنا هذا التطبيق لجمع الناس والأشياء 💚",
    newReport:"إعلان جديد", formTitle:"أخبرنا ماذا حدث",
    typeLabel:"نوع الإعلان", itemName:"اسم الغرض", cityLabel:"المدينة",
    dateLabel:"التاريخ", descriptionLabel:"الوصف",
    imageLabel:"الصورة (اختياري)", publish:"نشر الإعلان",
    contact:"عرض التفاصيل", success:"تمت إضافة إعلانك!",
    demo:"هذه نسخة تجريبية. ستتوفر المراسلة عند إضافة خادم آمن.",
    required:"يرجى ملء جميع المعلومات المطلوبة.",
    today:"اليوم"
  },
  darija: {
    home:"الرئيسية", explore:"قلب", how:"كيفاش كيخدم",
    report:"+ زيد إعلان", tagline:"مساعدة صغيرة تقدر تعني بزاف",
    headline:"ضاع ليك شي حاجة؟", subtitle:"تواصل مع الناس اللي قريبين ليك وساعد الحوايج الضايعين يرجعو لمولهم.",
    exploreBtn:"شوف الإعلانات ←", reportFound:"زيد إعلان",
    itemsListed:"إعلانات", languages:"لغات", available:"ديما متاح",
    community:"المجتمع ديالنا", recent:"آخر الإعلانات", live:"مباشر",
    search:"قلب على شي حاجة أو مدينة...", allCities:"جميع المدن",
    searchBtn:"قلب", all:"الكل", lost:"ضايع", found:"تلقا",
    noResults:"ما لقينا والو", tryAgain:"جرب تقلب بطريقة أخرى.",
    simple:"ساهل وبسيط", howTitle:"كيفاش كيخدم؟",
    step1:"1. زيد إعلان", step1desc:"نشر شي حاجة ضاعت ليك أو لقيتيها.",
    step2:"2. قلب", step2desc:"شوف الإعلانات القريبة ليك.",
    step3:"3. رجع الغرض", step3desc:"عاون الغرض يرجع لمولاه.",
    ctaTitle:"لقيتي شي حاجة؟ فرّح مولها!",
    ctaDesc:"إعلان صغير يقدر يفرّح شي واحد.",
    reportNow:"زيد إعلان دابا +", footer:"جمعنا الناس والحوايج فبلاصة وحدة 💚",
    newReport:"إعلان جديد", formTitle:"قول لينا شنو وقع",
    typeLabel:"نوع الإعلان", itemName:"شنو هو الغرض؟", cityLabel:"المدينة",
    dateLabel:"التاريخ", descriptionLabel:"الوصف",
    imageLabel:"تصويرة (اختياري)", publish:"نشر الإعلان",
    contact:"شوف التفاصيل", success:"تزّاد الإعلان ديالك!",
    demo:"هاد النسخة تجريبية، التواصل غادي يتزاد من بعد.",
    required:"عافاك عمر المعلومات المطلوبة.",
    today:"اليوم"
  },
  fr: {
    home:"Accueil", explore:"Explorer", how:"Comment ça marche",
    report:"+ Signaler un objet", tagline:"UN PETIT GESTE PEUT TOUT CHANGER",
    headline:"Vous avez perdu quelque chose ?", subtitle:"Connectez-vous avec les personnes autour de vous pour retrouver vos objets perdus.",
    exploreBtn:"Explorer →", reportFound:"Signaler un objet",
    itemsListed:"Annonces", languages:"Langues", available:"Toujours disponible",
    community:"NOTRE COMMUNAUTÉ", recent:"Annonces récentes", live:"En direct",
    search:"Chercher un objet ou une ville...", allCities:"Toutes les villes",
    searchBtn:"Rechercher", all:"Tout", lost:"Perdu", found:"Trouvé",
    noResults:"Aucun résultat", tryAgain:"Essayez une autre recherche.",
    simple:"SIMPLE ET FACILE", howTitle:"Comment ça marche ?",
    step1:"1. Signaler", step1desc:"Publiez un objet perdu ou trouvé.",
    step2:"2. Rechercher", step2desc:"Consultez les annonces proches.",
    step3:"3. Retrouver", step3desc:"Aidez un objet à retrouver son propriétaire.",
    ctaTitle:"Vous avez trouvé quelque chose ?",
    ctaDesc:"Votre annonce peut rendre quelqu'un heureux.",
    reportNow:"Publier maintenant +", footer:"Pour rapprocher les objets et les personnes 💚",
    newReport:"NOUVELLE ANNONCE", formTitle:"Que s'est-il passé ?",
    typeLabel:"Type d'annonce", itemName:"Nom de l'objet", cityLabel:"Ville",
    dateLabel:"Date", descriptionLabel:"Description",
    imageLabel:"Photo (facultative)", publish:"Publier l'annonce",
    contact:"Voir les détails", success:"Votre annonce a été ajoutée !",
    demo:"Version démo : la messagerie sera disponible avec un serveur sécurisé.",
    required:"Veuillez remplir les champs obligatoires.",
    today:"Aujourd'hui"
  },
  es: {
    home:"Inicio", explore:"Explorar", how:"Cómo funciona",
    report:"+ Publicar anuncio", tagline:"UNA PEQUEÑA AYUDA PUEDE SIGNIFICAR MUCHO",
    headline:"¿Has perdido algo?", subtitle:"Conecta con personas cercanas y ayuda a encontrar objetos perdidos.",
    exploreBtn:"Explorar →", reportFound:"Publicar objeto",
    itemsListed:"Anuncios", languages:"Idiomas", available:"Siempre disponible",
    community:"NUESTRA COMUNIDAD", recent:"Anuncios recientes", live:"En directo",
    search:"Buscar objeto o ciudad...", allCities:"Todas las ciudades",
    searchBtn:"Buscar", all:"Todos", lost:"Perdido", found:"Encontrado",
    noResults:"No hay resultados", tryAgain:"Prueba otra búsqueda.",
    simple:"FÁCIL Y SENCILLO", howTitle:"¿Cómo funciona?",
    step1:"1. Publicar", step1desc:"Publica un objeto perdido o encontrado.",
    step2:"2. Buscar", step2desc:"Explora anuncios cercanos.",
    step3:"3. Reunir", step3desc:"Ayuda a devolver el objeto.",
    ctaTitle:"¿Encontraste algo? ¡Ayuda a alguien!",
    ctaDesc:"Un anuncio puede alegrar el día de alguien.",
    reportNow:"Publicar ahora +", footer:"Uniendo personas y objetos 💚",
    newReport:"NUEVO ANUNCIO", formTitle:"Cuéntanos qué pasó",
    typeLabel:"Tipo", itemName:"Nombre del objeto", cityLabel:"Ciudad",
    dateLabel:"Fecha", descriptionLabel:"Descripción",
    imageLabel:"Foto (opcional)", publish:"Publicar",
    contact:"Ver detalles", success:"¡Anuncio publicado!",
    demo:"Versión de prueba: la mensajería llegará con un servidor seguro.",
    required:"Completa los campos obligatorios.",
    today:"Hoy"
  },
  de: {
    home:"Startseite", explore:"Entdecken", how:"So funktioniert's",
    report:"+ Gegenstand melden", tagline:"KLEINE HILFE KANN VIEL BEDEUTEN",
    headline:"Etwas verloren?", subtitle:"Verbinde dich mit Menschen in deiner Nähe und finde verlorene Gegenstände.",
    exploreBtn:"Entdecken →", reportFound:"Melden",
    itemsListed:"Einträge", languages:"Sprachen", available:"Immer verfügbar",
    community:"UNSERE GEMEINSCHAFT", recent:"Neueste Meldungen", live:"Live",
    search:"Gegenstand oder Stadt suchen...", allCities:"Alle Städte",
    searchBtn:"Suchen", all:"Alle", lost:"Verloren", found:"Gefunden",
    noResults:"Keine Ergebnisse", tryAgain:"Versuche eine andere Suche.",
    simple:"EINFACH UND LEICHT", howTitle:"Wie funktioniert es?",
    step1:"1. Melden", step1desc:"Melde einen verlorenen oder gefundenen Gegenstand.",
    step2:"2. Suchen", step2desc:"Finde Meldungen in deiner Nähe.",
    step3:"3. Zurückgeben", step3desc:"Hilf, den Besitzer zu finden.",
    ctaTitle:"Etwas gefunden? Hilf jemandem!",
    ctaDesc:"Eine Meldung kann jemandem den Tag retten.",
    reportNow:"Jetzt melden +", footer:"Wir bringen Menschen und Dinge zusammen 💚",
    newReport:"NEUE MELDUNG", formTitle:"Was ist passiert?",
    typeLabel:"Meldungstyp", itemName:"Gegenstand", cityLabel:"Stadt",
    dateLabel:"Datum", descriptionLabel:"Beschreibung",
    imageLabel:"Foto (optional)", publish:"Veröffentlichen",
    contact:"Details ansehen", success:"Meldung hinzugefügt!",
    demo:"Demo-Version: Nachrichten folgen mit einem sicheren Server.",
    required:"Bitte fülle alle Pflichtfelder aus.",
    today:"Heute"
  },
  it: {
    home:"Home", explore:"Esplora", how:"Come funziona",
    report:"+ Segnala oggetto", tagline:"UN PICCOLO AIUTO PUÒ SIGNIFICARE MOLTO",
    headline:"Hai perso qualcosa?", subtitle:"Connettiti con le persone vicine e ritrova gli oggetti smarriti.",
    exploreBtn:"Esplora →", reportFound:"Segnala",
    itemsListed:"Annunci", languages:"Lingue", available:"Sempre disponibile",
    community:"LA NOSTRA COMUNITÀ", recent:"Annunci recenti", live:"In diretta",
    search:"Cerca oggetto o città...", allCities:"Tutte le città",
    searchBtn:"Cerca", all:"Tutti", lost:"Perso", found:"Trovato",
    noResults:"Nessun risultato", tryAgain:"Prova un'altra ricerca.",
    simple:"SEMPLICE E FACILE", howTitle:"Come funziona?",
    step1:"1. Segnala", step1desc:"Pubblica un oggetto perso o trovato.",
    step2:"2. Cerca", step2desc:"Esplora gli annunci vicini.",
    step3:"3. Restituisci", step3desc:"Aiuta a ritrovare il proprietario.",
    ctaTitle:"Hai trovato qualcosa? Aiuta qualcuno!",
    ctaDesc:"Un annuncio può fare la differenza.",
    reportNow:"Segnala ora +", footer:"Unire persone e oggetti 💚",
    newReport:"NUOVO ANNUNCIO", formTitle:"Raccontaci cosa è successo",
    typeLabel:"Tipo", itemName:"Nome oggetto", cityLabel:"Città",
    dateLabel:"Data", descriptionLabel:"Descrizione",
    imageLabel:"Foto (facoltativa)", publish:"Pubblica",
    contact:"Vedi dettagli", success:"Annuncio aggiunto!",
    demo:"Versione demo: la messaggistica arriverà con un server sicuro.",
    required:"Compila tutti i campi obbligatori.",
    today:"Oggi"
  },
  pt: {
    home:"Início", explore:"Explorar", how:"Como funciona",
    report:"+ Publicar anúncio", tagline:"UMA PEQUENA AJUDA PODE SIGNIFICAR MUITO",
    headline:"Perdeu alguma coisa?", subtitle:"Conecte-se com pessoas próximas e ajude a encontrar objetos perdidos.",
    exploreBtn:"Explorar →", reportFound:"Publicar objeto",
    itemsListed:"Anúncios", languages:"Idiomas", available:"Sempre disponível",
    community:"NOSSA COMUNIDADE", recent:"Anúncios recentes", live:"Ao vivo",
    search:"Pesquisar objeto ou cidade...", allCities:"Todas as cidades",
    searchBtn:"Pesquisar", all:"Todos", lost:"Perdido", found:"Encontrado",
    noResults:"Nenhum resultado", tryAgain:"Tente outra pesquisa.",
    simple:"SIMPLES E FÁCIL", howTitle:"Como funciona?",
    step1:"1. Publicar", step1desc:"Publique um objeto perdido ou encontrado.",
    step2:"2. Pesquisar", step2desc:"Explore anúncios próximos.",
    step3:"3. Devolver", step3desc:"Ajude a encontrar o dono.",
    ctaTitle:"Encontrou algo? Ajude alguém!",
    ctaDesc:"Um anúncio pode fazer a diferença.",
    reportNow:"Publicar agora +", footer:"Unindo pessoas e objetos 💚",
    newReport:"NOVO ANÚNCIO", formTitle:"Conte-nos o que aconteceu",
    typeLabel:"Tipo", itemName:"Nome do objeto", cityLabel:"Cidade",
    dateLabel:"Data", descriptionLabel:"Descrição",
    imageLabel:"Foto (opcional)", publish:"Publicar",
    contact:"Ver detalhes", success:"Anúncio publicado!",
    demo:"Versão de demonstração: mensagens estarão disponíveis com servidor seguro.",
    required:"Preencha os campos obrigatórios.",
    today:"Hoje"
  },
  tr: {
    home:"Ana Sayfa", explore:"Keşfet", how:"Nasıl çalışır",
    report:"+ Eşya bildir", tagline:"KÜÇÜK BİR YARDIM ÇOK ŞEY İFADE EDER",
    headline:"Bir şey mi kaybettin?", subtitle:"Yakınındaki insanlarla bağlantı kur ve kayıp eşyaları bul.",
    exploreBtn:"Keşfet →", reportFound:"Eşya bildir",
    itemsListed:"İlanlar", languages:"Diller", available:"Her zaman açık",
    community:"TOPLULUĞUMUZ", recent:"Son bildirimler", live:"Canlı",
    search:"Eşya veya şehir ara...", allCities:"Tüm şehirler",
    searchBtn:"Ara", all:"Tümü", lost:"Kayıp", found:"Bulundu",
    noResults:"Sonuç bulunamadı", tryAgain:"Başka bir arama deneyin.",
    simple:"KOLAY VE BASİT", howTitle:"Nasıl çalışır?",
    step1:"1. Bildir", step1desc:"Kayıp veya bulunan eşyanı yayınla.",
    step2:"2. Ara", step2desc:"Yakınındaki ilanları keşfet.",
    step3:"3. Birleştir", step3desc:"Eşyanın sahibini bulmasına yardım et.",
    ctaTitle:"Bir şey mi buldun? Birine yardım et!",
    ctaDesc:"Bir ilan birinin gününü güzelleştirebilir.",
    reportNow:"Şimdi bildir +", footer:"İnsanları ve eşyaları buluşturuyoruz 💚",
    newReport:"YENİ İLAN", formTitle:"Ne olduğunu anlat",
    typeLabel:"İlan türü", itemName:"Eşya adı", cityLabel:"Şehir",
    dateLabel:"Tarih", descriptionLabel:"Açıklama",
    imageLabel:"Fotoğraf (isteğe bağlı)", publish:"Yayınla",
    contact:"Detayları gör", success:"İlan eklendi!",
    demo:"Demo sürümü: mesajlaşma güvenli sunucu ile eklenecek.",
    required:"Lütfen gerekli alanları doldurun.",
    today:"Bugün"
  },
  nl: {
    home:"Home", explore:"Ontdekken", how:"Hoe werkt het",
    report:"+ Voorwerp melden", tagline:"EEN KLEIN BEETJE HULP BETEKENT VEEL",
    headline:"Iets verloren?", subtitle:"Verbind met mensen in de buurt en help verloren spullen terug te vinden.",
    exploreBtn:"Ontdekken →", reportFound:"Voorwerp melden",
    itemsListed:"Meldingen", languages:"Talen", available:"Altijd beschikbaar",
    community:"ONZE GEMEENSCHAP", recent:"Recente meldingen", live:"Live",
    search:"Zoek voorwerp of stad...", allCities:"Alle steden",
    searchBtn:"Zoeken", all:"Alles", lost:"Verloren", found:"Gevonden",
    noResults:"Geen resultaten", tryAgain:"Probeer een andere zoekopdracht.",
    simple:"SIMPEL EN MAKKELIJK", howTitle:"Hoe werkt het?",
    step1:"1. Melden", step1desc:"Plaats een verloren of gevonden voorwerp.",
    step2:"2. Zoeken", step2desc:"Bekijk meldingen in de buurt.",
    step3:"3. Teruggeven", step3desc:"Help het voorwerp terug te brengen.",
    ctaTitle:"Iets gevonden? Help iemand!",
    ctaDesc:"Een melding kan iemands dag maken.",
    reportNow:"Nu melden +", footer:"Mensen en spullen samenbrengen 💚",
    newReport:"NIEUWE MELDING", formTitle:"Vertel ons wat er is gebeurd",
    typeLabel:"Type melding", itemName:"Naam voorwerp", cityLabel:"Stad",
    dateLabel:"Datum", descriptionLabel:"Beschrijving",
    imageLabel:"Foto (optioneel)", publish:"Publiceren",
    contact:"Bekijk details", success:"Melding toegevoegd!",
    demo:"Demoversie: berichten volgen met een beveiligde server.",
    required:"Vul alle verplichte velden in.",
    today:"Vandaag"
  },
  ja: {
    home:"ホーム", explore:"探す", how:"使い方",
    report:"+ アイテムを登録", tagline:"小さな助けが大きな意味を持つ",
    headline:"何かをなくしましたか？", subtitle:"近くの人とつながり、落とし物を持ち主に返しましょう。",
    exploreBtn:"アイテムを見る →", reportFound:"アイテムを登録",
    itemsListed:"登録件数", languages:"対応言語", available:"いつでも利用可能",
    community:"コミュニティ", recent:"最近の投稿", live:"ライブ",
    search:"アイテムや都市を検索...", allCities:"すべての都市",
    searchBtn:"検索", all:"すべて", lost:"紛失", found:"発見",
    noResults:"見つかりません", tryAgain:"別の検索をお試しください。",
    simple:"簡単で便利", howTitle:"使い方は？",
    step1:"1. 登録", step1desc:"紛失物や拾得物を投稿します。",
    step2:"2. 検索", step2desc:"近くの投稿を探します。",
    step3:"3. 返却", step3desc:"持ち主に返すお手伝いをします。",
    ctaTitle:"何かを見つけましたか？",
    ctaDesc:"あなたの投稿が誰かを助けます。",
    reportNow:"今すぐ登録 +", footer:"人と物をつなぐサービス 💚",
    newReport:"新しい投稿", formTitle:"何が起きましたか？",
    typeLabel:"投稿タイプ", itemName:"アイテム名", cityLabel:"都市",
    dateLabel:"日付", descriptionLabel:"説明",
    imageLabel:"写真（任意）", publish:"投稿する",
    contact:"詳細を見る", success:"投稿が追加されました！",
    demo:"デモ版です。安全なサーバーでメッセージ機能を追加します。",
    required:"必須項目を入力してください。",
    today:"今日"
  },
  zh: {
    home:"首页", explore:"探索", how:"使用方法",
    report:"+ 发布信息", tagline:"小小的帮助也有大大的意义",
    headline:"丢失了什么东西？", subtitle:"与附近的人联系，帮助失物找到主人。",
    exploreBtn:"查看信息 →", reportFound:"发布信息",
    itemsListed:"发布数量", languages:"支持语言", available:"随时可用",
    community:"我们的社区", recent:"最新信息", live:"实时",
    search:"搜索物品或城市...", allCities:"所有城市",
    searchBtn:"搜索", all:"全部", lost:"丢失", found:"已找到",
    noResults:"没有找到结果", tryAgain:"请尝试其他搜索。",
    simple:"简单方便", howTitle:"如何使用？",
    step1:"1. 发布", step1desc:"发布丢失或捡到的物品。",
    step2:"2. 搜索", step2desc:"查看附近的信息。",
    step3:"3. 归还", step3desc:"帮助物品找到主人。",
    ctaTitle:"捡到了东西？帮助别人！",
    ctaDesc:"一个简单的信息可能帮助到某个人。",
    reportNow:"立即发布 +", footer:"让人与物品重新相遇 💚",
    newReport:"新信息", formTitle:"告诉我们发生了什么",
    typeLabel:"信息类型", itemName:"物品名称", cityLabel:"城市",
    dateLabel:"日期", descriptionLabel:"描述",
    imageLabel:"照片（可选）", publish:"发布信息",
    contact:"查看详情", success:"信息已添加！",
    demo:"演示版本：安全服务器上线后将提供消息功能。",
    required:"请填写所有必填字段。",
    today:"今天"
  }
};

const sampleItems = [
  {
    id:1, type:"lost", name:"Black wallet",
    city:"Kenitra", date:"2026-11-12",
    description:"A black leather wallet lost near the city centre.",
    emoji:"👛"
  },
  {
    id:2, type:"found", name:"Car keys",
    city:"Rabat", date:"2026-11-11",
    description:"A set of keys found near a public park.",
    emoji:"🔑"
  },
  {
    id:3, type:"lost", name:"School backpack",
    city:"Casablanca", date:"2026-11-10",
    description:"A dark backpack with school notebooks inside.",
    emoji:"🎒"
  },
  {
    id:4, type:"found", name:"Smart watch",
    city:"Tanger", date:"2026-11-09",
    description:"A smartwatch found in a public place.",
    emoji:"⌚"
  }
];

let items = sampleItems;
try {
  const saved = JSON.parse(localStorage.getItem("l9ina_items"));
  if (Array.isArray(saved)) items = saved;
} catch {
  items = sampleItems;
}

let currentLanguage = "en";
let currentFilter = "all";

function t(key) {
  return translations[currentLanguage][key] || translations.en[key] || key;
}

// Language switching
function setLanguage(language) {
  currentLanguage = translations[language] ? language : "en";

  const rtl = ["ar", "darija"].includes(currentLanguage);
  document.documentElement.dir = rtl ? "rtl" : "ltr";
  document.documentElement.lang = rtl ? "ar" : currentLanguage;

  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.dataset.i18n;
    if (translations[currentLanguage][key]) {
      element.textContent = t(key);
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {
    element.placeholder = t(element.dataset.i18nPlaceholder);
  });

  renderItems();
}

$("language").addEventListener("change", e => {
  setLanguage(e.target.value);
});

// Save data
function saveItems() {
  try {
    localStorage.setItem("l9ina_items", JSON.stringify(items));
  } catch {
    alert("Storage is full. Try using a smaller image.");
  }
}

// Render cards safely
function renderItems() {
  const grid = $("itemsGrid");
  grid.replaceChildren();

  const query = $("searchInput").value.trim().toLowerCase();
  const city = $("cityFilter").value;

  const filtered = items.filter(item => {
    const matchesText = [
      item.name, item.city, item.description
    ].join(" ").toLowerCase().includes(query);

    const matchesCity = !city || item.city === city;
    const matchesType = currentFilter === "all" ||
      item.type === currentFilter;

    return matchesText && matchesCity && matchesType;
  });

  filtered.forEach(item => {
    const card = document.createElement("article");
    card.className = "item-card";

    const image = document.createElement("div");
    image.className = "item-image";

    if (item.image) {
      const img = document.createElement("img");
      img.src = item.image;
      img.alt = item.name;
      image.appendChild(img);
    } else {
      image.textContent = item.emoji || "📦";
    }

    const info = document.createElement("div");
    info.className = "item-info";

    const badges = document.createElement("div");
    badges.className = "item-badges";

    const status = document.createElement("span");
    status.className = "status " + item.type;
    status.textContent = t(item.type);

    const date = document.createElement("span");
    date.className = "item-date";
    date.textContent = item.date;

    badges.append(status, date);

    const title = document.createElement("h3");
    title.textContent = item.name;

    const description = document.createElement("p");
    description.textContent = item.description;

    const location = document.createElement("div");
    location.className = "item-location";
    location.textContent = "📍 " + item.city;

    const button = document.createElement("button");
    button.className = "contact-btn";
    button.textContent = t("contact");

    button.addEventListener("click", () => {
      alert(t("demo"));
    });

    info.append(badges, title, description, location, button);
    card.append(image, info);
    grid.appendChild(card);
  });

  $("emptyState").hidden = filtered.length !== 0;
  $("totalItems").textContent = items.length;
}

// Filters
document.querySelectorAll(".filter").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelector(".filter.active")
      ?.classList.remove("active");

    button.classList.add("active");
    currentFilter = button.dataset.filter;
    renderItems();
  });
});

$("searchInput").addEventListener("input", renderItems);
$("cityFilter").addEventListener("change", renderItems);
$("searchBtn").addEventListener("click", renderItems);

// Modal
function openModal() {
  $("reportModal").classList.add("show");
}

function closeModal() {
  $("reportModal").classList.remove("show");
}

["openForm", "heroReport", "ctaReport"].forEach(id => {
  $(id).addEventListener("click", openModal);
});

$("closeModal").addEventListener("click", closeModal);

$("reportModal").addEventListener("click", e => {
  if (e.target === $("reportModal")) closeModal();
});

// Add report
$("reportForm").addEventListener("submit", async e => {
  e.preventDefault();

  const name = $("itemName").value.trim();
  const city = $("itemCity").value.trim();
  const date = $("itemDate").value;
  const description = $("itemDescription").value.trim();

  if (!name || !city || !date || !description) {
    alert(t("required"));
    return;
  }

  const file = $("itemImage").files[0];
  let image = "";

  if (file) {
    if (!file.type.startsWith("image/")) {
      alert("Please choose an image.");
      return;
    }

    if (file.size > 1024 * 1024) {
      alert("Image must be smaller than 1 MB.");
      return;
    }

    image = await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  const newItem = {
    id: Date.now(),
    type: $("itemType").value,
    name,
    city,
    date,
    description,
    image,
    emoji: "📦"
  };

  items.unshift(newItem);
  saveItems();

  $("reportForm").reset();
  closeModal();

  currentFilter = "all";
  document.querySelectorAll(".filter").forEach(button => {
    button.classList.toggle("active", button.dataset.filter === "all");
  });

  $("searchInput").value = "";
  $("cityFilter").value = "";

  renderItems();
  $("listings").scrollIntoView({ behavior: "smooth" });

  alert(t("success"));
});

// Initial app
setLanguage("en");
renderItems();
